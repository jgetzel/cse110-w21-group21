// product-item.js

/**
 * @class Button
 * 
 * A button component with 3 types, normal, outline, and nav
 */
class Button extends HTMLElement {
    constructor() {
        super();
        // use an object to store all relevant elements to the components for convenience
        this.elements = {};


        // Create a shadow root
        this.attachShadow({ mode: "open" }); // sets and returns 'this.shadowRoot'

        // Create an example element that will serve as our "root" element here
        const button = document.createElement("button");
        // set class as an example, this can be later used for css!
        button.setAttribute("class", "pomo-button");
        button.innerText = this.textContent || "";

        // store it for future reference
        this.elements.button = button;
        button.setAttribute("part", "button");

        // Add Styles
        const linkElem = document.createElement("link");
        linkElem.setAttribute("rel", "stylesheet");
        // make sure to link the correct stylesheet with the correct stylings
        linkElem.setAttribute("href", "./assets/styles/button.css");
        this.elements.linkElem = linkElem;

        // attach the created elements to the shadow DOM
        this.shadowRoot.append(linkElem, button);

        this.type = this.getAttribute("type");
        if (this.type == "outline") {
            this.elements.button.setAttribute("class", this.elements.button.getAttribute("class") + " outline");
        } else if (this.type == "nav") {
            this.elements.button.setAttribute("class", this.elements.button.getAttribute("class") + " nav");
        }


    }
}

customElements.define("pomo-button", Button);