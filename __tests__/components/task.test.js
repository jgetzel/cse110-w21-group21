'use strict'

test('test main.js', () => {
    document.body.innerHTML = `<div>
    <ul class="TaskList" style = "list-style-type: none;">
        <pomo-task description = "Heat Pizza. Make Juice" pomosUsed = "2", pomosRequired = "3" id = "Green">Prepare Dinner</pomo-task>
        <pomo-task description = "Learn HTML, CSS, JS. Adding few more lines to see how the text gets re aligned." pomosUsed = "4", pomosRequired = "3" id = "Yellow">Finish this Component</pomo-task>
    </ul>
    <div>`

    require("../../source/assets/scripts/components/task/task")

    const greenTask = document.getElementById("Green");
    const yellowTask = document.getElementById("Yellow");

    // Checking if the text between the tags becomes the title of the buttons
    expect(greenTask.elements.title.innerText).toBe("Prepare Dinner");
    expect(yellowTask.elements.title.innerText).toBe("Finish this Component");

    // Checking if the description is correct
    expect(greenTask.elements.description.innerText).toBe("Heat Pizza. Make Juice");
    expect(yellowTask.elements.description.innerText).toBe("Learn HTML, CSS, JS. Adding few more lines to see how the text gets re aligned.");

    // Checking if original class is pomoCircle
    expect(greenTask.elements.pomoCircle.className).toBe("pomoCircle");
    expect(yellowTask.elements.pomoCircle.className).toBe("pomoCircle");

    // Checking if color changes after task has been completed
    greenTask.elements.checkMark.click();
    expect(greenTask.elements.pomoCircle.className).toBe("goodTimingTask");

    yellowTask.elements.checkMark.click();
    expect(yellowTask.elements.pomoCircle.className).toBe("badTimingTask");
});