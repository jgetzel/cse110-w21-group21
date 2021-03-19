/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./source/assets/scripts/components/button/button.js":
/*!***********************************************************!*\
  !*** ./source/assets/scripts/components/button/button.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/theme */ "./source/assets/scripts/utils/theme.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// product-item.js

/**
 * @class Button
 * 
 * A button component with 3 types, normal, outline, and nav specified with the type attribute
 * 
 * It also has two sizes, "small" and "normal" specified by the size attribute
 */

var Button = /*#__PURE__*/function (_HTMLElement) {
  _inherits(Button, _HTMLElement);

  var _super = _createSuper(Button);

  function Button() {
    var _this;

    _classCallCheck(this, Button);

    _this = _super.call(this); // use an object to store all relevant elements to the components for convenience

    _this.elements = {}; // Create a shadow root

    _this.attachShadow({
      mode: "open"
    }); // sets and returns 'this.shadowRoot'
    // Create an example element that will serve as our "root" element here


    var button = document.createElement("button"); // set class as an example, this can be later used for css!

    button.setAttribute("class", "pomo-button");
    button.innerText = _this.textContent || ""; // store it for future reference

    _this.elements.button = button;
    button.setAttribute("part", "button");
    button.style.display = "none"; // Add Styles

    var linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet"); // make sure to link the correct stylesheet with the correct stylings

    linkElem.setAttribute("href", "./assets/styles/button.css");
    _this.elements.linkElem = linkElem; // attach the created elements to the shadow DOM

    _this.shadowRoot.append(linkElem, button);

    _this.type = _this.getAttribute("type");

    if (_this.type == "outline") {
      _this.elements.button.setAttribute("class", _this.elements.button.getAttribute("class") + " outline");
    } else if (_this.type == "nav") {
      _this.elements.button.setAttribute("class", _this.elements.button.getAttribute("class") + " nav");
    }

    _this.size = _this.getAttribute("size");

    if (_this.size === "small") {
      _this.elements.button.setAttribute("class", _this.elements.button.getAttribute("class") + " small");
    } else if (_this.size === "tiny") {
      _this.elements.button.setAttribute("class", _this.elements.button.getAttribute("class") + " tiny");
    }

    var themeMode = (0,_utils_theme__WEBPACK_IMPORTED_MODULE_0__.getThemeMode)();

    if (themeMode === _utils_theme__WEBPACK_IMPORTED_MODULE_0__.THEME_MODES.NIGHT && _this.getAttribute("nodark") !== "true") {
      _this.elements.button.setAttribute("class", _this.elements.button.getAttribute("class") + " dark");
    }

    return _this;
  }

  return Button;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define("pomo-button", Button);

/***/ }),

/***/ "./source/assets/scripts/components/header/header.js":
/*!***********************************************************!*\
  !*** ./source/assets/scripts/components/header/header.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _database_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../database/session */ "./source/assets/scripts/database/session.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/**
 * Header class to create a web component implementing the functionality of our header bar.
 * 
 * @authors Ethan Huynh, Kevin Klimek
 * @todo Refactor buttons to onClick events instead of simply appending to a link element,
 *       Implement help button when Modal component is merged
 */

var HELP_TEXT = "The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as a university student.";

var Header = /*#__PURE__*/function (_HTMLElement) {
  _inherits(Header, _HTMLElement);

  var _super = _createSuper(Header);

  function Header() {
    var _this;

    _classCallCheck(this, Header);

    _this = _super.call(this); // use an object to store all relevant elements to the components for convenience

    _this.elements = {}; // Create a shadow root

    _this.attachShadow({
      mode: "open"
    }); // sets and returns 'this.shadowRoot'
    // Create an example element that will serve as our "root" element here


    var wrapper = document.createElement("nav"); // set class as an example, this can be later used for css!

    wrapper.setAttribute("class", "pomo-header");
    var logo = document.createElement("img");
    logo.src = "./assets/svgImages/logo.svg";
    logo.setAttribute("class", "pomo-header logo");
    var homeLink = document.createElement("a");
    homeLink.href = "index.html";
    homeLink.id = "home-btn";
    homeLink.appendChild(logo);
    wrapper.appendChild(homeLink);
    /** For following links in an eventlistener
     *  window.location.href = "http://www.w3schools.com";
     *  or window.location.assign(url);
     *  or window.location.replace if we don't want to add to history
     */

    wrapper.innerHTML += "<a id=\"hist-btn\" href=\"history.html\"><pomo-button type=\"nav\" id=\"hist\">History</pomo-button></a>";
    wrapper.innerHTML += "<pomo-button type=\"nav\" id=\"help\">Help</pomo-button>";
    wrapper.innerHTML += "<pomo-modal id=\"modal-help\">  \n            <button id=\"modal-close\" class=\"close-btn\">x</button>\n            <p class=\"title\">What's a Pomo Timer?</p>\n            <p>".concat(HELP_TEXT, "</p>\n            <a href=\"https://en.wikipedia.org/wiki/Pomodoro_Technique\">Wikipedia</a>\n        </pomo-modal>"); // store it for easy access

    _this.elements.wrapper = wrapper; // Add Styles

    var linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet"); // make sure to link the correct stylesheet with the correct stylings

    linkElem.setAttribute("href", "./assets/styles/header.css");
    _this.elements.linkElem = linkElem; // attach the created elements to the shadow DOM

    _this.shadowRoot.append(linkElem, wrapper);

    var modal = wrapper.childNodes[3];
    modal.elements.wrapper.style.display = "none";
    var helpBtn = wrapper.childNodes[2];
    var closeBtn = modal.shadowRoot.getElementById("modal-close");

    helpBtn.onclick = function () {
      modal.displayModal();
    };

    closeBtn.onclick = function () {
      modal.hideModal();
    };

    var checkPomoSessionModeBeforeLeaving = function checkPomoSessionModeBeforeLeaving(e) {
      // prevent moving to new page if current pomo session is still active
      var id = (0,_database_session__WEBPACK_IMPORTED_MODULE_0__.getLatestSessionID)();

      if (id !== null) {
        var pomoSession = (0,_database_session__WEBPACK_IMPORTED_MODULE_0__.getPomoSession)(id);

        if (pomoSession.mode === _database_session__WEBPACK_IMPORTED_MODULE_0__.POMO_SESSION_MODES.ACTIVE || pomoSession.mode === _database_session__WEBPACK_IMPORTED_MODULE_0__.POMO_SESSION_MODES.LONG_BREAK || pomoSession.mode === _database_session__WEBPACK_IMPORTED_MODULE_0__.POMO_SESSION_MODES.BREAK) {
          if (!confirm("Are you sure want to leave? This will automatically complete your session")) {
            e.preventDefault();
          } else {
            // if they do leave, make sure to update the session
            console.log("CHANGE");
            pomoSession.mode = _database_session__WEBPACK_IMPORTED_MODULE_0__.POMO_SESSION_MODES.COMPLETE;
            (0,_database_session__WEBPACK_IMPORTED_MODULE_0__.storePomoSession)(pomoSession);
            console.log((0,_database_session__WEBPACK_IMPORTED_MODULE_0__.getPomoSession)(pomoSession.id));
          }
        }
      }
    };

    _this.shadowRoot.getElementById("hist-btn").onclick = checkPomoSessionModeBeforeLeaving;
    _this.shadowRoot.getElementById("home-btn").onclick = checkPomoSessionModeBeforeLeaving;
    return _this;
  }

  return Header;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define("pomo-header", Header);

/***/ }),

/***/ "./source/assets/scripts/components/input/input.js":
/*!*********************************************************!*\
  !*** ./source/assets/scripts/components/input/input.js ***!
  \*********************************************************/
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

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
var InputField = /*#__PURE__*/function (_HTMLElement) {
  _inherits(InputField, _HTMLElement);

  var _super = _createSuper(InputField);

  /** Constructor for pomo-input component creates a contentEditable div with
   * a default max character limit of 50
   * @constructor
   */
  function InputField() {
    var _this;

    _classCallCheck(this, InputField);

    _this = _super.call(this);
    _this.userTyped = ""; // use an object to store all relevant elements to the components for convenience

    _this.elements = {}; // Create a shadow root

    _this.attachShadow({
      mode: "open"
    }); // sets and returns 'this.shadowRoot'
    // Create an example element that will serve as our "root" element here


    var wrapper = document.createElement("div"); // set class as an example, this can be later used for css!

    wrapper.setAttribute("class", "pomo-input");
    wrapper.placeholder = "Default Text";
    wrapper.contentEditable = true;
    wrapper.max = 50; //by default the max character count is 50
    // store it for future reference

    _this.elements.wrapper = wrapper; // Add Styles

    var linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet"); // make sure to link the correct stylesheet with the correct stylings

    linkElem.setAttribute("href", "./assets/styles/input-field.css");
    _this.elements.linkElem = linkElem; // attach the created elements to the shadow DOM

    _this.shadowRoot.append(linkElem, wrapper); //add default style


    _this.elements.wrapper.setAttribute("class", _this.elements.wrapper.getAttribute("class") + " placeholder");
    /**
     * Anonymous function to replace placeholder text with empty string when user clicks on component
     * @function
     */


    wrapper.addEventListener("focus", function () {
      //if focused and current text is the placeholder text replace it with empty string
      if (!this.userTyped) {
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
      if (!this.userTyped) {
        wrapper.setAttribute("class", "pomo-input placeholder");
        wrapper.textContent = wrapper.placeholder;
      }
    });
    return _this;
  }
  /** 
   * Checks input field if it's exceeded the maximum character limit on an event
   * @function
   * @param {Event} e Checks on keydown,paste, and input events
   * @returns {Boolean} false If the max character limit has been reached
  */


  _createClass(InputField, [{
    key: "limitCharCount",
    value: function limitCharCount(e) {
      this.userTyped = this.textContent; //if the user hasn't highlighted any text and we are at max length

      if (window.getSelection().toString().length == 0 && this.textContent.length >= this.max) {
        this.setAttribute("class", "pomo-input max");
        e.preventDefault();
        return false;
      } else {
        this.setAttribute("class", "pomo-input");
        return true;
      }
    }
    /** 
     * Stop the user from inputting anything but numbers
     * @function
     * @param {Event} event Checks on keydown,paste, and input events
    */

  }, {
    key: "numericInputOnly",
    value: function numericInputOnly(event) {
      this.userTyped = this.textContent; //if the user hasn't highlighted any text and we are at max length

      if (window.getSelection().toString().length == 0 && this.textContent.length >= this.max) {
        this.setAttribute("class", "pomo-input max");
        event.preventDefault();
        return false;
      } else this.setAttribute("class", "pomo-input"); //different events store the text in different ways so we need these ifs


      if (event.type == "keypress" && isNaN(event.key)) {
        this.classList.add("invalid");
        event.preventDefault();
      } else if (event.type == "input" && isNaN(event.data)) {
        this.setAttribute("class", "pomo-input invalid");
        event.preventDefault();
      } else if (event.type == "paste" && isNaN(event.clipboardData.getData("Text"))) {
        this.setAttribute("class", "pomo-input invalid");
        event.preventDefault();
      }
    }
  }, {
    key: "value",
    get: function get() {
      return this.userTyped;
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      var maxChar = this.getAttribute("max"); //set attribute-specified max char

      if (maxChar != null) this.elements.wrapper.max = Number(maxChar);
      this.elements.wrapper.textContent = this.textContent;

      if (this.getAttribute("required")) {
        this.required = true;
        this.elements.wrapper.textContent += "*";
      }

      if (this.getAttribute("type") == "number") {
        this.elements.wrapper.addEventListener("keypress", this.numericInputOnly, false);
        this.elements.wrapper.addEventListener("paste", this.numericInputOnly, false);
        this.elements.wrapper.addEventListener("input", this.numericInputOnly, false); //this is mainly for changing the backspace/del key
      } else {
        //listen for max characters on these events
        this.elements.wrapper.addEventListener("keypress", this.limitCharCount, false);
        this.elements.wrapper.addEventListener("paste", this.limitCharCount, false);
        this.elements.wrapper.addEventListener("input", this.limitCharCount, false); //this is mainly for changing the backspace/del key
      }

      this.elements.wrapper.placeholder = this.elements.wrapper.textContent;
    }
  }]);

  return InputField;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define("pomo-input", InputField);

/***/ }),

/***/ "./source/assets/scripts/components/modal-input/modal-input.js":
/*!*********************************************************************!*\
  !*** ./source/assets/scripts/components/modal-input/modal-input.js ***!
  \*********************************************************************/
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * ModalInput class loads functionality for the close button and
 * save button in the input modal in timer.html.
 * @class
 * @author Ethan Huynh
 */
var ModalInput = /*#__PURE__*/function (_HTMLElement) {
  _inherits(ModalInput, _HTMLElement);

  var _super = _createSuper(ModalInput);

  function ModalInput() {
    var _this;

    _classCallCheck(this, ModalInput);

    _this = _super.call(this);
    var taskModal = document.getElementById("addTaskModal");
    var closeBtn = taskModal.shadowRoot.getElementById("modal-close");

    closeBtn.onclick = function () {
      taskModal.hideModal();
      resetInputs();
    };

    taskModal.elements.saveBtn = taskModal.shadowRoot.getElementById("save-btn");

    taskModal.elements.saveBtn.onclick = function () {
      //if there are values inputted into the fields
      if (checkValues()) {
        taskModal.hideModal();
        taskModal.elements.values = getValues();
      }
    }.bind(taskModal);
    /**
     * Checks if the user has inputted something for task name and pomos required
     * @returns {Boolean} true if required input fields have input, false otherwise
     */


    function checkValues() {
      var goodInput = true;
      var taskName = taskModal.shadowRoot.getElementById("task-name").elements.wrapper;
      var pomosRequired = taskModal.shadowRoot.getElementById("pomos-required").elements.wrapper;

      if (taskName.userTyped == undefined) {
        taskName.setAttribute("class", "pomo-input invalid");
        goodInput = false;
      }

      if (pomosRequired.userTyped == undefined) {
        pomosRequired.setAttribute("class", "pomo-input invalid");
        goodInput = false;
      }

      return goodInput;
    }
    /**
     * Gets all user input and resets the input fields
     * @returns {Dictionary} {taskName: input, pomosRequired: input, description: input}
     */


    function getValues() {
      var taskName = taskModal.shadowRoot.getElementById("task-name").elements.wrapper;
      var pomosRequired = taskModal.shadowRoot.getElementById("pomos-required").elements.wrapper;
      var description = taskModal.shadowRoot.getElementById("description").elements.wrapper;
      var returnVal = {
        taskName: taskName.userTyped,
        pomosRequired: pomosRequired.userTyped,
        description: ""
      };
      if (description.userTyped != undefined) returnVal["description"] = description.userTyped;
      return returnVal;
    }
    /**
     * Clears inputs and resets style
     */


    function resetInputs() {
      var taskName = taskModal.shadowRoot.getElementById("task-name").elements.wrapper;
      var pomosRequired = taskModal.shadowRoot.getElementById("pomos-required").elements.wrapper;
      var description = taskModal.shadowRoot.getElementById("description").elements.wrapper;
      taskName.innerText = taskName.placeholder;
      taskName.userTyped = undefined;
      taskName.setAttribute("class", "pomo-input placeholder");
      pomosRequired.innerText = pomosRequired.placeholder;
      pomosRequired.userTyped = undefined;
      pomosRequired.setAttribute("class", "pomo-input placeholder");
      description.innerText = description.placeholder;
      description.userTyped = undefined;
      description.setAttribute("class", "pomo-input placeholder");
      taskModal.elements.values = undefined;
    }

    return _this;
  }

  return ModalInput;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define("modal-input", ModalInput);

/***/ }),

/***/ "./source/assets/scripts/components/modal/modal.js":
/*!*********************************************************!*\
  !*** ./source/assets/scripts/components/modal/modal.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ModalComponent)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ModalComponent = /*#__PURE__*/function (_HTMLElement) {
  _inherits(ModalComponent, _HTMLElement);

  var _super = _createSuper(ModalComponent);

  function ModalComponent() {
    var _this;

    _classCallCheck(this, ModalComponent);

    _this = _super.call(this); // use an object to store all relevant elements to the components for convenience

    _this.elements = {}; // Create a shadow root

    _this.attachShadow({
      mode: "open"
    }); // sets and returns 'this.shadowRoot'
    // Create an example element that will serve as our "root" element here


    var wrapper = document.createElement("div");
    _this.elements.wrapper = wrapper;

    _this.elements.wrapper.setAttribute("class", "modal-wrapper");

    _this.elements.wrapper.innerHTML = "<div class=\"shadow\"></div><div class=\"modal\"></div>"; // Add Styles

    var linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet"); // make sure to link the correct stylesheet with the correct stylings

    linkElem.setAttribute("href", "./assets/styles/modal.css");
    _this.elements.linkElem = linkElem;
    _this.elements.wrapper.style.display = "none";

    _this.shadowRoot.appendChild(linkElem);

    return _this;
  }

  _createClass(ModalComponent, [{
    key: "displayModal",
    value: function displayModal() {
      var _this2 = this;

      this.elements.wrapper.style.display = "block";
      setTimeout(function () {
        _this2.elements.wrapper.style.opacity = 1;
      }, 20);
    }
  }, {
    key: "hideModal",
    value: function hideModal() {
      var _this3 = this;

      this.elements.wrapper.style.opacity = 0;
      setTimeout(function () {
        _this3.elements.wrapper.style.display = "none";
      }, 400);
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      this.type = this.getAttribute("type");
      var child1 = this.childNodes;
      var htmlString = "";
      child1.forEach(function (element) {
        if (element.nodeType != Node.TEXT_NODE) htmlString += element.outerHTML;
      }); //copy html elements to shadow dom

      this.elements.wrapper.innerHTML = "<div class=\"shadow\"></div><div class=\"modal\">".concat(htmlString, "</div>"); //remove extra html elements left

      var n = child1.length;

      for (var i = 0; i < n; i++) {
        this.removeChild(child1[0]);
      }

      this.shadowRoot.appendChild(this.elements.wrapper);
    }
  }]);

  return ModalComponent;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));


customElements.define("pomo-modal", ModalComponent);

/***/ }),

/***/ "./source/assets/scripts/components/progress-circle/progress-circle.js":
/*!*****************************************************************************!*\
  !*** ./source/assets/scripts/components/progress-circle/progress-circle.js ***!
  \*****************************************************************************/
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @class ProgressCircleComponent
 */
var ProgressCircleComponent = /*#__PURE__*/function (_HTMLElement) {
  _inherits(ProgressCircleComponent, _HTMLElement);

  var _super = _createSuper(ProgressCircleComponent);

  function ProgressCircleComponent() {
    var _this;

    _classCallCheck(this, ProgressCircleComponent);

    _this = _super.call(this); // use an object to store all relevant elements to the components for convenience

    _this.elements = {}; // Create a shadow root

    _this.attachShadow({
      mode: "open"
    }); // sets and returns 'this.shadowRoot'
    // Create an example element that will serve as our "root" element here


    var wrapper = document.createElement("div"); // set class as an example, this can be later used for css!

    wrapper.setAttribute("id", "wrapper"); // store it for future reference

    _this.elements.wrapper = wrapper;
    _this.displayText = "0%";
    wrapper.innerHTML = "\n        <div id=\"progress-circle\" class=\"progress-circle\">\n            <span id=\"displayText\">\n                0%\n            </span>\n            <div class=\"left-half-clipper\">\n                <div class=\"first50-bar\"></div>\n                <div class=\"value-bar\" id=\"progress-bar\"></div>\n            </div>\n        </div>\n        ";
    wrapper.innerHTML = "\n        <span id=\"displayText\">0%</span>\n        <svg id=\"circular-loader\"viewBox=\"25 25 50 50\" >\n            <circle id=\"loader-path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" />\n            <circle id=\"loader-path-bg\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" />\n        </svg>\n        "; // Add Styles

    var linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet"); // make sure to link the correct stylesheet with the correct stylings

    linkElem.setAttribute("href", "./assets/styles/progress-circle.css");
    _this.elements.linkElem = linkElem; // attach the created elements to the shadow DOM

    _this.shadowRoot.append(linkElem, wrapper);

    return _this;
  }
  /**
   * Set size of progress circle
   * @param {string} fontSize - example: `1rem`
   */


  _createClass(ProgressCircleComponent, [{
    key: "setSize",
    value: function setSize(fontSize) {
      var element = this.shadowRoot.getElementById("wrapper");
      element.style.fontSize = fontSize;
    }
    /**
     * Set the display text of the progress circle
     * @param {*} text 
     */

  }, {
    key: "setDisplayText",
    value: function setDisplayText(text) {
      this.displayText = text;
      var element = this.shadowRoot.getElementById("displayText");
      element.textContent = text;
    }
    /**
     * Set the percentage of the progress bar 
     * 
     * @param {number} percent - a percent value ranging from 0 to 1
     */

  }, {
    key: "setPercentage",
    value: function setPercentage(percent) {
      var element = this.shadowRoot.getElementById("loader-path");
      element.style.strokeDashoffset = -(1 - percent) * 127.5;
    }
  }]);

  return ProgressCircleComponent;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define("progress-circle", ProgressCircleComponent);

/***/ }),

/***/ "./source/assets/scripts/components/task/task.js":
/*!*******************************************************!*\
  !*** ./source/assets/scripts/components/task/task.js ***!
  \*******************************************************/
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @class Task
 * 
 * Contains information about a given Task
 * 
 */
var TaskComponent = /*#__PURE__*/function (_HTMLElement) {
  _inherits(TaskComponent, _HTMLElement);

  var _super = _createSuper(TaskComponent);

  function TaskComponent() {
    var _this;

    _classCallCheck(this, TaskComponent);

    _this = _super.call(this);
    _this.elements = {};

    _this.attachShadow({
      mode: "open"
    });

    var pomotask = _assertThisInitialized(_this);

    pomotask.isCurrentTask = true;
    pomotask.completed = false; // if we received stop signal from stop button of the pomo timer, it will trigger incomplete

    var wrapperDiv = document.createElement("div");
    var wrapper = document.createElement("li");
    wrapper.setAttribute("class", "task");
    wrapperDiv.appendChild(wrapper); // A div wrapper for the title and description

    var wrapperText = document.createElement("div");
    wrapperText.setAttribute("class", "textwrapper");
    wrapper.appendChild(wrapperText);
    var title = document.createElement("p");
    title.setAttribute("class", "title");
    title.innerText = _this.textContent || "";
    _this.elements.title = title;
    wrapperText.appendChild(title);
    var description = document.createElement("p");
    description.setAttribute("class", "description");
    description.innerText = _this.getAttribute("description") || "";
    _this.elements.description = description;
    wrapperText.appendChild(description); // A div wrapper for the completion circle

    var wrapperCompletionCircle = document.createElement("div");
    wrapperCompletionCircle.setAttribute("class", "wrapperCircle");
    wrapper.appendChild(wrapperCompletionCircle); // The Green, Red or Yellow circle that describes the ratio of Pomos expected vs Pomos Used

    var pomoCircle = document.createElement("div");
    pomoCircle.setAttribute("class", "pomoCircle");
    _this.pomosUsed = parseInt(_this.getAttribute("pomosUsed"));
    pomoCircle.preq = _this.getAttribute("pomosRequired");
    pomoCircle.innerText = _this.getAttribute("pomosUsed") + "/" + _this.getAttribute("pomosRequired");
    _this.elements.pomoCircle = pomoCircle;
    wrapperCompletionCircle.appendChild(pomoCircle);
    wrapper.appendChild(wrapperCompletionCircle); // A div wrapper for the check mark

    var wrapperCheckMark = document.createElement("div");
    wrapperCheckMark.setAttribute("class", "wrapperCheckMark");
    wrapper.appendChild(wrapperCheckMark); // The Check mark that defines if a task is complete or not

    var checkMark = document.createElement("img");

    if (_this.completed == true) {
      checkMark.setAttribute("class", "completeCheckMark");
      checkMark.setAttribute("src", "./assets/svgImages/check_Complete.svg");
    } else {
      checkMark.setAttribute("class", "incompleteCheckMark");
      checkMark.setAttribute("src", "./assets/svgImages/check_Incomplete.svg");
    }

    checkMark.onclick = function () {
      checkMark.setAttribute("class", "completeCheckMark");
      checkMark.setAttribute("src", "./assets/svgImages/check_Complete.svg");
      pomotask.completed = true;
      pomotask.isCurrentTask = false;
      colorDecider(pomoCircle, pomotask);
    };

    wrapperCheckMark.appendChild(checkMark);
    _this.elements.checkMark = checkMark; // A div wrapper for the check mark
    // const wrapperDragAndDrop = document.createElement("div");
    // wrapperDragAndDrop.setAttribute("class", "wrapperDragAndDrop");
    // wrapper.appendChild(wrapperDragAndDrop);
    // The Drag and Drop SVG
    // const imgDragAndDrop = document.createElement("img");
    // imgDragAndDrop.setAttribute("class", "dragAndDrop");
    // imgDragAndDrop.setAttribute("src", "./assets/svgImages/drag-dots.svg");
    // wrapperDragAndDrop.appendChild(imgDragAndDrop);
    // this.elements.dragAndDrop = imgDragAndDrop;

    var wrapperDelete = document.createElement("div");
    wrapperDelete.setAttribute("class", "wrapperDelete");
    wrapper.appendChild(wrapperDelete);
    var deleteTaskBtn = document.createElement("img");
    deleteTaskBtn.setAttribute("class", "delete-task-btn");
    deleteTaskBtn.setAttribute("src", "./assets/svgImages/delete.svg");
    wrapperDelete.appendChild(deleteTaskBtn);
    _this.elements.deleteTaskBtn = deleteTaskBtn;
    _this.elements.wrapper = wrapper;
    var linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet"); // make sure to link the correct stylesheet with the correct stylings

    linkElem.setAttribute("href", "./assets/styles/task.css");
    _this.elements.linkElem = linkElem;

    _this.shadowRoot.append(wrapperDiv, linkElem);

    return _this;
  }

  _createClass(TaskComponent, [{
    key: "pomosused",
    set: function set(val) {
      console.log("HELLO");
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldValue, newValue) {
      console.log(name, oldValue, newValue);

      if (name === "pomosused") {
        console.log(newValue);
        this.elements.pomoCircle.innerText = newValue + "/" + this.getAttribute("pomosRequired");
      }
    }
  }, {
    key: "setFinishTaskCallback",
    value: function setFinishTaskCallback(cb) {
      var checkMark = this.elements.checkMark;
      var pomotask = this;

      checkMark.onclick = function () {
        checkMark.setAttribute("class", "completeCheckMark");
        checkMark.setAttribute("src", "./assets/svgImages/check_Complete.svg");
        pomotask.completed = true;
        pomotask.isCurrentTask = false;
        colorDecider(pomotask.elements.pomoCircle, pomotask);
        cb();
      };
    }
  }, {
    key: "setDeleteTaskCallback",
    value: function setDeleteTaskCallback(cb) {
      this.elements.deleteTaskBtn.onclick = cb;
    }
  }, {
    key: "incrementPomosUsed",
    value: function incrementPomosUsed() {
      this.pomosUsed += 1;
      this.elements.pomoCircle.innerText = this.pomosUsed + "/" + this.getAttribute("pomosRequired");
    }
  }, {
    key: "hide",
    value: function hide() {
      this.elements.wrapper.style.opacity = 0;
    }
  }]);

  return TaskComponent;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

function colorDecider(pomoCircle, pomotask) {
  //console.log(pomoCircle.preq);
  if (pomotask.isCurrentTask === true) {
    pomoCircle.setAttribute("class", "currentTask");
  } else if (pomotask.completed === true) {
    if (pomotask.pomosUsed <= pomoCircle.preq) {
      pomoCircle.setAttribute("class", "goodTimingTask");
    } else {
      pomoCircle.setAttribute("class", "badTimingTask");
    }
  } else if (!pomotask.completed) {
    pomoCircle.setAttribute("class", "incompleteTask");
  }
}

customElements.define("pomo-task", TaskComponent);

/***/ }),

/***/ "./source/assets/scripts/database/index.js":
/*!*************************************************!*\
  !*** ./source/assets/scripts/database/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeDatabase": () => (/* binding */ initializeDatabase),
/* harmony export */   "resetDatabase": () => (/* binding */ resetDatabase),
/* harmony export */   "storeObject": () => (/* binding */ storeObject),
/* harmony export */   "getObject": () => (/* binding */ getObject)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./source/assets/scripts/database/task.js");
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session */ "./source/assets/scripts/database/session.js");


function initializeDatabase() {
  // check if we need to initialize
  var needToInitialize = false;

  if (getObject(_task__WEBPACK_IMPORTED_MODULE_0__.POMO_TASK_MAP) === null) {
    needToInitialize = true;
  }

  if (getObject(_task__WEBPACK_IMPORTED_MODULE_0__.POMO_TASK_INDEX) === null) {
    needToInitialize = true;
  }

  if (!localStorage.getItem(_session__WEBPACK_IMPORTED_MODULE_1__.POMO_SESSION_ID) === null) {
    needToInitialize = true;
  }

  if (!localStorage.getItem(_session__WEBPACK_IMPORTED_MODULE_1__.LATEST_POMO_SESSION_STATUS) === null) {
    needToInitialize = true;
  }

  if (getObject(_session__WEBPACK_IMPORTED_MODULE_1__.POMO_SESSION_MAP) === null) {
    needToInitialize = true;
  } // then initialize


  if (needToInitialize) {
    storeObject(_task__WEBPACK_IMPORTED_MODULE_0__.POMO_TASK_MAP, {});
    storeObject(_task__WEBPACK_IMPORTED_MODULE_0__.POMO_TASK_INDEX, 0);
    storeObject(_session__WEBPACK_IMPORTED_MODULE_1__.LATEST_POMO_SESSION_STATUS, "complete");
    storeObject(_session__WEBPACK_IMPORTED_MODULE_1__.POMO_SESSION_ID, 0);
    storeObject(_session__WEBPACK_IMPORTED_MODULE_1__.POMO_SESSION_MAP, {});
  }
}
function resetDatabase() {
  delete localStorage[_task__WEBPACK_IMPORTED_MODULE_0__.POMO_TASK_MAP];
  delete localStorage[_task__WEBPACK_IMPORTED_MODULE_0__.POMO_TASK_INDEX];
  delete localStorage[_session__WEBPACK_IMPORTED_MODULE_1__.LATEST_POMO_SESSION_STATUS];
  delete localStorage[_session__WEBPACK_IMPORTED_MODULE_1__.POMO_SESSION_ID];
  delete localStorage[_session__WEBPACK_IMPORTED_MODULE_1__.POMO_SESSION_MAP];
}
function storeObject(key, object) {
  localStorage.setItem(key, JSON.stringify(object));
}
function getObject(key) {
  return JSON.parse(localStorage.getItem(key));
}

/***/ }),

/***/ "./source/assets/scripts/database/session.js":
/*!***************************************************!*\
  !*** ./source/assets/scripts/database/session.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "POMO_SESSION_ID": () => (/* binding */ POMO_SESSION_ID),
/* harmony export */   "LATEST_POMO_SESSION_STATUS": () => (/* binding */ LATEST_POMO_SESSION_STATUS),
/* harmony export */   "POMO_SESSION_MAP": () => (/* binding */ POMO_SESSION_MAP),
/* harmony export */   "POMO_SESSION_MODES": () => (/* binding */ POMO_SESSION_MODES),
/* harmony export */   "PomoSession": () => (/* binding */ PomoSession),
/* harmony export */   "getPomoSession": () => (/* binding */ getPomoSession),
/* harmony export */   "storePomoSession": () => (/* binding */ storePomoSession),
/* harmony export */   "getNewSessionID": () => (/* binding */ getNewSessionID),
/* harmony export */   "setCurrentSessionStatus": () => (/* binding */ setCurrentSessionStatus),
/* harmony export */   "getLatestSessionID": () => (/* binding */ getLatestSessionID),
/* harmony export */   "thereIsUnfinishedSession": () => (/* binding */ thereIsUnfinishedSession),
/* harmony export */   "continueActiveSession": () => (/* binding */ continueActiveSession)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./source/assets/scripts/database/index.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./source/assets/scripts/database/task.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * This file is related to finding pomo sessions
 */


var POMO_SESSION_ID = "pomo_session_id";
var LATEST_POMO_SESSION_STATUS = "latest_pomo_session_status";
var POMO_SESSION_MAP = "pomo_session_map";
/** the different pomo session modes as constants */

var POMO_SESSION_MODES = {
  /** when the user is in the interface of creating a new timer and has not started their new session yet */
  INACTIVE: "inactive",

  /** when running the break timer */
  BREAK: "break",

  /** when running the longer break timer */
  LONG_BREAK: "longbreak",

  /** when running the active pomo work time */
  ACTIVE: "active",

  /** when the user marks this pomo session as complete, regardless of whether tasks are completed or not */
  COMPLETE: "complete"
};
var PomoSession = /*#__PURE__*/function () {
  /**
   * Create a new Pomo Session object
   * @param {number} id - id of this session
   */
  function PomoSession(id) {
    _classCallCheck(this, PomoSession);

    this.id = id;
    /** @type {Task[]} - a list of all tasks associated with this session */

    this.allTasks = [];
    /** @type {string} - the current mode of the pomo session */

    this.mode = POMO_SESSION_MODES.INACTIVE;
    /** @type {Number} - the current time of the pomo session */

    this.time = 0;
    /** @type {Number} - number of pomos elapsed succesfully for this pomo session */

    this.pomosElapsed = 0;
    this.startDate = new Date();
  }
  /**
   * 
   * @returns {Task | null } - the current task for this pomo session or null if there are no tasks left
   */


  _createClass(PomoSession, [{
    key: "currentTask",
    value: function currentTask() {
      var allInProgressTasks = this.allTasks.filter(function (task) {
        return !task.completed;
      });

      if (allInProgressTasks.length > 0) {
        return allInProgressTasks[0];
      }

      return null;
    }
    /**
     * Adds a new task
     * @param {Task} task 
     */

  }, {
    key: "addTask",
    value: function addTask(task) {
      (0,_task__WEBPACK_IMPORTED_MODULE_1__.storeTask)(task);
      this.allTasks.push(task);
    }
    /**
     * Delete a task
     * @param {Task} task 
     */

  }, {
    key: "deleteTask",
    value: function deleteTask(task) {
      (0,_task__WEBPACK_IMPORTED_MODULE_1__.deleteTaskByTaskID)(task.id);

      for (var i = 0; i < this.allTasks.length; i++) {
        var storedTask = this.allTasks[i];

        if (task.id === storedTask.id) {
          this.allTasks.splice(i, 1);
          return;
        }
      }
    }
    /**
     * Completes the given task associated to the id
     * @param {number} id 
     * @returns {boolean} true if completed, false if no task found
     */

  }, {
    key: "completeTask",
    value: function completeTask(id) {
      var _iterator = _createForOfIteratorHelper(this.allTasks),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var task = _step.value;

          if (task.id === id) {
            task.completed = true;
            return true;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return false;
    }
    /**
     * Returns the next incomplete task in the order or null if all completed
     * @returns {Task | null}
     */

  }, {
    key: "getNextTask",
    value: function getNextTask() {
      var _iterator2 = _createForOfIteratorHelper(this.allTasks),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var task = _step2.value;

          if (task.completed === false) {
            return task;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return null;
    }
    /**
     * Increment the pomos used for a task and increment pomosElapsed
     * @param {number} id 
     */

  }, {
    key: "incrementTaskPomosUsed",
    value: function incrementTaskPomosUsed(id) {
      var _iterator3 = _createForOfIteratorHelper(this.allTasks),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var task = _step3.value;

          if (task.id === id) {
            task.pomosUsed += 1;
            this.pomosElapsed += 1;
            return;
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
    /**
     * 
     * @returns true if session is in break mode right now, false otherwise
     */

  }, {
    key: "isBreak",
    value: function isBreak() {
      return this.mode === POMO_SESSION_MODES.LONG_BREAK || this.mode === POMO_SESSION_MODES.BREAK;
    }
    /**
     * TODO
     */

  }, {
    key: "reorderTasks",
    value: function reorderTasks() {}
  }, {
    key: "getPomosLeftInSession",
    value: function getPomosLeftInSession() {
      var left = 0;
      this.allTasks.forEach(function (task) {
        left += Math.max(task.pomosRequired - task.pomosUsed, 0);
      });
      return left;
    }
  }, {
    key: "parseSessionFromObj",
    value: function parseSessionFromObj(session_obj) {
      this.id = session_obj.id;
      this.mode = session_obj.mode;
      this.time = session_obj.time;
      this.pomosElapsed = session_obj.pomosElapsed;
      this.startDate = new Date(session_obj.startDate);
      this.allTasks = session_obj.allTasks.map(function (taskObj) {
        var t = new _task__WEBPACK_IMPORTED_MODULE_1__.Task();
        t = t.parseTaskFromObj(taskObj);
        return t;
      });
      return this;
    }
  }, {
    key: "serializeIntoObj",
    value: function serializeIntoObj() {
      return {
        id: this.id,
        allTasks: this.allTasks.map(function (task) {
          return task.serializeIntoObj();
        }),
        mode: this.mode,
        time: this.time,
        pomosElapsed: this.pomosElapsed,
        startDate: this.startDate.getTime()
      };
    }
  }]);

  return PomoSession;
}();
/**
 * Get a pomo session object
 * @param {number} id 
 * @returns {PomoSession | null} the session for this id or null if there is no session associated with this id
 */

function getPomoSession(id) {
  var allSessions = (0,_index__WEBPACK_IMPORTED_MODULE_0__.getObject)(POMO_SESSION_MAP);
  var p = new PomoSession();
  if (!allSessions[id]) return null;
  return p.parseSessionFromObj(allSessions[id]);
}
function storePomoSession(session) {
  var allSessions = (0,_index__WEBPACK_IMPORTED_MODULE_0__.getObject)(POMO_SESSION_MAP);
  allSessions[session.id] = session.serializeIntoObj();
  (0,_index__WEBPACK_IMPORTED_MODULE_0__.storeObject)(POMO_SESSION_MAP, allSessions);
}
function getNewSessionID() {
  var prevID = parseInt(localStorage.getItem(POMO_SESSION_ID));
  localStorage.setItem(POMO_SESSION_ID, prevID + 1);
  return prevID;
}
/**
 * Set the current session's status
 * @param {string} status - can be "complete" or "in-progress"
 */

function setCurrentSessionStatus(status) {
  localStorage.setItem(LATEST_POMO_SESSION_STATUS, status);
}
/**
 * Will return the session ID of the last session if it was not ended. Otherwise if the last session does not exist 
 * or was ended already, this function returns null
 * 
 * @returns {number | null}
 */

function getLatestSessionID() {
  var status = localStorage.getItem(LATEST_POMO_SESSION_STATUS);

  if (status === "complete") {
    return null;
  } else {
    return parseInt(localStorage.getItem(POMO_SESSION_ID)) - 1;
  }
}
/**
 * @returns {boolean} - true if there is a unfinished session that was not completed or quitted. false otherwise
 */

function thereIsUnfinishedSession() {
  var sessionID = getLatestSessionID();
  if (sessionID === null) return false;
  var currentPomoSession = getPomoSession(sessionID);

  if (currentPomoSession !== null && currentPomoSession.mode !== POMO_SESSION_MODES.COMPLETE && currentPomoSession.mode !== POMO_SESSION_MODES.INACTIVE) {
    return true;
  }

  return false;
}
function continueActiveSession() {
  if (thereIsUnfinishedSession()) {
    window.location = "/timer.html?loadSaved=true";
  }
}

/***/ }),

/***/ "./source/assets/scripts/database/task.js":
/*!************************************************!*\
  !*** ./source/assets/scripts/database/task.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task),
/* harmony export */   "POMO_TASK_MAP": () => (/* binding */ POMO_TASK_MAP),
/* harmony export */   "POMO_TASK_INDEX": () => (/* binding */ POMO_TASK_INDEX),
/* harmony export */   "storeTask": () => (/* binding */ storeTask),
/* harmony export */   "getTask": () => (/* binding */ getTask),
/* harmony export */   "getAllTasks": () => (/* binding */ getAllTasks),
/* harmony export */   "deleteTaskByTaskID": () => (/* binding */ deleteTaskByTaskID),
/* harmony export */   "areThereUnfinishedTasksFromLastSession": () => (/* binding */ areThereUnfinishedTasksFromLastSession)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./source/assets/scripts/database/index.js");
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session */ "./source/assets/scripts/database/session.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Task = /*#__PURE__*/function () {
  /**
   * 
   * @param {number} sessionID 
   * @param {string} title 
   * @param {string} description 
   * @param {number} pomosRequired 
   */
  function Task(sessionID, title, description, pomosRequired) {
    _classCallCheck(this, Task);

    this.sessionID = sessionID;
    this.id = -1;
    this.title = title;
    this.description = description;
    this.pomosRequired = pomosRequired;
    this.completed = false;
    this.pomosUsed = 0;
  }

  _createClass(Task, [{
    key: "parseTaskFromObj",
    value: function parseTaskFromObj(task_obj) {
      var task = new Task(task_obj.sessionID, task_obj.title, task_obj.description, task_obj.pomosRequired);
      task.completed = task_obj.completed;
      task.id = task_obj.id;
      task.pomosUsed = task_obj.pomosUsed;
      return task;
    }
  }, {
    key: "serializeIntoObj",
    value: function serializeIntoObj() {
      return {
        title: this.title,
        description: this.description,
        pomosRequired: this.pomosRequired,
        completed: this.completed,
        pomosUsed: this.pomosUsed,
        id: this.id,
        sessionID: this.sessionID
      };
    }
  }]);

  return Task;
}();
var POMO_TASK_MAP = "pomo_task_map";
var POMO_TASK_INDEX = "pomo_task_index";
/**
 * Will store a new or updated task into local storage
 * 
 * Has a side effect of adding the id of the new task if it wasnt stored in storage before
 * 
 * @param {Task} task
 * @returns {number} - the id of the task
 */

function storeTask(task) {
  var task_map = (0,___WEBPACK_IMPORTED_MODULE_0__.getObject)(POMO_TASK_MAP);

  if (!task_map[task.id]) {
    // if task map does not have this task, create a new index
    var id = parseInt((0,___WEBPACK_IMPORTED_MODULE_0__.getObject)(POMO_TASK_INDEX));
    task.id = id; // increment global id

    (0,___WEBPACK_IMPORTED_MODULE_0__.storeObject)(POMO_TASK_INDEX, id + 1);
  }

  var obj = task.serializeIntoObj();
  task_map[task.id] = obj;
  (0,___WEBPACK_IMPORTED_MODULE_0__.storeObject)(POMO_TASK_MAP, task_map);
  return task.id;
}
/**
 * Get the task associated with this id
 * @param {number} id 
 * @returns {Task}
 */

function getTask(id) {
  var task_map = (0,___WEBPACK_IMPORTED_MODULE_0__.getObject)(POMO_TASK_MAP);
  var task_obj = task_map[id];
  var t = new Task();
  t = t.parseTaskFromObj(task_obj);
  return t;
}
/**
 * Get all tasks
 * 
 * @returns {Map<number, Task>} - a map from task id to task
 */

function getAllTasks() {
  var task_map = (0,___WEBPACK_IMPORTED_MODULE_0__.getObject)(POMO_TASK_MAP);
  var parsed_task_map = {};

  for (var id in task_map) {
    var task_obj = task_map[id];
    var t = new Task();
    t = t.parseTaskFromObj(task_obj);
    parsed_task_map[id] = t;
  }

  return parsed_task_map;
}
/**
 * Delete a specific task from database by the unique task ID
 * 
 * @param {number} id 
 */

function deleteTaskByTaskID(id) {
  var task_map = (0,___WEBPACK_IMPORTED_MODULE_0__.getObject)(POMO_TASK_MAP);
  delete task_map[id];
  (0,___WEBPACK_IMPORTED_MODULE_0__.storeObject)(POMO_TASK_MAP, task_map);
}
/**
 * Checks if there are any unfinished tasks from the previous session
 * @returns {boolean} - true if unifinished tasks exist, false otherwise
 */

function areThereUnfinishedTasksFromLastSession() {
  var oldSessionID = (0,_session__WEBPACK_IMPORTED_MODULE_1__.getLatestSessionID)();
  if (oldSessionID === null) return false;
  var session = (0,_session__WEBPACK_IMPORTED_MODULE_1__.getPomoSession)(oldSessionID);
  if (session === null) return false;

  if (session.currentTask() === null) {
    return false;
  }

  return true;
}

/***/ }),

/***/ "./source/assets/scripts/utils/theme.js":
/*!**********************************************!*\
  !*** ./source/assets/scripts/utils/theme.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectAndSetTheme": () => (/* binding */ selectAndSetTheme),
/* harmony export */   "THEME_MODES": () => (/* binding */ THEME_MODES),
/* harmony export */   "getThemeMode": () => (/* binding */ getThemeMode)
/* harmony export */ });
/**
 * Will randomly pick a theme and unique background depending on what day it is and what time it is and set it on the page
 */
function selectAndSetTheme() {
  var today = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
  var id = 0;
  var numBGs = 6;
  var d = today.getDay();
  var seed = localStorage.getItem("bg-seed");

  if (seed === null || seed[0] != d) {
    seed = d + "-" + Math.floor(Math.random() * numBGs);
    localStorage.setItem("bg-seed", seed);
  }

  var timePeriod = getThemeMode(today);
  id = parseInt(seed[2]);
  var element = document.getElementById("backdrop");
  element.style.backgroundImage = "url(\"../assets/images/backgrounds/".concat(timePeriod, "/bg").concat(id, ".jpg\")");
}
;
var THEME_MODES = {
  DAY: "day",
  NIGHT: "night"
};
function getThemeMode() {
  var today = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
  var timePeriod = THEME_MODES.DAY;

  if (today.getHours() < 4) {
    timePeriod = THEME_MODES.NIGHT;
  } else if (today.getHours() < 18) {
    timePeriod = THEME_MODES.DAY;
  } else if (today.getHours() < 24) {
    timePeriod = THEME_MODES.NIGHT;
  }

  return timePeriod;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***************************************************!*\
  !*** ./source/assets/scripts/components/index.js ***!
  \***************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button/button */ "./source/assets/scripts/components/button/button.js");
/* harmony import */ var _modal_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal/modal */ "./source/assets/scripts/components/modal/modal.js");
/* harmony import */ var _modal_input_modal_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-input/modal-input */ "./source/assets/scripts/components/modal-input/modal-input.js");
/* harmony import */ var _modal_input_modal_input__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modal_input_modal_input__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _modal_input_modal_input__WEBPACK_IMPORTED_MODULE_2__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _modal_input_modal_input__WEBPACK_IMPORTED_MODULE_2__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header */ "./source/assets/scripts/components/header/header.js");
/* harmony import */ var _input_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input/input */ "./source/assets/scripts/components/input/input.js");
/* harmony import */ var _input_input__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_input_input__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _input_input__WEBPACK_IMPORTED_MODULE_4__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _input_input__WEBPACK_IMPORTED_MODULE_4__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _progress_circle_progress_circle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./progress-circle/progress-circle */ "./source/assets/scripts/components/progress-circle/progress-circle.js");
/* harmony import */ var _progress_circle_progress_circle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_progress_circle_progress_circle__WEBPACK_IMPORTED_MODULE_5__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _progress_circle_progress_circle__WEBPACK_IMPORTED_MODULE_5__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _progress_circle_progress_circle__WEBPACK_IMPORTED_MODULE_5__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _task_task__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task/task */ "./source/assets/scripts/components/task/task.js");
/* harmony import */ var _task_task__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_task_task__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _task_task__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _task_task__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);







})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jc2UxMTAtdzIxLWdyb3VwMjEvLi9zb3VyY2UvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmpzIiwid2VicGFjazovL2NzZTExMC13MjEtZ3JvdXAyMS8uL3NvdXJjZS9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vY3NlMTEwLXcyMS1ncm91cDIxLy4vc291cmNlL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vY3NlMTEwLXcyMS1ncm91cDIxLy4vc291cmNlL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvbW9kYWwtaW5wdXQvbW9kYWwtaW5wdXQuanMiLCJ3ZWJwYWNrOi8vY3NlMTEwLXcyMS1ncm91cDIxLy4vc291cmNlL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vY3NlMTEwLXcyMS1ncm91cDIxLy4vc291cmNlL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvcHJvZ3Jlc3MtY2lyY2xlL3Byb2dyZXNzLWNpcmNsZS5qcyIsIndlYnBhY2s6Ly9jc2UxMTAtdzIxLWdyb3VwMjEvLi9zb3VyY2UvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy90YXNrL3Rhc2suanMiLCJ3ZWJwYWNrOi8vY3NlMTEwLXcyMS1ncm91cDIxLy4vc291cmNlL2Fzc2V0cy9zY3JpcHRzL2RhdGFiYXNlL2luZGV4LmpzIiwid2VicGFjazovL2NzZTExMC13MjEtZ3JvdXAyMS8uL3NvdXJjZS9hc3NldHMvc2NyaXB0cy9kYXRhYmFzZS9zZXNzaW9uLmpzIiwid2VicGFjazovL2NzZTExMC13MjEtZ3JvdXAyMS8uL3NvdXJjZS9hc3NldHMvc2NyaXB0cy9kYXRhYmFzZS90YXNrLmpzIiwid2VicGFjazovL2NzZTExMC13MjEtZ3JvdXAyMS8uL3NvdXJjZS9hc3NldHMvc2NyaXB0cy91dGlscy90aGVtZS5qcyIsIndlYnBhY2s6Ly9jc2UxMTAtdzIxLWdyb3VwMjEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY3NlMTEwLXcyMS1ncm91cDIxL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2NzZTExMC13MjEtZ3JvdXAyMS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY3NlMTEwLXcyMS1ncm91cDIxL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY3NlMTEwLXcyMS1ncm91cDIxL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY3NlMTEwLXcyMS1ncm91cDIxLy4vc291cmNlL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvaW5kZXguanMiXSwibmFtZXMiOlsiQnV0dG9uIiwiZWxlbWVudHMiLCJhdHRhY2hTaGFkb3ciLCJtb2RlIiwiYnV0dG9uIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiaW5uZXJUZXh0IiwidGV4dENvbnRlbnQiLCJzdHlsZSIsImRpc3BsYXkiLCJsaW5rRWxlbSIsInNoYWRvd1Jvb3QiLCJhcHBlbmQiLCJ0eXBlIiwiZ2V0QXR0cmlidXRlIiwic2l6ZSIsInRoZW1lTW9kZSIsImdldFRoZW1lTW9kZSIsIlRIRU1FX01PREVTIiwiSFRNTEVsZW1lbnQiLCJjdXN0b21FbGVtZW50cyIsImRlZmluZSIsIkhFTFBfVEVYVCIsIkhlYWRlciIsIndyYXBwZXIiLCJsb2dvIiwic3JjIiwiaG9tZUxpbmsiLCJocmVmIiwiaWQiLCJhcHBlbmRDaGlsZCIsImlubmVySFRNTCIsIm1vZGFsIiwiY2hpbGROb2RlcyIsImhlbHBCdG4iLCJjbG9zZUJ0biIsImdldEVsZW1lbnRCeUlkIiwib25jbGljayIsImRpc3BsYXlNb2RhbCIsImhpZGVNb2RhbCIsImNoZWNrUG9tb1Nlc3Npb25Nb2RlQmVmb3JlTGVhdmluZyIsImUiLCJnZXRMYXRlc3RTZXNzaW9uSUQiLCJwb21vU2Vzc2lvbiIsImdldFBvbW9TZXNzaW9uIiwiUE9NT19TRVNTSU9OX01PREVTIiwiY29uZmlybSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInN0b3JlUG9tb1Nlc3Npb24iLCJJbnB1dEZpZWxkIiwidXNlclR5cGVkIiwicGxhY2Vob2xkZXIiLCJjb250ZW50RWRpdGFibGUiLCJtYXgiLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93IiwiZ2V0U2VsZWN0aW9uIiwidG9TdHJpbmciLCJsZW5ndGgiLCJldmVudCIsImlzTmFOIiwia2V5IiwiY2xhc3NMaXN0IiwiYWRkIiwiZGF0YSIsImNsaXBib2FyZERhdGEiLCJnZXREYXRhIiwibWF4Q2hhciIsIk51bWJlciIsInJlcXVpcmVkIiwibnVtZXJpY0lucHV0T25seSIsImxpbWl0Q2hhckNvdW50IiwiTW9kYWxJbnB1dCIsInRhc2tNb2RhbCIsInJlc2V0SW5wdXRzIiwic2F2ZUJ0biIsImNoZWNrVmFsdWVzIiwidmFsdWVzIiwiZ2V0VmFsdWVzIiwiYmluZCIsImdvb2RJbnB1dCIsInRhc2tOYW1lIiwicG9tb3NSZXF1aXJlZCIsInVuZGVmaW5lZCIsImRlc2NyaXB0aW9uIiwicmV0dXJuVmFsIiwiTW9kYWxDb21wb25lbnQiLCJzZXRUaW1lb3V0Iiwib3BhY2l0eSIsImNoaWxkMSIsImh0bWxTdHJpbmciLCJmb3JFYWNoIiwiZWxlbWVudCIsIm5vZGVUeXBlIiwiTm9kZSIsIlRFWFRfTk9ERSIsIm91dGVySFRNTCIsIm4iLCJpIiwicmVtb3ZlQ2hpbGQiLCJQcm9ncmVzc0NpcmNsZUNvbXBvbmVudCIsImRpc3BsYXlUZXh0IiwiZm9udFNpemUiLCJ0ZXh0IiwicGVyY2VudCIsInN0cm9rZURhc2hvZmZzZXQiLCJUYXNrQ29tcG9uZW50IiwicG9tb3Rhc2siLCJpc0N1cnJlbnRUYXNrIiwiY29tcGxldGVkIiwid3JhcHBlckRpdiIsIndyYXBwZXJUZXh0IiwidGl0bGUiLCJ3cmFwcGVyQ29tcGxldGlvbkNpcmNsZSIsInBvbW9DaXJjbGUiLCJwb21vc1VzZWQiLCJwYXJzZUludCIsInByZXEiLCJ3cmFwcGVyQ2hlY2tNYXJrIiwiY2hlY2tNYXJrIiwiY29sb3JEZWNpZGVyIiwid3JhcHBlckRlbGV0ZSIsImRlbGV0ZVRhc2tCdG4iLCJ2YWwiLCJuYW1lIiwib2xkVmFsdWUiLCJuZXdWYWx1ZSIsImNiIiwiaW5pdGlhbGl6ZURhdGFiYXNlIiwibmVlZFRvSW5pdGlhbGl6ZSIsImdldE9iamVjdCIsIlBPTU9fVEFTS19NQVAiLCJQT01PX1RBU0tfSU5ERVgiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiUE9NT19TRVNTSU9OX0lEIiwiTEFURVNUX1BPTU9fU0VTU0lPTl9TVEFUVVMiLCJQT01PX1NFU1NJT05fTUFQIiwic3RvcmVPYmplY3QiLCJyZXNldERhdGFiYXNlIiwib2JqZWN0Iiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYXJzZSIsIklOQUNUSVZFIiwiQlJFQUsiLCJMT05HX0JSRUFLIiwiQUNUSVZFIiwiQ09NUExFVEUiLCJQb21vU2Vzc2lvbiIsImFsbFRhc2tzIiwidGltZSIsInBvbW9zRWxhcHNlZCIsInN0YXJ0RGF0ZSIsIkRhdGUiLCJhbGxJblByb2dyZXNzVGFza3MiLCJmaWx0ZXIiLCJ0YXNrIiwic3RvcmVUYXNrIiwicHVzaCIsImRlbGV0ZVRhc2tCeVRhc2tJRCIsInN0b3JlZFRhc2siLCJzcGxpY2UiLCJsZWZ0IiwiTWF0aCIsInNlc3Npb25fb2JqIiwibWFwIiwidGFza09iaiIsInQiLCJUYXNrIiwicGFyc2VUYXNrRnJvbU9iaiIsInNlcmlhbGl6ZUludG9PYmoiLCJnZXRUaW1lIiwiYWxsU2Vzc2lvbnMiLCJwIiwicGFyc2VTZXNzaW9uRnJvbU9iaiIsInNlc3Npb24iLCJnZXROZXdTZXNzaW9uSUQiLCJwcmV2SUQiLCJzZXRDdXJyZW50U2Vzc2lvblN0YXR1cyIsInN0YXR1cyIsInRoZXJlSXNVbmZpbmlzaGVkU2Vzc2lvbiIsInNlc3Npb25JRCIsImN1cnJlbnRQb21vU2Vzc2lvbiIsImNvbnRpbnVlQWN0aXZlU2Vzc2lvbiIsImxvY2F0aW9uIiwidGFza19vYmoiLCJ0YXNrX21hcCIsIm9iaiIsImdldFRhc2siLCJnZXRBbGxUYXNrcyIsInBhcnNlZF90YXNrX21hcCIsImFyZVRoZXJlVW5maW5pc2hlZFRhc2tzRnJvbUxhc3RTZXNzaW9uIiwib2xkU2Vzc2lvbklEIiwiY3VycmVudFRhc2siLCJzZWxlY3RBbmRTZXRUaGVtZSIsInRvZGF5IiwibnVtQkdzIiwiZCIsImdldERheSIsInNlZWQiLCJmbG9vciIsInJhbmRvbSIsInRpbWVQZXJpb2QiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJEQVkiLCJOSUdIVCIsImdldEhvdXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBQ01BLE07Ozs7O0FBQ0Ysb0JBQWM7QUFBQTs7QUFBQTs7QUFDViw4QkFEVSxDQUVWOztBQUNBLFVBQUtDLFFBQUwsR0FBZ0IsRUFBaEIsQ0FIVSxDQU1WOztBQUNBLFVBQUtDLFlBQUwsQ0FBa0I7QUFBRUMsVUFBSSxFQUFFO0FBQVIsS0FBbEIsRUFQVSxDQU8yQjtBQUVyQzs7O0FBQ0EsUUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZixDQVZVLENBV1Y7O0FBQ0FGLFVBQU0sQ0FBQ0csWUFBUCxDQUFvQixPQUFwQixFQUE2QixhQUE3QjtBQUNBSCxVQUFNLENBQUNJLFNBQVAsR0FBbUIsTUFBS0MsV0FBTCxJQUFvQixFQUF2QyxDQWJVLENBZVY7O0FBQ0EsVUFBS1IsUUFBTCxDQUFjRyxNQUFkLEdBQXVCQSxNQUF2QjtBQUNBQSxVQUFNLENBQUNHLFlBQVAsQ0FBb0IsTUFBcEIsRUFBNEIsUUFBNUI7QUFDQUgsVUFBTSxDQUFD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QyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImNvbXBvbmVudHMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcHJvZHVjdC1pdGVtLmpzXG5cbmltcG9ydCB7IGdldFRoZW1lTW9kZSwgVEhFTUVfTU9ERVMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvdGhlbWVcIjtcblxuLyoqXG4gKiBAY2xhc3MgQnV0dG9uXG4gKiBcbiAqIEEgYnV0dG9uIGNvbXBvbmVudCB3aXRoIDMgdHlwZXMsIG5vcm1hbCwgb3V0bGluZSwgYW5kIG5hdiBzcGVjaWZpZWQgd2l0aCB0aGUgdHlwZSBhdHRyaWJ1dGVcbiAqIFxuICogSXQgYWxzbyBoYXMgdHdvIHNpemVzLCBcInNtYWxsXCIgYW5kIFwibm9ybWFsXCIgc3BlY2lmaWVkIGJ5IHRoZSBzaXplIGF0dHJpYnV0ZVxuICovXG5jbGFzcyBCdXR0b24gZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIC8vIHVzZSBhbiBvYmplY3QgdG8gc3RvcmUgYWxsIHJlbGV2YW50IGVsZW1lbnRzIHRvIHRoZSBjb21wb25lbnRzIGZvciBjb252ZW5pZW5jZVxuICAgICAgICB0aGlzLmVsZW1lbnRzID0ge307XG5cblxuICAgICAgICAvLyBDcmVhdGUgYSBzaGFkb3cgcm9vdFxuICAgICAgICB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6IFwib3BlblwiIH0pOyAvLyBzZXRzIGFuZCByZXR1cm5zICd0aGlzLnNoYWRvd1Jvb3QnXG5cbiAgICAgICAgLy8gQ3JlYXRlIGFuIGV4YW1wbGUgZWxlbWVudCB0aGF0IHdpbGwgc2VydmUgYXMgb3VyIFwicm9vdFwiIGVsZW1lbnQgaGVyZVxuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAvLyBzZXQgY2xhc3MgYXMgYW4gZXhhbXBsZSwgdGhpcyBjYW4gYmUgbGF0ZXIgdXNlZCBmb3IgY3NzIVxuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwb21vLWJ1dHRvblwiKTtcbiAgICAgICAgYnV0dG9uLmlubmVyVGV4dCA9IHRoaXMudGV4dENvbnRlbnQgfHwgXCJcIjtcblxuICAgICAgICAvLyBzdG9yZSBpdCBmb3IgZnV0dXJlIHJlZmVyZW5jZVxuICAgICAgICB0aGlzLmVsZW1lbnRzLmJ1dHRvbiA9IGJ1dHRvbjtcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcInBhcnRcIiwgXCJidXR0b25cIik7XG4gICAgICAgIGJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICAgICAgLy8gQWRkIFN0eWxlc1xuICAgICAgICBjb25zdCBsaW5rRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuICAgICAgICBsaW5rRWxlbS5zZXRBdHRyaWJ1dGUoXCJyZWxcIiwgXCJzdHlsZXNoZWV0XCIpO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gbGluayB0aGUgY29ycmVjdCBzdHlsZXNoZWV0IHdpdGggdGhlIGNvcnJlY3Qgc3R5bGluZ3NcbiAgICAgICAgbGlua0VsZW0uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIi4vYXNzZXRzL3N0eWxlcy9idXR0b24uY3NzXCIpO1xuICAgICAgICB0aGlzLmVsZW1lbnRzLmxpbmtFbGVtID0gbGlua0VsZW07XG5cbiAgICAgICAgLy8gYXR0YWNoIHRoZSBjcmVhdGVkIGVsZW1lbnRzIHRvIHRoZSBzaGFkb3cgRE9NXG4gICAgICAgIHRoaXMuc2hhZG93Um9vdC5hcHBlbmQobGlua0VsZW0sIGJ1dHRvbik7XG5cbiAgICAgICAgdGhpcy50eXBlID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpO1xuICAgICAgICBpZiAodGhpcy50eXBlID09IFwib3V0bGluZVwiKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRzLmJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCB0aGlzLmVsZW1lbnRzLmJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSArIFwiIG91dGxpbmVcIik7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09IFwibmF2XCIpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudHMuYnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIHRoaXMuZWxlbWVudHMuYnV0dG9uLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpICsgXCIgbmF2XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zaXplID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJzaXplXCIpO1xuICAgICAgICBpZiAodGhpcy5zaXplID09PSBcInNtYWxsXCIpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudHMuYnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIHRoaXMuZWxlbWVudHMuYnV0dG9uLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpICsgXCIgc21hbGxcIik7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zaXplID09PSBcInRpbnlcIikge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50cy5idXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgdGhpcy5lbGVtZW50cy5idXR0b24uZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikgKyBcIiB0aW55XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHRoZW1lTW9kZSA9IGdldFRoZW1lTW9kZSgpO1xuICAgICAgICBpZiAodGhlbWVNb2RlID09PSBUSEVNRV9NT0RFUy5OSUdIVCAmJiB0aGlzLmdldEF0dHJpYnV0ZShcIm5vZGFya1wiKSAhPT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudHMuYnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIHRoaXMuZWxlbWVudHMuYnV0dG9uLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpICsgXCIgZGFya1wiKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwicG9tby1idXR0b25cIiwgQnV0dG9uKTsiLCJpbXBvcnQgeyBnZXRMYXRlc3RTZXNzaW9uSUQsIGdldFBvbW9TZXNzaW9uLCBQT01PX1NFU1NJT05fTU9ERVMsIHN0b3JlUG9tb1Nlc3Npb24gfSBmcm9tIFwiLi4vLi4vZGF0YWJhc2Uvc2Vzc2lvblwiO1xuXG4vKipcbiAqIEhlYWRlciBjbGFzcyB0byBjcmVhdGUgYSB3ZWIgY29tcG9uZW50IGltcGxlbWVudGluZyB0aGUgZnVuY3Rpb25hbGl0eSBvZiBvdXIgaGVhZGVyIGJhci5cbiAqIFxuICogQGF1dGhvcnMgRXRoYW4gSHV5bmgsIEtldmluIEtsaW1la1xuICogQHRvZG8gUmVmYWN0b3IgYnV0dG9ucyB0byBvbkNsaWNrIGV2ZW50cyBpbnN0ZWFkIG9mIHNpbXBseSBhcHBlbmRpbmcgdG8gYSBsaW5rIGVsZW1lbnQsXG4gKiAgICAgICBJbXBsZW1lbnQgaGVscCBidXR0b24gd2hlbiBNb2RhbCBjb21wb25lbnQgaXMgbWVyZ2VkXG4gKi9cbmNvbnN0IEhFTFBfVEVYVCA9IFwiVGhlIFBvbW9kb3JvIFRlY2huaXF1ZSBpcyBhIHRpbWUgbWFuYWdlbWVudCBtZXRob2QgZGV2ZWxvcGVkIGJ5IEZyYW5jZXNjbyBDaXJpbGxvIGluIHRoZSBsYXRlIDE5ODBzLiBUaGUgdGVjaG5pcXVlIHVzZXMgYSB0aW1lciB0byBicmVhayBkb3duIHdvcmsgaW50byBpbnRlcnZhbHMsIHRyYWRpdGlvbmFsbHkgMjUgbWludXRlcyBpbiBsZW5ndGgsIHNlcGFyYXRlZCBieSBzaG9ydCBicmVha3MuIEVhY2ggaW50ZXJ2YWwgaXMga25vd24gYXMgYSBwb21vZG9ybywgZnJvbSB0aGUgSXRhbGlhbiB3b3JkIGZvciAndG9tYXRvJywgYWZ0ZXIgdGhlIHRvbWF0by1zaGFwZWQga2l0Y2hlbiB0aW1lciB0aGF0IENpcmlsbG8gdXNlZCBhcyBhIHVuaXZlcnNpdHkgc3R1ZGVudC5cIjsgXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIC8vIHVzZSBhbiBvYmplY3QgdG8gc3RvcmUgYWxsIHJlbGV2YW50IGVsZW1lbnRzIHRvIHRoZSBjb21wb25lbnRzIGZvciBjb252ZW5pZW5jZVxuICAgICAgICB0aGlzLmVsZW1lbnRzID0ge307XG5cbiAgICAgICAgLy8gQ3JlYXRlIGEgc2hhZG93IHJvb3RcbiAgICAgICAgdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiBcIm9wZW5cIiB9KTsgLy8gc2V0cyBhbmQgcmV0dXJucyAndGhpcy5zaGFkb3dSb290J1xuXG4gICAgICAgIC8vIENyZWF0ZSBhbiBleGFtcGxlIGVsZW1lbnQgdGhhdCB3aWxsIHNlcnZlIGFzIG91ciBcInJvb3RcIiBlbGVtZW50IGhlcmVcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gICAgICAgIC8vIHNldCBjbGFzcyBhcyBhbiBleGFtcGxlLCB0aGlzIGNhbiBiZSBsYXRlciB1c2VkIGZvciBjc3MhXG4gICAgICAgIHdyYXBwZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwb21vLWhlYWRlclwiKTtcblxuICAgICAgICBsZXQgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGxvZ28uc3JjID0gXCIuL2Fzc2V0cy9zdmdJbWFnZXMvbG9nby5zdmdcIjtcbiAgICAgICAgbG9nby5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBvbW8taGVhZGVyIGxvZ29cIik7XG5cbiAgICAgICAgbGV0IGhvbWVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgIGhvbWVMaW5rLmhyZWY9XCJpbmRleC5odG1sXCI7XG4gICAgICAgIGhvbWVMaW5rLmlkID0gXCJob21lLWJ0blwiO1xuXG4gICAgICAgIGhvbWVMaW5rLmFwcGVuZENoaWxkKGxvZ28pO1xuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGhvbWVMaW5rKTtcblxuICAgICAgICAvKiogRm9yIGZvbGxvd2luZyBsaW5rcyBpbiBhbiBldmVudGxpc3RlbmVyXG4gICAgICAgICAqICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiaHR0cDovL3d3dy53M3NjaG9vbHMuY29tXCI7XG4gICAgICAgICAqICBvciB3aW5kb3cubG9jYXRpb24uYXNzaWduKHVybCk7XG4gICAgICAgICAqICBvciB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSBpZiB3ZSBkb24ndCB3YW50IHRvIGFkZCB0byBoaXN0b3J5XG4gICAgICAgICAqL1xuXG4gICAgICAgIHdyYXBwZXIuaW5uZXJIVE1MICs9IFwiPGEgaWQ9XFxcImhpc3QtYnRuXFxcIiBocmVmPVxcXCJoaXN0b3J5Lmh0bWxcXFwiPjxwb21vLWJ1dHRvbiB0eXBlPVxcXCJuYXZcXFwiIGlkPVxcXCJoaXN0XFxcIj5IaXN0b3J5PC9wb21vLWJ1dHRvbj48L2E+XCI7XG5cbiAgICAgICAgd3JhcHBlci5pbm5lckhUTUwgKz0gXCI8cG9tby1idXR0b24gdHlwZT1cXFwibmF2XFxcIiBpZD1cXFwiaGVscFxcXCI+SGVscDwvcG9tby1idXR0b24+XCI7XG4gICAgICAgIHdyYXBwZXIuaW5uZXJIVE1MICs9IGA8cG9tby1tb2RhbCBpZD1cIm1vZGFsLWhlbHBcIj4gIFxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIm1vZGFsLWNsb3NlXCIgY2xhc3M9XCJjbG9zZS1idG5cIj54PC9idXR0b24+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInRpdGxlXCI+V2hhdCdzIGEgUG9tbyBUaW1lcj88L3A+XG4gICAgICAgICAgICA8cD4ke0hFTFBfVEVYVH08L3A+XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvUG9tb2Rvcm9fVGVjaG5pcXVlXCI+V2lraXBlZGlhPC9hPlxuICAgICAgICA8L3BvbW8tbW9kYWw+YDtcblxuICAgICAgICAvLyBzdG9yZSBpdCBmb3IgZWFzeSBhY2Nlc3NcbiAgICAgICAgdGhpcy5lbGVtZW50cy53cmFwcGVyID0gd3JhcHBlcjtcblxuICAgICAgICAvLyBBZGQgU3R5bGVzXG4gICAgICAgIGNvbnN0IGxpbmtFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG4gICAgICAgIGxpbmtFbGVtLnNldEF0dHJpYnV0ZShcInJlbFwiLCBcInN0eWxlc2hlZXRcIik7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBsaW5rIHRoZSBjb3JyZWN0IHN0eWxlc2hlZXQgd2l0aCB0aGUgY29ycmVjdCBzdHlsaW5nc1xuICAgICAgICBsaW5rRWxlbS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiLi9hc3NldHMvc3R5bGVzL2hlYWRlci5jc3NcIik7XG4gICAgICAgIHRoaXMuZWxlbWVudHMubGlua0VsZW0gPSBsaW5rRWxlbTtcblxuICAgICAgICAvLyBhdHRhY2ggdGhlIGNyZWF0ZWQgZWxlbWVudHMgdG8gdGhlIHNoYWRvdyBET01cbiAgICAgICAgdGhpcy5zaGFkb3dSb290LmFwcGVuZChsaW5rRWxlbSwgd3JhcHBlcik7XG5cbiAgICAgICAgbGV0IG1vZGFsID0gd3JhcHBlci5jaGlsZE5vZGVzWzNdO1xuICAgICAgICBtb2RhbC5lbGVtZW50cy53cmFwcGVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgbGV0IGhlbHBCdG4gPSB3cmFwcGVyLmNoaWxkTm9kZXNbMl07XG4gICAgICAgIGxldCBjbG9zZUJ0biA9IG1vZGFsLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC1jbG9zZVwiKTtcbiAgICAgICAgaGVscEJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBtb2RhbC5kaXNwbGF5TW9kYWwoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjbG9zZUJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBtb2RhbC5oaWRlTW9kYWwoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBjaGVja1BvbW9TZXNzaW9uTW9kZUJlZm9yZUxlYXZpbmcgPSAoZSkgPT4ge1xuICAgICAgICAgICAgLy8gcHJldmVudCBtb3ZpbmcgdG8gbmV3IHBhZ2UgaWYgY3VycmVudCBwb21vIHNlc3Npb24gaXMgc3RpbGwgYWN0aXZlXG4gICAgICAgICAgICBsZXQgaWQgPSBnZXRMYXRlc3RTZXNzaW9uSUQoKTtcbiAgICAgICAgICAgIGlmIChpZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxldCBwb21vU2Vzc2lvbiA9IGdldFBvbW9TZXNzaW9uKGlkKTtcbiAgICAgICAgICAgICAgICBpZiAocG9tb1Nlc3Npb24ubW9kZSA9PT0gUE9NT19TRVNTSU9OX01PREVTLkFDVElWRSB8fCBwb21vU2Vzc2lvbi5tb2RlID09PSBQT01PX1NFU1NJT05fTU9ERVMuTE9OR19CUkVBSyB8fCBwb21vU2Vzc2lvbi5tb2RlID09PSBQT01PX1NFU1NJT05fTU9ERVMuQlJFQUspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb25maXJtKFwiQXJlIHlvdSBzdXJlIHdhbnQgdG8gbGVhdmU/IFRoaXMgd2lsbCBhdXRvbWF0aWNhbGx5IGNvbXBsZXRlIHlvdXIgc2Vzc2lvblwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhleSBkbyBsZWF2ZSwgbWFrZSBzdXJlIHRvIHVwZGF0ZSB0aGUgc2Vzc2lvblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDSEFOR0VcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb21vU2Vzc2lvbi5tb2RlID0gUE9NT19TRVNTSU9OX01PREVTLkNPTVBMRVRFO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVQb21vU2Vzc2lvbihwb21vU2Vzc2lvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhnZXRQb21vU2Vzc2lvbihwb21vU2Vzc2lvbi5pZCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKFwiaGlzdC1idG5cIikub25jbGljayA9IGNoZWNrUG9tb1Nlc3Npb25Nb2RlQmVmb3JlTGVhdmluZztcbiAgICAgICAgdGhpcy5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKFwiaG9tZS1idG5cIikub25jbGljayA9IGNoZWNrUG9tb1Nlc3Npb25Nb2RlQmVmb3JlTGVhdmluZztcbiAgICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInBvbW8taGVhZGVyXCIsIEhlYWRlcik7IiwiLyoqXG4gKiBJbnB1dEZpZWxkIGNsYXNzIHRvIG1ha2UgYSB3ZWIgY29tcG9uZW50IHRoYXQgY2FuIGhhbmRsZSB1c2VyIGlucHV0LlxuICogQnkgZGVmYXVsdCB0aGUgbWF4IGNoYXJhY3RlciBjb3VudCBpcyA1MC5cbiAqIFxuICogRXhhbXBsZTogPHBvbW8taW5wdXQgcmVxdWlyZWQ9XCJ0cnVlXCIgbWF4PVwiMTBcIj5UZXN0aW5nPC9wb21vLWlucHV0PlxuICogV2lsbCBtYWtlIGFuIGlucHV0IGZpZWxkIG9mIG1heCAxMCBjaGFyYWN0ZXJzIGFuZCB0aGUgcGxhY2Vob2xkZXIgXG4gKiB0ZXh0IHdpbGwgYmUgXCJUZXN0aW5nKlwiLiBUaGUgXCIqXCIgaXMgYmVjYXVzZSB0aGlzIGlucHV0IGlzIHNldCBhcyByZXF1aXJlZC5cbiAqIEBjbGFzc1xuICogQGF1dGhvciBFdGhhbiBIdXluaFxuICovXG5jbGFzcyBJbnB1dEZpZWxkIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIC8qKiBDb25zdHJ1Y3RvciBmb3IgcG9tby1pbnB1dCBjb21wb25lbnQgY3JlYXRlcyBhIGNvbnRlbnRFZGl0YWJsZSBkaXYgd2l0aFxuICAgICAqIGEgZGVmYXVsdCBtYXggY2hhcmFjdGVyIGxpbWl0IG9mIDUwXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudXNlclR5cGVkID0gXCJcIjtcbiAgICAgICAgLy8gdXNlIGFuIG9iamVjdCB0byBzdG9yZSBhbGwgcmVsZXZhbnQgZWxlbWVudHMgdG8gdGhlIGNvbXBvbmVudHMgZm9yIGNvbnZlbmllbmNlXG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSB7fTtcblxuICAgICAgICAvLyBDcmVhdGUgYSBzaGFkb3cgcm9vdFxuICAgICAgICB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6IFwib3BlblwiIH0pOyAvLyBzZXRzIGFuZCByZXR1cm5zICd0aGlzLnNoYWRvd1Jvb3QnXG5cbiAgICAgICAgLy8gQ3JlYXRlIGFuIGV4YW1wbGUgZWxlbWVudCB0aGF0IHdpbGwgc2VydmUgYXMgb3VyIFwicm9vdFwiIGVsZW1lbnQgaGVyZVxuICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgLy8gc2V0IGNsYXNzIGFzIGFuIGV4YW1wbGUsIHRoaXMgY2FuIGJlIGxhdGVyIHVzZWQgZm9yIGNzcyFcbiAgICAgICAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBvbW8taW5wdXRcIik7XG5cbiAgICAgICAgd3JhcHBlci5wbGFjZWhvbGRlciA9IFwiRGVmYXVsdCBUZXh0XCI7XG4gICAgICAgIHdyYXBwZXIuY29udGVudEVkaXRhYmxlID0gdHJ1ZTtcbiAgICAgICAgd3JhcHBlci5tYXggPSA1MDsgLy9ieSBkZWZhdWx0IHRoZSBtYXggY2hhcmFjdGVyIGNvdW50IGlzIDUwXG5cbiAgICAgICAgLy8gc3RvcmUgaXQgZm9yIGZ1dHVyZSByZWZlcmVuY2VcbiAgICAgICAgdGhpcy5lbGVtZW50cy53cmFwcGVyID0gd3JhcHBlcjtcblxuICAgICAgICAvLyBBZGQgU3R5bGVzXG4gICAgICAgIGNvbnN0IGxpbmtFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG4gICAgICAgIGxpbmtFbGVtLnNldEF0dHJpYnV0ZShcInJlbFwiLCBcInN0eWxlc2hlZXRcIik7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBsaW5rIHRoZSBjb3JyZWN0IHN0eWxlc2hlZXQgd2l0aCB0aGUgY29ycmVjdCBzdHlsaW5nc1xuICAgICAgICBsaW5rRWxlbS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiLi9hc3NldHMvc3R5bGVzL2lucHV0LWZpZWxkLmNzc1wiKTtcbiAgICAgICAgdGhpcy5lbGVtZW50cy5saW5rRWxlbSA9IGxpbmtFbGVtO1xuXG4gICAgICAgIC8vIGF0dGFjaCB0aGUgY3JlYXRlZCBlbGVtZW50cyB0byB0aGUgc2hhZG93IERPTVxuICAgICAgICB0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kKGxpbmtFbGVtLCB3cmFwcGVyKTtcblxuICAgICAgICAvL2FkZCBkZWZhdWx0IHN0eWxlXG4gICAgICAgIHRoaXMuZWxlbWVudHMud3JhcHBlci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCB0aGlzLmVsZW1lbnRzLndyYXBwZXIuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikgKyBcIiBwbGFjZWhvbGRlclwiKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQW5vbnltb3VzIGZ1bmN0aW9uIHRvIHJlcGxhY2UgcGxhY2Vob2xkZXIgdGV4dCB3aXRoIGVtcHR5IHN0cmluZyB3aGVuIHVzZXIgY2xpY2tzIG9uIGNvbXBvbmVudFxuICAgICAgICAgKiBAZnVuY3Rpb25cbiAgICAgICAgICovXG4gICAgICAgIHdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vaWYgZm9jdXNlZCBhbmQgY3VycmVudCB0ZXh0IGlzIHRoZSBwbGFjZWhvbGRlciB0ZXh0IHJlcGxhY2UgaXQgd2l0aCBlbXB0eSBzdHJpbmdcbiAgICAgICAgICAgIGlmKCF0aGlzLnVzZXJUeXBlZCkge1xuICAgICAgICAgICAgICAgIHdyYXBwZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwb21vLWlucHV0XCIpO1xuICAgICAgICAgICAgICAgIHdyYXBwZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQW5vbnltb3VzIGZ1bmN0aW9uIHRvIHJlcGxhY2UgZW1wdHkgc3RyaW5nIHdpdGggcGxhY2Vob2xkZXIgdGV4dCB3aGVuIHVzZXIgY2xpY2tzIGF3YXlcbiAgICAgICAgICogQGZ1bmN0aW9uXG4gICAgICAgICAqL1xuICAgICAgICB3cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vaWYgbm90IGZvY3VzZWQgYW5kIHRoZXJlIGlzIG5vIGlucHV0LCByZXR1cm4gYmFjayB0byBwbGFjZWhvbGRlciBzdHJpbmdcbiAgICAgICAgICAgIGlmKCF0aGlzLnVzZXJUeXBlZCkge1xuICAgICAgICAgICAgICAgIHdyYXBwZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwb21vLWlucHV0IHBsYWNlaG9sZGVyXCIpO1xuICAgICAgICAgICAgICAgIHdyYXBwZXIudGV4dENvbnRlbnQgPSB3cmFwcGVyLnBsYWNlaG9sZGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgLyoqIFxuICAgICAqIENoZWNrcyBpbnB1dCBmaWVsZCBpZiBpdCdzIGV4Y2VlZGVkIHRoZSBtYXhpbXVtIGNoYXJhY3RlciBsaW1pdCBvbiBhbiBldmVudFxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGUgQ2hlY2tzIG9uIGtleWRvd24scGFzdGUsIGFuZCBpbnB1dCBldmVudHNcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gZmFsc2UgSWYgdGhlIG1heCBjaGFyYWN0ZXIgbGltaXQgaGFzIGJlZW4gcmVhY2hlZFxuICAgICovXG4gICAgbGltaXRDaGFyQ291bnQoZSkge1xuICAgICAgICB0aGlzLnVzZXJUeXBlZCA9IHRoaXMudGV4dENvbnRlbnQ7XG4gICAgICAgIC8vaWYgdGhlIHVzZXIgaGFzbid0IGhpZ2hsaWdodGVkIGFueSB0ZXh0IGFuZCB3ZSBhcmUgYXQgbWF4IGxlbmd0aFxuICAgICAgICBpZih3aW5kb3cuZ2V0U2VsZWN0aW9uKCkudG9TdHJpbmcoKS5sZW5ndGggPT0gMCAmJiB0aGlzLnRleHRDb250ZW50Lmxlbmd0aCA+PSB0aGlzLm1heCkge1xuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBvbW8taW5wdXQgbWF4XCIpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBvbW8taW5wdXRcIik7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBcbiAgICAgKiBTdG9wIHRoZSB1c2VyIGZyb20gaW5wdXR0aW5nIGFueXRoaW5nIGJ1dCBudW1iZXJzXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgQ2hlY2tzIG9uIGtleWRvd24scGFzdGUsIGFuZCBpbnB1dCBldmVudHNcbiAgICAqL1xuICAgIG51bWVyaWNJbnB1dE9ubHkoZXZlbnQpIHtcbiAgICAgICAgdGhpcy51c2VyVHlwZWQgPSB0aGlzLnRleHRDb250ZW50O1xuICAgICAgICAvL2lmIHRoZSB1c2VyIGhhc24ndCBoaWdobGlnaHRlZCBhbnkgdGV4dCBhbmQgd2UgYXJlIGF0IG1heCBsZW5ndGhcbiAgICAgICAgaWYod2luZG93LmdldFNlbGVjdGlvbigpLnRvU3RyaW5nKCkubGVuZ3RoID09IDAgJiYgdGhpcy50ZXh0Q29udGVudC5sZW5ndGggPj0gdGhpcy5tYXgpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwb21vLWlucHV0IG1heFwiKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBvbW8taW5wdXRcIik7XG4gICAgICAgICAgICBcbiAgICAgICAgLy9kaWZmZXJlbnQgZXZlbnRzIHN0b3JlIHRoZSB0ZXh0IGluIGRpZmZlcmVudCB3YXlzIHNvIHdlIG5lZWQgdGhlc2UgaWZzXG4gICAgICAgIGlmKGV2ZW50LnR5cGUgPT0gXCJrZXlwcmVzc1wiICYmIGlzTmFOKGV2ZW50LmtleSkpIHtcbiAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZChcImludmFsaWRcIik7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoZXZlbnQudHlwZSA9PSBcImlucHV0XCIgJiYgaXNOYU4oZXZlbnQuZGF0YSkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwb21vLWlucHV0IGludmFsaWRcIik7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoZXZlbnQudHlwZSA9PSBcInBhc3RlXCIgJiYgaXNOYU4oZXZlbnQuY2xpcGJvYXJkRGF0YS5nZXREYXRhKFwiVGV4dFwiKSkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwb21vLWlucHV0IGludmFsaWRcIik7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51c2VyVHlwZWQ7XG4gICAgfVxuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIGxldCBtYXhDaGFyID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJtYXhcIik7XG5cbiAgICAgICAgLy9zZXQgYXR0cmlidXRlLXNwZWNpZmllZCBtYXggY2hhclxuICAgICAgICBpZiAobWF4Q2hhciAhPSBudWxsKVxuICAgICAgICAgICAgdGhpcy5lbGVtZW50cy53cmFwcGVyLm1heCA9IE51bWJlcihtYXhDaGFyKTtcblxuICAgICAgICB0aGlzLmVsZW1lbnRzLndyYXBwZXIudGV4dENvbnRlbnQgPSB0aGlzLnRleHRDb250ZW50O1xuICAgICAgICBpZiAodGhpcy5nZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiKSkge1xuICAgICAgICAgICAgdGhpcy5yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRzLndyYXBwZXIudGV4dENvbnRlbnQgKz0gXCIqXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLmdldEF0dHJpYnV0ZShcInR5cGVcIikgPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50cy53cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCB0aGlzLm51bWVyaWNJbnB1dE9ubHksIGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudHMud3JhcHBlci5hZGRFdmVudExpc3RlbmVyKFwicGFzdGVcIiwgdGhpcy5udW1lcmljSW5wdXRPbmx5LCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRzLndyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIHRoaXMubnVtZXJpY0lucHV0T25seSwgZmFsc2UpOyAvL3RoaXMgaXMgbWFpbmx5IGZvciBjaGFuZ2luZyB0aGUgYmFja3NwYWNlL2RlbCBrZXlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vbGlzdGVuIGZvciBtYXggY2hhcmFjdGVycyBvbiB0aGVzZSBldmVudHNcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudHMud3JhcHBlci5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgdGhpcy5saW1pdENoYXJDb3VudCwgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50cy53cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJwYXN0ZVwiLCB0aGlzLmxpbWl0Q2hhckNvdW50LCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRzLndyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIHRoaXMubGltaXRDaGFyQ291bnQsIGZhbHNlKTsgLy90aGlzIGlzIG1haW5seSBmb3IgY2hhbmdpbmcgdGhlIGJhY2tzcGFjZS9kZWwga2V5XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVsZW1lbnRzLndyYXBwZXIucGxhY2Vob2xkZXIgPSB0aGlzLmVsZW1lbnRzLndyYXBwZXIudGV4dENvbnRlbnQ7XG4gICAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJwb21vLWlucHV0XCIsIElucHV0RmllbGQpOyIsIi8qKlxuICogTW9kYWxJbnB1dCBjbGFzcyBsb2FkcyBmdW5jdGlvbmFsaXR5IGZvciB0aGUgY2xvc2UgYnV0dG9uIGFuZFxuICogc2F2ZSBidXR0b24gaW4gdGhlIGlucHV0IG1vZGFsIGluIHRpbWVyLmh0bWwuXG4gKiBAY2xhc3NcbiAqIEBhdXRob3IgRXRoYW4gSHV5bmhcbiAqL1xuY2xhc3MgTW9kYWxJbnB1dCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgbGV0IHRhc2tNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVGFza01vZGFsXCIpO1xuICAgICAgICBsZXQgY2xvc2VCdG4gPSB0YXNrTW9kYWwuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLWNsb3NlXCIpO1xuICAgICAgICBcbiAgICAgICAgY2xvc2VCdG4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGFza01vZGFsLmhpZGVNb2RhbCgpO1xuXG4gICAgICAgICAgICByZXNldElucHV0cygpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRhc2tNb2RhbC5lbGVtZW50cy5zYXZlQnRuID0gdGFza01vZGFsLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoXCJzYXZlLWJ0blwiKTtcbiAgICAgICAgdGFza01vZGFsLmVsZW1lbnRzLnNhdmVCdG4ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vaWYgdGhlcmUgYXJlIHZhbHVlcyBpbnB1dHRlZCBpbnRvIHRoZSBmaWVsZHNcbiAgICAgICAgICAgIGlmKGNoZWNrVmFsdWVzKCkpIHtcbiAgICAgICAgICAgICAgICB0YXNrTW9kYWwuaGlkZU1vZGFsKCk7XG4gICAgICAgICAgICAgICAgdGFza01vZGFsLmVsZW1lbnRzLnZhbHVlcyA9IGdldFZhbHVlcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LmJpbmQodGFza01vZGFsKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2hlY2tzIGlmIHRoZSB1c2VyIGhhcyBpbnB1dHRlZCBzb21ldGhpbmcgZm9yIHRhc2sgbmFtZSBhbmQgcG9tb3MgcmVxdWlyZWRcbiAgICAgICAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgcmVxdWlyZWQgaW5wdXQgZmllbGRzIGhhdmUgaW5wdXQsIGZhbHNlIG90aGVyd2lzZVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gY2hlY2tWYWx1ZXMoKSB7XG4gICAgICAgICAgICBsZXQgZ29vZElucHV0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tOYW1lID0gdGFza01vZGFsLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLW5hbWVcIikuZWxlbWVudHMud3JhcHBlcjtcbiAgICAgICAgICAgIGNvbnN0IHBvbW9zUmVxdWlyZWQgPSB0YXNrTW9kYWwuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZChcInBvbW9zLXJlcXVpcmVkXCIpLmVsZW1lbnRzLndyYXBwZXI7XG5cbiAgICAgICAgICAgIGlmKHRhc2tOYW1lLnVzZXJUeXBlZCA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0YXNrTmFtZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBvbW8taW5wdXQgaW52YWxpZFwiKTtcbiAgICAgICAgICAgICAgICBnb29kSW5wdXQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYocG9tb3NSZXF1aXJlZC51c2VyVHlwZWQgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcG9tb3NSZXF1aXJlZC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBvbW8taW5wdXQgaW52YWxpZFwiKTtcbiAgICAgICAgICAgICAgICBnb29kSW5wdXQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGdvb2RJbnB1dDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXRzIGFsbCB1c2VyIGlucHV0IGFuZCByZXNldHMgdGhlIGlucHV0IGZpZWxkc1xuICAgICAgICAgKiBAcmV0dXJucyB7RGljdGlvbmFyeX0ge3Rhc2tOYW1lOiBpbnB1dCwgcG9tb3NSZXF1aXJlZDogaW5wdXQsIGRlc2NyaXB0aW9uOiBpbnB1dH1cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGdldFZhbHVlcygpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tOYW1lID0gdGFza01vZGFsLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLW5hbWVcIikuZWxlbWVudHMud3JhcHBlcjtcbiAgICAgICAgICAgIGNvbnN0IHBvbW9zUmVxdWlyZWQgPSB0YXNrTW9kYWwuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZChcInBvbW9zLXJlcXVpcmVkXCIpLmVsZW1lbnRzLndyYXBwZXI7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHRhc2tNb2RhbC5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIikuZWxlbWVudHMud3JhcHBlcjtcbiAgICAgICAgICAgIGNvbnN0IHJldHVyblZhbCA9IHtcbiAgICAgICAgICAgICAgICB0YXNrTmFtZTogdGFza05hbWUudXNlclR5cGVkLFxuICAgICAgICAgICAgICAgIHBvbW9zUmVxdWlyZWQ6IHBvbW9zUmVxdWlyZWQudXNlclR5cGVkLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlwiXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYoZGVzY3JpcHRpb24udXNlclR5cGVkICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm5WYWxbXCJkZXNjcmlwdGlvblwiXSA9IGRlc2NyaXB0aW9uLnVzZXJUeXBlZDtcblxuICAgICAgICAgICAgcmV0dXJuIHJldHVyblZhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDbGVhcnMgaW5wdXRzIGFuZCByZXNldHMgc3R5bGVcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIHJlc2V0SW5wdXRzKCkge1xuICAgICAgICAgICAgY29uc3QgdGFza05hbWUgPSB0YXNrTW9kYWwuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZChcInRhc2stbmFtZVwiKS5lbGVtZW50cy53cmFwcGVyO1xuICAgICAgICAgICAgY29uc3QgcG9tb3NSZXF1aXJlZCA9IHRhc2tNb2RhbC5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKFwicG9tb3MtcmVxdWlyZWRcIikuZWxlbWVudHMud3JhcHBlcjtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdGFza01vZGFsLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKS5lbGVtZW50cy53cmFwcGVyO1xuXG4gICAgICAgICAgICB0YXNrTmFtZS5pbm5lclRleHQgPSB0YXNrTmFtZS5wbGFjZWhvbGRlcjtcbiAgICAgICAgICAgIHRhc2tOYW1lLnVzZXJUeXBlZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRhc2tOYW1lLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicG9tby1pbnB1dCBwbGFjZWhvbGRlclwiKTtcblxuICAgICAgICAgICAgcG9tb3NSZXF1aXJlZC5pbm5lclRleHQgPSBwb21vc1JlcXVpcmVkLnBsYWNlaG9sZGVyO1xuICAgICAgICAgICAgcG9tb3NSZXF1aXJlZC51c2VyVHlwZWQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBwb21vc1JlcXVpcmVkLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicG9tby1pbnB1dCBwbGFjZWhvbGRlclwiKTtcblxuICAgICAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gZGVzY3JpcHRpb24ucGxhY2Vob2xkZXI7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbi51c2VyVHlwZWQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBvbW8taW5wdXQgcGxhY2Vob2xkZXJcIik7XG5cbiAgICAgICAgICAgIHRhc2tNb2RhbC5lbGVtZW50cy52YWx1ZXMgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm1vZGFsLWlucHV0XCIsIE1vZGFsSW5wdXQpOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsQ29tcG9uZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgLy8gdXNlIGFuIG9iamVjdCB0byBzdG9yZSBhbGwgcmVsZXZhbnQgZWxlbWVudHMgdG8gdGhlIGNvbXBvbmVudHMgZm9yIGNvbnZlbmllbmNlXG4gICAgdGhpcy5lbGVtZW50cyA9IHt9O1xuICAgIC8vIENyZWF0ZSBhIHNoYWRvdyByb290XG4gICAgdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiBcIm9wZW5cIiB9KTsgLy8gc2V0cyBhbmQgcmV0dXJucyAndGhpcy5zaGFkb3dSb290J1xuXG4gICAgLy8gQ3JlYXRlIGFuIGV4YW1wbGUgZWxlbWVudCB0aGF0IHdpbGwgc2VydmUgYXMgb3VyIFwicm9vdFwiIGVsZW1lbnQgaGVyZVxuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXMuZWxlbWVudHMud3JhcHBlciA9IHdyYXBwZXI7XG4gICAgdGhpcy5lbGVtZW50cy53cmFwcGVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibW9kYWwtd3JhcHBlclwiKTtcbiAgICB0aGlzLmVsZW1lbnRzLndyYXBwZXIuaW5uZXJIVE1MID0gXCI8ZGl2IGNsYXNzPVxcXCJzaGFkb3dcXFwiPjwvZGl2PjxkaXYgY2xhc3M9XFxcIm1vZGFsXFxcIj48L2Rpdj5cIjtcblxuICAgIC8vIEFkZCBTdHlsZXNcbiAgICBjb25zdCBsaW5rRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuICAgIGxpbmtFbGVtLnNldEF0dHJpYnV0ZShcInJlbFwiLCBcInN0eWxlc2hlZXRcIik7XG4gICAgLy8gbWFrZSBzdXJlIHRvIGxpbmsgdGhlIGNvcnJlY3Qgc3R5bGVzaGVldCB3aXRoIHRoZSBjb3JyZWN0IHN0eWxpbmdzXG4gICAgbGlua0VsZW0uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIi4vYXNzZXRzL3N0eWxlcy9tb2RhbC5jc3NcIik7XG4gICAgdGhpcy5lbGVtZW50cy5saW5rRWxlbSA9IGxpbmtFbGVtO1xuICAgIHRoaXMuZWxlbWVudHMud3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICB0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQobGlua0VsZW0pO1xuICB9XG5cbiAgZGlzcGxheU1vZGFsKCkge1xuICAgIHRoaXMuZWxlbWVudHMud3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5lbGVtZW50cy53cmFwcGVyLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgIH0sIDIwKTtcbiAgfVxuICBoaWRlTW9kYWwoKSB7XG4gICAgdGhpcy5lbGVtZW50cy53cmFwcGVyLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5lbGVtZW50cy53cmFwcGVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9LCA0MDApO1xuICAgIFxuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy50eXBlID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpO1xuXG4gICAgbGV0IGNoaWxkMSA9IHRoaXMuY2hpbGROb2RlcztcbiAgICBsZXQgaHRtbFN0cmluZyA9IFwiXCI7XG4gICAgY2hpbGQxLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBpZihlbGVtZW50Lm5vZGVUeXBlICE9IE5vZGUuVEVYVF9OT0RFKVxuICAgICAgICBodG1sU3RyaW5nICs9IGVsZW1lbnQub3V0ZXJIVE1MO1xuICAgIH0pO1xuICAgIFxuICAgIC8vY29weSBodG1sIGVsZW1lbnRzIHRvIHNoYWRvdyBkb21cbiAgICB0aGlzLmVsZW1lbnRzLndyYXBwZXIuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJzaGFkb3dcIj48L2Rpdj48ZGl2IGNsYXNzPVwibW9kYWxcIj4ke2h0bWxTdHJpbmd9PC9kaXY+YDtcbiAgICBcbiAgICAvL3JlbW92ZSBleHRyYSBodG1sIGVsZW1lbnRzIGxlZnRcbiAgICBsZXQgbiA9IGNoaWxkMS5sZW5ndGg7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IG47IGkrKylcbiAgICAgIHRoaXMucmVtb3ZlQ2hpbGQoY2hpbGQxWzBdKTtcbiAgICBcbiAgICB0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50cy53cmFwcGVyKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJwb21vLW1vZGFsXCIsIE1vZGFsQ29tcG9uZW50KTsiLCIvKipcbiAqIEBjbGFzcyBQcm9ncmVzc0NpcmNsZUNvbXBvbmVudFxuICovXG5jbGFzcyBQcm9ncmVzc0NpcmNsZUNvbXBvbmVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICAvLyB1c2UgYW4gb2JqZWN0IHRvIHN0b3JlIGFsbCByZWxldmFudCBlbGVtZW50cyB0byB0aGUgY29tcG9uZW50cyBmb3IgY29udmVuaWVuY2VcbiAgICAgICAgdGhpcy5lbGVtZW50cyA9IHt9O1xuXG4gICAgICAgIC8vIENyZWF0ZSBhIHNoYWRvdyByb290XG4gICAgICAgIHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogXCJvcGVuXCIgfSk7IC8vIHNldHMgYW5kIHJldHVybnMgJ3RoaXMuc2hhZG93Um9vdCdcblxuICAgICAgICAvLyBDcmVhdGUgYW4gZXhhbXBsZSBlbGVtZW50IHRoYXQgd2lsbCBzZXJ2ZSBhcyBvdXIgXCJyb290XCIgZWxlbWVudCBoZXJlXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAvLyBzZXQgY2xhc3MgYXMgYW4gZXhhbXBsZSwgdGhpcyBjYW4gYmUgbGF0ZXIgdXNlZCBmb3IgY3NzIVxuICAgICAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwid3JhcHBlclwiKTtcbiAgICAgICAgLy8gc3RvcmUgaXQgZm9yIGZ1dHVyZSByZWZlcmVuY2VcbiAgICAgICAgdGhpcy5lbGVtZW50cy53cmFwcGVyID0gd3JhcHBlcjtcblxuICAgICAgICB0aGlzLmRpc3BsYXlUZXh0ID0gXCIwJVwiO1xuXG4gICAgICAgIHdyYXBwZXIuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGlkPVwicHJvZ3Jlc3MtY2lyY2xlXCIgY2xhc3M9XCJwcm9ncmVzcy1jaXJjbGVcIj5cbiAgICAgICAgICAgIDxzcGFuIGlkPVwiZGlzcGxheVRleHRcIj5cbiAgICAgICAgICAgICAgICAwJVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtaGFsZi1jbGlwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpcnN0NTAtYmFyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZhbHVlLWJhclwiIGlkPVwicHJvZ3Jlc3MtYmFyXCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgICAgIHdyYXBwZXIuaW5uZXJIVE1MID0gYFxuICAgICAgICA8c3BhbiBpZD1cImRpc3BsYXlUZXh0XCI+MCU8L3NwYW4+XG4gICAgICAgIDxzdmcgaWQ9XCJjaXJjdWxhci1sb2FkZXJcInZpZXdCb3g9XCIyNSAyNSA1MCA1MFwiID5cbiAgICAgICAgICAgIDxjaXJjbGUgaWQ9XCJsb2FkZXItcGF0aFwiIGN4PVwiNTBcIiBjeT1cIjUwXCIgcj1cIjIwXCIgZmlsbD1cIm5vbmVcIiAvPlxuICAgICAgICAgICAgPGNpcmNsZSBpZD1cImxvYWRlci1wYXRoLWJnXCIgY3g9XCI1MFwiIGN5PVwiNTBcIiByPVwiMjBcIiBmaWxsPVwibm9uZVwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgICBgO1xuXG4gICAgICAgIC8vIEFkZCBTdHlsZXNcbiAgICAgICAgY29uc3QgbGlua0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbiAgICAgICAgbGlua0VsZW0uc2V0QXR0cmlidXRlKFwicmVsXCIsIFwic3R5bGVzaGVldFwiKTtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRvIGxpbmsgdGhlIGNvcnJlY3Qgc3R5bGVzaGVldCB3aXRoIHRoZSBjb3JyZWN0IHN0eWxpbmdzXG4gICAgICAgIGxpbmtFbGVtLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIuL2Fzc2V0cy9zdHlsZXMvcHJvZ3Jlc3MtY2lyY2xlLmNzc1wiKTtcbiAgICAgICAgdGhpcy5lbGVtZW50cy5saW5rRWxlbSA9IGxpbmtFbGVtO1xuXG4gICAgICAgIC8vIGF0dGFjaCB0aGUgY3JlYXRlZCBlbGVtZW50cyB0byB0aGUgc2hhZG93IERPTVxuICAgICAgICB0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kKGxpbmtFbGVtLCB3cmFwcGVyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0IHNpemUgb2YgcHJvZ3Jlc3MgY2lyY2xlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZvbnRTaXplIC0gZXhhbXBsZTogYDFyZW1gXG4gICAgICovXG4gICAgc2V0U2l6ZShmb250U2l6ZSkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKFwid3JhcHBlclwiKTtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5mb250U2l6ZSA9IGZvbnRTaXplO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgZGlzcGxheSB0ZXh0IG9mIHRoZSBwcm9ncmVzcyBjaXJjbGVcbiAgICAgKiBAcGFyYW0geyp9IHRleHQgXG4gICAgICovXG4gICAgc2V0RGlzcGxheVRleHQodGV4dCkge1xuICAgICAgICB0aGlzLmRpc3BsYXlUZXh0ID0gdGV4dDtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoXCJkaXNwbGF5VGV4dFwiKTtcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgcGVyY2VudGFnZSBvZiB0aGUgcHJvZ3Jlc3MgYmFyIFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwZXJjZW50IC0gYSBwZXJjZW50IHZhbHVlIHJhbmdpbmcgZnJvbSAwIHRvIDFcbiAgICAgKi9cbiAgICBzZXRQZXJjZW50YWdlKHBlcmNlbnQpIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoXCJsb2FkZXItcGF0aFwiKTtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5zdHJva2VEYXNob2Zmc2V0ID0gLSAoMSAtIHBlcmNlbnQpICogMTI3LjU7XG4gICAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJwcm9ncmVzcy1jaXJjbGVcIiwgUHJvZ3Jlc3NDaXJjbGVDb21wb25lbnQpOyIsIi8qKlxuICogQGNsYXNzIFRhc2tcbiAqIFxuICogQ29udGFpbnMgaW5mb3JtYXRpb24gYWJvdXQgYSBnaXZlbiBUYXNrXG4gKiBcbiAqL1xuXG5jbGFzcyBUYXNrQ29tcG9uZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgdGhpcy5lbGVtZW50cyA9IHt9O1xuICAgICAgdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiBcIm9wZW5cIiB9KTtcblxuICAgICAgY29uc3QgcG9tb3Rhc2sgPSB0aGlzO1xuICAgICAgcG9tb3Rhc2suaXNDdXJyZW50VGFzayA9IHRydWU7XG4gICAgICBwb21vdGFzay5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgIC8vIGlmIHdlIHJlY2VpdmVkIHN0b3Agc2lnbmFsIGZyb20gc3RvcCBidXR0b24gb2YgdGhlIHBvbW8gdGltZXIsIGl0IHdpbGwgdHJpZ2dlciBpbmNvbXBsZXRlXG4gICAgICBjb25zdCB3cmFwcGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFza1wiKTtcbiAgICAgIHdyYXBwZXJEaXYuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG4gICAgICAvLyBBIGRpdiB3cmFwcGVyIGZvciB0aGUgdGl0bGUgYW5kIGRlc2NyaXB0aW9uXG4gICAgICBjb25zdCB3cmFwcGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB3cmFwcGVyVGV4dC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRleHR3cmFwcGVyXCIpO1xuICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZCh3cmFwcGVyVGV4dCk7XG5cbiAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRpdGxlXCIpO1xuICAgICAgdGl0bGUuaW5uZXJUZXh0ID0gdGhpcy50ZXh0Q29udGVudCB8fCBcIlwiO1xuICAgICAgdGhpcy5lbGVtZW50cy50aXRsZSA9IHRpdGxlO1xuICAgICAgd3JhcHBlclRleHQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkZXNjcmlwdGlvblwiKTtcbiAgICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IHRoaXMuZ2V0QXR0cmlidXRlKFwiZGVzY3JpcHRpb25cIikgfHwgXCJcIjtcbiAgICAgIHRoaXMuZWxlbWVudHMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgIHdyYXBwZXJUZXh0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuXG4gICAgICAvLyBBIGRpdiB3cmFwcGVyIGZvciB0aGUgY29tcGxldGlvbiBjaXJjbGVcbiAgICAgIGNvbnN0IHdyYXBwZXJDb21wbGV0aW9uQ2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHdyYXBwZXJDb21wbGV0aW9uQ2lyY2xlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwid3JhcHBlckNpcmNsZVwiKTtcbiAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQod3JhcHBlckNvbXBsZXRpb25DaXJjbGUpO1xuICAgICAgLy8gVGhlIEdyZWVuLCBSZWQgb3IgWWVsbG93IGNpcmNsZSB0aGF0IGRlc2NyaWJlcyB0aGUgcmF0aW8gb2YgUG9tb3MgZXhwZWN0ZWQgdnMgUG9tb3MgVXNlZFxuICAgICAgY29uc3QgcG9tb0NpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBwb21vQ2lyY2xlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicG9tb0NpcmNsZVwiKTtcbiAgICAgIHRoaXMucG9tb3NVc2VkID0gcGFyc2VJbnQodGhpcy5nZXRBdHRyaWJ1dGUoXCJwb21vc1VzZWRcIikpO1xuICAgICAgcG9tb0NpcmNsZS5wcmVxID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJwb21vc1JlcXVpcmVkXCIpO1xuICAgICAgcG9tb0NpcmNsZS5pbm5lclRleHQgPSB0aGlzLmdldEF0dHJpYnV0ZShcInBvbW9zVXNlZFwiKSArIFwiL1wiICsgdGhpcy5nZXRBdHRyaWJ1dGUoXCJwb21vc1JlcXVpcmVkXCIpO1xuICAgICAgdGhpcy5lbGVtZW50cy5wb21vQ2lyY2xlID0gcG9tb0NpcmNsZTtcblxuICAgICAgd3JhcHBlckNvbXBsZXRpb25DaXJjbGUuYXBwZW5kQ2hpbGQocG9tb0NpcmNsZSk7XG4gICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHdyYXBwZXJDb21wbGV0aW9uQ2lyY2xlKTtcblxuICAgICAgLy8gQSBkaXYgd3JhcHBlciBmb3IgdGhlIGNoZWNrIG1hcmtcbiAgICAgIGNvbnN0IHdyYXBwZXJDaGVja01hcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgd3JhcHBlckNoZWNrTWFyay5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIndyYXBwZXJDaGVja01hcmtcIik7XG4gICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHdyYXBwZXJDaGVja01hcmspO1xuICAgICAgLy8gVGhlIENoZWNrIG1hcmsgdGhhdCBkZWZpbmVzIGlmIGEgdGFzayBpcyBjb21wbGV0ZSBvciBub3RcbiAgICAgIGNvbnN0IGNoZWNrTWFyayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbiAgICAgIGlmICh0aGlzLmNvbXBsZXRlZCA9PSB0cnVlKSB7XG4gICAgICAgICBjaGVja01hcmsuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb21wbGV0ZUNoZWNrTWFya1wiKTtcbiAgICAgICAgIGNoZWNrTWFyay5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL2Fzc2V0cy9zdmdJbWFnZXMvY2hlY2tfQ29tcGxldGUuc3ZnXCIpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgICBjaGVja01hcmsuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpbmNvbXBsZXRlQ2hlY2tNYXJrXCIpO1xuICAgICAgICAgY2hlY2tNYXJrLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4vYXNzZXRzL3N2Z0ltYWdlcy9jaGVja19JbmNvbXBsZXRlLnN2Z1wiKTtcbiAgICAgIH1cblxuICAgICAgY2hlY2tNYXJrLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICBjaGVja01hcmsuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb21wbGV0ZUNoZWNrTWFya1wiKTtcbiAgICAgICAgIGNoZWNrTWFyay5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL2Fzc2V0cy9zdmdJbWFnZXMvY2hlY2tfQ29tcGxldGUuc3ZnXCIpO1xuICAgICAgICAgcG9tb3Rhc2suY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgIHBvbW90YXNrLmlzQ3VycmVudFRhc2sgPSBmYWxzZTtcblxuICAgICAgICAgY29sb3JEZWNpZGVyKHBvbW9DaXJjbGUsIHBvbW90YXNrKTtcblxuICAgICAgfTtcblxuICAgICAgd3JhcHBlckNoZWNrTWFyay5hcHBlbmRDaGlsZChjaGVja01hcmspO1xuICAgICAgdGhpcy5lbGVtZW50cy5jaGVja01hcmsgPSBjaGVja01hcms7XG5cbiAgICAgIC8vIEEgZGl2IHdyYXBwZXIgZm9yIHRoZSBjaGVjayBtYXJrXG4gICAgICAvLyBjb25zdCB3cmFwcGVyRHJhZ0FuZERyb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgLy8gd3JhcHBlckRyYWdBbmREcm9wLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwid3JhcHBlckRyYWdBbmREcm9wXCIpO1xuICAgICAgLy8gd3JhcHBlci5hcHBlbmRDaGlsZCh3cmFwcGVyRHJhZ0FuZERyb3ApO1xuICAgICAgLy8gVGhlIERyYWcgYW5kIERyb3AgU1ZHXG4gICAgICAvLyBjb25zdCBpbWdEcmFnQW5kRHJvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAvLyBpbWdEcmFnQW5kRHJvcC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRyYWdBbmREcm9wXCIpO1xuICAgICAgLy8gaW1nRHJhZ0FuZERyb3Auc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi9hc3NldHMvc3ZnSW1hZ2VzL2RyYWctZG90cy5zdmdcIik7XG4gICAgICAvLyB3cmFwcGVyRHJhZ0FuZERyb3AuYXBwZW5kQ2hpbGQoaW1nRHJhZ0FuZERyb3ApO1xuICAgICAgLy8gdGhpcy5lbGVtZW50cy5kcmFnQW5kRHJvcCA9IGltZ0RyYWdBbmREcm9wO1xuXG4gICAgICBjb25zdCB3cmFwcGVyRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHdyYXBwZXJEZWxldGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ3cmFwcGVyRGVsZXRlXCIpO1xuICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZCh3cmFwcGVyRGVsZXRlKTtcbiAgICAgIGNvbnN0IGRlbGV0ZVRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgZGVsZXRlVGFza0J0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRlbGV0ZS10YXNrLWJ0blwiKTtcbiAgICAgIGRlbGV0ZVRhc2tCdG4uc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi9hc3NldHMvc3ZnSW1hZ2VzL2RlbGV0ZS5zdmdcIik7XG4gICAgICB3cmFwcGVyRGVsZXRlLmFwcGVuZENoaWxkKGRlbGV0ZVRhc2tCdG4pO1xuICAgICAgdGhpcy5lbGVtZW50cy5kZWxldGVUYXNrQnRuID0gZGVsZXRlVGFza0J0bjtcblxuICAgICAgdGhpcy5lbGVtZW50cy53cmFwcGVyID0gd3JhcHBlcjtcblxuICAgICAgY29uc3QgbGlua0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbiAgICAgIGxpbmtFbGVtLnNldEF0dHJpYnV0ZShcInJlbFwiLCBcInN0eWxlc2hlZXRcIik7XG4gICAgICAvLyBtYWtlIHN1cmUgdG8gbGluayB0aGUgY29ycmVjdCBzdHlsZXNoZWV0IHdpdGggdGhlIGNvcnJlY3Qgc3R5bGluZ3NcbiAgICAgIGxpbmtFbGVtLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIuL2Fzc2V0cy9zdHlsZXMvdGFzay5jc3NcIik7XG4gICAgICB0aGlzLmVsZW1lbnRzLmxpbmtFbGVtID0gbGlua0VsZW07XG5cbiAgICAgIHRoaXMuc2hhZG93Um9vdC5hcHBlbmQod3JhcHBlckRpdiwgbGlua0VsZW0pO1xuICAgfVxuICAgc2V0IHBvbW9zdXNlZCh2YWwpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiSEVMTE9cIik7XG4gICB9XG4gICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG4gICAgICBjb25zb2xlLmxvZyhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpO1xuICAgICAgaWYgKG5hbWUgPT09IFwicG9tb3N1c2VkXCIpIHtcbiAgICAgICAgIGNvbnNvbGUubG9nKG5ld1ZhbHVlKTtcbiAgICAgICAgIHRoaXMuZWxlbWVudHMucG9tb0NpcmNsZS5pbm5lclRleHQgPSBuZXdWYWx1ZSArIFwiL1wiICsgdGhpcy5nZXRBdHRyaWJ1dGUoXCJwb21vc1JlcXVpcmVkXCIpO1xuICAgICAgfVxuICAgfVxuXG4gICBzZXRGaW5pc2hUYXNrQ2FsbGJhY2soY2IpIHtcbiAgICAgIGNvbnN0IGNoZWNrTWFyayA9IHRoaXMuZWxlbWVudHMuY2hlY2tNYXJrO1xuICAgICAgY29uc3QgcG9tb3Rhc2sgPSB0aGlzO1xuICAgICAgY2hlY2tNYXJrLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICBjaGVja01hcmsuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb21wbGV0ZUNoZWNrTWFya1wiKTtcbiAgICAgICAgIGNoZWNrTWFyay5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL2Fzc2V0cy9zdmdJbWFnZXMvY2hlY2tfQ29tcGxldGUuc3ZnXCIpO1xuICAgICAgICAgcG9tb3Rhc2suY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgIHBvbW90YXNrLmlzQ3VycmVudFRhc2sgPSBmYWxzZTtcblxuICAgICAgICAgY29sb3JEZWNpZGVyKHBvbW90YXNrLmVsZW1lbnRzLnBvbW9DaXJjbGUsIHBvbW90YXNrKTtcbiAgICAgICAgIGNiKCk7XG4gICAgICB9O1xuICAgfVxuXG4gICBzZXREZWxldGVUYXNrQ2FsbGJhY2soY2IpIHtcbiAgICAgIHRoaXMuZWxlbWVudHMuZGVsZXRlVGFza0J0bi5vbmNsaWNrID0gY2I7XG4gICB9XG5cbiAgIGluY3JlbWVudFBvbW9zVXNlZCgpIHtcbiAgICAgIHRoaXMucG9tb3NVc2VkICs9IDE7XG4gICAgICB0aGlzLmVsZW1lbnRzLnBvbW9DaXJjbGUuaW5uZXJUZXh0ID0gdGhpcy5wb21vc1VzZWQgKyBcIi9cIiArIHRoaXMuZ2V0QXR0cmlidXRlKFwicG9tb3NSZXF1aXJlZFwiKTtcbiAgICAgIFxuICAgfVxuICAgaGlkZSgpIHtcbiAgICAgIHRoaXMuZWxlbWVudHMud3JhcHBlci5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgIH1cblxufVxuXG5mdW5jdGlvbiBjb2xvckRlY2lkZXIocG9tb0NpcmNsZSwgcG9tb3Rhc2spIHtcbiAgIC8vY29uc29sZS5sb2cocG9tb0NpcmNsZS5wcmVxKTtcbiAgIGlmIChwb21vdGFzay5pc0N1cnJlbnRUYXNrID09PSB0cnVlKSB7XG4gICAgICBwb21vQ2lyY2xlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY3VycmVudFRhc2tcIik7XG4gICB9XG4gICBlbHNlIGlmIChwb21vdGFzay5jb21wbGV0ZWQgPT09IHRydWUpIHtcbiAgICAgIGlmIChwb21vdGFzay5wb21vc1VzZWQgPD0gcG9tb0NpcmNsZS5wcmVxKSB7XG4gICAgICAgICBwb21vQ2lyY2xlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZ29vZFRpbWluZ1Rhc2tcIik7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgIHBvbW9DaXJjbGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJiYWRUaW1pbmdUYXNrXCIpO1xuICAgICAgfVxuICAgfVxuICAgZWxzZSBpZiAoIXBvbW90YXNrLmNvbXBsZXRlZCkge1xuICAgICAgcG9tb0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImluY29tcGxldGVUYXNrXCIpO1xuICAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInBvbW8tdGFza1wiLCBUYXNrQ29tcG9uZW50KTsiLCJpbXBvcnQgeyBQT01PX1RBU0tfSU5ERVgsIFBPTU9fVEFTS19NQVAgfSBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgeyBQT01PX1NFU1NJT05fSUQsIExBVEVTVF9QT01PX1NFU1NJT05fU1RBVFVTLCBQT01PX1NFU1NJT05fTUFQIH0gZnJvbSBcIi4vc2Vzc2lvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZURhdGFiYXNlKCkge1xuICAgIC8vIGNoZWNrIGlmIHdlIG5lZWQgdG8gaW5pdGlhbGl6ZVxuICAgIGxldCBuZWVkVG9Jbml0aWFsaXplID0gZmFsc2U7XG4gICAgaWYgKGdldE9iamVjdChQT01PX1RBU0tfTUFQKSA9PT0gbnVsbCkge1xuICAgICAgICBuZWVkVG9Jbml0aWFsaXplID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGdldE9iamVjdChQT01PX1RBU0tfSU5ERVgpID09PSBudWxsKSB7XG4gICAgICAgIG5lZWRUb0luaXRpYWxpemUgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFBPTU9fU0VTU0lPTl9JRCkgPT09IG51bGwpIHtcbiAgICAgICAgbmVlZFRvSW5pdGlhbGl6ZSA9IHRydWU7XG4gICAgfVxuICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oTEFURVNUX1BPTU9fU0VTU0lPTl9TVEFUVVMpID09PSBudWxsKSB7XG4gICAgICAgIG5lZWRUb0luaXRpYWxpemUgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoZ2V0T2JqZWN0KFBPTU9fU0VTU0lPTl9NQVApID09PSBudWxsKSB7XG4gICAgICAgIG5lZWRUb0luaXRpYWxpemUgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIHRoZW4gaW5pdGlhbGl6ZVxuICAgIGlmIChuZWVkVG9Jbml0aWFsaXplKSB7XG4gICAgICAgIHN0b3JlT2JqZWN0KFBPTU9fVEFTS19NQVAsIHt9KTtcbiAgICAgICAgc3RvcmVPYmplY3QoUE9NT19UQVNLX0lOREVYLCAwKTtcbiAgICAgICAgc3RvcmVPYmplY3QoTEFURVNUX1BPTU9fU0VTU0lPTl9TVEFUVVMsIFwiY29tcGxldGVcIik7XG4gICAgICAgIHN0b3JlT2JqZWN0KFBPTU9fU0VTU0lPTl9JRCwgMCk7XG4gICAgICAgIHN0b3JlT2JqZWN0KFBPTU9fU0VTU0lPTl9NQVAsIHt9KTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gcmVzZXREYXRhYmFzZSgpIHtcbiAgICBkZWxldGUgbG9jYWxTdG9yYWdlW1BPTU9fVEFTS19NQVBdO1xuICAgIGRlbGV0ZSBsb2NhbFN0b3JhZ2VbUE9NT19UQVNLX0lOREVYXTtcbiAgICBkZWxldGUgbG9jYWxTdG9yYWdlW0xBVEVTVF9QT01PX1NFU1NJT05fU1RBVFVTXTtcbiAgICBkZWxldGUgbG9jYWxTdG9yYWdlW1BPTU9fU0VTU0lPTl9JRF07XG4gICAgZGVsZXRlIGxvY2FsU3RvcmFnZVtQT01PX1NFU1NJT05fTUFQXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JlT2JqZWN0KGtleSwgb2JqZWN0KSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShvYmplY3QpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRPYmplY3Qoa2V5KSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSk7XG59IiwiLyoqXG4gKiBUaGlzIGZpbGUgaXMgcmVsYXRlZCB0byBmaW5kaW5nIHBvbW8gc2Vzc2lvbnNcbiAqL1xuaW1wb3J0IHsgZ2V0T2JqZWN0LCBzdG9yZU9iamVjdCB9IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgeyBkZWxldGVUYXNrQnlUYXNrSUQsIHN0b3JlVGFzaywgVGFzayB9IGZyb20gXCIuL3Rhc2tcIjtcblxuXG5leHBvcnQgY29uc3QgUE9NT19TRVNTSU9OX0lEID0gXCJwb21vX3Nlc3Npb25faWRcIjtcbmV4cG9ydCBjb25zdCBMQVRFU1RfUE9NT19TRVNTSU9OX1NUQVRVUyA9IFwibGF0ZXN0X3BvbW9fc2Vzc2lvbl9zdGF0dXNcIjtcbmV4cG9ydCBjb25zdCBQT01PX1NFU1NJT05fTUFQID0gXCJwb21vX3Nlc3Npb25fbWFwXCI7XG5cbi8qKiB0aGUgZGlmZmVyZW50IHBvbW8gc2Vzc2lvbiBtb2RlcyBhcyBjb25zdGFudHMgKi9cbmV4cG9ydCBjb25zdCBQT01PX1NFU1NJT05fTU9ERVMgPSB7XG4gIC8qKiB3aGVuIHRoZSB1c2VyIGlzIGluIHRoZSBpbnRlcmZhY2Ugb2YgY3JlYXRpbmcgYSBuZXcgdGltZXIgYW5kIGhhcyBub3Qgc3RhcnRlZCB0aGVpciBuZXcgc2Vzc2lvbiB5ZXQgKi9cbiAgSU5BQ1RJVkU6IFwiaW5hY3RpdmVcIixcbiAgLyoqIHdoZW4gcnVubmluZyB0aGUgYnJlYWsgdGltZXIgKi9cbiAgQlJFQUs6IFwiYnJlYWtcIixcbiAgLyoqIHdoZW4gcnVubmluZyB0aGUgbG9uZ2VyIGJyZWFrIHRpbWVyICovXG4gIExPTkdfQlJFQUs6IFwibG9uZ2JyZWFrXCIsXG4gIC8qKiB3aGVuIHJ1bm5pbmcgdGhlIGFjdGl2ZSBwb21vIHdvcmsgdGltZSAqL1xuICBBQ1RJVkU6IFwiYWN0aXZlXCIsXG4gIC8qKiB3aGVuIHRoZSB1c2VyIG1hcmtzIHRoaXMgcG9tbyBzZXNzaW9uIGFzIGNvbXBsZXRlLCByZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGFza3MgYXJlIGNvbXBsZXRlZCBvciBub3QgKi9cbiAgQ09NUExFVEU6IFwiY29tcGxldGVcIixcbn07XG5cbmV4cG9ydCBjbGFzcyBQb21vU2Vzc2lvbiB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgUG9tbyBTZXNzaW9uIG9iamVjdFxuICAgKiBAcGFyYW0ge251bWJlcn0gaWQgLSBpZCBvZiB0aGlzIHNlc3Npb25cbiAgICovXG4gIGNvbnN0cnVjdG9yKGlkKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIC8qKiBAdHlwZSB7VGFza1tdfSAtIGEgbGlzdCBvZiBhbGwgdGFza3MgYXNzb2NpYXRlZCB3aXRoIHRoaXMgc2Vzc2lvbiAqL1xuICAgIHRoaXMuYWxsVGFza3MgPSBbXTtcbiAgICAvKiogQHR5cGUge3N0cmluZ30gLSB0aGUgY3VycmVudCBtb2RlIG9mIHRoZSBwb21vIHNlc3Npb24gKi9cbiAgICB0aGlzLm1vZGUgPSBQT01PX1NFU1NJT05fTU9ERVMuSU5BQ1RJVkU7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9IC0gdGhlIGN1cnJlbnQgdGltZSBvZiB0aGUgcG9tbyBzZXNzaW9uICovXG4gICAgdGhpcy50aW1lID0gMDtcblxuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAtIG51bWJlciBvZiBwb21vcyBlbGFwc2VkIHN1Y2Nlc2Z1bGx5IGZvciB0aGlzIHBvbW8gc2Vzc2lvbiAqL1xuICAgIHRoaXMucG9tb3NFbGFwc2VkID0gMDtcblxuICAgIHRoaXMuc3RhcnREYXRlID0gbmV3IERhdGUoKTtcbiAgfVxuICAvKipcbiAgICogXG4gICAqIEByZXR1cm5zIHtUYXNrIHwgbnVsbCB9IC0gdGhlIGN1cnJlbnQgdGFzayBmb3IgdGhpcyBwb21vIHNlc3Npb24gb3IgbnVsbCBpZiB0aGVyZSBhcmUgbm8gdGFza3MgbGVmdFxuICAgKi9cbiAgY3VycmVudFRhc2soKSB7XG4gICAgbGV0IGFsbEluUHJvZ3Jlc3NUYXNrcyA9IHRoaXMuYWxsVGFza3MuZmlsdGVyKCh0YXNrKSA9PiAhdGFzay5jb21wbGV0ZWQpO1xuICAgIGlmIChhbGxJblByb2dyZXNzVGFza3MubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gYWxsSW5Qcm9ncmVzc1Rhc2tzWzBdO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICAvKipcbiAgICogQWRkcyBhIG5ldyB0YXNrXG4gICAqIEBwYXJhbSB7VGFza30gdGFzayBcbiAgICovXG4gIGFkZFRhc2sodGFzaykge1xuICAgIHN0b3JlVGFzayh0YXNrKTtcbiAgICB0aGlzLmFsbFRhc2tzLnB1c2godGFzayk7XG4gIH1cbiAgLyoqXG4gICAqIERlbGV0ZSBhIHRhc2tcbiAgICogQHBhcmFtIHtUYXNrfSB0YXNrIFxuICAgKi9cbiAgZGVsZXRlVGFzayh0YXNrKSB7XG4gICAgZGVsZXRlVGFza0J5VGFza0lEKHRhc2suaWQpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hbGxUYXNrcy5sZW5ndGg7IGkrKyl7XG4gICAgICBjb25zdCBzdG9yZWRUYXNrID0gdGhpcy5hbGxUYXNrc1tpXTtcbiAgICAgIGlmICh0YXNrLmlkID09PSBzdG9yZWRUYXNrLmlkKSB7XG4gICAgICAgIHRoaXMuYWxsVGFza3Muc3BsaWNlKGksIDEpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbXBsZXRlcyB0aGUgZ2l2ZW4gdGFzayBhc3NvY2lhdGVkIHRvIHRoZSBpZFxuICAgKiBAcGFyYW0ge251bWJlcn0gaWQgXG4gICAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIGNvbXBsZXRlZCwgZmFsc2UgaWYgbm8gdGFzayBmb3VuZFxuICAgKi9cbiAgY29tcGxldGVUYXNrKGlkKSB7XG4gICAgZm9yIChsZXQgdGFzayBvZiB0aGlzLmFsbFRhc2tzKSB7XG4gICAgICBpZiAodGFzay5pZCA9PT0gaWQpIHtcbiAgICAgICAgdGFzay5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBuZXh0IGluY29tcGxldGUgdGFzayBpbiB0aGUgb3JkZXIgb3IgbnVsbCBpZiBhbGwgY29tcGxldGVkXG4gICAqIEByZXR1cm5zIHtUYXNrIHwgbnVsbH1cbiAgICovXG4gIGdldE5leHRUYXNrKCkge1xuICAgIGZvciAoY29uc3QgdGFzayBvZiB0aGlzLmFsbFRhc2tzKSB7XG4gICAgICBpZiAodGFzay5jb21wbGV0ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiB0YXNrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICAvKipcbiAgICogSW5jcmVtZW50IHRoZSBwb21vcyB1c2VkIGZvciBhIHRhc2sgYW5kIGluY3JlbWVudCBwb21vc0VsYXBzZWRcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlkIFxuICAgKi9cbiAgaW5jcmVtZW50VGFza1BvbW9zVXNlZChpZCkge1xuICAgIGZvciAoY29uc3QgdGFzayBvZiB0aGlzLmFsbFRhc2tzKSB7XG4gICAgICBpZiAodGFzay5pZCA9PT0gaWQpIHtcbiAgICAgICAgdGFzay5wb21vc1VzZWQgKz0gMTtcbiAgICAgICAgdGhpcy5wb21vc0VsYXBzZWQgKz0gMTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBcbiAgICogQHJldHVybnMgdHJ1ZSBpZiBzZXNzaW9uIGlzIGluIGJyZWFrIG1vZGUgcmlnaHQgbm93LCBmYWxzZSBvdGhlcndpc2VcbiAgICovXG4gIGlzQnJlYWsoKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZSA9PT0gUE9NT19TRVNTSU9OX01PREVTLkxPTkdfQlJFQUsgfHwgdGhpcy5tb2RlID09PSBQT01PX1NFU1NJT05fTU9ERVMuQlJFQUs7XG4gIH1cblxuICAvKipcbiAgICogVE9ET1xuICAgKi9cbiAgcmVvcmRlclRhc2tzKCkge1xuXG4gIH1cblxuICBnZXRQb21vc0xlZnRJblNlc3Npb24oKSB7XG4gICAgbGV0IGxlZnQgPSAwO1xuICAgIHRoaXMuYWxsVGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgbGVmdCArPSBNYXRoLm1heCh0YXNrLnBvbW9zUmVxdWlyZWQgLSB0YXNrLnBvbW9zVXNlZCwgMCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGxlZnQ7XG4gIH1cbiAgcGFyc2VTZXNzaW9uRnJvbU9iaihzZXNzaW9uX29iaikge1xuICAgIHRoaXMuaWQgPSBzZXNzaW9uX29iai5pZDtcbiAgICB0aGlzLm1vZGUgPSBzZXNzaW9uX29iai5tb2RlO1xuICAgIHRoaXMudGltZSA9IHNlc3Npb25fb2JqLnRpbWU7XG4gICAgdGhpcy5wb21vc0VsYXBzZWQgPSBzZXNzaW9uX29iai5wb21vc0VsYXBzZWQ7XG4gICAgdGhpcy5zdGFydERhdGUgPSBuZXcgRGF0ZShzZXNzaW9uX29iai5zdGFydERhdGUpO1xuICAgIHRoaXMuYWxsVGFza3MgPSBzZXNzaW9uX29iai5hbGxUYXNrcy5tYXAoKHRhc2tPYmopID0+IHtcbiAgICAgIGxldCB0ID0gbmV3IFRhc2soKTtcbiAgICAgIHQgPSB0LnBhcnNlVGFza0Zyb21PYmoodGFza09iaik7XG4gICAgICByZXR1cm4gdDtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBzZXJpYWxpemVJbnRvT2JqKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogdGhpcy5pZCwgYWxsVGFza3M6IHRoaXMuYWxsVGFza3MubWFwKCh0YXNrKSA9PiB0YXNrLnNlcmlhbGl6ZUludG9PYmooKSksIG1vZGU6IHRoaXMubW9kZSwgdGltZTogdGhpcy50aW1lLCBwb21vc0VsYXBzZWQ6IHRoaXMucG9tb3NFbGFwc2VkLCBzdGFydERhdGU6IHRoaXMuc3RhcnREYXRlLmdldFRpbWUoKVxuICAgIH07XG4gIH1cbn1cblxuLyoqXG4gKiBHZXQgYSBwb21vIHNlc3Npb24gb2JqZWN0XG4gKiBAcGFyYW0ge251bWJlcn0gaWQgXG4gKiBAcmV0dXJucyB7UG9tb1Nlc3Npb24gfCBudWxsfSB0aGUgc2Vzc2lvbiBmb3IgdGhpcyBpZCBvciBudWxsIGlmIHRoZXJlIGlzIG5vIHNlc3Npb24gYXNzb2NpYXRlZCB3aXRoIHRoaXMgaWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFBvbW9TZXNzaW9uKGlkKSB7XG4gIGNvbnN0IGFsbFNlc3Npb25zID0gZ2V0T2JqZWN0KFBPTU9fU0VTU0lPTl9NQVApO1xuICBsZXQgcCA9IG5ldyBQb21vU2Vzc2lvbigpO1xuICBpZiAoIWFsbFNlc3Npb25zW2lkXSkgcmV0dXJuIG51bGw7XG4gIHJldHVybiBwLnBhcnNlU2Vzc2lvbkZyb21PYmooYWxsU2Vzc2lvbnNbaWRdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JlUG9tb1Nlc3Npb24oc2Vzc2lvbikge1xuICBjb25zdCBhbGxTZXNzaW9ucyA9IGdldE9iamVjdChQT01PX1NFU1NJT05fTUFQKTtcbiAgYWxsU2Vzc2lvbnNbc2Vzc2lvbi5pZF0gPSBzZXNzaW9uLnNlcmlhbGl6ZUludG9PYmooKTtcbiAgc3RvcmVPYmplY3QoUE9NT19TRVNTSU9OX01BUCwgYWxsU2Vzc2lvbnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmV3U2Vzc2lvbklEKCkge1xuICBsZXQgcHJldklEID0gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oUE9NT19TRVNTSU9OX0lEKSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFBPTU9fU0VTU0lPTl9JRCwgcHJldklEICsgMSk7XG4gIHJldHVybiBwcmV2SUQ7XG59XG5cbi8qKlxuICogU2V0IHRoZSBjdXJyZW50IHNlc3Npb24ncyBzdGF0dXNcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0dXMgLSBjYW4gYmUgXCJjb21wbGV0ZVwiIG9yIFwiaW4tcHJvZ3Jlc3NcIlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0Q3VycmVudFNlc3Npb25TdGF0dXMoc3RhdHVzKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKExBVEVTVF9QT01PX1NFU1NJT05fU1RBVFVTLCBzdGF0dXMpO1xufVxuXG4vKipcbiAqIFdpbGwgcmV0dXJuIHRoZSBzZXNzaW9uIElEIG9mIHRoZSBsYXN0IHNlc3Npb24gaWYgaXQgd2FzIG5vdCBlbmRlZC4gT3RoZXJ3aXNlIGlmIHRoZSBsYXN0IHNlc3Npb24gZG9lcyBub3QgZXhpc3QgXG4gKiBvciB3YXMgZW5kZWQgYWxyZWFkeSwgdGhpcyBmdW5jdGlvbiByZXR1cm5zIG51bGxcbiAqIFxuICogQHJldHVybnMge251bWJlciB8IG51bGx9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMYXRlc3RTZXNzaW9uSUQoKSB7XG4gIGxldCBzdGF0dXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShMQVRFU1RfUE9NT19TRVNTSU9OX1NUQVRVUyk7XG4gIGlmIChzdGF0dXMgPT09IFwiY29tcGxldGVcIikge1xuICAgIHJldHVybiBudWxsO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShQT01PX1NFU1NJT05fSUQpKSAtIDE7XG4gIH1cbn1cblxuLyoqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSB0cnVlIGlmIHRoZXJlIGlzIGEgdW5maW5pc2hlZCBzZXNzaW9uIHRoYXQgd2FzIG5vdCBjb21wbGV0ZWQgb3IgcXVpdHRlZC4gZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0aGVyZUlzVW5maW5pc2hlZFNlc3Npb24oKSB7XG4gIGxldCBzZXNzaW9uSUQgPSBnZXRMYXRlc3RTZXNzaW9uSUQoKTtcbiAgaWYgKHNlc3Npb25JRCA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICBsZXQgY3VycmVudFBvbW9TZXNzaW9uID0gZ2V0UG9tb1Nlc3Npb24oc2Vzc2lvbklEKTtcbiAgaWYgKGN1cnJlbnRQb21vU2Vzc2lvbiAhPT0gbnVsbCAmJiBjdXJyZW50UG9tb1Nlc3Npb24ubW9kZSAhPT0gUE9NT19TRVNTSU9OX01PREVTLkNPTVBMRVRFICYmIGN1cnJlbnRQb21vU2Vzc2lvbi5tb2RlICE9PSBQT01PX1NFU1NJT05fTU9ERVMuSU5BQ1RJVkUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb250aW51ZUFjdGl2ZVNlc3Npb24oKSB7XG4gIGlmICh0aGVyZUlzVW5maW5pc2hlZFNlc3Npb24oKSkge1xuICAgIHdpbmRvdy5sb2NhdGlvbiA9IFwiL3RpbWVyLmh0bWw/bG9hZFNhdmVkPXRydWVcIjtcbiAgfVxufSIsImltcG9ydCB7IGdldE9iamVjdCwgc3RvcmVPYmplY3QgfSBmcm9tIFwiLlwiO1xuaW1wb3J0IHsgZ2V0TGF0ZXN0U2Vzc2lvbklELCBnZXRQb21vU2Vzc2lvbiB9IGZyb20gXCIuL3Nlc3Npb25cIjtcblxuZXhwb3J0IGNsYXNzIFRhc2sge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzZXNzaW9uSUQgXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkZXNjcmlwdGlvbiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcG9tb3NSZXF1aXJlZCBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzZXNzaW9uSUQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgcG9tb3NSZXF1aXJlZCkge1xuICAgICAgICB0aGlzLnNlc3Npb25JRCA9IHNlc3Npb25JRDtcbiAgICAgICAgdGhpcy5pZCA9IC0xO1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5wb21vc1JlcXVpcmVkID0gcG9tb3NSZXF1aXJlZDtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wb21vc1VzZWQgPSAwO1xuICAgIH1cbiAgICBwYXJzZVRhc2tGcm9tT2JqKHRhc2tfb2JqKSB7XG4gICAgICAgIGxldCB0YXNrID0gbmV3IFRhc2sodGFza19vYmouc2Vzc2lvbklELCB0YXNrX29iai50aXRsZSwgdGFza19vYmouZGVzY3JpcHRpb24sIHRhc2tfb2JqLnBvbW9zUmVxdWlyZWQpO1xuICAgICAgICB0YXNrLmNvbXBsZXRlZCA9IHRhc2tfb2JqLmNvbXBsZXRlZDtcbiAgICAgICAgdGFzay5pZCA9IHRhc2tfb2JqLmlkO1xuICAgICAgICB0YXNrLnBvbW9zVXNlZCA9IHRhc2tfb2JqLnBvbW9zVXNlZDtcbiAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgfVxuICAgIHNlcmlhbGl6ZUludG9PYmooKSB7XG4gICAgICAgIHJldHVybiB7IHRpdGxlOiB0aGlzLnRpdGxlLCBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbiwgcG9tb3NSZXF1aXJlZDogdGhpcy5wb21vc1JlcXVpcmVkLCBjb21wbGV0ZWQ6IHRoaXMuY29tcGxldGVkLCBwb21vc1VzZWQ6IHRoaXMucG9tb3NVc2VkLCBpZDogdGhpcy5pZCwgc2Vzc2lvbklEOiB0aGlzLnNlc3Npb25JRCB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IFBPTU9fVEFTS19NQVAgPSBcInBvbW9fdGFza19tYXBcIjtcbmV4cG9ydCBjb25zdCBQT01PX1RBU0tfSU5ERVggPSBcInBvbW9fdGFza19pbmRleFwiO1xuXG4vKipcbiAqIFdpbGwgc3RvcmUgYSBuZXcgb3IgdXBkYXRlZCB0YXNrIGludG8gbG9jYWwgc3RvcmFnZVxuICogXG4gKiBIYXMgYSBzaWRlIGVmZmVjdCBvZiBhZGRpbmcgdGhlIGlkIG9mIHRoZSBuZXcgdGFzayBpZiBpdCB3YXNudCBzdG9yZWQgaW4gc3RvcmFnZSBiZWZvcmVcbiAqIFxuICogQHBhcmFtIHtUYXNrfSB0YXNrXG4gKiBAcmV0dXJucyB7bnVtYmVyfSAtIHRoZSBpZCBvZiB0aGUgdGFza1xuICovXG5leHBvcnQgZnVuY3Rpb24gc3RvcmVUYXNrKHRhc2spIHtcbiAgICBsZXQgdGFza19tYXAgPSBnZXRPYmplY3QoUE9NT19UQVNLX01BUCk7XG4gICAgaWYgKCF0YXNrX21hcFt0YXNrLmlkXSkge1xuICAgICAgICAvLyBpZiB0YXNrIG1hcCBkb2VzIG5vdCBoYXZlIHRoaXMgdGFzaywgY3JlYXRlIGEgbmV3IGluZGV4XG4gICAgICAgIGxldCBpZCA9IHBhcnNlSW50KGdldE9iamVjdChQT01PX1RBU0tfSU5ERVgpKTtcbiAgICAgICAgdGFzay5pZCA9IGlkO1xuICAgICAgICAvLyBpbmNyZW1lbnQgZ2xvYmFsIGlkXG4gICAgICAgIHN0b3JlT2JqZWN0KFBPTU9fVEFTS19JTkRFWCwgaWQgKyAxKTtcbiAgICB9XG4gICAgbGV0IG9iaiA9IHRhc2suc2VyaWFsaXplSW50b09iaigpO1xuICAgIHRhc2tfbWFwW3Rhc2suaWRdID0gb2JqO1xuICAgIHN0b3JlT2JqZWN0KFBPTU9fVEFTS19NQVAsIHRhc2tfbWFwKTtcbiAgICByZXR1cm4gdGFzay5pZDtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHRhc2sgYXNzb2NpYXRlZCB3aXRoIHRoaXMgaWRcbiAqIEBwYXJhbSB7bnVtYmVyfSBpZCBcbiAqIEByZXR1cm5zIHtUYXNrfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFzayhpZCkge1xuICAgIGxldCB0YXNrX21hcCA9IGdldE9iamVjdChQT01PX1RBU0tfTUFQKTtcbiAgICBsZXQgdGFza19vYmogPSB0YXNrX21hcFtpZF07XG4gICAgbGV0IHQgPSBuZXcgVGFzaygpO1xuICAgIHQgPSB0LnBhcnNlVGFza0Zyb21PYmoodGFza19vYmopO1xuICAgIHJldHVybiB0O1xuXG59XG4vKipcbiAqIEdldCBhbGwgdGFza3NcbiAqIFxuICogQHJldHVybnMge01hcDxudW1iZXIsIFRhc2s+fSAtIGEgbWFwIGZyb20gdGFzayBpZCB0byB0YXNrXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxUYXNrcygpIHtcbiAgICBsZXQgdGFza19tYXAgPSBnZXRPYmplY3QoUE9NT19UQVNLX01BUCk7XG4gICAgbGV0IHBhcnNlZF90YXNrX21hcCA9IHt9O1xuICAgIGZvciAobGV0IGlkIGluIHRhc2tfbWFwKSB7XG4gICAgICAgIGxldCB0YXNrX29iaiA9IHRhc2tfbWFwW2lkXTtcbiAgICAgICAgbGV0IHQgPSBuZXcgVGFzaygpO1xuICAgICAgICB0ID0gdC5wYXJzZVRhc2tGcm9tT2JqKHRhc2tfb2JqKTtcbiAgICAgICAgcGFyc2VkX3Rhc2tfbWFwW2lkXSA9IHQ7XG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRfdGFza19tYXA7XG59XG5cbi8qKlxuICogRGVsZXRlIGEgc3BlY2lmaWMgdGFzayBmcm9tIGRhdGFiYXNlIGJ5IHRoZSB1bmlxdWUgdGFzayBJRFxuICogXG4gKiBAcGFyYW0ge251bWJlcn0gaWQgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVUYXNrQnlUYXNrSUQoaWQpIHtcbiAgICBsZXQgdGFza19tYXAgPSBnZXRPYmplY3QoUE9NT19UQVNLX01BUCk7XG4gICAgZGVsZXRlIHRhc2tfbWFwW2lkXTtcbiAgICBzdG9yZU9iamVjdChQT01PX1RBU0tfTUFQLCB0YXNrX21hcCk7XG59XG5cblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlcmUgYXJlIGFueSB1bmZpbmlzaGVkIHRhc2tzIGZyb20gdGhlIHByZXZpb3VzIHNlc3Npb25cbiAqIEByZXR1cm5zIHtib29sZWFufSAtIHRydWUgaWYgdW5pZmluaXNoZWQgdGFza3MgZXhpc3QsIGZhbHNlIG90aGVyd2lzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXJlVGhlcmVVbmZpbmlzaGVkVGFza3NGcm9tTGFzdFNlc3Npb24oKSB7XG4gICAgbGV0IG9sZFNlc3Npb25JRCA9IGdldExhdGVzdFNlc3Npb25JRCgpO1xuICAgIGlmIChvbGRTZXNzaW9uSUQgPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICBsZXQgc2Vzc2lvbiA9IGdldFBvbW9TZXNzaW9uKG9sZFNlc3Npb25JRCk7XG4gICAgaWYgKHNlc3Npb24gPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoc2Vzc2lvbi5jdXJyZW50VGFzaygpID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG4iLCIvKipcbiAqIFdpbGwgcmFuZG9tbHkgcGljayBhIHRoZW1lIGFuZCB1bmlxdWUgYmFja2dyb3VuZCBkZXBlbmRpbmcgb24gd2hhdCBkYXkgaXQgaXMgYW5kIHdoYXQgdGltZSBpdCBpcyBhbmQgc2V0IGl0IG9uIHRoZSBwYWdlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RBbmRTZXRUaGVtZSh0b2RheSA9IG5ldyBEYXRlKCkpIHtcbiAgbGV0IGlkID0gMDtcbiAgbGV0IG51bUJHcyA9IDY7XG5cbiAgbGV0IGQgPSB0b2RheS5nZXREYXkoKTtcblxuICBsZXQgc2VlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmctc2VlZFwiKTtcblxuICBpZiAoc2VlZCA9PT0gbnVsbCB8fCBzZWVkWzBdICE9IGQpIHtcbiAgICBzZWVkID0gZCArIFwiLVwiICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbnVtQkdzKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJnLXNlZWRcIiwgc2VlZCk7XG4gIH1cbiAgbGV0IHRpbWVQZXJpb2QgPSBnZXRUaGVtZU1vZGUodG9kYXkpO1xuICBpZCA9IHBhcnNlSW50KHNlZWRbMl0pO1xuXG4gIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrZHJvcFwiKTtcbiAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy8ke3RpbWVQZXJpb2R9L2JnJHtpZH0uanBnXCIpYDtcbn07XG5cbmV4cG9ydCBjb25zdCBUSEVNRV9NT0RFUyA9IHtcbiAgREFZOiBcImRheVwiLFxuICBOSUdIVDogXCJuaWdodFwiLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRoZW1lTW9kZSh0b2RheSA9IG5ldyBEYXRlKCkpIHtcbiAgbGV0IHRpbWVQZXJpb2QgPSBUSEVNRV9NT0RFUy5EQVk7XG4gIGlmICh0b2RheS5nZXRIb3VycygpIDwgNCkge1xuICAgIHRpbWVQZXJpb2QgPSBUSEVNRV9NT0RFUy5OSUdIVDtcbiAgfVxuICBlbHNlIGlmICh0b2RheS5nZXRIb3VycygpIDwgMTgpIHtcbiAgICB0aW1lUGVyaW9kID0gVEhFTUVfTU9ERVMuREFZO1xuICB9IGVsc2UgaWYgKHRvZGF5LmdldEhvdXJzKCkgPCAyNCkge1xuICAgIHRpbWVQZXJpb2QgPSBUSEVNRV9NT0RFUy5OSUdIVDtcbiAgfVxuICByZXR1cm4gdGltZVBlcmlvZDtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCAqIGZyb20gXCIuL2J1dHRvbi9idXR0b25cIjtcbmV4cG9ydCAqIGZyb20gXCIuL21vZGFsL21vZGFsXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9tb2RhbC1pbnB1dC9tb2RhbC1pbnB1dFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vaGVhZGVyL2hlYWRlclwiO1xuZXhwb3J0ICogZnJvbSBcIi4vaW5wdXQvaW5wdXRcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3Byb2dyZXNzLWNpcmNsZS9wcm9ncmVzcy1jaXJjbGVcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3Rhc2svdGFza1wiOyJdLCJzb3VyY2VSb290IjoiIn0=