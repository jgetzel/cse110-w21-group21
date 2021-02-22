'use strict'

const fs = require('fs');
test('test main.js', () => {
    document.body.innerHTML = `<div>
    <ul class="TaskList" style = "list-style-type: none;">
        <pomo-task description = "Heat Pizza. Make Juice" pomosUsed = "2", pomosRequired = "3" id = "Green">Prepare Dinner</pomo-task>
        <pomo-task description = "Learn HTML, CSS, JS. Adding few more lines to see how the text gets re aligned." pomosUsed = "4", pomosRequired = "3" id = "Yellow">Finish this Component</pomo-task>
    </ul>
    <div>`

    require("../../source/components/task/task.js")

    const greenTask = document.getElementById("Green");
    const yellowTask = document.getElementById("Yellow");

    // Checking if the text between the tags becomes the title of the buttons
    expect(greenTask.elements.title.innerText).toBe("Prepare Dinner");
    expect(yellowTask.elements.title.innerText).toBe("Finish this Component");

    // Checking if the description is correct
    expect(greenTask.elements.description.innerText).toBe("Heat Pizza. Make Juice");
    expect(yellowTask.elements.description.innerText).toBe("Learn HTML, CSS, JS. Adding few more lines to see how the text gets re aligned.");

    // Checking if the requiredPomos and usedPomos are correct
    expect(greenTask.elements.pomoCircle.pused).toBe("2");
    expect(greenTask.elements.pomoCircle.preq).toBe("3");

    expect(yellowTask.elements.pomoCircle.pused).toBe("4");
    expect(yellowTask.elements.pomoCircle.preq).toBe("3");

    // Checking if original color is #333844
    expect(greenTask.elements.pomoCircle.style["background-color"]).toBe("#333844");
    expect(yellowTask.elements.pomoCircle.style["background-color"]).toBe("#333844");

    // Checking if color changes after task has been completed
    greenTask.elements.checkMark.click();
    expect(greenTask.elements.pomoCircle.style["background-color"]).toBe("#22DD9A");

    yellowTask.elements.checkMark.click();
    expect(yellowTask.elements.pomoCircle.style["background-color"]).toBe("#F9C644");
});