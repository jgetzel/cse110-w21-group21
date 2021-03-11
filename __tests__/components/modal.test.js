'use strict';
// we use fs to read the html file to load it up
const fs = require('fs');
test('test main.js', () => {
    // we create a fake testing document here:
    document.body.innerHTML = `<div>
    <pomo-modal id = "modal">
        <button id="modal-close" class="close-btn">x</button>
        <p class="title">Add New Task</p>
        <div><pomo-input required="true" id="task-name">Enter a Task Name</pomo-input></div>
        <div><pomo-input required="true" type="number" max="3" id="pomos-required">Pomos Required</pomo-input></div>
        <div><pomo-input max ="250" id="description">Description</pomo-input></div>
        <div class="button-wrapper">
            <pomo-button id="save-btn">Save</pomo-button>
        </div>
    </pomo-modal>
    </div>`

    // we use require here to load the component javascript
    require("../../source/assets/scripts/components/modal/modal")

    // find our component elements
    const modal = document.getElementById("modal")

    // test that the initial display state is none
    expect(modal.elements.wrapper.style.display).toEqual("none");

    modal.elements.wrapper.style.display = "block";

    // test that clicking close button closes the modal
    modal.shadowRoot.getElementById("modal-close").click();
    // note we use timeout since there is a transition in the css
    setTimeout(() => {
        expect(modal.elements.wrapper.style.display).toEqual("none");
    }, 500);

    // test that clicking save button closes modal
    modal.elements.wrapper.style.display = "block";
    modal.shadowRoot.getElementById("save-btn").click();
    setTimeout(() => {
        expect(modal.elements.wrapper.style.display).toEqual("none");
    }, 500);

});