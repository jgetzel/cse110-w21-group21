import { formatTime } from "./utils/format-time";
import { initializeDatabase } from "./database";
import { getLatestSessionID, getNewSessionID, getPomoSession, PomoSession, POMO_SESSION_MODES, setCurrentSessionStatus, storePomoSession, thereIsUnfinishedSession } from "./database/session";
import { areThereUnfinishedTasksFromLastSession, storeTask} from "./database/task";
import { Task } from "./database/task";
import { selectAndSetTheme } from "./utils/theme";
window.addEventListener("DOMContentLoaded", () => {
    selectAndSetTheme();
    
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
        storePomoSession(currentPomoSession);
    };

    // TODO: move this time variable into the pomo session object class using localstorage
    let maxPomoTime = 5;
    let maxBreakTime = 5 * 60;
    let maxLongBreakTime = 10 * 60;

    
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

        if (thereIsUnfinishedSession() && currentPomoSession.mode != POMO_SESSION_MODES.INACTIVE) {
            loadTasks();
            initiateTimer();
        } else {
            // create new session and use old tasks from last time
            let sessionID = getNewSessionID();
            setCurrentSessionStatus("in-progress");

            // take the old tasks and update the session ids to the new one
            let oldTasks = currentPomoSession.allTasks;
            oldTasks.forEach((task) => {
                task.sessionID = sessionID;
                storeTask(task);
            });

            currentPomoSession = new PomoSession(sessionID);

            currentPomoSession.time = maxPomoTime;
            currentPomoSession.allTasks = oldTasks;
            // save our new pomo session
            storePomoSession(currentPomoSession);
            loadTasks();
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

    urlParams.set("loadSaved", true);

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
        let breakAlarm = new Audio("assets/audio/breakAlarm.mp3");
        breakAlarm.play();
        renderActiveMode();
        currentPomoSession.time = maxPomoTime;
        currentPomoSession.mode = POMO_SESSION_MODES.ACTIVE;
        timerProgressCircle.setDisplayText(formatTime(currentPomoSession.time));
        timerProgressCircle.setPercentage(currentPomoSession.time / maxPomoTime);
        storePomoSession(currentPomoSession);
    };

    startTimerButton.onclick = initiateTimer;

    modal.shadowRoot.getElementById("save-btn").addEventListener("click", contentsSaved);
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
            storePomoSession(currentPomoSession);
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
            currentPomoSession = getPomoSession(currentPomoSession.id);
            currentPomoSession.time -= 1;
            if (currentPomoSession.time < 0) {
                currentPomoSession.time = 0;
            }
            
            // check if session is incomplete. if incomplete, 
            

            // If timer hits 0, toggle to next break or pomo timer
            if (currentPomoSession.time == 0) {
                if (currentPomoSession.mode === POMO_SESSION_MODES.ACTIVE) {
                    let workAlarm = new Audio("assets/audio/workAlarm.mp3");
                    workAlarm.play();

                    //break 
                    renderBreakMode();
                    currentPomoSession.pomosElapsed += 1;

                    let currentTaskFirstChild = currentTaskHTML.childNodes[0];
                    currentTaskFirstChild.incrementPomosUsed();
                    currentTaskFirstChild.task.pomosUsed += 1;
                    currentPomoSession.incrementTaskPomosUsed(currentTaskFirstChild.task.id);
                    storePomoSession(currentPomoSession);

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
                else if (currentPomoSession.mode !== POMO_SESSION_MODES.COMPLETE) {
                    let breakAlarm = new Audio("assets/audio/breakAlarm.mp3");
                    breakAlarm.play();

                    renderActiveMode();
                    currentPomoSession.time = maxPomoTime;
                    currentPomoSession.mode = POMO_SESSION_MODES.ACTIVE;

                    // TODO: Add functionality for moving onto next task, updating pomos used on current task, etc.
                }
            }
            // Push updated time to the page
            document.title = formatTime(currentPomoSession.time);
            timerProgressCircle.setDisplayText(formatTime(currentPomoSession.time));
            if (currentPomoSession.mode === POMO_SESSION_MODES.ACTIVE) {
                timerProgressCircle.setPercentage(currentPomoSession.time / maxPomoTime);
                document.title += " - Work";
            }
            else if (currentPomoSession.mode === POMO_SESSION_MODES.BREAK) {
                timerProgressCircle.setPercentage(currentPomoSession.time / maxBreakTime);
                document.title += " - Break";
            }
            else if (currentPomoSession.mode === POMO_SESSION_MODES.LONG_BREAK) {
                timerProgressCircle.setPercentage(currentPomoSession.time / maxLongBreakTime);
                document.title += " - Long Break";
            }
            storePomoSession(currentPomoSession);
        }
    }

    function renderActiveMode() {
        document.getElementById("timer-status").innerText = "Pomo Time";
        currentTaskHTML.setAttribute("class", "currentTaskWorkTime");
        taskListHTML.setAttribute("class", "taskListWorkTime");
        distractedButton.style.display = "block";
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
        element.setDeleteTaskCallback(() => {
            deleteTaskById(task.id);
        });
        element.task = task;
    }

    /**
     * Function that gets called when we save a new task.
     * Adds new task to the current tasks list.
     */
    function contentsSaved() {
        let taskValues = modal.elements.values;
        if(taskValues != undefined) {
            let sessionID = getLatestSessionID();
            // console.log(taskValues);
            let newTask = new Task(sessionID, taskValues.taskName, taskValues.description, parseInt(taskValues.pomosRequired));
            renderTaskIntoTaskList(newTask);
            currentPomoSession.addTask(newTask);
            storePomoSession(currentPomoSession);

            resetInputs();
        }
    }

    /**
     * Clears inputs and resets style
     */
    function resetInputs() {
        const taskName = modal.shadowRoot.getElementById("task-name").elements.wrapper;
        const pomosRequired = modal.shadowRoot.getElementById("pomos-required").elements.wrapper;
        const description = modal.shadowRoot.getElementById("description").elements.wrapper;

        taskName.innerText = taskName.placeholder;
        taskName.userTyped = undefined;
        taskName.setAttribute("class", "pomo-input placeholder");

        pomosRequired.innerText = pomosRequired.placeholder;
        pomosRequired.userTyped = undefined;
        pomosRequired.setAttribute("class", "pomo-input placeholder");

        description.innerText = description.placeholder;
        description.userTyped = undefined;
        description.setAttribute("class", "pomo-input placeholder");

        modal.elements.values = undefined;
    }


    /**
     * Shows a new task onto the display
     */
    function startNewTask() {
        let taskListFirstChild = taskListHTML.childNodes[0];
        let nextTask = currentPomoSession.getNextTask();
        if (nextTask === null) {
            // complete the session
            currentPomoSession.mode = POMO_SESSION_MODES.COMPLETE;
            storePomoSession(currentPomoSession);
            window.location ="./history.html";
            return;
        }
        const currentTaskToBeAdded = `<pomo-task description="${nextTask.description}" pomosUsed="${nextTask.pomosUsed}" pomosRequired=${nextTask.pomosRequired}>${nextTask.title}</pomo-task>`;
        currentTaskHTML.insertAdjacentHTML("beforeend", currentTaskToBeAdded);
        taskListHTML.removeChild(taskListHTML.childNodes[0]);
        let element = currentTaskHTML.childNodes[currentTaskHTML.childNodes.length - 1];
        element.setFinishTaskCallback(() => {
            removeCompletedTasks();
            startNewTask();
        });
        element.setDeleteTaskCallback(() => {
            deleteTaskById(nextTask.id);
        });
        element.task = nextTask;

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

    function deleteTaskById(id) {
        // search current task list and task lists for this id and remove it from display and the pomo session
        let currentTaskElementList = currentTaskHTML.childNodes;
        if (currentTaskElementList.length) {
            let task = currentTaskElementList[currentTaskElementList.length - 1].task;
            if (task.id === id) {
                if (confirm("Are you sure you want to delete this task?")) {
                    currentPomoSession.deleteTask(task);
                    currentTaskHTML.removeChild(currentTaskHTML.childNodes[currentTaskElementList.length - 1]);
                    startNewTask();     
                    storePomoSession(currentPomoSession);
                    return;
                }
            }
        }
        if (taskListHTML.childNodes.length) {
            let i = 0;
            for (const node of taskListHTML.childNodes) {
                let task = node.task;
                if (task.id === id) {
                    if (confirm("Are you sure you want to delete this task?")) {
                        currentPomoSession.deleteTask(task);
                        taskListHTML.removeChild(taskListHTML.childNodes[i]);
                        storePomoSession(currentPomoSession);
                        return;
                    }
                }
                i++;
            }
        }
        // 
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