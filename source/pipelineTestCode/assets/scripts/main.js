// main.js

// keep track of all html elements we are using
const HTMLElements = {
  volumeNumber: document.getElementById("volume-number"),
  volumeSlider: document.getElementById("volume-slider"),
  hornSound: document.getElementById("horn-sound"),
  volumeImage: document.getElementById("volume-image"),
  audioSelection: document.getElementById("audio-selection"),
  soundImage: document.getElementById("sound-image"),
  honkButton: document.getElementById("honk-btn")
}


// sets the values of relevant html elements to the correct values and updates the volume image
function setAndDisplayVolume(volume) {
  HTMLElements.volumeNumber.value = volume;
  HTMLElements.volumeSlider.value = volume;
  HTMLElements.hornSound.volume = volume / 100;

  // get volume level and set volume image
  let volumeLevel = 0;
  if (volume === 0) {
    volumeLevel = 0;
  } else if (volume <= 33) {
    volumeLevel = 1;
  } else if (volume <= 66) {
    volumeLevel = 2;
  } else if (volume <= 100) {
    volumeLevel = 3;
  }
  HTMLElements.volumeImage.setAttribute("src", `./assets/media/icons/volume-level-${volumeLevel}.svg`);

  if (volumeLevel === 0) {
    HTMLElements.honkButton.disabled = true;
  } else {
    HTMLElements.honkButton.disabled = false;
  }
}

HTMLElements.volumeSlider.addEventListener("input", (e) => {
  setAndDisplayVolume(parseInt(e.target.value));
});
HTMLElements.volumeNumber.addEventListener("input", (e) => {
  setAndDisplayVolume(parseInt(e.target.value));
});

HTMLElements.audioSelection.addEventListener("input", (e) => {
  let audioFile = "";
  let soundImageFile = "";
  switch(e.target.id) {
    case "radio-air-horn":
      audioFile = "air-horn";
      soundImageFile = "air-horn";
      break;
    case "radio-car-horn":
      audioFile = "car-horn";
      soundImageFile = "car";
      break;
    case "radio-party-horn":
      audioFile = "party-horn";
      soundImageFile = "party-horn";
      break;
  }
  HTMLElements.hornSound.setAttribute("src", `./assets/media/audio/${audioFile}.mp3`);
  HTMLElements.soundImage.setAttribute("src", `./assets/media/images/${soundImageFile}.svg`)
});


HTMLElements.honkButton.addEventListener("click", (e) => {
  e.preventDefault();
  HTMLElements.hornSound.play();
});