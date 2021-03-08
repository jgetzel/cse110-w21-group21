import { formatTime } from "./utils/format-time";
import { initializeDatabase } from "./database";
import { getLatestSessionID, getNewSessionID, getPomoSession, PomoSession, setCurrentSessionStatus, storePomoSession } from "./database/session";
import { areThereUnfinishedTasksFromLastSession, getAllSessionTasks, getCurrentTask, deleteTaskByTaskID } from "./database/task";
import { getAllTasks, Task } from "./database/task";
window.addEventListener("DOMContentLoaded", () => {

    const urlParams = new URLSearchParams(window.location.search);
    const loadSaved = urlParams.get("loadSaved");

    let addTaskButton = document.getElementById("taskCreator");
    let modal = document.getElementById("addTaskModal");
    let taskList = document.getElementById("taskList");
    let startTimerButton = document.getElementById("startTimer");
    let currentTaskHTML = document.getElementById("currentTask");
    let taskListHTML = document.getElementById("taskList");
    let timerProgressCircle = document.getElementById("timer-progress");
    let distractedButton = document.getElementById("distractedWrapper");


    // TODO: move this time variable into the pomo session object class using localstorage
    let maxPomoTime = 1;
    let maxBreakTime = 5000;
    let maxLongBreakTime = 10;
    let currentTime = maxPomoTime;
    let mode = "pomo";
    timerProgressCircle.setDisplayText(formatTime(currentTime));
    timerProgressCircle.setPercentage(1);


    let pomosUsed = 0;                       // # of pomos completed for long break, stats, etc.

    initializeDatabase();
    if (loadSaved == "false") {
        let oldTasksLeft = areThereUnfinishedTasksFromLastSession();
        if (oldTasksLeft) {
            let confirmed = confirm("By starting a new timer, you will lose any unfinished tasks from your previous session");
            if (!confirmed) {
                window.location = "./index.html";
                return;
            }
        }
    }

    /** @type {PomoSession} */
    let currentPomoSession = null;

    // Use leftover tasks and render them
    if (loadSaved == "true") {
        let sessionID = getLatestSessionID();
        currentPomoSession = getPomoSession(sessionID);
    }
    else if (loadSaved == "false") {
        // note, if you refresh for now, you will lose your session's changes...
        let oldSessionID = getLatestSessionID();
        let sessionID = getNewSessionID();
        setCurrentSessionStatus("in-progress");

        let oldSessionTasks = getAllSessionTasks(oldSessionID);
        // remove all old session tasks from database that have not been completed (we are starting a new session)
        oldSessionTasks.forEach((task) => {
            deleteTaskByTaskID(task.id);
        });
        currentPomoSession = new PomoSession(sessionID);
        // save our new pomo session
        storePomoSession(currentPomoSession);

    }
    console.log({currentPomoSession});
    loadTasks();

    /**
     * Implements the onClick functionality of the Start Timer button, which starts the pomo timer and cycles
     * pomo and break timers until all pomos are completed.
     */
    startTimerButton.onclick = function () {
        // Update CSS to change to the ongoing timer frame without refreshing the page.


        let totalPomosForTheSession = currentPomoSession.getPomosLeftInSession();
        console.log({ totalPomosForTheSession });
        currentTaskHTML.setAttribute("class", "currentTaskWorkTime");
        timerProgressCircle.setSize("1.5rem");

        taskList.setAttribute("class", "taskListWorkTime");

        let timerWrapper = document.getElementById("timerWrapper");
        timerWrapper.setAttribute("class", "timerWrapperWorkTime");

        distractedButton.style.display = "block";


        let completeSessionWrapper = document.getElementById("completeSessionWrapper");
        completeSessionWrapper.setAttribute("class", "completeSessionWrapperWorkTime");
        let taskCreatorWrapper = document.getElementById("taskCreatorWrapper");
        taskCreatorWrapper.style.display = "none";
        // Sets up local variables for timer functionality. Currently, the pomo work time is hardcoded in the HTML
        let timerNumber = document.getElementById("timerNumber");

        document.getElementById("currentTaskWrapper").style.display = "block";

        let isBreak = false;
        // TODO: timerLoop no longer used since we use timeChanger() for break also, need to clearInterval when final pomo is completed

        startNewTask();

        //removes first child from task list and adds to current task

        let timerLoop = setInterval(timeChanger, 1000);

        let currentTaskFirstChild = currentTaskHTML.childNodes[0];
        currentTaskFirstChild.setFinishTaskCallback(function () {
            removeCompletedTasks();
            startNewTask();
        });
        console.log(currentPomoSession, "?")
        let currentTask = currentPomoSession.currentTask();
        currentTaskFirstChild.task = currentTask;
        function timeChanger() {
            currentTime -= 1;
            // Extract minutes and seconds from the page

            // If timer hits 0, toggle to next break or pomo timer
            if (currentTime == 0) {
                // console.log("Timer hit 0");
                isBreak = !isBreak;
                // Next timer should be break timer
                if (isBreak) {
                    //break 
                    currentTaskHTML.setAttribute("class", "currentTaskBreakTime");
                    taskListHTML.setAttribute("class", "taskListBreakTime");
                    document.getElementById("timer-status").innerText = "Break Time";
                    distractedButton.style.display = "none";

                    timerWrapper.setAttribute("class", "timerWrapperBreakTime");
                    completeSessionWrapper.setAttribute("class", "completeSessionWrapperBreakTime");
                    // TODO: Change css, etc to indicate we swapped to break timer
                    //timerWrapper.setAttribute('class', 'timerWrapper');
                    ++pomosUsed;

                    let currentTaskFirstChild = currentTaskHTML.childNodes[0];
                    currentTaskFirstChild.incrementPomosUsed();
                    currentTaskFirstChild.task.pomosUsed += 1;

                    storePomoSession(currentPomoSession);

                    currentTaskFirstChild.setAttribute("pomosused", 1 + parseInt(currentTaskFirstChild.getAttribute("pomosused")));

                    //increment in display only TODO -> increment in local storage
                    // Long break, currently hardcoded after every 4 pomos
                    if (pomosUsed % 4 == 0) {
                        // minutes = longBreakMin;
                        // seconds = "10"; // **Set for testing. Remove line for deployment (seconds already 0, no need to set to 0)
                        currentTime = maxLongBreakTime;
                        mode = "long-break";
                    }
                    // Short break
                    else {
                        // minutes = breakMin;
                        // seconds = "5"; // **Set for testing. Remove line for deployment (seconds already 0, no need to set to 0)
                        currentTime = maxBreakTime;
                        mode = "break";
                    }
                }
                // Next timer should be a pomo timer
                else {
                    document.getElementById("timer-status").innerText = "Pomo Time";
                    currentTaskHTML.setAttribute("class", "currentTaskWorkTime");
                    taskListHTML.setAttribute("class", "taskListWorkTime");

                    timerWrapper.setAttribute("class", "timerWrapperWorkTime");
                    completeSessionWrapper.setAttribute("class", "completeSessionWrapperWorkTime");
                    currentTime = maxPomoTime;
                    mode = "pomo";
                    // minutes = pomoMin;
                    // seconds = "01"; // **Set for testing. Remove line for deployment (seconds already 0, no need to set to 0)
                    // TODO: Add functionality for moving onto next task, updating pomos used on current task, etc.
                }
            }
            // Push updated time to the page
            // timerNumber.textContent = minutes + ":" + seconds;
            timerProgressCircle.setDisplayText(formatTime(currentTime));
            if (mode === "pomo") {
                timerProgressCircle.setPercentage(currentTime / maxPomoTime);
            }
            else if (mode === "break") {
                timerProgressCircle.setPercentage(currentTime / maxBreakTime);
            }
            else if (mode === "long-break") {
                timerProgressCircle.setPercentage(currentTime / maxLongBreakTime);
            }
        }

    };

    modal.elements.saveBtn.addEventListener("click", contentsSaved);
    addTaskButton.onclick = function () {
        modal.displayModal();
    };
    /**
    * Render a task onto the 
    * @param {Task} task 
    */
    function renderTaskIntoTaskList(task) {
        // console.log(task);
        const currentTaskElement = `<pomo-task description ="${task.description}" pomosUsed="${task.pomosUsed}", pomosRequired ="${task.pomosRequired}">${task.title}</pomo-task>`;
        taskList.insertAdjacentHTML("beforeend", currentTaskElement);
        taskList.childNodes[taskList.childNodes.length - 1].task = task;
    }

    /**
     * Function that gets called when we save a new task.
     * Adds new task to the current tasks list.
     */
    function contentsSaved() {
        let taskValues = modal.elements.values;
        let sessionID = getLatestSessionID();
        // console.log(taskValues);
        let newTask = new Task(sessionID, taskValues.taskName, taskValues.description, parseInt(taskValues.pomosRequired));
        renderTaskIntoTaskList(newTask);
        currentPomoSession.addTask(newTask);
        storePomoSession(currentPomoSession);
    }


    /**
     * Shows a new task onto the display
     */
    function startNewTask() {
        let taskListFirstChild = taskListHTML.childNodes[0];
        let nextTask = currentPomoSession.getNextTask();
        const currentTaskToBeAdded = "<pomo-task description = \"" + nextTask.description + "\" pomosUsed = \"" + nextTask.pomosUsed + "\", pomosRequired = \"" + nextTask.pomosRequired + "\">" + nextTask.title + "</pomo-task>";
        currentTaskHTML.insertAdjacentHTML("beforeend", currentTaskToBeAdded);
        taskListHTML.removeChild(taskListHTML.childNodes[0]);
        currentTaskHTML.childNodes[0].setFinishTaskCallback(() => {
            removeCompletedTasks();
        });
        currentTaskHTML.childNodes[0].task = nextTask;

    }

    /**
     * remove completed tasks from display and update the current pomo session
     */
    function removeCompletedTasks() {
        let completedIds = [];
        for (let node of currentTaskHTML.childNodes) {
            if (node.completed) {
                node.task.completed = true;
                completedIds.push(node.task.id);
                currentTaskHTML.removeChild(node);
            }
        }

        for (let node of taskListHTML.childNodes) {
            if (node.completed) {
                node.task.completed = true;
                completedIds.push(node.task.id);
                taskListHTML.removeChild(node);
            }
        }
        completedIds.forEach((id) => {
            currentPomoSession.completeTask(id);
        });
        console.log(currentPomoSession);
        storePomoSession(currentPomoSession);

    }

    /**
     * Load all tasks from storage for the current session and render them
     */
    function loadTasks() {
        let id = getLatestSessionID();
        let allTasks = [];
        if (id !== null) {
            let tasks = currentPomoSession.allTasks;
            Object.values(tasks).forEach((task) => {
                console.log(task);
                if (task.sessionID === id && !task.completed) {
                    allTasks.push(task);
                }
            });
            allTasks.forEach((task) => {
                renderTaskIntoTaskList(task);
            });
        }
        for (let node of taskListHTML.childNodes) {
            node.setFinishTaskCallback(() => {
                removeCompletedTasks();
            });
        }
    }
});