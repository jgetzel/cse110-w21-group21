window.addEventListener("DOMContentLoaded", () => {

    let addTaskButton = document.getElementById("taskCreator");
    let modal = document.getElementById("addTaskModal");
    let taskList = document.getElementById("taskList");
    let timer = document.getElementById("timerNumber");
    let startTimerButton = document.getElementById("startTimer");

    startTimerButton.onclick = function (e) {
        let timerWrapper = document.getElementById("timerWrapper");
        timerWrapper.setAttribute('class', 'timerWrapperWorkTime');
        let completeSessionWrapper = document.getElementById("completeSessionWrapper");
        completeSessionWrapper.style.display = 'block';
        let timerNumber = document.getElementById("timerNumber");
        let minutes = timerNumber.textContent.split(":")[0].replace(/\s+/g, '');
        let seconds = timerNumber.textContent.split(":")[1].replace(/\s+/g, '');

        let timeBool = false;
        let timerLoop = setInterval(timeChanger, 1000);
        
        function timeChanger() {
            minutes = timerNumber.textContent.split(":")[0].replace(/\s+/g, '');
            seconds = timerNumber.textContent.split(":")[1].replace(/\s+/g, '');
            
            if (minutes == "00" && seconds == "00") {
                console.log("DONE")
                clearInterval(timerLoop);
            }

            else if (seconds == "00") {
                console.log("case2");
                minutes = (parseInt(minutes) - 1).toString();
                if (minutes.length == 1) {
                    minutes = "0" + minutes;
                }
                // timeBool = false;
                seconds = "59";           
            }

            else {
                console.log("case3");
                seconds = (parseInt(seconds) - 1).toString();
                if (seconds.length == 1) {
                    seconds = "0" + seconds;
                }

                // timeBool = false;
            }
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