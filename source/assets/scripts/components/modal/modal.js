export default class ModalComponent extends HTMLElement {
  constructor() {
    super();

    // use an object to store all relevant elements to the components for convenience
    this.elements = {};
    // Create a shadow root
    this.attachShadow({ mode: "open" }); // sets and returns 'this.shadowRoot'

    // Create an example element that will serve as our "root" element here
    const wrapper = document.createElement("div");
    this.elements.wrapper = wrapper;
    this.elements.wrapper.setAttribute("class", "modal-wrapper");
    this.elements.wrapper.innerHTML = `<div class="shadow"><div class="modal"></div></div>`;

  }

  getValues() {
    const taskName = this.shadowRoot.getElementById("task-name").elements.wrapper;
    const pomosRequired = this.shadowRoot.getElementById("pomos-required").elements.wrapper;
    const description = this.shadowRoot.getElementById("description").elements.wrapper;
    console.log(taskName.value);
    var returnVal;
    if(description.userTyped == undefined)
      returnVal = "";
    return {
      taskName: taskName.userTyped,
      pomosRequired: pomosRequired.userTyped,
      description: returnVal,
    };
  }

  displayModal() {
    this.elements.wrapper.style.display = "block";
    setTimeout(() => {
      this.elements.wrapper.style.opacity = 1;
    }, 20);
  }
  hideModal() {
    this.elements.wrapper.style.opacity = 0;
    setTimeout(() => {
      this.elements.wrapper.style.display = "none";
    }, 400);
  }

  connectedCallback() {
    this.type = this.getAttribute("type");

    var child1 = this.childNodes[1].childNodes;
    var htmlString = "";
    child1.forEach(element => htmlString+= element.outerHTML);
    //this.innerHTML = "";
    //this.elements.wrapper.innerHTML = `<div class="shadow"><div class="modal">${htmlString}</div></div>`
    
    // Add Styles
    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    // make sure to link the correct stylesheet with the correct stylings
    linkElem.setAttribute("href", "./assets/styles/modal.css");
    this.elements.linkElem = linkElem;
    this.elements.wrapper.style.display = "none";

    
    this.elements.closeBtn = document.getElementById("modal-close");
    this.elements.closeBtn.onclick = this.hideModal.bind(this);
    this.elements.saveBtn = document.getElementById("save-btn");
    this.elements.saveBtn.onclick = function () {
      this.hideModal();
      this.elements.values = this.getValues();
    }.bind(this);
    this.shadowRoot.appendChild(linkElem);
    this.shadowRoot.appendChild(this.elements.wrapper);
  }
}

customElements.define("pomo-modal", ModalComponent);

/*
<div class="shadow"></div>
<div class="modal">
  <button id="modal-close" class="close-btn">x</button>
  <p class="title">Add New Task</p>
  <div><pomo-input required="true" id="task-name">Enter a Task Name</pomo-input></div>
  <div><pomo-input required="true" type="number" max="3" id="pomos-required">Pomos Required</pomo-input></div>
  <div><pomo-input max="250" id="description">Description</pomo-input></div>
  <div class="button-wrapper">
    <pomo-button id="save-btn">Save</pomo-button>
  </div>
</div>
*/

/*
Original
<div class="shadow"></div>
<div class="modal">
    <button id="modal-close" class="close-btn">x</button>
    <p class="title">Add New Task</p>
    <div><pomo-input required="true" id="task-name">Enter a Task Name</pomo-input></div>
    <div><pomo-input required="true" type="number" max="3" id="pomos-required">Pomos Required</pomo-input></div>
    <div><pomo-input max ="250" id="description">Description</pomo-input></div>
    <div class="button-wrapper">
        <pomo-button id="save-btn">Save</pomo-button>
    </div>
</div>
*/