import { initializeDatabase } from "./database";
import { areThereUnfinishedTasksFromLastSession } from "./database/task";
import { selectAndSetTheme } from "./utils/theme";
window.addEventListener("DOMContentLoaded", () => {
    // create example button i guess
    initializeDatabase();
    selectAndSetTheme();
    let oldTasksLeft = areThereUnfinishedTasksFromLastSession();
    if (!oldTasksLeft) {
        console.log(document.getElementById("leftover-tasks-wrapper"));
        document.getElementById("leftover-tasks-wrapper").style.display = "none";
    }
});
