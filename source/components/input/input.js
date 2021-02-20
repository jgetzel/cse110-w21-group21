// product-item.js
/**
 * STEPS:
 * CHANGE NAME FROM TEMPLATE TO XYZ
 * 
 * CHANGE DEFINITION AT BOTTOM FROM TEMPLATE TO XYZ (x-y-z or smth)
 */
class InputField extends HTMLElement {
    constructor() {
        super();

        // use an object to store all relevant elements to the components for convenience
        this.elements = {};

        // Create a shadow root
        this.attachShadow({ mode: "open" }); // sets and returns 'this.shadowRoot'

        // Create an example element that will serve as our "root" element here
        const wrapper = document.createElement("input");
        // set class as an example, this can be later used for css!
        wrapper.setAttribute("class", "pomo-input");
        // store it for future reference
        wrapper.placeholder = "Default Text"
        wrapper.type = "text";
        this.elements.wrapper = wrapper;

        // Add Styles
        const linkElem = document.createElement("link");
        linkElem.setAttribute("rel", "stylesheet");
        // make sure to link the correct stylesheet with the correct stylings
        linkElem.setAttribute("href", "./assets/styles/input-field.css");
        this.elements.linkElem = linkElem;

        // attach the created elements to the shadow DOM
        this.shadowRoot.append(linkElem, wrapper);
    }

    connectedCallback() {
        if(this.getAttribute("required")) {
            this.required = true;
        }
    }
}

customElements.define("pomo-input", InputField);