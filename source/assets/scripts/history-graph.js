/**
 * Renders a bar chart onto the given chart element showing the daily data
 * 
 * @param {HTMLCanvasElement} chartelement - the element to render chart data on
 * @param {{complete: number, overtime: number, incomplete: number}} data
 */
export function renderEfficiencyData(chartelement, data) {
    let ctx = chartelement.getContext("2d");
    let labels = ["Tasks Completed on Time", "Tasks Completed over Time", "Tasks Incomplete"];
    let colors = ["#22DD9A", "#F9C644", "#FA7F7F"];
    let myChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [{
                label: "# of Tasks",
                data: [data.complete, data.overtime, data.incomplete],
                backgroundColor: colors,
                borderColor: colors,
                borderWidth: 1
            }]
        },
        options: {
            legend: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

/**
 * Renders a line chart onto the chart element of weekly data
 * 
 * @param {HTMLCanvasElement} chartelement - the element to render chart data on
 * @param {{complete: number[], overtime: number[], incomplete: number[]}} weeklyData
 * @param {string[]} dates
 */
export function renderEfficiencyWeeklyData(chartelement, weeklyData, dates) {
    let ctx = chartelement.getContext("2d");
    let labels = ["Tasks Completed on Time", "Tasks Completed over Time", "Tasks Incomplete"];
    let colors = ["#22DD9A", "#F9C644", "#FA7F7F"];
    let myChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: dates,
            datasets: [{
                label: labels[0],
                borderColor: "#22DD9A",
                backgroundColor: "transparent",
                data: weeklyData.complete
            }, {
                label: labels[1],
                borderColor: "#F9C644",
                backgroundColor: "transparent",
                data: weeklyData.overtime,
            }, {
                label: labels[2],
                borderColor: "#FA7F7F",
                backgroundColor: "transparent",
                data: weeklyData.incomplete
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}