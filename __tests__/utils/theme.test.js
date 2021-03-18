import { getThemeMode, selectAndSetTheme, THEME_MODES } from "../../source/assets/scripts/utils/theme";

describe('test theme.js', () => {
  // set to day time
  test("set background during day time", () => {
    let today = new Date("2021-01-04T08:00:00");
    today.setHours(8);

    document.body.innerHTML = `<div id='backdrop'></div>`
    window.localStorage.setItem("bg-seed", "1-2");
    selectAndSetTheme(today);
    let backdrop = document.getElementById("backdrop");
    expect(backdrop.style.backgroundImage).toEqual(`url(../assets/images/backgrounds/day/bg2.jpg)`);
    
    today.setHours(2);
    selectAndSetTheme(today);
    expect(backdrop.style.backgroundImage).toEqual(`url(../assets/images/backgrounds/night/bg2.jpg)`);
  });
  test("give correct time", () => {
    let today = new Date("2021-01-04T03:00:00");
    today.setHours(1);
    let mode1 = getThemeMode(today);
    expect(mode1).toEqual(THEME_MODES.NIGHT);

    today.setHours(12);
    let mode2 = getThemeMode(today);
    expect(mode2).toEqual(THEME_MODES.DAY);
  });
});