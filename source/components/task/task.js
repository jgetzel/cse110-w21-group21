/**
 * @class Task
 * 
 * Contains information about a given Task
 * 
 */

 class TaskComponent extends HTMLElement {
     constructor() {
         super();
         this.elements = {};
         this.attachShadow({ mode: "open" });

         const wrapper = document.createElement("li");
         wrapper.setAttribute("class", "task");

         const title = document.createElement("p");
         title.setAttribute("class", "title");
         title.innerText = this.textContent || "";
         wrapper.appendChild(title);

         const description = document.createElement("p");
         description.setAttribute("class", "description");
         description.innerText = this.getAttribute("description") || "";
         wrapper.appendChild(description);

        //  // The Green, Red or Yellow circle that describes the ratio of Pomos expected vs Pomos Used
        //  const wrapperCompletionCircle = document.createElement("svg");
        //  wrapperCompletionCircle.setAttribute("class", "svgCircle");
        //  const completionCircle = document.createElement("circle");

        //  this.colorDecider();

        //  wrapperCompletionCircle.appendChild(completionCircle);
        //  wrapper.appendChild(wrapperCompletionCircle);

        //  // The Check mark that defines if a task is complete or not
        //  const wrapperCheckMark = document.createElement("svg");
        //  if(this.completed === true) {
        //     wrapperCheckMark.setAttribute("class", "completeCheckMark");
        //  }
        //  else {
        //     wrapperCheckMark.setAttribute("class", "incompleteCheckMark");
        //  }
        //  wrapper.appendChild(wrapperCheckMark);

         // The Drag and Drop SVG
         const imgDragAndDrop = document.createElement("img");
         imgDragAndDrop.setAttribute("class", "dragAndDrop");
         imgDragAndDrop.setAttribute("src", "./assets/svgImages/drag-dots.svg");
         wrapper.appendChild(imgDragAndDrop);
         
         this.elements.wrapper = wrapper;
         
         const linkElem = document.createElement("link");
         linkElem.setAttribute("rel", "stylesheet");
         // make sure to link the correct stylesheet with the correct stylings
         linkElem.setAttribute("href", "./assets/styles/task.css");
         this.elements.linkElem = linkElem;

         this.shadowRoot.append(wrapper, linkElem);
     }
    //  incrementPomosUsed() {
    //      this.pomosUsed += 1;
    //      colorDecider();
    //  }
    //  colorDecider() {
    //     if(this.isCurrentTask === true) {
    //         this.wrapper.completionCircle.setAttribute("class", "currentTask");
    //     }
    //     else if(this.completed === true){
    //         if(this.pomosUsed < this.pomosRequired) {
    //             this.wrapper.completionCircle.setAttribute("class", "goodTimingTask");
    //         }
    //         else {
    //             this.wrapper.completionCircle.setAttribute("class", "badTimingTask");
    //         }
    //     }
    //     else {
    //         this.wrapper.completionCircle.setAttribute("class", "incompleteTask");
    //     }
    //  }
    //  completeTask() {
    //      this.completed = true;
    //      this.colorDecider();
    //  }
 }

customElements.define("pomo-task", TaskComponent);