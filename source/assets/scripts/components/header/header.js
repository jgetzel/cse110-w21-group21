import { getLatestSessionID, getPomoSession, POMO_SESSION_MODES, storePomoSession } from "../../database/session";

/**
 * Header class to create a web component implementing the functionality of our header bar.
 * 
 * @authors Ethan Huynh, Kevin Klimek
 * @todo Refactor buttons to onClick events instead of simply appending to a link element,
 *       Implement help button when Modal component is merged
 */
const HELP_TEXT = "The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as a university student."; 
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

        let logo = document.createElement("img");
        logo.src = "./assets/svgImages/logo.svg";
        logo.setAttribute("class", "pomo-header logo");

        let homeLink = document.createElement("a");
        homeLink.href="index.html";
        homeLink.id = "home-btn";

        homeLink.appendChild(logo);
        wrapper.appendChild(homeLink);

        /** For following links in an eventlistener
         *  window.location.href = "http://www.w3schools.com";
         *  or window.location.assign(url);
         *  or window.location.replace if we don't want to add to history
         */

        wrapper.innerHTML += "<a id=\"hist-btn\" href=\"history.html\"><pomo-button type=\"nav\" id=\"hist\">History</pomo-button></a>";

        wrapper.innerHTML += "<pomo-button type=\"nav\" id=\"help\">Help</pomo-button>";
        wrapper.innerHTML += `<pomo-modal id="modal-help">  
            <button id="modal-close" class="close-btn">x</button>
            <p class="title">What's a Pomo Timer?</p>
            <p>${HELP_TEXT}</p>
            <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique">Wikipedia</a>
        </pomo-modal>`;

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

        let modal = wrapper.childNodes[3];
        modal.elements.wrapper.style.display = "none";
        let helpBtn = wrapper.childNodes[2];
        let closeBtn = modal.shadowRoot.getElementById("modal-close");
        helpBtn.onclick = function() {
            modal.displayModal();
        };

        closeBtn.onclick = function() {
            modal.hideModal();
        };

        const checkPomoSessionModeBeforeLeaving = (e) => {
            // prevent moving to new page if current pomo session is still active
            let id = getLatestSessionID();
            if (id !== null) {
                let pomoSession = getPomoSession(id);
                if (pomoSession.mode === POMO_SESSION_MODES.ACTIVE || pomoSession.mode === POMO_SESSION_MODES.LONG_BREAK || pomoSession.mode === POMO_SESSION_MODES.BREAK) {
                    if (!confirm("Are you sure want to leave? This will automatically complete your session")) {
                        e.preventDefault();
                    } else {
                        // if they do leave, make sure to update the session
                        console.log("CHANGE");
                        pomoSession.mode = POMO_SESSION_MODES.COMPLETE;
                        storePomoSession(pomoSession);
                        console.log(getPomoSession(pomoSession.id));
                    }
                }
            }
            
        };

        this.shadowRoot.getElementById("hist-btn").onclick = checkPomoSessionModeBeforeLeaving;
        this.shadowRoot.getElementById("home-btn").onclick = checkPomoSessionModeBeforeLeaving;
    }
}

customElements.define("pomo-header", Header);