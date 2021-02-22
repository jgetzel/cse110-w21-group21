/**
 * STEPS:
 * CHANGE NAME FROM TEMPLATE TO XYZ
 * 
 * CHANGE DEFINITION AT BOTTOM FROM TEMPLATE TO XYZ (x-y-z or smth)
 */
class Header extends HTMLElement {
    constructor() {
        super();
        // use an object to store all relevant elements to the components for convenience
        this.elements = {};

        // Create a shadow root
        this.attachShadow({ mode: "open" }); // sets and returns 'this.shadowRoot'

        // Create an example element that will serve as our "root" element here
        const wrapper = document.createElement("nav");
        // set class as an example, this can be later used for css!
        wrapper.setAttribute("class", "pomo-header");

        var logo = document.createElement("img");
        logo.src = "./assets/images/logo.svg"
        logo.setAttribute("class", "pomo-header logo");

        var homeLink = document.createElement("a");
        homeLink.href="index.html";

        homeLink.appendChild(logo);
        wrapper.appendChild(homeLink);

        wrapper.innerHTML += `<a href="history.html"><pomo-button type="nav" id="hist">History</pomo-button></a>`;
        //TODO: LINK HELP BUTTON TO FUTURE HELP MODAL/HTML
        wrapper.innerHTML += `<pomo-button id="about-pomo" type="nav" id="help">Help</pomo-button>`

        /* Original
        <img src="logo.png">
        <pomo-button type="nav">History</pomo-button>
        <pomo-button id="about-pomo" type="nav" style="position: absolute; right:0px; padding: 10px;">?</pomo-button>
        */

        // store it for future reference
        this.elements.wrapper = wrapper;

        // Add Styles
        const linkElem = document.createElement("link");
        linkElem.setAttribute("rel", "stylesheet");
        // make sure to link the correct stylesheet with the correct stylings
        linkElem.setAttribute("href", "./assets/styles/header.css");
        this.elements.linkElem = linkElem;

        // attach the created elements to the shadow DOM
        this.shadowRoot.append(linkElem, wrapper);
    }
}

customElements.define("pomo-header", Header);