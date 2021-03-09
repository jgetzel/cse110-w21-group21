import { initializeDatabase } from "./database";
import { areThereUnfinishedTasksFromLastSession } from "./database/task";
window.addEventListener("DOMContentLoaded", () => {
    // create example button i guess
    initializeDatabase();
    let oldTasksLeft = areThereUnfinishedTasksFromLastSession();
    if (!oldTasksLeft) {
        console.log(document.getElementById("leftover-tasks-wrapper"));
        document.getElementById("leftover-tasks-wrapper").style.display = "none";
    }
});
