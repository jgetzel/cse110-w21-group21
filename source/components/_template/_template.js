// product-item.js
/**
 * STEPS:
 * CHANGE NAME FROM TEMPLATE TO XYZ
 * 
 * CHANGE DEFINITION AT BOTTOM FROM TEMPLATE TO XYZ (x-y-z or smth)
 */
class TemplateComponent extends HTMLElement {
    constructor() {
        super();

        // use an object to store all relevant elements to the components for convenience
        this.elements = {};

        // Create a shadow root
        this.attachShadow({ mode: "open" }); // sets and returns 'this.shadowRoot'

        // Create an example element that will serve as our "root" element here
        const wrapper = document.createElement("div");
        // set class as an example, this can be later used for css!
        wrapper.setAttribute("class", "template");
        // store it for future reference
        this.elements.wrapper = wrapper;

        // Add Styles
        const linkElem = document.createElement("link");
        linkElem.setAttribute("rel", "stylesheet");
        // make sure to link the correct stylesheet with the correct stylings
        linkElem.setAttribute("href", "./styles/styles.css");
        this.elements.linkElem = linkElem;

        // attach the created elements to the shadow DOM
        this.shadowRoot.append(linkElem, wrapper);
    }

    connectedCallback() {
        // add attribute content
        this.elements.img.src = this.getAttribute("image-src");
        this.elements.img.alt = this.getAttribute("title");

        this.elements.price.innerText = this.getAttribute("price");
        this.elements.title.innerText = this.getAttribute("title");
    }
}

customElements.define("template", TemplateComponent);