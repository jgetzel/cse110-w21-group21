/**
 * Header class to create a web component implementing the functionality of our header bar.
 * 
 * @authors Ethan Huynh, Kevin Klimek
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

        /** For following links in an eventlistener
         *  window.location.href = "http://www.w3schools.com";
         *  or window.location.assign(url);
         *  or window.location.replace if we don't want to add to history
         */

        wrapper.innerHTML += `<a href="history.html"><pomo-button type="nav" id="hist">History</pomo-button></a>`;
        //TODO: LINK HELP BUTTON TO FUTURE HELP MODAL/HTML
        wrapper.innerHTML += `<pomo-button type="nav" id="help">Help</pomo-button>`

        // store it for easy access
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