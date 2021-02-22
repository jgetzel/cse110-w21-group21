window.addEventListener("DOMContentLoaded", () => {
    // create example button i guess
    var modalBtn = document.getElementById("btn-modal");
    let allbuttons = document.getElementsByTagName("pomo-button")
    for (let i = 0; i < allbuttons.length; i++) {
        allbuttons[i].elements.wrapper.textContent = allbuttons[i].textContent
    }
});
