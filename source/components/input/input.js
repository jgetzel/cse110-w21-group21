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
        let userTyped = "";
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
         * Checks input field if it's exceeded the maximum character limit on an event
         * @function
         * @param {Event} e Checks on keydown,paste, and input events
         * @returns {Boolean} false If the max character limit has been reached
        */
        function limitCharCount(e) {
            userTyped = wrapper.textContent;
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

        /**
         * Anonymous function to replace placeholder text with empty string when user clicks on component
         * @function
         */
        wrapper.addEventListener('focus', function() {
            //if focused and current text is the placeholder text replace it with empty string
            if(userTyped.length == 0) {
                wrapper.setAttribute("class", "pomo-input");
                wrapper.textContent = '';
            }
        });

        /**
         * Anonymous function to replace empty string with placeholder text when user clicks away
         * @function
         */
        wrapper.addEventListener('blur', function() {
            //if not focused and there is no input, return back to placeholder string
            if(userTyped.length == 0) {
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

        this.elements.wrapper.textContent = this.textContent;
        if(this.getAttribute("required")) {
            this.required = true;
            this.elements.wrapper.textContent += "*";
        }

        this.elements.wrapper.placeholder = this.elements.wrapper.textContent;
    }

    /**
     * Returns the user input in the field
     * @function
     * @returns {String} user input
     */
    getInput() {
        return userTyped;
    }
}

customElements.define("pomo-input", InputField);