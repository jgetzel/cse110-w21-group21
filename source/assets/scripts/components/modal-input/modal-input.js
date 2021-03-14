/**
 * ModalInput class loads functionality for the close button and
 * save button in the input modal in timer.html.
 * @class
 * @author Ethan Huynh
 */
class ModalInput extends HTMLElement {
    constructor() {
        super();
        let taskModal = document.getElementById("addTaskModal");
        let closeBtn = taskModal.shadowRoot.getElementById("modal-close");
        
        closeBtn.onclick = function() {
            taskModal.hideModal();

            resetInputs();
        };

        taskModal.elements.saveBtn = taskModal.shadowRoot.getElementById("save-btn");
        taskModal.elements.saveBtn.onclick = function () {
            //if there are values inputted into the fields
            if(checkValues()) {
                taskModal.hideModal();
                taskModal.elements.values = getValues();
            }
        }.bind(taskModal);

        /**
         * Checks if the user has inputted something for task name and pomos required
         * @returns {Boolean} true if required input fields have input, false otherwise
         */
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

        /**
         * Gets all user input and resets the input fields
         * @returns {Dictionary} {taskName: input, pomosRequired: input, description: input}
         */
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

            resetInputs();

            return returnVal;
        }

        /**
         * Clears inputs and resets style
         */
        function resetInputs() {
            const taskName = taskModal.shadowRoot.getElementById("task-name").elements.wrapper;
            const pomosRequired = taskModal.shadowRoot.getElementById("pomos-required").elements.wrapper;
            const description = taskModal.shadowRoot.getElementById("description").elements.wrapper;

            taskName.innerText = taskName.placeholder;
            taskName.userTyped = "";
            taskName.setAttribute("class", "pomo-input placeholder");

            pomosRequired.innerText = pomosRequired.placeholder;
            pomosRequired.userTyped = "";
            pomosRequired.setAttribute("class", "pomo-input placeholder");

            description.innerText = description.placeholder;
            description.userTyped = "";
            description.setAttribute("class", "pomo-input placeholder");
        }
    }
}

customElements.define("modal-input", ModalInput);