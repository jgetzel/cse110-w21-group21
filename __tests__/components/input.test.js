'use strict';
// we use fs to read the html file to load it up
const fs = require('fs');
test('test main.js', () => {
    // we create a fake testing document here:
    document.body.innerHTML = `<div>
        <pomo-input id="input" required="true" max="123">Testing</pomo-input>
        <pomo-input id="input2" max="789">blah</pomo-input>
    </div>`;

    // we use require here to load the component javascript
    require("../../source/assets/scripts/components/input/input.js");

    // find our component element
    const input = document.getElementById("input");
    const input2 = document.getElementById("input2");

    expect(input.elements.wrapper.userTyped).toBe(undefined);
    expect(input2.elements.wrapper.userTyped).toBe(undefined);

    // verify the correct text placeholder is shown
    expect(input.elements.wrapper.textContent).toBe("Testing*");
    expect(input2.elements.wrapper.textContent).toBe("blah");

    // verify the correct placeholder is saved
    expect(input.elements.wrapper.placeholder).toBe("Testing*");
    expect(input2.elements.wrapper.placeholder).toBe("blah");

    // verify the correct max char is being set
    expect(input.elements.wrapper.max).toBe(123);
    expect(input2.elements.wrapper.max).toBe(789);
});