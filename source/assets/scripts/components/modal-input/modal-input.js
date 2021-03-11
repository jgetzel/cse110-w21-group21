window.addEventListener("DOMContentLoaded", () => {
    let taskModal = document.getElementById("addTaskModal");
    let closeBtn = taskModal.shadowRoot.getElementById("modal-close");
    closeBtn.onclick = function() {
        taskModal.hideModal();
        const taskName = taskModal.shadowRoot.getElementById("task-name").elements.wrapper;
        const pomosRequired = taskModal.shadowRoot.getElementById("pomos-required").elements.wrapper;
        taskName.setAttribute("class", "pomo-input placeholder");
        pomosRequired.setAttribute("class", "pomo-input placeholder");
    }

    taskModal.elements.saveBtn = taskModal.shadowRoot.getElementById("save-btn");
    taskModal.elements.saveBtn.onclick = function () {
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
        var returnVal = {
            taskName: taskName.userTyped,
            pomosRequired: pomosRequired.userTyped,
            description: ""
        };
        if(description.userTyped != undefined)
            returnVal["description"] = description.userTyped;

        //reset input
        taskName.innerText = taskName.placeholder;
        taskName.userTyped = "";
        taskName.setAttribute("class", "pomo-input placeholder");

        pomosRequired.innerText = pomosRequired.placeholder;
        pomosRequired.userTyped = "";
        pomosRequired.setAttribute("class", "pomo-input placeholder");

        description.innerText = description.placeholder;
        description.userTyped = "";
        description.setAttribute("class", "pomo-input placeholder");

        return returnVal;
    }
});