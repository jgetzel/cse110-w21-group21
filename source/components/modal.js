class ModalComponent extends HTMLElement {
    constructor() {
        super();

        // use an object to store all relevant elements to the components for convenience
        this.elements = {};


        // Create a shadow root
        this.attachShadow({ mode: "open" }); // sets and returns 'this.shadowRoot'

        // Create an example element that will serve as our "root" element here
        const wrapper = document.createElement("div");
        wrapper.setAttribute("class", "modal");

        // Adds Close Button to the Modal
        const close = document.createElement("span");
        close.setAttribute("class", "close");
        close.textContent = "&times;";
        wrapper.appendChild(close);

        close.onclick = function() {
            wrapper.style.display = "none";
        }

        // Adds a title to the Modal
        const title = document.createElement("p");
        title.setAttribute("class", "title");
        title.textContent = this.textContent;
        wrapper.appendChild(title);

        this.elements.wrapper = wrapper;

        this.shadowRoot.appendChild(wrapper);
    }

    connectedCallback() {
        this.type = this.getAttribute("type");
    }
}

customElements.define("modal", ModalComponent);