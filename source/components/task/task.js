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

      const pomotask = this;
      pomotask.isCurrentTask = true;
      pomotask.completed = false;
      // if we received stop signal from stop button of the pomo timer, it will trigger incomplete
      const wrapperDiv = document.createElement("div");
      const wrapper = document.createElement("li");
      wrapper.setAttribute("class", "task");
      wrapperDiv.appendChild(wrapper);
      // A div wrapper for the title and description
      const wrapperText = document.createElement("div");
      wrapperText.setAttribute("class", "textwrapper");
      wrapper.appendChild(wrapperText);

      const title = document.createElement("p");
      title.setAttribute("class", "title");
      title.innerText = this.textContent || "";
      this.elements.title = title;
      wrapperText.appendChild(title);

      const description = document.createElement("p");
      description.setAttribute("class", "description");
      description.innerText = this.getAttribute("description") || "";
      this.elements.description = description;
      wrapperText.appendChild(description);


      // A div wrapper for the completion circle
      const wrapperCompletionCircle = document.createElement("div");
      wrapperCompletionCircle.setAttribute("class", "wrapperCircle");
      wrapper.appendChild(wrapperCompletionCircle);
      // The Green, Red or Yellow circle that describes the ratio of Pomos expected vs Pomos Used
      const pomoCircle = document.createElement("div");
      pomoCircle.setAttribute("class", "pomoCircle");
      this.pomosUsed = parseInt(this.getAttribute("pomosUsed"));
      pomoCircle.preq = this.getAttribute("pomosRequired");
      pomoCircle.innerText = this.getAttribute("pomosUsed") + "/" + this.getAttribute("pomosRequired");
      this.elements.pomoCircle = pomoCircle;

      wrapperCompletionCircle.appendChild(pomoCircle);
      wrapper.appendChild(wrapperCompletionCircle);

      // A div wrapper for the check mark
      const wrapperCheckMark = document.createElement("div");
      wrapperCheckMark.setAttribute("class", "wrapperCheckMark");
      wrapper.appendChild(wrapperCheckMark);
      // The Check mark that defines if a task is complete or not
      const checkMark = document.createElement("img");

      if (this.completed == true) {
         checkMark.setAttribute("class", "completeCheckMark");
         checkMark.setAttribute("src", "./assets/svgImages/check_Complete.svg");
      }
      else {
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
      this.elements.checkMark = checkMark;

      // A div wrapper for the check mark
      const wrapperDragAndDrop = document.createElement("div");
      wrapperDragAndDrop.setAttribute("class", "wrapperDragAndDrop");
      wrapper.appendChild(wrapperDragAndDrop);
      // The Drag and Drop SVG
      const imgDragAndDrop = document.createElement("img");
      imgDragAndDrop.setAttribute("class", "dragAndDrop");
      imgDragAndDrop.setAttribute("src", "./assets/svgImages/drag-dots.svg");
      wrapperDragAndDrop.appendChild(imgDragAndDrop);
      this.elements.dragAndDrop = imgDragAndDrop;

      this.elements.wrapper = wrapper;

      const linkElem = document.createElement("link");
      linkElem.setAttribute("rel", "stylesheet");
      // make sure to link the correct stylesheet with the correct stylings
      linkElem.setAttribute("href", "./assets/styles/task.css");
      this.elements.linkElem = linkElem;

      this.shadowRoot.append(wrapperDiv, linkElem);
   }
   set pomosused(val) {
      console.log("HELLO");
   }
   attributeChangedCallback(name, oldValue, newValue) {
      console.log(name, oldValue, newValue);
      if (name === "pomosused") {
         console.log(newValue);
         this.elements.pomoCircle.innerText = newValue + "/" + this.getAttribute("pomosRequired");
      }
   }

   setFinishTaskCallback(cb) {
      const checkMark = this.elements.checkMark;
      const pomotask = this;
      checkMark.onclick = function () {
         checkMark.setAttribute("class", "completeCheckMark");
         checkMark.setAttribute("src", "./assets/svgImages/check_Complete.svg");
         pomotask.completed = true;
         pomotask.isCurrentTask = false;

         colorDecider(pomotask.elements.pomoCircle, pomotask);
         cb();
      };
   }

   incrementPomosUsed() {
      this.pomosUsed += 1;
      this.elements.pomoCircle.innerText = this.pomosUsed + "/" + this.getAttribute("pomosRequired");

   }

   //   incrementPomosUsed() {
   //       this.pomosUsed += 1;
   //       colorDecider();
   //   }

   //    colorDecider () {

   //      if(this.isCurrentTask === true) {
   //          this.wrapper.pomoCircle.setAttribute("class", "currentTask");
   //      }
   //      else if(this.completed === true){
   //          if(this.pomosUsed < this.pomosRequired) {
   //              this.wrapper.pomoCircle.setAttribute("class", "goodTimingTask");
   //          }
   //          else {
   //              this.wrapper.pomoCircle.setAttribute("class", "badTimingTask");
   //          }
   //      }
   //      else {
   //          this.wrapper.pomoCircle.setAttribute("class", "incompleteTask");
   //      }

   //   }

   //   completeTask() {
   //       this.completed = true;
   //       this.wrapper.wrapperImage.checkMark.setAttribute("src", "./assets/svgImages/check_Complete.svg");
   //      //  this.colorDecider();
   //   }
}

function colorDecider(pomoCircle, pomotask) {
   // console.log(sth.pused);
   if (pomotask.isCurrentTask === true) {
      pomoCircle.setAttribute("class", "currentTask");
   }
   else if (pomotask.completed === true) {
      if (pomoCircle.pused <= pomoCircle.preq) {
         pomoCircle.setAttribute("class", "goodTimingTask");
      }
      else {
         pomoCircle.setAttribute("class", "badTimingTask");
      }
   }
   else if (!pomotask.completed) {
      pomoCircle.setAttribute("class", "incompleteTask");
   }

}

customElements.define("pomo-task", TaskComponent);