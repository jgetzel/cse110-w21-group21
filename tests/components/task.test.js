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
    expect(greenTask.elements.wrapper.wrapperText.title.innerText).toBe("Prepare Dinner");
    expect(yellowTask.elements.wrapper.wrapperText.title.innerText).toBe("Finish this Component");

    // Checking if the description is correct
    expect(greenTask.elements.wrapper.description.title.innerText).toBe("Prepare Dinner");
    expect(yellowTask.elements.wrapper.description.title.innerText).toBe("Finish this Component");
});