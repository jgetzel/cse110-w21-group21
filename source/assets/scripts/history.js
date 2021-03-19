import { initializeDatabase } from "./database";
import { getLatestSessionID } from "./database/session";
import { PomoStats } from "./database/stats";
import { renderEfficiencyWeeklyData, renderEfficiencyData } from "./history-graph";
import { selectAndSetTheme } from "./utils/theme";
window.addEventListener("DOMContentLoaded", () => {
    selectAndSetTheme();
    // TODO: load data from local storage
    initializeDatabase();
    let stats = new PomoStats(new Date());
    let taskList = document.getElementById("taskList");
    for(let taskID in stats.tasks) {
        let task = stats.tasks[taskID];
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
    let canvas2 = document.getElementById("efficiency-weekly-chart");

    let sevenDates = datesForSevenDays();
    sevenDates.reverse();
    let datesForGraph = [];
    let weekStats = [];
    for(let dateID in sevenDates) {
        datesForGraph.push(new Date(sevenDates[dateID]).getMonth() + "/" + new Date(sevenDates[dateID]).getDate());
        weekStats.push(new PomoStats(new Date(sevenDates[dateID])));
    }
    let completeWeek = [];
    let overTimeWeek = [];
    let incompleteWeek = [];
    for(let statID in weekStats) {
        completeWeek.push(weekStats[statID].greenTasks);
        overTimeWeek.push(weekStats[statID].yellowTasks);
        incompleteWeek.push(weekStats[statID].redTasks);
    }
    let weeklyData = {
        complete: completeWeek,
        overtime: overTimeWeek,
        incomplete: incompleteWeek,
    };
    renderEfficiencyWeeklyData(canvas2, weeklyData, datesForGraph);
});

function datesForSevenDays() {
    let dates = [];
    for (let i=0; i<7; i++) {
        let d = new Date();
        d.setDate(d.getDate() - i);
        dates.push(d)
    }
    return dates;
}