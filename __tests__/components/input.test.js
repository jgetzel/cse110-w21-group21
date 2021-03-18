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

    // find our component element
    const input = document.getElementById("input");

    // test that when we make the component there is nothing for user typed
    expect(input.getInput()).toBe("");

    // verify the correct placeholder is there
    expect(input.elements.wrapper.textContent).toBe("Testing*");

    input.elements.wrapper.focus();
    //simulate the user typing
    var userInput = "User is Typing".split("");
    for (let i = 0; i < userInput.length; i++) {
        const event = new KeyboardEvent('keypress', { 'keyCode': userInput[i].charCodeAt(0) });
        document.dispatchEvent(event);
    }

    //test if the user types something, it shows up
    // expect(input.elements.wrapper.textContent).toBe("User is Typing");
    // expect(input.getInput()).toBe("User is Typing");
});