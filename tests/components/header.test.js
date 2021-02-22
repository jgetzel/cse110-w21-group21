'use strict';
// we use fs to read the html file to load it up
const fs = require('fs');
test('test main.js', () => {
    // we create a fake testing document here:
    document.body.innerHTML = `<div>
        <pomo-header></pomo-header>
    </div>`

    // we use require here to load the component javascript
    require("../../source/components/header/header.js")

    // find our component elements
    const header = document.getElementsByName("pomo-header");
    const histBtn = header.elements.button;
    console.log(histBtn.innerText);
    const helpBtn = header.getElementById("help");

    //TODO:check logo is loaded in


    //TODO:check links work


    // test that the text content between the nav buttons is correct
    expect(histBtn.innerText).toBe("History");
    expect(helpBtn.innerText).toBe("Help");

    // verify the correct classes are applied
    expect(histBtn.elements.button.className).toBe("pomo-button nav");
    expect(helpBtn.elements.button.className).toBe("pomo-button nav");
});