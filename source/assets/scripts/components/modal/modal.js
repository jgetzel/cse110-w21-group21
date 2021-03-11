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
    this.elements.wrapper.innerHTML = `<div class="shadow"></div><div class="modal"></div>`;

    // Add Styles
    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    // make sure to link the correct stylesheet with the correct stylings
    linkElem.setAttribute("href", "./assets/styles/modal.css");
    this.elements.linkElem = linkElem;
    this.elements.wrapper.style.display = "none";

    this.shadowRoot.appendChild(linkElem);
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

    var child1 = this.childNodes;
    var htmlString = "";
    child1.forEach(element => htmlString += element.outerHTML);
    
    //copy html elements to shadow dom
    this.elements.wrapper.innerHTML = `<div class="shadow"></div><div class="modal">${htmlString}</div>`
    
    //remove extra html elements left
    let n = child1.length;
    for(let i = 0; i < n; i++)
      this.removeChild(child1[0]);
    
    this.shadowRoot.appendChild(this.elements.wrapper);
  }
}

customElements.define("pomo-modal", ModalComponent);