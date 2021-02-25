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
    const header = document.querySelector("pomo-header").elements.wrapper;
    const homeBtn = header.querySelector(".logo");
    const links = header.getElementsByTagName("a");
    const homeLink = links[0];
    const histLink = links[1];

    // Check if logo is loaded in correctly (new URL more efficient than creating <a> tags)
    expect(homeBtn.src).toBe(new URL("./assets/images/logo.svg", document.baseURI).href);

    // Check if 2 buttons load correctly
    expect(header.getElementsByTagName("pomo-button").length).toBe(2);

    // Check if links work correctly (new URL more efficient than creating <a> tags)
    expect(homeLink.href).toBe(new URL("index.html", document.baseURI).href);
    expect(histLink.href).toBe(new URL("history.html", document.baseURI).href);

    // TODO: Check help button functionality based on implementation
});