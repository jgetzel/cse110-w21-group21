window.addEventListener("DOMContentLoaded", () => {

    let addTaskButton = document.getElementById("taskCreator");
    let modal = document.getElementById("addTaskModal");
    let taskList = document.getElementById("taskList");
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