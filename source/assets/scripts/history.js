import { initializeDatabase } from "./database";
import { getLatestSessionID } from "./database/session";
import { PomoStats } from "./database/stats";
import { renderEfficiencyWeeklyData, renderEfficiencyData } from "./history-graph";
import { selectAndSetTheme } from "./utils/theme";
window.addEventListener("DOMContentLoaded", () => {
    selectAndSetTheme();
    // TODO: load data from local storage
    initializeDatabase();
    let stats = new PomoStats(getLatestSessionID());
    let taskList = document.getElementById("taskList");
    for(let taskID in stats.tasks) {
        let task = stats.tasks[taskID];
        console.log(task);
        const currentTaskElement = `<pomo-task description ="${task.description}" pomosUsed="${task.pomosUsed}", pomosRequired ="${task.pomosRequired}">${task.title}</pomo-task>`;
        taskList.insertAdjacentHTML("beforeend", currentTaskElement);
        const element = taskList.childNodes[taskList.childNodes.length - 1];
        element.task = task;
        element.shadowRoot.childNodes[0].childNodes[0].childNodes[3].style.display = "none";
        element.shadowRoot.childNodes[0].childNodes[0].childNodes[2].style.display = "none";
        if(task.completed) {
            if(task.pomosUsed <= task.pomosRequired) {
                element.shadowRoot.childNodes[0].childNodes[0].childNodes[1].childNodes[0].setAttribute("class", "goodTimingTask");
            }
            else element.shadowRoot.childNodes[0].childNodes[0].childNodes[1].childNodes[0].setAttribute("class", "badTimingTask");
        }
        else element.shadowRoot.childNodes[0].childNodes[0].childNodes[1].childNodes[0].setAttribute("class", "incompleteTask");
    }
    let data = {
        complete: stats.greenTasks,
        overtime: stats.yellowTasks,
        incomplete: stats.redTasks,
    };
    let canvas = document.getElementById("efficiency-chart");
    renderEfficiencyData(canvas, data);
    //let canvas2 = document.getElementById("efficiency-weekly-chart");

    // TODO: load data from local
    // let weeklyData = {
    //     complete: [0, 10, 5, 6, 2, 8, 4],
    //     overtime: [4, 2, 0, 3, 1, 3, 4],
    //     incomplete: [0, 0, 2, 1, 0, 3, 1],
    // };
    // let dates = [
    //     "2/03", "2/04",
    //     "2/05", "2/06",
    //     "2/07", "2/08",
    //     "2/09"
    // ];
    //renderEfficiencyWeeklyData(canvas2, weeklyData, dates);
});