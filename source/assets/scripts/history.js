import { initializeDatabase } from "./database";
import { renderEfficiencyWeeklyData, renderEfficiencyData } from "./history-graph";
window.addEventListener("DOMContentLoaded", () => {
    // TODO: load data from local storage
    initializeDatabase();

    let data = {
        complete: 10,
        overtime: 4,
        incomplete: 2,
    };
    let canvas = document.getElementById("efficiency-chart");
    renderEfficiencyData(canvas, data);
    let canvas2 = document.getElementById("efficiency-weekly-chart");

    // TODO: load data from local
    let weeklyData = {
        complete: [0, 10, 5, 6, 2, 8, 4],
        overtime: [4, 2, 0, 3, 1, 3, 4],
        incomplete: [0, 0, 2, 1, 0, 3, 1],
    };
    let dates = [
        "2/03", "2/04",
        "2/05", "2/06",
        "2/07", "2/08",
        "2/09"
    ];
    renderEfficiencyWeeklyData(canvas2, weeklyData, dates);
});
