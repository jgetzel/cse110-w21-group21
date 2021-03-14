'use strict';
// we use fs to read the html file to load it up
const fs = require('fs');
test('test header.js', () => {
    // we use require here to load the component javascript
    require("../../source/assets/scripts/components/header/header");
    require("../../source/assets/scripts/components/modal/modal");

    // we create a fake testing document here:
    document.body.innerHTML = `<div>
        <pomo-header></pomo-header>
    </div>`

    // find our component elements
    const header = document.querySelector("pomo-header").elements.wrapper;
    const modal = header.getElementsByTagName("pomo-modal")[0];
    const homeBtn = header.querySelector(".logo");
    const helpBtn = header.getElementsByTagName("pomo-button")[1];
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

    // Check if help modal is not displayed
    expect(modal.style.display).toEqual("none");
    
    //show modal
    helpBtn.click();
    // note we use timeout since there is a transition in the css
    setTimeout(() => {
        expect(modal.style.display).toEqual("block");
    }, 500);

    // test that clicking close button closes the modal
    modal.shadowRoot.getElementById("modal-close").click();
    setTimeout(() => {
        expect(modal.style.display).toEqual("none");
    }, 500);
});