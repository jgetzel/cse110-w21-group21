// product-item.js
/**
 * STEPS:
 * CHANGE NAME FROM TEMPLATE TO XYZ
 * 
 * CHANGE DEFINITION AT BOTTOM FROM TEMPLATE TO XYZ (x-y-z or smth)
 */
class Button extends HTMLElement {
    constructor() {
        super();
        console.log(this.textContent)
        // use an object to store all relevant elements to the components for convenience
        this.elements = {};


        // Create a shadow root
        this.attachShadow({ mode: "open" }); // sets and returns 'this.shadowRoot'

        // Create an example element that will serve as our "root" element here
        const wrapper = document.createElement("button");
        // set class as an example, this can be later used for css!
        wrapper.setAttribute("class", "pomo-button");
        wrapper.innerText = "ABCDEFG"

        // store it for future reference
        this.elements.wrapper = wrapper;

        // Add Styles
        const linkElem = document.createElement("link");
        linkElem.setAttribute("rel", "stylesheet");
        // make sure to link the correct stylesheet with the correct stylings
        linkElem.setAttribute("href", "./assets/styles/button.css");
        this.elements.linkElem = linkElem;

        // attach the created elements to the shadow DOM
        this.shadowRoot.append(linkElem, wrapper);

    }

    connectedCallback() {
        this.type = this.getAttribute("type");
        if (this.type == "outline") {
            this.elements.wrapper.setAttribute("class", this.elements.wrapper.getAttribute("class") + " outline");
        } else if (this.type == "nav") {
            this.elements.wrapper.setAttribute("class", this.elements.wrapper.getAttribute("class") + " nav");
        }
    }
}

customElements.define("pomo-button", Button);