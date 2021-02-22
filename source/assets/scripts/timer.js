window.addEventListener("DOMContentLoaded", () => {

    let addTaskButton = document.getElementById("taskCreator");
    let modal = document.getElementById("addTaskModal");

    addTaskButton.onclick = modal.displayModal;

    console.log(modal.displayModal);
});