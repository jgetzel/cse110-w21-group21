const logoSVG = `<svg width="51" height="58" viewBox="0 0 51 58" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M25.5694 35.6138C25.5541 35.6138 25.5394 35.6114 25.5241 35.6114L27.8727 37.6594H23.1296L25.48 35.6114C15.7233 35.587 6.94835 31.7798 0.850098 25.7191C1.50678 36.3582 9.13473 44.6212 22.002 46.4H29.1367C42.004 44.6229 49.6308 36.3612 50.2886 25.7197C44.1698 31.7988 35.3608 35.6138 25.5694 35.6138Z" fill="#FA7F7F"/>
<path d="M24.4447 4.1294C25.3301 3.81317 25.6734 3.81317 26.5582 4.1294C27.4671 2.49765 28.8598 0.965948 30.316 0.413298C27.2907 -0.131611 23.674 -0.136375 20.6287 0.39305C22.106 0.927239 23.5241 2.47561 24.4447 4.1294Z" fill="#FA7F7F"/>
<path d="M26.6223 7.50904H24.3995C24.3995 7.50904 24.0144 5.5563 24.3995 5.13645C24.7922 4.70827 26.2731 4.66539 26.6229 5.13645C26.9639 5.59799 26.6223 7.50904 26.6223 7.50904Z" fill="#FA7F7F"/>
<path d="M49.057 13.0498C50.8206 11.2632 42.0022 -0.647336 33.7717 4.71242C35.0327 3.64821 35.6177 3.37605 36.0874 3.06638C35.5318 2.30827 34.5547 1.6913 33.3102 1.21488C32.1708 2.40534 30.7822 4.39679 30.7822 5.98864C35.4172 4.3557 39.8346 3.98468 43.2897 7.87587C37.3114 7.39468 34.6253 7.18922 32.5159 8.79477C34.2484 9.75119 36.2902 11.4359 36.065 17.1524C27.3777 8.35229 23.621 8.35169 14.9314 17.1524C14.7062 11.4353 16.7474 9.75119 18.4799 8.79477C16.3711 7.18922 13.6844 7.39468 7.70611 7.87587C11.1612 3.98468 15.5804 4.3557 20.2142 5.98864C20.2142 4.37416 18.7862 2.34817 17.6374 1.16367C16.3729 1.62699 15.3652 2.22907 14.7726 2.96871C15.3417 3.28732 15.8355 3.53744 17.2271 4.71242C8.99654 -0.647336 0.178097 11.2632 1.94179 13.0498C-0.827793 14.4523 0.0264202 21.3604 0.522017 24.2642C1.19104 24.9449 1.89946 25.5916 2.63256 26.2152V24.1636L3.22046 24.6864V26.7059C6.05353 29.0016 9.31871 30.8674 12.8937 32.1889V30.2796L13.4816 30.5208V32.3985C17.1442 33.6783 21.1166 34.393 25.2719 34.4174V32.8035H25.8603V34.4138C35.6465 34.3185 44.4226 30.4184 50.475 24.263C50.9717 21.3616 51.8265 14.4529 49.057 13.0498Z" fill="#FA7F7F"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="51" height="58" fill="white"/>
</clipPath>
</defs>
</svg>`
/**
 * STEPS:
 * CHANGE NAME FROM TEMPLATE TO XYZ
 * 
 * CHANGE DEFINITION AT BOTTOM FROM TEMPLATE TO XYZ (x-y-z or smth)
 */
class Header extends HTMLElement {
    constructor() {
        super();

        // use an object to store all relevant elements to the components for convenience
        this.elements = {};

        // Create a shadow root
        this.attachShadow({ mode: "open" }); // sets and returns 'this.shadowRoot'

        // Create an example element that will serve as our "root" element here
        const wrapper = document.createElement("nav");
        // set class as an example, this can be later used for css!
        wrapper.setAttribute("class", "pomo-header");

        wrapper.innerHTML += `<a href="index.html">` + logoSVG + `</a>`;

        wrapper.innerHTML += `<pomo-button style="right: 1rem;" type="nav">History</pomo-button>`;
        wrapper.innerHTML += `<pomo-button id="about-pomo" type="nav">Help</pomo-button>`

        wrapper.style =`padding: 1rem;`

        /* Result
        <img src="logo.png">
        <pomo-button type="nav">History</pomo-button>
        <pomo-button id="about-pomo" type="nav" style="position: absolute; right:0px; padding: 10px;">?</pomo-button>
        */

        // store it for future reference
        this.elements.wrapper = wrapper;

        // attach the created elements to the shadow DOM
        this.shadowRoot.append(linkElem, wrapper);
    }
}

customElements.define("pomo-header", Header);