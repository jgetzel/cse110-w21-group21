'use strict';
// we use fs to read the html file to load it up
const fs = require('fs');
test('test main.js', () => {
    // we create a fake testing document here:
    document.body.innerHTML = `<div>
        <pomo-input id="input" required="true">Testing</pomo-input>
    </div>`;

    // we use require here to load the component javascript
    require("../../source/components/input/input.js");

    // find our component elements
    const input = document.getElementById("input");

    // test that when we make the component there is nothing for user typed
    expect(input.getUserTyped()).toBe("");

    // verify the correct placeholder is there
    expect(input.elements.wrapper.textContent).toBe("Testing*");
});