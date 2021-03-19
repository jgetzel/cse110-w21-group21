/**
 * Will randomly pick a theme and unique background depending on what day it is and what time it is and set it on the page
 */
export function selectAndSetTheme(today = new Date()) {
  let id = 0;
  let numBGs = 6;

  let d = today.getDay();

  let seed = localStorage.getItem("bg-seed");

  if (seed === null || seed[0] != d) {
    seed = d + "-" + Math.floor(Math.random() * numBGs);
    localStorage.setItem("bg-seed", seed);
  }
  let timePeriod = getThemeMode(today);
  id = parseInt(seed[2]);

  let element = document.getElementById("backdrop");
  element.style.backgroundImage = `url("./assets/images/backgrounds/${timePeriod}/bg${id}.jpg")`;
};

export const THEME_MODES = {
  DAY: "day",
  NIGHT: "night",
};

export function getThemeMode(today = new Date()) {
  let timePeriod = THEME_MODES.DAY;
  if (today.getHours() < 4) {
    timePeriod = THEME_MODES.NIGHT;
  }
  else if (today.getHours() < 18) {
    timePeriod = THEME_MODES.DAY;
  } else if (today.getHours() < 24) {
    timePeriod = THEME_MODES.NIGHT;
  }
  return timePeriod;
}