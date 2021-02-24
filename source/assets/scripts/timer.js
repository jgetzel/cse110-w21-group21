window.addEventListener("DOMContentLoaded", () => {

    let addTaskButton = document.getElementById("taskCreator");
    let modal = document.getElementById("addTaskModal");
    let taskList = document.getElementById("taskList");
    let timer = document.getElementById("timerNumber");
    let startTimerButton = document.getElementById("startTimer");
    let pomosCompleted = 0;                       // # of pomos completed for long break, stats, etc.

    /**
     * Implements the onClick functionality of the Start Timer button, which starts the pomo timer and cycles
     * pomo and break timers until all pomos are completed.
     */
    startTimerButton.onclick = function () {
        // Update CSS to change to the ongoing timer frame without refreshing the page.
        let timerWrapper = document.getElementById("timerWrapper");
        timerWrapper.setAttribute('class', 'timerWrapperWorkTime');
        let completeSessionWrapper = document.getElementById("completeSessionWrapper");
        completeSessionWrapper.style.display = 'block';

        // Sets up local variables for timer functionality. Currently, the pomo work time is hardcoded in the HTML
        let timerNumber = document.getElementById("timerNumber");
        // **Set to 0 for testing**
        let pomoMin = "00";
        let breakMin = "00";
        let longBreakMin = "00";
        // let pomoMin = timerNumber.textContent.split(":")[0].replace(/\s+/g, '');
        // let breakMin = "05";
        // let longBreakMin = "25";
        let isBreak = false;
        // TODO: timerLoop no longer used since we use timeChanger() for break also, need to clearInterval when final pomo is completed
        let timerLoop = setInterval(timeChanger, 1000);

        
        function timeChanger() {
            // Extract minutes and seconds from the page
            let minutes = timerNumber.textContent.split(":")[0].replace(/\s+/g, '');
            let seconds = timerNumber.textContent.split(":")[1].replace(/\s+/g, '');
            
            // If timer hits 0, toggle to next break or pomo timer
            if (minutes == "00" && seconds == "00") {
                console.log("Timer hit 0");
                isBreak = !isBreak;
                // Next timer should be break timer
                if(isBreak) {
                    // TODO: Change css, etc to indicate we swapped to break timer
                    //timerWrapper.setAttribute('class', 'timerWrapper');
                    ++pomosCompleted;
                    // Long break, currently hardcoded after every 4 pomos
                    if(pomosCompleted % 4 == 0 ) {
                        minutes = longBreakMin;
                        seconds = "10"; // **Set for testing. Remove line for deployment (seconds already 0, no need to set to 0)
                    }
                    // Short break
                    else {
                        minutes = breakMin;
                        seconds = "05"; // **Set for testing. Remove line for deployment (seconds already 0, no need to set to 0)
                    }
                }
                // Next timer should be a pomo timer
                else {
                    minutes = pomoMin;
                    seconds = "20" // **Set for testing. Remove line for deployment (seconds already 0, no need to set to 0)
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

                // timeBool = false;
            }
            // Push updated time to the page
            timerNumber.textContent = minutes + ":" + seconds;
        }

    }

    modal.elements.saveBtn.addEventListener("click", contentsSaved);
    addTaskButton.onclick = function() {
        modal.displayModal();
    }
    function contentsSaved() {
        let taskValues = modal.elements.values;
        if((taskValues.taskName != "Default Text" && taskValues.taskName != "")  && (taskValues.pomosRequired != "Default Text" && taskValues.pomosRequired != "")) {
            if(taskValues.description == "Default Text") taskValues.description = "";
            const currentTask = `<pomo-task description = "`+ taskValues.description +`" pomosUsed = "0", pomosRequired = "`+taskValues.pomosRequired+`">`+taskValues.taskName+`</pomo-task>`;
            taskList.insertAdjacentHTML('beforeend',currentTask);
        }
    }
});