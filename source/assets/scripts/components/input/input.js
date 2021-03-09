/**
 * InputField class to make a web component that can handle user input.
 * By default the max character count is 50.
 * 
 * Example: <pomo-input required="true" max="10">Testing</pomo-input>
 * Will make an input field of max 10 characters and the placeholder 
 * text will be "Testing*". The "*" is because this input is set as required.
 * @class
 * @author Ethan Huynh
 */
class InputField extends HTMLElement {
    /** Constructor for pomo-input component creates a contentEditable div with
     * a default max character limit of 50
     * @constructor
     */
    constructor() {
        super();
        this.userTyped = "";
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
         * Anonymous function to replace placeholder text with empty string when user clicks on component
         * @function
         */
        wrapper.addEventListener("focus", function () {
            //if focused and current text is the placeholder text replace it with empty string
            if(!this.userTyped) {
                wrapper.setAttribute("class", "pomo-input");
                wrapper.textContent = "";
            }
        });

        /**
         * Anonymous function to replace empty string with placeholder text when user clicks away
         * @function
         */
        wrapper.addEventListener("blur", function () {
            //if not focused and there is no input, return back to placeholder string
            if(!this.userTyped) {
                wrapper.setAttribute("class", "pomo-input placeholder");
                wrapper.textContent = wrapper.placeholder;
            }
        });
    }
    
    /** 
     * Checks input field if it's exceeded the maximum character limit on an event
     * @function
     * @param {Event} e Checks on keydown,paste, and input events
     * @returns {Boolean} false If the max character limit has been reached
    */
    limitCharCount(e) {
        this.userTyped = this.textContent;
        //if the user hasn't highlighted any text and we are at max length
        if(window.getSelection().toString().length == 0 && this.textContent.length >= this.max) {
            this.setAttribute("class", "pomo-input max");
            e.preventDefault();
            return false;
        }
        else {
            this.setAttribute("class", "pomo-input");
            return true;
        }
    }

    /** 
     * Stop the user from inputting anything but numbers
     * @function
     * @param {Event} event Checks on keydown,paste, and input events
    */
    numericInputOnly(event) {
        this.userTyped = this.textContent;
        //if the user hasn't highlighted any text and we are at max length
        if(window.getSelection().toString().length == 0 && this.textContent.length >= this.max) {
            this.setAttribute("class", "pomo-input max");
            event.preventDefault();
            return false;
        }
        else
            this.setAttribute("class", "pomo-input");
            
        //different events store the text in different ways so we need these ifs
        if(event.type == "keypress" && isNaN(event.key)) {
            this.classList.add("invalid");
            event.preventDefault();
        }
        else if(event.type == "input" && isNaN(event.data)) {
            this.setAttribute("class", "pomo-input invalid");
            event.preventDefault();
        }
        else if(event.type == "paste" && isNaN(event.clipboardData.getData("Text"))) {
            this.setAttribute("class", "pomo-input invalid");
            event.preventDefault();
        }
    }

    get value() {
        return this.elements.wrapper.textContent;
    }

    connectedCallback() {
        var maxChar = this.getAttribute("max");

        //set attribute-specified max char
        if (maxChar != null)
            this.elements.wrapper.max = Number(maxChar);

        this.elements.wrapper.textContent = this.textContent;
        if (this.getAttribute("required")) {
            this.required = true;
            this.elements.wrapper.textContent += "*";
        }

        if(this.getAttribute("type") == "number") {
            this.elements.wrapper.addEventListener("keypress", this.numericInputOnly, false);
            this.elements.wrapper.addEventListener("paste", this.numericInputOnly, false);
            this.elements.wrapper.addEventListener("input", this.numericInputOnly, false); //this is mainly for changing the backspace/del key
        }
        else {
            //listen for max characters on these events
            this.elements.wrapper.addEventListener("keypress", this.limitCharCount, false);
            this.elements.wrapper.addEventListener("paste", this.limitCharCount, false);
            this.elements.wrapper.addEventListener("input", this.limitCharCount, false); //this is mainly for changing the backspace/del key
        }

        this.elements.wrapper.placeholder = this.elements.wrapper.textContent;
    }
}

customElements.define("pomo-input", InputField);