window.addEventListener("DOMContentLoaded", () => {

    const urlParams = new URLSearchParams(window.location.search);
    const loadSaved = urlParams.get('loadSaved');

    let addTaskButton = document.getElementById("taskCreator");
    let modal = document.getElementById("addTaskModal");
    let taskList = document.getElementById("taskList");
    let timer = document.getElementById("timerNumber");
    let startTimerButton = document.getElementById("startTimer");
    let currentTaskHTML = document.getElementById("currentTask");
    let taskListHTML = document.getElementById("taskList");
    let pomosCompleted = 0;                       // # of pomos completed for long break, stats, etc.

    let currentTask = null;

    initializeDatabase();
    if (loadSaved == "false") {
        let oldTasksLeft = areThereUnfinishedTasksFromLastSession();
        if (oldTasksLeft) {
            let confirmed = confirm("By starting a new timer, you will lose any unfinished tasks from your previous session");
            if (!confirmed) {
                window.location = "./index.html"
                return;
            }
        }
    }

    let allTasks = []

    // Use leftover tasks
    if (loadSaved == "true") {
        allTasks = loadTasks();
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
        })

    }
    let allInProgressTasks = allTasks.filter((task) => task.completed);
    currentTask = allInProgressTasks[0];

    function renderCurrentSetOfTasks() {
        allInProgressTasks = allInProgressTasks.filter((task) => task.completed);
    }




    /**
     * Implements the onClick functionality of the Start Timer button, which starts the pomo timer and cycles
     * pomo and break timers until all pomos are completed.
     */
    startTimerButton.onclick = function () {
        // Update CSS to change to the ongoing timer frame without refreshing the page.

        currentTaskHTML.setAttribute('class', 'currentTaskWorkTime');

        taskList.setAttribute('class', 'taskListWorkTime');

        let timerWrapper = document.getElementById("timerWrapper");
        timerWrapper.setAttribute('class', 'timerWrapperWorkTime');

        let completeSessionWrapper = document.getElementById("completeSessionWrapper");
        completeSessionWrapper.setAttribute('class', 'completeSessionWrapperWorkTime');

        let taskCreatorWrapper = document.getElementById("taskCreatorWrapper");
        taskCreatorWrapper.style.display = 'none';
        // Sets up local variables for timer functionality. Currently, the pomo work time is hardcoded in the HTML
        let timerNumber = document.getElementById("timerNumber");

        document.getElementById("currentTaskWrapper").style.display = "block";
        // **Set to 0 for testing**
        let pomoMin = "00";
        let breakMin = "00";
        let longBreakMin = "00";

        let isBreak = false;
        // TODO: timerLoop no longer used since we use timeChanger() for break also, need to clearInterval when final pomo is completed

        startNewTask();

        //removes first child from task list and adds to current task

        let timerLoop = setInterval(timeChanger, 1000);

        let currentTask = currentTaskHTML.childNodes[0];
        currentTask.setFinishTaskCallback(function () {
            removeCompletedTasks();
            startNewTask();
        });
        function timeChanger() {
            // Extract minutes and seconds from the page
            let minutes = timerNumber.textContent.split(":")[0].replace(/\s+/g, '');
            let seconds = timerNumber.textContent.split(":")[1].replace(/\s+/g, '');

            // If timer hits 0, toggle to next break or pomo timer
            if (minutes == "00" && seconds == "00") {
                // console.log("Timer hit 0");
                isBreak = !isBreak;
                // Next timer should be break timer
                if (isBreak) {
                    //break 
                    currentTaskHTML.setAttribute('class', 'currentTaskBreakTime');
                    taskListHTML.setAttribute('class', 'taskListBreakTime');
                    document.getElementById("timer-status").innerText = "Break Time";

                    timerWrapper.setAttribute('class', 'timerWrapperBreakTime');
                    completeSessionWrapper.setAttribute('class', 'completeSessionWrapperBreakTime');
                    // TODO: Change css, etc to indicate we swapped to break timer
                    //timerWrapper.setAttribute('class', 'timerWrapper');
                    ++pomosCompleted;

                    let currentTaskFirstChild = currentTaskHTML.childNodes[0];
                    currentTaskFirstChild.incrementPomosUsed();

                    currentTaskFirstChild.setAttribute('pomosused', 1 + parseInt(currentTaskFirstChild.getAttribute('pomosused')));

                    //increment in display only TODO -> increment in local storage
                    // Long break, currently hardcoded after every 4 pomos
                    if (pomosCompleted % 4 == 0) {
                        minutes = longBreakMin;
                        seconds = "10"; // **Set for testing. Remove line for deployment (seconds already 0, no need to set to 0)
                    }
                    // Short break
                    else {
                        minutes = breakMin;
                        seconds = "500"; // **Set for testing. Remove line for deployment (seconds already 0, no need to set to 0)
                    }
                }
                // Next timer should be a pomo timer
                else {
                    document.getElementById("timer-status").innerText = "Pomo Time";
                    currentTaskHTML.setAttribute('class', 'currentTaskWorkTime');
                    taskListHTML.setAttribute('class', 'taskListWorkTime');

                    timerWrapper.setAttribute('class', 'timerWrapperWorkTime');
                    completeSessionWrapper.setAttribute('class', 'completeSessionWrapperWorkTime');

                    minutes = pomoMin;
                    seconds = "01" // **Set for testing. Remove line for deployment (seconds already 0, no need to set to 0)
                    // TODO: Add functionality for moving onto next task, updating pomos used on current task, etc.
                }
            }
            // Case for timer not hitting 0
            else if (seconds == "00") {
                minutes = (parseInt(minutes) - 1).toString();
                if (minutes.length == 1) {
                    minutes = "0" + minutes;
                }
                seconds = "59";
            }
            // Case for timer not hitting 0
            else {
                seconds = (parseInt(seconds) - 1).toString();
                if (seconds.length == 1) {
                    seconds = "0" + seconds;
                }
            }
            // Push updated time to the page
            timerNumber.textContent = minutes + ":" + seconds;
        }

    }

    modal.elements.saveBtn.addEventListener("click", contentsSaved);
    addTaskButton.onclick = function () {
        modal.displayModal();
    }
    /**
    * Render a task onto the 
    * @param {Task} task 
    */
    function renderTaskIntoTaskList(task) {
        // console.log(task);
        const currentTask = `<pomo-task description = "` + task.description + `" pomosUsed = "0", pomosRequired = "` + task.pomos + `">` + task.title + `</pomo-task>`;
        taskList.insertAdjacentHTML('beforeend', currentTask);
    }

    /**
     * Function that gets called when we save a new task.
     * Adds new task to the current tasks list.
     */
    function contentsSaved() {
        let taskValues = modal.elements.values;
        // if ((taskValues.taskName != "Default Text" && taskValues.taskName != "") && (taskValues.pomosRequired != "Default Text" && taskValues.pomosRequired != "")) {
        //     if (taskValues.description == "Default Text") taskValues.description = "";
        //     const currentTask = `<pomo-task description = "` + taskValues.description + `" pomosUsed = "0", pomosRequired = "` + taskValues.pomosRequired + `">` + taskValues.taskName + `</pomo-task>`;
        //     taskList.insertAdjacentHTML('beforeend', currentTask);
        // }
        let sessionID = getLatestSessionID()
        // console.log(taskValues);
        let newTask = new Task(sessionID, taskValues.taskName, taskValues.description, parseInt(taskValues.pomosRequired));
        renderTaskIntoTaskList(newTask);
        storeTask(newTask);
    }


    function startNewTask() {
        let taskListFirstChild = taskListHTML.childNodes[0];
        let nextTask = allTasks.shift();
        const currentTaskToBeAdded = `<pomo-task description = "` + nextTask.description + `" pomosUsed = "` + nextTask.pomosCompleted + `", pomosRequired = "` + nextTask.pomos + `">` + nextTask.title + `</pomo-task>`;
        currentTaskHTML.insertAdjacentHTML('beforeend', currentTaskToBeAdded);
        taskListHTML.removeChild(taskListHTML.childNodes[0]);

    }

    function removeCompletedTasks() {
        for (let node of currentTaskHTML.childNodes) {
            if (node.completed) {
                currentTaskHTML.removeChild(node);
            }
        }

        for (let node of taskListHTML.childNodes) {
            if (node.completed) {
                taskListHTML.removeChild(node);
            }
        }

    }


    /**
     * Load all tasks from storage for the current session and return them
     */
    function loadTasks() {
        let id = getLatestSessionID();
        let allTasks = []
        if (id !== null) {
            let tasks = getAllTasks();
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
        return allTasks;
    }
});