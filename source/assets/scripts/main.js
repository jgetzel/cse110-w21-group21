window.addEventListener("DOMContentLoaded", () => {
    // create example button i guess
    let allbuttons = document.getElementsByTagName("pomo-button")
    for (let i = 0; i < allbuttons.length; i++) {
        console.log()
        allbuttons[i].elements.wrapper.textContent = allbuttons[i].textContent
    }
});