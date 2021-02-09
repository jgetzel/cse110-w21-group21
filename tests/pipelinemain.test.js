'use strict';
const fs = require('fs');
test('test main.js', () => {
  let fileBuffer = fs.readFileSync("./source/pipelineTestCode/index.html");
  document.body.innerHTML = `${fileBuffer}`;
  require("../source/pipelineTestCode/assets/scripts/main");

  // test radio buttons work
  let radioCardHornElement = document.getElementById("radio-car-horn");
  radioCardHornElement.click();
  expect(radioCardHornElement.checked).toEqual(true);

  // test volume change causes image change
  let volumeChangeInputElement = document.getElementById("volume-number");
  volumeChangeInputElement.value = "30";
  volumeChangeInputElement.dispatchEvent(new Event("input"))
  let volumeImage = document.getElementById("volume-image");
  expect(volumeImage.src).toEqual("http://localhost/assets/media/icons/volume-level-1.svg")
});