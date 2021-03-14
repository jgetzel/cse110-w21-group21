import { formatTime } from "./utils/format-time";
import { initializeDatabase } from "./database";
import { getLatestSessionID, getNewSessionID, getPomoSession, PomoSession, POMO_SESSION_MODES, setCurrentSessionStatus, storePomoSession, thereIsUnfinishedSession } from "./database/session";
import { areThereUnfinishedTasksFromLastSession} from "./database/task";
import { Task } from "./database/task";
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
    let completeSessionButton = document.getElementById("completeSession");
    let EndBreakEarlyButton = document.getElementById("EndBreakEarlyWrapper");

    completeSessionButton.onclick = function () {
        currentPomoSession.mode = POMO_SESSION_MODES.COMPLETE;
    }

    // TODO: move this time variable into the pomo session object class using localstorage
    let maxPomoTime = 5;
    let maxBreakTime = 5;
    let maxLongBreakTime = 10;


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
        loadTasks();
        if (thereIsUnfinishedSession()) {
            initiateTimer();
        }
        
    }
    else if (loadSaved == "false") {
        // note, if you refresh for now, you will lose your session's changes...
        let sessionID = getNewSessionID();
        setCurrentSessionStatus("in-progress");

        currentPomoSession = new PomoSession(sessionID);
        currentPomoSession.time = maxPomoTime;
        // save our new pomo session
        storePomoSession(currentPomoSession);
        loadTasks();

    }
    timerProgressCircle.setDisplayText(formatTime(currentPomoSession.time));
    timerProgressCircle.setPercentage(currentPomoSession.time / maxPomoTime);
    if (currentPomoSession.mode === POMO_SESSION_MODES.BREAK) {
        renderBreakMode();
        timerProgressCircle.setPercentage(currentPomoSession.time / maxBreakTime);
    } else if (currentPomoSession.mode === POMO_SESSION_MODES.LONG_BREAK) {
        renderBreakMode();
        timerProgressCircle.setPercentage(currentPomoSession.time / SVGFEColorMatrixElement);
    }

    // Implements the onclick functionality of End Break Early Button, which immediately stop the break 
    // and go to the work time
    EndBreakEarlyButton.onclick = function () {
        renderActiveMode();
        currentPomoSession.time = maxPomoTime;
        currentPomoSession.mode = POMO_SESSION_MODES.ACTIVE;
    };

    startTimerButton.onclick = initiateTimer;

    modal.elements.saveBtn.addEventListener("click", contentsSaved);
    addTaskButton.onclick = function () {
        modal.displayModal();
    };

    /**
     * Implements the onClick functionality of the Start Timer button, which starts the pomo timer and cycles
     * pomo and break timers until all pomos are completed.
     */
    function initiateTimer() {
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

        document.getElementById("currentTaskWrapper").style.display = "block";

        startNewTask();

        if (currentPomoSession.mode === POMO_SESSION_MODES.INACTIVE) {
            currentPomoSession.mode = POMO_SESSION_MODES.ACTIVE;
        }

        //removes first child from task list and adds to current task

        let timerLoop = setInterval(timeChanger, 1000);

        let currentTaskFirstChild = currentTaskHTML.childNodes[0];
        currentTaskFirstChild.setFinishTaskCallback(function () {
            removeCompletedTasks();
            startNewTask();
        });
        let currentTask = currentPomoSession.currentTask();
        currentTaskFirstChild.task = currentTask;
        function timeChanger() {
            
            currentPomoSession.time -= 1;
            if (currentPomoSession.time < 0) {
                currentPomoSession.time = 0;
            }

            // If timer hits 0, toggle to next break or pomo timer
            if (currentPomoSession.time == 0) {
                if (currentPomoSession.mode === POMO_SESSION_MODES.ACTIVE) {
                    //break 
                    renderBreakMode();

                    let currentTaskFirstChild = currentTaskHTML.childNodes[0];
                    currentTaskFirstChild.incrementPomosUsed();
                    currentTaskFirstChild.task.pomosUsed += 1;

                    currentTaskFirstChild.setAttribute("pomosused", 1 + parseInt(currentTaskFirstChild.getAttribute("pomosused")));

                    // Long break, currently hardcoded after every 4 pomos
                    if (currentPomoSession.pomosElapsed % 4 == 0) {
                        currentPomoSession.time = maxLongBreakTime;
                        currentPomoSession.mode = POMO_SESSION_MODES.LONG_BREAK;
                    }
                    // Short break
                    else {
                        currentPomoSession.time = maxBreakTime;
                        currentPomoSession.mode = POMO_SESSION_MODES.BREAK;
                    }
                }
                // Next timer should be a pomo timer
                else {
                    renderActiveMode();
                    currentPomoSession.time = maxPomoTime;
                    currentPomoSession.mode = POMO_SESSION_MODES.ACTIVE;
                    // TODO: Add functionality for moving onto next task, updating pomos used on current task, etc.
                }
            }
            // Push updated time to the page
            timerProgressCircle.setDisplayText(formatTime(currentPomoSession.time));
            if (currentPomoSession.mode === POMO_SESSION_MODES.ACTIVE) {
                timerProgressCircle.setPercentage(currentPomoSession.time / maxPomoTime);
            }
            else if (currentPomoSession.mode === POMO_SESSION_MODES.BREAK) {
                timerProgressCircle.setPercentage(currentPomoSession.time / maxBreakTime);
            }
            else if (currentPomoSession.mode === POMO_SESSION_MODES.LONG_BREAK) {
                timerProgressCircle.setPercentage(currentPomoSession.time / maxLongBreakTime);
            }
            storePomoSession(currentPomoSession);
        }
    }

    function renderActiveMode() {
        document.getElementById("timer-status").innerText = "Pomo Time";
        currentTaskHTML.setAttribute("class", "currentTaskWorkTime");
        taskListHTML.setAttribute("class", "taskListWorkTime");
        EndBreakEarlyButton.style.display = "none";

        timerWrapper.setAttribute("class", "timerWrapperWorkTime");
        completeSessionWrapper.setAttribute("class", "completeSessionWrapperWorkTime");
    }

    function renderBreakMode() {
        currentTaskHTML.setAttribute("class", "currentTaskBreakTime");
        taskListHTML.setAttribute("class", "taskListBreakTime");
        document.getElementById("timer-status").innerText = "Break Time";
        EndBreakEarlyButton.style.display = "block";
        distractedButton.style.display = "none";

        timerWrapper.setAttribute("class", "timerWrapperBreakTime");
        completeSessionWrapper.setAttribute("class", "completeSessionWrapperBreakTime");
    }

    /**
    * Render a task onto the 
    * @param {Task} task 
    */
    function renderTaskIntoTaskList(task) {
        const currentTaskElement = `<pomo-task description ="${task.description}" pomosUsed="${task.pomosUsed}", pomosRequired ="${task.pomosRequired}">${task.title}</pomo-task>`;
        taskList.insertAdjacentHTML("beforeend", currentTaskElement);
        const element = taskList.childNodes[taskList.childNodes.length - 1];
        element.setFinishTaskCallback(() => {
            removeCompletedTasks();
        });
        element.task = task;
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
        if (nextTask === null) {
            // complete the session
            window.location ="./history.html";
            return;
        }
        const currentTaskToBeAdded = `<pomo-task description="${nextTask.description}" pomosUsed="${nextTask.pomosUsed}" pomosRequired=${nextTask.pomosRequired}>${nextTask.title}</pomo-task>`;
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
                completedIds.push(node.task.id);
                node.hide();
                setTimeout(() => {
                    currentTaskHTML.removeChild(node);
                }, 200);
                
            }
        }

        for (let node of taskListHTML.childNodes) {
            if (node.completed) {
                completedIds.push(node.task.id);
                node.hide();
                setTimeout(() => {
                    taskListHTML.removeChild(node);
                }, 200);
                
            }
        }
        completedIds.forEach((id) => {
            currentPomoSession.completeTask(id);
        });
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