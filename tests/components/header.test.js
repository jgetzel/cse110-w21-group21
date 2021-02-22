'use strict';
// we use fs to read the html file to load it up
const fs = require('fs');
test('test header.js', () => {
    // we create a fake testing document here:
    document.body.innerHTML = `<div>
        <pomo-header></pomo-header>
    </div>`

    // we use require here to load the component javascript
    require("../../source/components/header/header.js")

    // find our component elements
    const header = document.querySelector("pomo-header").wrapper;
    const homeBtn = header.querySelector(".logo");
    const links = header.getElementsByTagName("a");
    const homeLink = links[0];
    const histLink = links[1];

    // Check if logo is loaded in correctly
    expect(homeBtn.src).toBe("./assets/images/logo.svg");

    // Check if 2 buttons load correctly
    expect(header.querySelectorAll(".pomo-button.nav").length).toBe(2);

    // Check if links work correctly
    expect(homeLink.href).toBe("index.html");
    expect(histLink.href).toBe("history.html");

    // TODO: Check help button functionality based on implementation
});