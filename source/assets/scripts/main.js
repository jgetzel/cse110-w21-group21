import { initializeDatabase } from "./database";
import { continueActiveSession } from "./database/session";
import { areThereUnfinishedTasksFromLastSession } from "./database/task";
window.addEventListener("DOMContentLoaded", () => {
    // create example button i guess
    initializeDatabase();
    continueActiveSession();
    let oldTasksLeft = areThereUnfinishedTasksFromLastSession();
    if (!oldTasksLeft) {
        console.log(document.getElementById("leftover-tasks-wrapper"));
        document.getElementById("leftover-tasks-wrapper").style.display = "none";
    }
});
