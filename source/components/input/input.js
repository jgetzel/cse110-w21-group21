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
        const wrapper = document.createElement("div");
        // set class as an example, this can be later used for css!
        wrapper.setAttribute("class", "pomo-input");
        
        wrapper.placeholder = "Default Text";
        wrapper.contentEditable = true;
        wrapper.max = 50; //by default the max character count is 50

        // store it for future reference
        this.elements.wrapper = wrapper;

        // Add Styles
        const linkElem = document.createElement("link");
        linkElem.setAttribute("rel", "stylesheet");
        // make sure to link the correct stylesheet with the correct stylings
        linkElem.setAttribute("href", "./assets/styles/input-field.css");
        this.elements.linkElem = linkElem;

        // attach the created elements to the shadow DOM
        this.shadowRoot.append(linkElem, wrapper);

        //add default style
        this.elements.wrapper.setAttribute("class", this.elements.wrapper.getAttribute("class") + " placeholder");

        /** 
         * This doesn't take into account copy + paste so if user pastes something >= max it will paste
         * and then restrict key inputs after
        */
        function limitCharCount(e) {
            if(wrapper.textContent.length >= wrapper.max) {
                wrapper.setAttribute("class", wrapper.getAttribute("class") + " max");
                e.preventDefault();
                return false;
            }
            else {
                wrapper.setAttribute("class", "pomo-input");
            }
        }
        //listen for max characters on these events
        wrapper.addEventListener('keypress', limitCharCount, false);
        wrapper.addEventListener('paste', limitCharCount, false);
        wrapper.addEventListener('input', limitCharCount, false); //this is mainly for changing the backspace/del key

        wrapper.addEventListener('focus', function() {
            //if focused and current text is the placeholder text replace it with empty string
            if(wrapper.textContent == wrapper.placeholder) {
                wrapper.setAttribute("class", "pomo-input");
                wrapper.textContent = '';
            }
        });

        wrapper.addEventListener('blur', function() {
            //if not focused and there is no input, return back to placeholder string
            if(wrapper.textContent == '') {
                wrapper.setAttribute("class", wrapper.getAttribute("class") + " placeholder");
                wrapper.textContent = wrapper.placeholder;
            }

        });
    }

    connectedCallback() {
        var maxChar = this.getAttribute("max")

        //set attribute-specified max char
        if(maxChar != null)
            this.elements.wrapper.max = Number(maxChar);

        if(this.getAttribute("required")) {
            this.required = true;
        }
    }
}

customElements.define("pomo-input", InputField);