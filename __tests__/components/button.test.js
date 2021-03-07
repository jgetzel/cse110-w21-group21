// import { jest } from '@jest/globals';
'use strict';
// we use fs to read the html file to load it up
test('test main.js', () => {
    // we create a fake testing document here:
    document.body.innerHTML = `<div>
        <pomo-button id='btn1'>normal</pomo-button>
        <pomo-button id='btn2' type="nav">nav</pomo-button>
        <pomo-button id='btn3' type="outline">outlined</pomo-button>
    </div>`
    // jest.mock('../../source/assets/scripts/components/button/button.js');

    // we use require here to load the component javascript
    require("../../source/assets/scripts/components/button/button.js")

    // find our component elements
    const btn1 = document.getElementById("btn1")
    const btn2 = document.getElementById("btn2")
    const btn3 = document.getElementById("btn3")

    // test that the text content between the tags is inserted into the actual button 
    expect(btn1.elements.button.innerText).toBe("normal")

    // verify the correct classes are applied
    expect(btn1.elements.button.className).toBe("pomo-button")
    expect(btn2.elements.button.className).toBe("pomo-button nav")
    expect(btn3.elements.button.className).toBe("pomo-button outline")

});