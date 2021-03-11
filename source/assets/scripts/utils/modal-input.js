window.addEventListener("DOMContentLoaded", () => {
    var taskModal = document.getElementById("addTaskModal");
    var closeBtn = taskModal.shadowRoot.getElementById("modal-close");
    closeBtn.onclick = function() {
        taskModal.hideModal.bind(taskModal);
        const taskName = taskModal.shadowRoot.getElementById("task-name").elements.wrapper;
        const pomosRequired = taskModal.shadowRoot.getElementById("pomos-required").elements.wrapper;
        taskName.setAttribute("class", "pomo-input placeholder");
        pomosRequired.setAttribute("class", "pomo-input placeholder");
    }
    
    var saveBtn = taskModal.shadowRoot.getElementById("save-btn");
    saveBtn.onclick = function () {
        if(checkValues()) {
            taskModal.hideModal();
            taskModal.elements.values = getValues();
        }
    }.bind(taskModal);

    function checkValues() {
        let goodInput = true;
        const taskName = taskModal.shadowRoot.getElementById("task-name").elements.wrapper;
        const pomosRequired = taskModal.shadowRoot.getElementById("pomos-required").elements.wrapper;
    
        if(taskName.userTyped == undefined) {
          taskName.setAttribute("class", "pomo-input invalid");
          goodInput = false;
        }
    
        if(pomosRequired.userTyped == undefined) {
          pomosRequired.setAttribute("class", "pomo-input invalid");
          goodInput = false;
        }
    
        return goodInput;
    }
    
    function getValues() {
        const taskName = taskModal.shadowRoot.getElementById("task-name").elements.wrapper;
        const pomosRequired = taskModal.shadowRoot.getElementById("pomos-required").elements.wrapper;
        const description = taskModal.shadowRoot.getElementById("description").elements.wrapper;
        console.log(taskName.value);
        var returnVal;
        if(description.userTyped == undefined)
            returnVal = "";
        else
            returnVal = description.userTyped;
        return {
            taskName: taskName.userTyped,
            pomosRequired: pomosRequired.userTyped,
            description: returnVal,
        };
    }
});