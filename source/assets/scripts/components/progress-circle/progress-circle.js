/**
 * @class ProgressCircleComponent
 */
class ProgressCircleComponent extends HTMLElement {
    constructor() {
        super();

        // use an object to store all relevant elements to the components for convenience
        this.elements = {};

        // Create a shadow root
        this.attachShadow({ mode: "open" }); // sets and returns 'this.shadowRoot'

        // Create an example element that will serve as our "root" element here
        const wrapper = document.createElement("div");
        // set class as an example, this can be later used for css!
        wrapper.setAttribute("id", "wrapper");
        // store it for future reference
        this.elements.wrapper = wrapper;

        this.displayText = "0%";

        wrapper.innerHTML = `
        <div id="progress-circle" class="progress-circle">
            <span id="displayText">
                0%
            </span>
            <div class="left-half-clipper">
                <div class="first50-bar"></div>
                <div class="value-bar" id="progress-bar"></div>
            </div>
        </div>
        `;
        wrapper.innerHTML = `
        <span id="displayText">0%</span>
        <svg id="circular-loader"viewBox="25 25 50 50" >
            <circle id="loader-path" cx="50" cy="50" r="20" fill="none" />
            <circle id="loader-path-bg" cx="50" cy="50" r="20" fill="none" />
        </svg>
        `;

        // Add Styles
        const linkElem = document.createElement("link");
        linkElem.setAttribute("rel", "stylesheet");
        // make sure to link the correct stylesheet with the correct stylings
        linkElem.setAttribute("href", "./assets/styles/progress-circle.css");
        this.elements.linkElem = linkElem;

        // attach the created elements to the shadow DOM
        this.shadowRoot.append(linkElem, wrapper);
    }
    /**
     * Set size of progress circle
     * @param {string} fontSize - example: `1rem`
     */
    setSize(fontSize) {
        const element = this.shadowRoot.getElementById("wrapper");
        element.style.fontSize = fontSize;
    }

    /**
     * Set the display text of the progress circle
     * @param {*} text 
     */
    setDisplayText(text) {
        this.displayText = text;
        let element = this.shadowRoot.getElementById("displayText");
        element.textContent = text;
    }
    /**
     * Set the percentage of the progress bar 
     * 
     * @param {number} percent - a percent value ranging from 0 to 1
     */
    setPercentage(percent) {
        let element = this.shadowRoot.getElementById("loader-path");
        element.style.strokeDashoffset = - (1 - percent) * 127.5;
    }
}

customElements.define("progress-circle", ProgressCircleComponent);