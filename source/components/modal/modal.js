class ModalComponent extends HTMLElement {
    constructor() {
        super();

        // use an object to store all relevant elements to the components for convenience
        this.elements = {};
        // Create a shadow root
        this.attachShadow({ mode: "open" }); // sets and returns 'this.shadowRoot'

        // Create an example element that will serve as our "root" element here
        const wrapper = document.createElement("div");
        wrapper.setAttribute("class", "modal-wrapper");
        wrapper.innerHTML = `
            <div class="shadow"></div>
            <div class="modal">
                <button id="modal-close" class="close-btn">x</button>
                <p class="title">Add New Task</p>
                <div>
                    <pomo-input placeholder="1" id="task-name"></pomo-input>
                </div>
                <div><pomo-input id="pomos-required"></pomo-input></div>
                <div><pomo-input id="description"></pomo-input></div>
                <div class="button-wrapper">
                    <pomo-button>Save</pomo-button>
                </div>
            </div>
        `
        // Add Styles
        const linkElem = document.createElement("link");
        linkElem.setAttribute("rel", "stylesheet");
        // make sure to link the correct stylesheet with the correct stylings
        linkElem.setAttribute("href", "./assets/styles/modal.css");
        this.elements.linkElem = linkElem;

        this.shadowRoot.appendChild(linkElem);
        this.shadowRoot.appendChild(wrapper);


        const closeBtn = this.shadowRoot.getElementById("modal-close")
        this.elements.closeBtn = closeBtn;
        this.elements.closeBtn.onclick = function () {
            wrapper.style.display = "none";


        }
    }

    getValues() {
        const taskName = this.shadowRoot.getElementById("task-name")
        const pomosRequired = this.shadowRoot.getElementById("pomos-required")
        const description = this.shadowRoot.getElementById("description")
        return {
            taskName: taskName.value,
            pomosRequired: pomosRequired.value,
            description: description.value,
        }
    }

    connectedCallback() {
        this.type = this.getAttribute("type");
    }
}

customElements.define("pomo-modal", ModalComponent);