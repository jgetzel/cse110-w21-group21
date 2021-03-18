(()=>{"use strict";var e={409:(e,o,t)=>{t.d(o,{xN:()=>n,RK:()=>l});var s=t(594),a=t(771);function n(){var e=!1;null===l(s.Rd)&&(e=!0),null===l(s.oi)&&(e=!0),null===!localStorage.getItem(a.Do)&&(e=!0),null===!localStorage.getItem(a.mn)&&(e=!0),null===l(a.XB)&&(e=!0),e&&(d(s.Rd,{}),d(s.oi,0),d(a.mn,"complete"),d(a.Do,0),d(a.XB,{}))}function d(e,o){localStorage.setItem(e,JSON.stringify(o))}function l(e){return JSON.parse(localStorage.getItem(e))}},771:(e,o,t)=>{t.d(o,{Do:()=>s,mn:()=>a,XB:()=>n,RU:()=>d}),t(409),t(594);var s="pomo_session_id",a="latest_pomo_session_status",n="pomo_session_map";function d(){return"complete"===localStorage.getItem(a)?null:parseInt(localStorage.getItem(s))-1}},594:(e,o,t)=>{t.d(o,{Rd:()=>s,oi:()=>a}),t(409),t(771);var s="pomo_task_map",a="pomo_task_index"}},o={};function t(s){if(o[s])return o[s].exports;var a=o[s]={exports:{}};return e[s](a,a.exports,t),a.exports}t.d=(e,o)=>{for(var s in o)t.o(o,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:o[s]})},t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e=t(409),o=t(771),s=function t(s){for(var a in function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,t),this.sessionID=s,this.tasks=(0,e.RK)(o.XB)[s].allTasks,this.greenTasks=0,this.yellowTasks=0,this.redTasks=0,console.log(this.tasks),this.tasks)this.tasks[a].completed?this.tasks[a].pomosUsed<=this.tasks[a].pomosRequired?this.greenTasks+=1:this.yellowTasks+=1:this.redTasks+=1},a="day",n="night";function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,o=a;return e.getHours()<4?o=n:e.getHours()<18?o=a:e.getHours()<24&&(o=n),o}window.addEventListener("DOMContentLoaded",(function(){!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,o=0,t=6,s=e.getDay(),a=localStorage.getItem("bg-seed");null!==a&&a[0]==s||(a=s+"-"+Math.floor(Math.random()*t),localStorage.setItem("bg-seed",a));var n=d(e);o=parseInt(a[2]),document.getElementById("backdrop").style.backgroundImage='url("../assets/images/backgrounds/'.concat(n,"/bg").concat(o,'.jpg")')}(),(0,e.xN)();var t=new s((0,o.RU)()),a=document.getElementById("taskList");for(var n in t.tasks){var l=t.tasks[n];console.log(l);var i='<pomo-task description ="'.concat(l.description,'" pomosUsed="').concat(l.pomosUsed,'", pomosRequired ="').concat(l.pomosRequired,'">').concat(l.title,"</pomo-task>");a.insertAdjacentHTML("beforeend",i);var r=a.childNodes[a.childNodes.length-1];r.task=l,r.shadowRoot.childNodes[0].childNodes[0].childNodes[3].style.display="none",r.shadowRoot.childNodes[0].childNodes[0].childNodes[2].style.display="none",l.completed?l.pomosUsed<=l.pomosRequired?r.shadowRoot.childNodes[0].childNodes[0].childNodes[1].childNodes[0].setAttribute("class","goodTimingTask"):r.shadowRoot.childNodes[0].childNodes[0].childNodes[1].childNodes[0].setAttribute("class","badTimingTask"):r.shadowRoot.childNodes[0].childNodes[0].childNodes[1].childNodes[0].setAttribute("class","incompleteTask")}var c={complete:t.greenTasks,overtime:t.yellowTasks,incomplete:t.redTasks};!function(e,o){var t=e.getContext("2d"),s=["#22DD9A","#F9C644","#FA7F7F"];new Chart(t,{type:"bar",data:{labels:["Tasks Completed on Time","Tasks Completed over Time","Tasks Incomplete"],datasets:[{label:"# of Tasks",data:[o.complete,o.overtime,o.incomplete],backgroundColor:s,borderColor:s,borderWidth:1}]},options:{legend:!1,scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})}(document.getElementById("efficiency-chart"),c)}))})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jc2UxMTAtdzIxLWdyb3VwMjEvLi9zb3VyY2UvYXNzZXRzL3NjcmlwdHMvZGF0YWJhc2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3NlMTEwLXcyMS1ncm91cDIxLy4vc291cmNlL2Fzc2V0cy9zY3JpcHRzL2RhdGFiYXNlL3Nlc3Npb24uanMiLCJ3ZWJwYWNrOi8vY3NlMTEwLXcyMS1ncm91cDIxLy4vc291cmNlL2Fzc2V0cy9zY3JpcHRzL2RhdGFiYXNlL3Rhc2suanMiLCJ3ZWJwYWNrOi8vY3NlMTEwLXcyMS1ncm91cDIxL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NzZTExMC13MjEtZ3JvdXAyMS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY3NlMTEwLXcyMS1ncm91cDIxL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY3NlMTEwLXcyMS1ncm91cDIxLy4vc291cmNlL2Fzc2V0cy9zY3JpcHRzL2RhdGFiYXNlL3N0YXRzLmpzIiwid2VicGFjazovL2NzZTExMC13MjEtZ3JvdXAyMS8uL3NvdXJjZS9hc3NldHMvc2NyaXB0cy91dGlscy90aGVtZS5qcyIsIndlYnBhY2s6Ly9jc2UxMTAtdzIxLWdyb3VwMjEvLi9zb3VyY2UvYXNzZXRzL3NjcmlwdHMvaGlzdG9yeS5qcyIsIndlYnBhY2s6Ly9jc2UxMTAtdzIxLWdyb3VwMjEvLi9zb3VyY2UvYXNzZXRzL3NjcmlwdHMvaGlzdG9yeS1ncmFwaC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsaXplRGF0YWJhc2UiLCJuZWVkVG9Jbml0aWFsaXplIiwiZ2V0T2JqZWN0IiwiUE9NT19UQVNLX01BUCIsIlBPTU9fVEFTS19JTkRFWCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJQT01PX1NFU1NJT05fSUQiLCJMQVRFU1RfUE9NT19TRVNTSU9OX1NUQVRVUyIsIlBPTU9fU0VTU0lPTl9NQVAiLCJzdG9yZU9iamVjdCIsImtleSIsIm9iamVjdCIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwicGFyc2UiLCJnZXRMYXRlc3RTZXNzaW9uSUQiLCJwYXJzZUludCIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwiZCIsImRlZmluaXRpb24iLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0Iiwib2JqIiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIlBvbW9TdGF0cyIsImlkIiwidGFza0lEIiwidGhpcyIsInNlc3Npb25JRCIsInRhc2tzIiwiZ3JlZW5UYXNrcyIsInllbGxvd1Rhc2tzIiwicmVkVGFza3MiLCJjb25zb2xlIiwibG9nIiwiY29tcGxldGVkIiwicG9tb3NVc2VkIiwicG9tb3NSZXF1aXJlZCIsIlRIRU1FX01PREVTIiwiZ2V0VGhlbWVNb2RlIiwidG9kYXkiLCJEYXRlIiwidGltZVBlcmlvZCIsImdldEhvdXJzIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm51bUJHcyIsImdldERheSIsInNlZWQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJzZWxlY3RBbmRTZXRUaGVtZSIsInN0YXRzIiwidGFza0xpc3QiLCJ0YXNrIiwiY3VycmVudFRhc2tFbGVtZW50IiwiZGVzY3JpcHRpb24iLCJ0aXRsZSIsImluc2VydEFkamFjZW50SFRNTCIsImVsZW1lbnQiLCJjaGlsZE5vZGVzIiwibGVuZ3RoIiwic2hhZG93Um9vdCIsImRpc3BsYXkiLCJzZXRBdHRyaWJ1dGUiLCJkYXRhIiwiY29tcGxldGUiLCJvdmVydGltZSIsImluY29tcGxldGUiLCJjaGFydGVsZW1lbnQiLCJjdHgiLCJnZXRDb250ZXh0IiwiY29sb3JzIiwiQ2hhcnQiLCJ0eXBlIiwibGFiZWxzIiwiZGF0YXNldHMiLCJsYWJlbCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJvcHRpb25zIiwibGVnZW5kIiwic2NhbGVzIiwieUF4ZXMiLCJ0aWNrcyIsImJlZ2luQXRaZXJvIiwicmVuZGVyRWZmaWNpZW5jeURhdGEiXSwibWFwcGluZ3MiOiJ5RkFHTyxTQUFTQSxJQUVaLElBQUlDLEdBQW1CLEVBQ1UsT0FBN0JDLEVBQVVDLFFBQ1ZGLEdBQW1CLEdBRVksT0FBL0JDLEVBQVVFLFFBQ1ZILEdBQW1CLEdBRXdCLFFBQTFDSSxhQUFhQyxRQUFRQyxRQUN0Qk4sR0FBbUIsR0FFbUMsUUFBckRJLGFBQWFDLFFBQVFFLFFBQ3RCUCxHQUFtQixHQUVhLE9BQWhDQyxFQUFVTyxRQUNWUixHQUFtQixHQUluQkEsSUFDQVMsRUFBWVAsS0FBZSxJQUMzQk8sRUFBWU4sS0FBaUIsR0FDN0JNLEVBQVlGLEtBQTRCLFlBQ3hDRSxFQUFZSCxLQUFpQixHQUM3QkcsRUFBWUQsS0FBa0IsS0FXL0IsU0FBU0MsRUFBWUMsRUFBS0MsR0FDN0JQLGFBQWFRLFFBQVFGLEVBQUtHLEtBQUtDLFVBQVVILElBRXRDLFNBQVNWLEVBQVVTLEdBQ3RCLE9BQU9HLEtBQUtFLE1BQU1YLGFBQWFDLFFBQVFLLE0seUVDcENwQyxJQUFNSixFQUFrQixrQkFDbEJDLEVBQTZCLDZCQUM3QkMsRUFBbUIsbUJBNkx6QixTQUFTUSxJQUVkLE1BQWUsYUFERlosYUFBYUMsUUFBUUUsR0FFekIsS0FFQVUsU0FBU2IsYUFBYUMsUUFBUUMsSUFBb0IsSSx1REN4TXRELElBNkJNSixFQUFnQixnQkFDaEJDLEVBQWtCLG9CQ2hDM0JlLEVBQTJCLEdBRy9CLFNBQVNDLEVBQW9CQyxHQUU1QixHQUFHRixFQUF5QkUsR0FDM0IsT0FBT0YsRUFBeUJFLEdBQVVDLFFBRzNDLElBQUlDLEVBQVNKLEVBQXlCRSxHQUFZLENBR2pE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LFdBQVcsR0FBR0ksYUFBYSxRQUFTLGlCQUVyR0wsRUFBUUcsV0FBV0YsV0FBVyxHQUFHQSxXQUFXLEdBQUdBLFdBQVcsR0FBR0EsV0FBVyxHQUFHSSxhQUFhLFFBQVMsa0JBRTFHLElBQUlDLEVBQU8sQ0FDUEMsU0FBVWQsRUFBTTNCLFdBQ2hCMEMsU0FBVWYsRUFBTTFCLFlBQ2hCMEMsV0FBWWhCLEVBQU16QixXQ3pCbkIsU0FBOEIwQyxFQUFjSixHQUMvQyxJQUFJSyxFQUFNRCxFQUFhRSxXQUFXLE1BRTlCQyxFQUFTLENBQUMsVUFBVyxVQUFXLFdBQ3RCLElBQUlDLE1BQU1ILEVBQUssQ0FDekJJLEtBQU0sTUFDTlQsS0FBTSxDQUNGVSxPQUxLLENBQUMsMEJBQTJCLDRCQUE2QixvQkFNOURDLFNBQVUsQ0FBQyxDQUNQQyxNQUFPLGFBQ1BaLEtBQU0sQ0FBQ0EsRUFBS0MsU0FBVUQsRUFBS0UsU0FBVUYsRUFBS0csWUFDMUNVLGdCQUFpQk4sRUFDakJPLFlBQWFQLEVBQ2JRLFlBQWEsS0FHckJDLFFBQVMsQ0FDTEMsUUFBUSxFQUNSQyxPQUFRLENBQ0pDLE1BQU8sQ0FBQyxDQUNKQyxNQUFPLENBQ0hDLGFBQWEsU0RPakNDLENBRGF4QyxTQUFTQyxlQUFlLG9CQUNSaUIsTyIsImZpbGUiOiJoaXN0b3J5LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBPTU9fVEFTS19JTkRFWCwgUE9NT19UQVNLX01BUCB9IGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCB7IFBPTU9fU0VTU0lPTl9JRCwgTEFURVNUX1BPTU9fU0VTU0lPTl9TVEFUVVMsIFBPTU9fU0VTU0lPTl9NQVAgfSBmcm9tIFwiLi9zZXNzaW9uXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplRGF0YWJhc2UoKSB7XG4gICAgLy8gY2hlY2sgaWYgd2UgbmVlZCB0byBpbml0aWFsaXplXG4gICAgbGV0IG5lZWRUb0luaXRpYWxpemUgPSBmYWxzZTtcbiAgICBpZiAoZ2V0T2JqZWN0KFBPTU9fVEFTS19NQVApID09PSBudWxsKSB7XG4gICAgICAgIG5lZWRUb0luaXRpYWxpemUgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoZ2V0T2JqZWN0KFBPTU9fVEFTS19JTkRFWCkgPT09IG51bGwpIHtcbiAgICAgICAgbmVlZFRvSW5pdGlhbGl6ZSA9IHRydWU7XG4gICAgfVxuICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oUE9NT19TRVNTSU9OX0lEKSA9PT0gbnVsbCkge1xuICAgICAgICBuZWVkVG9Jbml0aWFsaXplID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShMQVRFU1RfUE9NT19TRVNTSU9OX1NUQVRVUykgPT09IG51bGwpIHtcbiAgICAgICAgbmVlZFRvSW5pdGlhbGl6ZSA9IHRydWU7XG4gICAgfVxuICAgIGlmIChnZXRPYmplY3QoUE9NT19TRVNTSU9OX01BUCkgPT09IG51bGwpIHtcbiAgICAgICAgbmVlZFRvSW5pdGlhbGl6ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gdGhlbiBpbml0aWFsaXplXG4gICAgaWYgKG5lZWRUb0luaXRpYWxpemUpIHtcbiAgICAgICAgc3RvcmVPYmplY3QoUE9NT19UQVNLX01BUCwge30pO1xuICAgICAgICBzdG9yZU9iamVjdChQT01PX1RBU0tfSU5ERVgsIDApO1xuICAgICAgICBzdG9yZU9iamVjdChMQVRFU1RfUE9NT19TRVNTSU9OX1NUQVRVUywgXCJjb21wbGV0ZVwiKTtcbiAgICAgICAgc3RvcmVPYmplY3QoUE9NT19TRVNTSU9OX0lELCAwKTtcbiAgICAgICAgc3RvcmVPYmplY3QoUE9NT19TRVNTSU9OX01BUCwge30pO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiByZXNldERhdGFiYXNlKCkge1xuICAgIGRlbGV0ZSBsb2NhbFN0b3JhZ2VbUE9NT19UQVNLX01BUF07XG4gICAgZGVsZXRlIGxvY2FsU3RvcmFnZVtQT01PX1RBU0tfSU5ERVhdO1xuICAgIGRlbGV0ZSBsb2NhbFN0b3JhZ2VbTEFURVNUX1BPTU9fU0VTU0lPTl9TVEFUVVNdO1xuICAgIGRlbGV0ZSBsb2NhbFN0b3JhZ2VbUE9NT19TRVNTSU9OX0lEXTtcbiAgICBkZWxldGUgbG9jYWxTdG9yYWdlW1BPTU9fU0VTU0lPTl9NQVBdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RvcmVPYmplY3Qoa2V5LCBvYmplY3QpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KG9iamVjdCkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldE9iamVjdChrZXkpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcbn0iLCIvKipcbiAqIFRoaXMgZmlsZSBpcyByZWxhdGVkIHRvIGZpbmRpbmcgcG9tbyBzZXNzaW9uc1xuICovXG5pbXBvcnQgeyBnZXRPYmplY3QsIHN0b3JlT2JqZWN0IH0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCB7IGRlbGV0ZVRhc2tCeVRhc2tJRCwgc3RvcmVUYXNrLCBUYXNrIH0gZnJvbSBcIi4vdGFza1wiO1xuXG5cbmV4cG9ydCBjb25zdCBQT01PX1NFU1NJT05fSUQgPSBcInBvbW9fc2Vzc2lvbl9pZFwiO1xuZXhwb3J0IGNvbnN0IExBVEVTVF9QT01PX1NFU1NJT05fU1RBVFVTID0gXCJsYXRlc3RfcG9tb19zZXNzaW9uX3N0YXR1c1wiO1xuZXhwb3J0IGNvbnN0IFBPTU9fU0VTU0lPTl9NQVAgPSBcInBvbW9fc2Vzc2lvbl9tYXBcIjtcblxuLyoqIHRoZSBkaWZmZXJlbnQgcG9tbyBzZXNzaW9uIG1vZGVzIGFzIGNvbnN0YW50cyAqL1xuZXhwb3J0IGNvbnN0IFBPTU9fU0VTU0lPTl9NT0RFUyA9IHtcbiAgLyoqIHdoZW4gdGhlIHVzZXIgaXMgaW4gdGhlIGludGVyZmFjZSBvZiBjcmVhdGluZyBhIG5ldyB0aW1lciBhbmQgaGFzIG5vdCBzdGFydGVkIHRoZWlyIG5ldyBzZXNzaW9uIHlldCAqL1xuICBJTkFDVElWRTogXCJpbmFjdGl2ZVwiLFxuICAvKiogd2hlbiBydW5uaW5nIHRoZSBicmVhayB0aW1lciAqL1xuICBCUkVBSzogXCJicmVha1wiLFxuICAvKiogd2hlbiBydW5uaW5nIHRoZSBsb25nZXIgYnJlYWsgdGltZXIgKi9cbiAgTE9OR19CUkVBSzogXCJsb25nYnJlYWtcIixcbiAgLyoqIHdoZW4gcnVubmluZyB0aGUgYWN0aXZlIHBvbW8gd29yayB0aW1lICovXG4gIEFDVElWRTogXCJhY3RpdmVcIixcbiAgLyoqIHdoZW4gdGhlIHVzZXIgbWFya3MgdGhpcyBwb21vIHNlc3Npb24gYXMgY29tcGxldGUsIHJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0YXNrcyBhcmUgY29tcGxldGVkIG9yIG5vdCAqL1xuICBDT01QTEVURTogXCJjb21wbGV0ZVwiLFxufTtcblxuZXhwb3J0IGNsYXNzIFBvbW9TZXNzaW9uIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBQb21vIFNlc3Npb24gb2JqZWN0XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpZCAtIGlkIG9mIHRoaXMgc2Vzc2lvblxuICAgKi9cbiAgY29uc3RydWN0b3IoaWQpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgLyoqIEB0eXBlIHtUYXNrW119IC0gYSBsaXN0IG9mIGFsbCB0YXNrcyBhc3NvY2lhdGVkIHdpdGggdGhpcyBzZXNzaW9uICovXG4gICAgdGhpcy5hbGxUYXNrcyA9IFtdO1xuICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAtIHRoZSBjdXJyZW50IG1vZGUgb2YgdGhlIHBvbW8gc2Vzc2lvbiAqL1xuICAgIHRoaXMubW9kZSA9IFBPTU9fU0VTU0lPTl9NT0RFUy5JTkFDVElWRTtcbiAgICAvKiogQHR5cGUge051bWJlcn0gLSB0aGUgY3VycmVudCB0aW1lIG9mIHRoZSBwb21vIHNlc3Npb24gKi9cbiAgICB0aGlzLnRpbWUgPSAwO1xuXG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9IC0gbnVtYmVyIG9mIHBvbW9zIGVsYXBzZWQgc3VjY2VzZnVsbHkgZm9yIHRoaXMgcG9tbyBzZXNzaW9uICovXG4gICAgdGhpcy5wb21vc0VsYXBzZWQgPSAwO1xuXG4gICAgdGhpcy5zdGFydERhdGUgPSBuZXcgRGF0ZSgpO1xuICB9XG4gIC8qKlxuICAgKiBcbiAgICogQHJldHVybnMge1Rhc2sgfCBudWxsIH0gLSB0aGUgY3VycmVudCB0YXNrIGZvciB0aGlzIHBvbW8gc2Vzc2lvbiBvciBudWxsIGlmIHRoZXJlIGFyZSBubyB0YXNrcyBsZWZ0XG4gICAqL1xuICBjdXJyZW50VGFzaygpIHtcbiAgICBsZXQgYWxsSW5Qcm9ncmVzc1Rhc2tzID0gdGhpcy5hbGxUYXNrcy5maWx0ZXIoKHRhc2spID0+ICF0YXNrLmNvbXBsZXRlZCk7XG4gICAgaWYgKGFsbEluUHJvZ3Jlc3NUYXNrcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiBhbGxJblByb2dyZXNzVGFza3NbMF07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIC8qKlxuICAgKiBBZGRzIGEgbmV3IHRhc2tcbiAgICogQHBhcmFtIHtUYXNrfSB0YXNrIFxuICAgKi9cbiAgYWRkVGFzayh0YXNrKSB7XG4gICAgc3RvcmVUYXNrKHRhc2spO1xuICAgIHRoaXMuYWxsVGFza3MucHVzaCh0YXNrKTtcbiAgfVxuICAvKipcbiAgICogRGVsZXRlIGEgdGFza1xuICAgKiBAcGFyYW0ge1Rhc2t9IHRhc2sgXG4gICAqL1xuICBkZWxldGVUYXNrKHRhc2spIHtcbiAgICBkZWxldGVUYXNrQnlUYXNrSUQodGFzay5pZCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFsbFRhc2tzLmxlbmd0aDsgaSsrKXtcbiAgICAgIGNvbnN0IHN0b3JlZFRhc2sgPSB0aGlzLmFsbFRhc2tzW2ldO1xuICAgICAgaWYgKHRhc2suaWQgPT09IHN0b3JlZFRhc2suaWQpIHtcbiAgICAgICAgdGhpcy5hbGxUYXNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29tcGxldGVzIHRoZSBnaXZlbiB0YXNrIGFzc29jaWF0ZWQgdG8gdGhlIGlkXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpZCBcbiAgICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgY29tcGxldGVkLCBmYWxzZSBpZiBubyB0YXNrIGZvdW5kXG4gICAqL1xuICBjb21wbGV0ZVRhc2soaWQpIHtcbiAgICBmb3IgKGxldCB0YXNrIG9mIHRoaXMuYWxsVGFza3MpIHtcbiAgICAgIGlmICh0YXNrLmlkID09PSBpZCkge1xuICAgICAgICB0YXNrLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG5leHQgaW5jb21wbGV0ZSB0YXNrIGluIHRoZSBvcmRlciBvciBudWxsIGlmIGFsbCBjb21wbGV0ZWRcbiAgICogQHJldHVybnMge1Rhc2sgfCBudWxsfVxuICAgKi9cbiAgZ2V0TmV4dFRhc2soKSB7XG4gICAgZm9yIChjb25zdCB0YXNrIG9mIHRoaXMuYWxsVGFza3MpIHtcbiAgICAgIGlmICh0YXNrLmNvbXBsZXRlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIC8qKlxuICAgKiBJbmNyZW1lbnQgdGhlIHBvbW9zIHVzZWQgZm9yIGEgdGFzayBhbmQgaW5jcmVtZW50IHBvbW9zRWxhcHNlZFxuICAgKiBAcGFyYW0ge251bWJlcn0gaWQgXG4gICAqL1xuICBpbmNyZW1lbnRUYXNrUG9tb3NVc2VkKGlkKSB7XG4gICAgZm9yIChjb25zdCB0YXNrIG9mIHRoaXMuYWxsVGFza3MpIHtcbiAgICAgIGlmICh0YXNrLmlkID09PSBpZCkge1xuICAgICAgICB0YXNrLnBvbW9zVXNlZCArPSAxO1xuICAgICAgICB0aGlzLnBvbW9zRWxhcHNlZCArPSAxO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFxuICAgKiBAcmV0dXJucyB0cnVlIGlmIHNlc3Npb24gaXMgaW4gYnJlYWsgbW9kZSByaWdodCBub3csIGZhbHNlIG90aGVyd2lzZVxuICAgKi9cbiAgaXNCcmVhaygpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlID09PSBQT01PX1NFU1NJT05fTU9ERVMuTE9OR19CUkVBSyB8fCB0aGlzLm1vZGUgPT09IFBPTU9fU0VTU0lPTl9NT0RFUy5CUkVBSztcbiAgfVxuXG4gIC8qKlxuICAgKiBUT0RPXG4gICAqL1xuICByZW9yZGVyVGFza3MoKSB7XG5cbiAgfVxuXG4gIGdldFBvbW9zTGVmdEluU2Vzc2lvbigpIHtcbiAgICBsZXQgbGVmdCA9IDA7XG4gICAgdGhpcy5hbGxUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBsZWZ0ICs9IE1hdGgubWF4KHRhc2sucG9tb3NSZXF1aXJlZCAtIHRhc2sucG9tb3NVc2VkLCAwKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbGVmdDtcbiAgfVxuICBwYXJzZVNlc3Npb25Gcm9tT2JqKHNlc3Npb25fb2JqKSB7XG4gICAgdGhpcy5pZCA9IHNlc3Npb25fb2JqLmlkO1xuICAgIHRoaXMubW9kZSA9IHNlc3Npb25fb2JqLm1vZGU7XG4gICAgdGhpcy50aW1lID0gc2Vzc2lvbl9vYmoudGltZTtcbiAgICB0aGlzLnBvbW9zRWxhcHNlZCA9IHNlc3Npb25fb2JqLnBvbW9zRWxhcHNlZDtcbiAgICB0aGlzLnN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHNlc3Npb25fb2JqLnN0YXJ0RGF0ZSk7XG4gICAgdGhpcy5hbGxUYXNrcyA9IHNlc3Npb25fb2JqLmFsbFRhc2tzLm1hcCgodGFza09iaikgPT4ge1xuICAgICAgbGV0IHQgPSBuZXcgVGFzaygpO1xuICAgICAgdCA9IHQucGFyc2VUYXNrRnJvbU9iaih0YXNrT2JqKTtcbiAgICAgIHJldHVybiB0O1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHNlcmlhbGl6ZUludG9PYmooKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB0aGlzLmlkLCBhbGxUYXNrczogdGhpcy5hbGxUYXNrcy5tYXAoKHRhc2spID0+IHRhc2suc2VyaWFsaXplSW50b09iaigpKSwgbW9kZTogdGhpcy5tb2RlLCB0aW1lOiB0aGlzLnRpbWUsIHBvbW9zRWxhcHNlZDogdGhpcy5wb21vc0VsYXBzZWQsIHN0YXJ0RGF0ZTogdGhpcy5zdGFydERhdGUuZ2V0VGltZSgpXG4gICAgfTtcbiAgfVxufVxuXG4vKipcbiAqIEdldCBhIHBvbW8gc2Vzc2lvbiBvYmplY3RcbiAqIEBwYXJhbSB7bnVtYmVyfSBpZCBcbiAqIEByZXR1cm5zIHtQb21vU2Vzc2lvbiB8IG51bGx9IHRoZSBzZXNzaW9uIGZvciB0aGlzIGlkIG9yIG51bGwgaWYgdGhlcmUgaXMgbm8gc2Vzc2lvbiBhc3NvY2lhdGVkIHdpdGggdGhpcyBpZFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9tb1Nlc3Npb24oaWQpIHtcbiAgY29uc3QgYWxsU2Vzc2lvbnMgPSBnZXRPYmplY3QoUE9NT19TRVNTSU9OX01BUCk7XG4gIGxldCBwID0gbmV3IFBvbW9TZXNzaW9uKCk7XG4gIGlmICghYWxsU2Vzc2lvbnNbaWRdKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIHAucGFyc2VTZXNzaW9uRnJvbU9iaihhbGxTZXNzaW9uc1tpZF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RvcmVQb21vU2Vzc2lvbihzZXNzaW9uKSB7XG4gIGNvbnN0IGFsbFNlc3Npb25zID0gZ2V0T2JqZWN0KFBPTU9fU0VTU0lPTl9NQVApO1xuICBhbGxTZXNzaW9uc1tzZXNzaW9uLmlkXSA9IHNlc3Npb24uc2VyaWFsaXplSW50b09iaigpO1xuICBzdG9yZU9iamVjdChQT01PX1NFU1NJT05fTUFQLCBhbGxTZXNzaW9ucyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROZXdTZXNzaW9uSUQoKSB7XG4gIGxldCBwcmV2SUQgPSBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShQT01PX1NFU1NJT05fSUQpKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oUE9NT19TRVNTSU9OX0lELCBwcmV2SUQgKyAxKTtcbiAgcmV0dXJuIHByZXZJRDtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIGN1cnJlbnQgc2Vzc2lvbidzIHN0YXR1c1xuICogQHBhcmFtIHtzdHJpbmd9IHN0YXR1cyAtIGNhbiBiZSBcImNvbXBsZXRlXCIgb3IgXCJpbi1wcm9ncmVzc1wiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRDdXJyZW50U2Vzc2lvblN0YXR1cyhzdGF0dXMpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTEFURVNUX1BPTU9fU0VTU0lPTl9TVEFUVVMsIHN0YXR1cyk7XG59XG5cbi8qKlxuICogV2lsbCByZXR1cm4gdGhlIHNlc3Npb24gSUQgb2YgdGhlIGxhc3Qgc2Vzc2lvbiBpZiBpdCB3YXMgbm90IGVuZGVkLiBPdGhlcndpc2UgaWYgdGhlIGxhc3Qgc2Vzc2lvbiBkb2VzIG5vdCBleGlzdCBcbiAqIG9yIHdhcyBlbmRlZCBhbHJlYWR5LCB0aGlzIGZ1bmN0aW9uIHJldHVybnMgbnVsbFxuICogXG4gKiBAcmV0dXJucyB7bnVtYmVyIHwgbnVsbH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldExhdGVzdFNlc3Npb25JRCgpIHtcbiAgbGV0IHN0YXR1cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKExBVEVTVF9QT01PX1NFU1NJT05fU1RBVFVTKTtcbiAgaWYgKHN0YXR1cyA9PT0gXCJjb21wbGV0ZVwiKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKFBPTU9fU0VTU0lPTl9JRCkpIC0gMTtcbiAgfVxufVxuXG4vKipcbiAqIEByZXR1cm5zIHtib29sZWFufSAtIHRydWUgaWYgdGhlcmUgaXMgYSB1bmZpbmlzaGVkIHNlc3Npb24gdGhhdCB3YXMgbm90IGNvbXBsZXRlZCBvciBxdWl0dGVkLiBmYWxzZSBvdGhlcndpc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRoZXJlSXNVbmZpbmlzaGVkU2Vzc2lvbigpIHtcbiAgbGV0IHNlc3Npb25JRCA9IGdldExhdGVzdFNlc3Npb25JRCgpO1xuICBpZiAoc2Vzc2lvbklEID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gIGxldCBjdXJyZW50UG9tb1Nlc3Npb24gPSBnZXRQb21vU2Vzc2lvbihzZXNzaW9uSUQpO1xuICBpZiAoY3VycmVudFBvbW9TZXNzaW9uICE9PSBudWxsICYmIGN1cnJlbnRQb21vU2Vzc2lvbi5tb2RlICE9PSBQT01PX1NFU1NJT05fTU9ERVMuQ09NUExFVEUgJiYgY3VycmVudFBvbW9TZXNzaW9uLm1vZGUgIT09IFBPTU9fU0VTU0lPTl9NT0RFUy5JTkFDVElWRSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRpbnVlQWN0aXZlU2Vzc2lvbigpIHtcbiAgaWYgKHRoZXJlSXNVbmZpbmlzaGVkU2Vzc2lvbigpKSB7XG4gICAgd2luZG93LmxvY2F0aW9uID0gXCIvdGltZXIuaHRtbD9sb2FkU2F2ZWQ9dHJ1ZVwiO1xuICB9XG59IiwiaW1wb3J0IHsgZ2V0T2JqZWN0LCBzdG9yZU9iamVjdCB9IGZyb20gXCIuXCI7XG5pbXBvcnQgeyBnZXRMYXRlc3RTZXNzaW9uSUQsIGdldFBvbW9TZXNzaW9uIH0gZnJvbSBcIi4vc2Vzc2lvblwiO1xuXG5leHBvcnQgY2xhc3MgVGFzayB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNlc3Npb25JRCBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGUgXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRlc2NyaXB0aW9uIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwb21vc1JlcXVpcmVkIFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNlc3Npb25JRCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBwb21vc1JlcXVpcmVkKSB7XG4gICAgICAgIHRoaXMuc2Vzc2lvbklEID0gc2Vzc2lvbklEO1xuICAgICAgICB0aGlzLmlkID0gLTE7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnBvbW9zUmVxdWlyZWQgPSBwb21vc1JlcXVpcmVkO1xuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBvbW9zVXNlZCA9IDA7XG4gICAgfVxuICAgIHBhcnNlVGFza0Zyb21PYmoodGFza19vYmopIHtcbiAgICAgICAgbGV0IHRhc2sgPSBuZXcgVGFzayh0YXNrX29iai5zZXNzaW9uSUQsIHRhc2tfb2JqLnRpdGxlLCB0YXNrX29iai5kZXNjcmlwdGlvbiwgdGFza19vYmoucG9tb3NSZXF1aXJlZCk7XG4gICAgICAgIHRhc2suY29tcGxldGVkID0gdGFza19vYmouY29tcGxldGVkO1xuICAgICAgICB0YXNrLmlkID0gdGFza19vYmouaWQ7XG4gICAgICAgIHRhc2sucG9tb3NVc2VkID0gdGFza19vYmoucG9tb3NVc2VkO1xuICAgICAgICByZXR1cm4gdGFzaztcbiAgICB9XG4gICAgc2VyaWFsaXplSW50b09iaigpIHtcbiAgICAgICAgcmV0dXJuIHsgdGl0bGU6IHRoaXMudGl0bGUsIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLCBwb21vc1JlcXVpcmVkOiB0aGlzLnBvbW9zUmVxdWlyZWQsIGNvbXBsZXRlZDogdGhpcy5jb21wbGV0ZWQsIHBvbW9zVXNlZDogdGhpcy5wb21vc1VzZWQsIGlkOiB0aGlzLmlkLCBzZXNzaW9uSUQ6IHRoaXMuc2Vzc2lvbklEIH07XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgUE9NT19UQVNLX01BUCA9IFwicG9tb190YXNrX21hcFwiO1xuZXhwb3J0IGNvbnN0IFBPTU9fVEFTS19JTkRFWCA9IFwicG9tb190YXNrX2luZGV4XCI7XG5cbi8qKlxuICogV2lsbCBzdG9yZSBhIG5ldyBvciB1cGRhdGVkIHRhc2sgaW50byBsb2NhbCBzdG9yYWdlXG4gKiBcbiAqIEhhcyBhIHNpZGUgZWZmZWN0IG9mIGFkZGluZyB0aGUgaWQgb2YgdGhlIG5ldyB0YXNrIGlmIGl0IHdhc250IHN0b3JlZCBpbiBzdG9yYWdlIGJlZm9yZVxuICogXG4gKiBAcGFyYW0ge1Rhc2t9IHRhc2tcbiAqIEByZXR1cm5zIHtudW1iZXJ9IC0gdGhlIGlkIG9mIHRoZSB0YXNrXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdG9yZVRhc2sodGFzaykge1xuICAgIGxldCB0YXNrX21hcCA9IGdldE9iamVjdChQT01PX1RBU0tfTUFQKTtcbiAgICBpZiAoIXRhc2tfbWFwW3Rhc2suaWRdKSB7XG4gICAgICAgIC8vIGlmIHRhc2sgbWFwIGRvZXMgbm90IGhhdmUgdGhpcyB0YXNrLCBjcmVhdGUgYSBuZXcgaW5kZXhcbiAgICAgICAgbGV0IGlkID0gcGFyc2VJbnQoZ2V0T2JqZWN0KFBPTU9fVEFTS19JTkRFWCkpO1xuICAgICAgICB0YXNrLmlkID0gaWQ7XG4gICAgICAgIC8vIGluY3JlbWVudCBnbG9iYWwgaWRcbiAgICAgICAgc3RvcmVPYmplY3QoUE9NT19UQVNLX0lOREVYLCBpZCArIDEpO1xuICAgIH1cbiAgICBsZXQgb2JqID0gdGFzay5zZXJpYWxpemVJbnRvT2JqKCk7XG4gICAgdGFza19tYXBbdGFzay5pZF0gPSBvYmo7XG4gICAgc3RvcmVPYmplY3QoUE9NT19UQVNLX01BUCwgdGFza19tYXApO1xuICAgIHJldHVybiB0YXNrLmlkO1xufVxuXG4vKipcbiAqIEdldCB0aGUgdGFzayBhc3NvY2lhdGVkIHdpdGggdGhpcyBpZFxuICogQHBhcmFtIHtudW1iZXJ9IGlkIFxuICogQHJldHVybnMge1Rhc2t9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUYXNrKGlkKSB7XG4gICAgbGV0IHRhc2tfbWFwID0gZ2V0T2JqZWN0KFBPTU9fVEFTS19NQVApO1xuICAgIGxldCB0YXNrX29iaiA9IHRhc2tfbWFwW2lkXTtcbiAgICBsZXQgdCA9IG5ldyBUYXNrKCk7XG4gICAgdCA9IHQucGFyc2VUYXNrRnJvbU9iaih0YXNrX29iaik7XG4gICAgcmV0dXJuIHQ7XG5cbn1cbi8qKlxuICogR2V0IGFsbCB0YXNrc1xuICogXG4gKiBAcmV0dXJucyB7TWFwPG51bWJlciwgVGFzaz59IC0gYSBtYXAgZnJvbSB0YXNrIGlkIHRvIHRhc2tcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbFRhc2tzKCkge1xuICAgIGxldCB0YXNrX21hcCA9IGdldE9iamVjdChQT01PX1RBU0tfTUFQKTtcbiAgICBsZXQgcGFyc2VkX3Rhc2tfbWFwID0ge307XG4gICAgZm9yIChsZXQgaWQgaW4gdGFza19tYXApIHtcbiAgICAgICAgbGV0IHRhc2tfb2JqID0gdGFza19tYXBbaWRdO1xuICAgICAgICBsZXQgdCA9IG5ldyBUYXNrKCk7XG4gICAgICAgIHQgPSB0LnBhcnNlVGFza0Zyb21PYmoodGFza19vYmopO1xuICAgICAgICBwYXJzZWRfdGFza19tYXBbaWRdID0gdDtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZF90YXNrX21hcDtcbn1cblxuLyoqXG4gKiBEZWxldGUgYSBzcGVjaWZpYyB0YXNrIGZyb20gZGF0YWJhc2UgYnkgdGhlIHVuaXF1ZSB0YXNrIElEXG4gKiBcbiAqIEBwYXJhbSB7bnVtYmVyfSBpZCBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRhc2tCeVRhc2tJRChpZCkge1xuICAgIGxldCB0YXNrX21hcCA9IGdldE9iamVjdChQT01PX1RBU0tfTUFQKTtcbiAgICBkZWxldGUgdGFza19tYXBbaWRdO1xuICAgIHN0b3JlT2JqZWN0KFBPTU9fVEFTS19NQVAsIHRhc2tfbWFwKTtcbn1cblxuXG4vKipcbiAqIENoZWNrcyBpZiB0aGVyZSBhcmUgYW55IHVuZmluaXNoZWQgdGFza3MgZnJvbSB0aGUgcHJldmlvdXMgc2Vzc2lvblxuICogQHJldHVybnMge2Jvb2xlYW59IC0gdHJ1ZSBpZiB1bmlmaW5pc2hlZCB0YXNrcyBleGlzdCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcmVUaGVyZVVuZmluaXNoZWRUYXNrc0Zyb21MYXN0U2Vzc2lvbigpIHtcbiAgICBsZXQgb2xkU2Vzc2lvbklEID0gZ2V0TGF0ZXN0U2Vzc2lvbklEKCk7XG4gICAgaWYgKG9sZFNlc3Npb25JRCA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgIGxldCBzZXNzaW9uID0gZ2V0UG9tb1Nlc3Npb24ob2xkU2Vzc2lvbklEKTtcbiAgICBpZiAoc2Vzc2lvbiA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChzZXNzaW9uLmN1cnJlbnRUYXNrKCkgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsImltcG9ydCB7IGdldE9iamVjdCB9IGZyb20gXCIuXCI7XG5pbXBvcnQgeyBnZXRMYXRlc3RTZXNzaW9uSUQsIGdldE5ld1Nlc3Npb25JRCwgZ2V0UG9tb1Nlc3Npb24sIFBvbW9TZXNzaW9uLCBzZXRDdXJyZW50U2Vzc2lvblN0YXR1cywgc3RvcmVQb21vU2Vzc2lvbiwgUE9NT19TRVNTSU9OX01BUCB9IGZyb20gXCIuLi9kYXRhYmFzZS9zZXNzaW9uXCI7XG5cbmV4cG9ydCBjbGFzcyBQb21vU3RhdHMge1xuICAgIGNvbnN0cnVjdG9yKGlkKSB7XG4gICAgICAgIHRoaXMuc2Vzc2lvbklEID0gaWQ7XG4gICAgICAgIHRoaXMudGFza3MgPSBnZXRPYmplY3QoUE9NT19TRVNTSU9OX01BUClbaWRdW1wiYWxsVGFza3NcIl07XG4gICAgICAgIHRoaXMuZ3JlZW5UYXNrcyA9IDA7XG4gICAgICAgIHRoaXMueWVsbG93VGFza3MgPSAwO1xuICAgICAgICB0aGlzLnJlZFRhc2tzID0gMDtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy50YXNrcyk7XG4gICAgICAgIGZvcihsZXQgdGFza0lEIGluIHRoaXMudGFza3MpIHtcbiAgICAgICAgICAgIGlmKHRoaXMudGFza3NbdGFza0lEXS5jb21wbGV0ZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50YXNrc1t0YXNrSURdLnBvbW9zVXNlZCA8PSB0aGlzLnRhc2tzW3Rhc2tJRF0ucG9tb3NSZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyZWVuVGFza3MrPTE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgdGhpcy55ZWxsb3dUYXNrcys9MTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgdGhpcy5yZWRUYXNrcys9MTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIvKipcbiAqIFdpbGwgcmFuZG9tbHkgcGljayBhIHRoZW1lIGFuZCB1bmlxdWUgYmFja2dyb3VuZCBkZXBlbmRpbmcgb24gd2hhdCBkYXkgaXQgaXMgYW5kIHdoYXQgdGltZSBpdCBpcyBhbmQgc2V0IGl0IG9uIHRoZSBwYWdlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RBbmRTZXRUaGVtZSh0b2RheSA9IG5ldyBEYXRlKCkpIHtcbiAgbGV0IGlkID0gMDtcbiAgbGV0IG51bUJHcyA9IDY7XG5cbiAgbGV0IGQgPSB0b2RheS5nZXREYXkoKTtcblxuICBsZXQgc2VlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmctc2VlZFwiKTtcblxuICBpZiAoc2VlZCA9PT0gbnVsbCB8fCBzZWVkWzBdICE9IGQpIHtcbiAgICBzZWVkID0gZCArIFwiLVwiICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbnVtQkdzKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJnLXNlZWRcIiwgc2VlZCk7XG4gIH1cbiAgbGV0IHRpbWVQZXJpb2QgPSBnZXRUaGVtZU1vZGUodG9kYXkpO1xuICBpZCA9IHBhcnNlSW50KHNlZWRbMl0pO1xuXG4gIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrZHJvcFwiKTtcbiAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy8ke3RpbWVQZXJpb2R9L2JnJHtpZH0uanBnXCIpYDtcbn07XG5cbmV4cG9ydCBjb25zdCBUSEVNRV9NT0RFUyA9IHtcbiAgREFZOiBcImRheVwiLFxuICBOSUdIVDogXCJuaWdodFwiLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRoZW1lTW9kZSh0b2RheSA9IG5ldyBEYXRlKCkpIHtcbiAgbGV0IHRpbWVQZXJpb2QgPSBUSEVNRV9NT0RFUy5EQVk7XG4gIGlmICh0b2RheS5nZXRIb3VycygpIDwgNCkge1xuICAgIHRpbWVQZXJpb2QgPSBUSEVNRV9NT0RFUy5OSUdIVDtcbiAgfVxuICBlbHNlIGlmICh0b2RheS5nZXRIb3VycygpIDwgMTgpIHtcbiAgICB0aW1lUGVyaW9kID0gVEhFTUVfTU9ERVMuREFZO1xuICB9IGVsc2UgaWYgKHRvZGF5LmdldEhvdXJzKCkgPCAyNCkge1xuICAgIHRpbWVQZXJpb2QgPSBUSEVNRV9NT0RFUy5OSUdIVDtcbiAgfVxuICByZXR1cm4gdGltZVBlcmlvZDtcbn0iLCJpbXBvcnQgeyBpbml0aWFsaXplRGF0YWJhc2UgfSBmcm9tIFwiLi9kYXRhYmFzZVwiO1xuaW1wb3J0IHsgZ2V0TGF0ZXN0U2Vzc2lvbklEIH0gZnJvbSBcIi4vZGF0YWJhc2Uvc2Vzc2lvblwiO1xuaW1wb3J0IHsgUG9tb1N0YXRzIH0gZnJvbSBcIi4vZGF0YWJhc2Uvc3RhdHNcIjtcbmltcG9ydCB7IHJlbmRlckVmZmljaWVuY3lXZWVrbHlEYXRhLCByZW5kZXJFZmZpY2llbmN5RGF0YSB9IGZyb20gXCIuL2hpc3RvcnktZ3JhcGhcIjtcbmltcG9ydCB7IHNlbGVjdEFuZFNldFRoZW1lIH0gZnJvbSBcIi4vdXRpbHMvdGhlbWVcIjtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgc2VsZWN0QW5kU2V0VGhlbWUoKTtcbiAgICAvLyBUT0RPOiBsb2FkIGRhdGEgZnJvbSBsb2NhbCBzdG9yYWdlXG4gICAgaW5pdGlhbGl6ZURhdGFiYXNlKCk7XG4gICAgbGV0IHN0YXRzID0gbmV3IFBvbW9TdGF0cyhnZXRMYXRlc3RTZXNzaW9uSUQoKSk7XG4gICAgbGV0IHRhc2tMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrTGlzdFwiKTtcbiAgICBmb3IobGV0IHRhc2tJRCBpbiBzdGF0cy50YXNrcykge1xuICAgICAgICBsZXQgdGFzayA9IHN0YXRzLnRhc2tzW3Rhc2tJRF07XG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2spO1xuICAgICAgICBjb25zdCBjdXJyZW50VGFza0VsZW1lbnQgPSBgPHBvbW8tdGFzayBkZXNjcmlwdGlvbiA9XCIke3Rhc2suZGVzY3JpcHRpb259XCIgcG9tb3NVc2VkPVwiJHt0YXNrLnBvbW9zVXNlZH1cIiwgcG9tb3NSZXF1aXJlZCA9XCIke3Rhc2sucG9tb3NSZXF1aXJlZH1cIj4ke3Rhc2sudGl0bGV9PC9wb21vLXRhc2s+YDtcbiAgICAgICAgdGFza0xpc3QuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGN1cnJlbnRUYXNrRWxlbWVudCk7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0YXNrTGlzdC5jaGlsZE5vZGVzW3Rhc2tMaXN0LmNoaWxkTm9kZXMubGVuZ3RoIC0gMV07XG4gICAgICAgIGVsZW1lbnQudGFzayA9IHRhc2s7XG4gICAgICAgIGVsZW1lbnQuc2hhZG93Um9vdC5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1szXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGVsZW1lbnQuc2hhZG93Um9vdC5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1syXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGlmKHRhc2suY29tcGxldGVkKSB7XG4gICAgICAgICAgICBpZih0YXNrLnBvbW9zVXNlZCA8PSB0YXNrLnBvbW9zUmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNoYWRvd1Jvb3QuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1swXS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImdvb2RUaW1pbmdUYXNrXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBlbGVtZW50LnNoYWRvd1Jvb3QuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1swXS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJhZFRpbWluZ1Rhc2tcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBlbGVtZW50LnNoYWRvd1Jvb3QuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1swXS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImluY29tcGxldGVUYXNrXCIpO1xuICAgIH1cbiAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgY29tcGxldGU6IHN0YXRzLmdyZWVuVGFza3MsXG4gICAgICAgIG92ZXJ0aW1lOiBzdGF0cy55ZWxsb3dUYXNrcyxcbiAgICAgICAgaW5jb21wbGV0ZTogc3RhdHMucmVkVGFza3MsXG4gICAgfTtcbiAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZmZpY2llbmN5LWNoYXJ0XCIpO1xuICAgIHJlbmRlckVmZmljaWVuY3lEYXRhKGNhbnZhcywgZGF0YSk7XG4gICAgLy9sZXQgY2FudmFzMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWZmaWNpZW5jeS13ZWVrbHktY2hhcnRcIik7XG5cbiAgICAvLyBUT0RPOiBsb2FkIGRhdGEgZnJvbSBsb2NhbFxuICAgIC8vIGxldCB3ZWVrbHlEYXRhID0ge1xuICAgIC8vICAgICBjb21wbGV0ZTogWzAsIDEwLCA1LCA2LCAyLCA4LCA0XSxcbiAgICAvLyAgICAgb3ZlcnRpbWU6IFs0LCAyLCAwLCAzLCAxLCAzLCA0XSxcbiAgICAvLyAgICAgaW5jb21wbGV0ZTogWzAsIDAsIDIsIDEsIDAsIDMsIDFdLFxuICAgIC8vIH07XG4gICAgLy8gbGV0IGRhdGVzID0gW1xuICAgIC8vICAgICBcIjIvMDNcIiwgXCIyLzA0XCIsXG4gICAgLy8gICAgIFwiMi8wNVwiLCBcIjIvMDZcIixcbiAgICAvLyAgICAgXCIyLzA3XCIsIFwiMi8wOFwiLFxuICAgIC8vICAgICBcIjIvMDlcIlxuICAgIC8vIF07XG4gICAgLy9yZW5kZXJFZmZpY2llbmN5V2Vla2x5RGF0YShjYW52YXMyLCB3ZWVrbHlEYXRhLCBkYXRlcyk7XG59KTtcbiIsIi8qKlxuICogUmVuZGVycyBhIGJhciBjaGFydCBvbnRvIHRoZSBnaXZlbiBjaGFydCBlbGVtZW50IHNob3dpbmcgdGhlIGRhaWx5IGRhdGFcbiAqIFxuICogQHBhcmFtIHtIVE1MQ2FudmFzRWxlbWVudH0gY2hhcnRlbGVtZW50IC0gdGhlIGVsZW1lbnQgdG8gcmVuZGVyIGNoYXJ0IGRhdGEgb25cbiAqIEBwYXJhbSB7e2NvbXBsZXRlOiBudW1iZXIsIG92ZXJ0aW1lOiBudW1iZXIsIGluY29tcGxldGU6IG51bWJlcn19IGRhdGFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckVmZmljaWVuY3lEYXRhKGNoYXJ0ZWxlbWVudCwgZGF0YSkge1xuICAgIGxldCBjdHggPSBjaGFydGVsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGxldCBsYWJlbHMgPSBbXCJUYXNrcyBDb21wbGV0ZWQgb24gVGltZVwiLCBcIlRhc2tzIENvbXBsZXRlZCBvdmVyIFRpbWVcIiwgXCJUYXNrcyBJbmNvbXBsZXRlXCJdO1xuICAgIGxldCBjb2xvcnMgPSBbXCIjMjJERDlBXCIsIFwiI0Y5QzY0NFwiLCBcIiNGQTdGN0ZcIl07XG4gICAgbGV0IG15Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XG4gICAgICAgIHR5cGU6IFwiYmFyXCIsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGxhYmVsczogbGFiZWxzLFxuICAgICAgICAgICAgZGF0YXNldHM6IFt7XG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiIyBvZiBUYXNrc1wiLFxuICAgICAgICAgICAgICAgIGRhdGE6IFtkYXRhLmNvbXBsZXRlLCBkYXRhLm92ZXJ0aW1lLCBkYXRhLmluY29tcGxldGVdLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBjb2xvcnMsXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDFcbiAgICAgICAgICAgIH1dXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGxlZ2VuZDogZmFsc2UsXG4gICAgICAgICAgICBzY2FsZXM6IHtcbiAgICAgICAgICAgICAgICB5QXhlczogW3tcbiAgICAgICAgICAgICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8qKlxuICogUmVuZGVycyBhIGxpbmUgY2hhcnQgb250byB0aGUgY2hhcnQgZWxlbWVudCBvZiB3ZWVrbHkgZGF0YVxuICogXG4gKiBAcGFyYW0ge0hUTUxDYW52YXNFbGVtZW50fSBjaGFydGVsZW1lbnQgLSB0aGUgZWxlbWVudCB0byByZW5kZXIgY2hhcnQgZGF0YSBvblxuICogQHBhcmFtIHt7Y29tcGxldGU6IG51bWJlcltdLCBvdmVydGltZTogbnVtYmVyW10sIGluY29tcGxldGU6IG51bWJlcltdfX0gd2Vla2x5RGF0YVxuICogQHBhcmFtIHtzdHJpbmdbXX0gZGF0ZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckVmZmljaWVuY3lXZWVrbHlEYXRhKGNoYXJ0ZWxlbWVudCwgd2Vla2x5RGF0YSwgZGF0ZXMpIHtcbiAgICBsZXQgY3R4ID0gY2hhcnRlbGVtZW50LmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBsZXQgbGFiZWxzID0gW1wiVGFza3MgQ29tcGxldGVkIG9uIFRpbWVcIiwgXCJUYXNrcyBDb21wbGV0ZWQgb3ZlciBUaW1lXCIsIFwiVGFza3MgSW5jb21wbGV0ZVwiXTtcbiAgICBsZXQgY29sb3JzID0gW1wiIzIyREQ5QVwiLCBcIiNGOUM2NDRcIiwgXCIjRkE3RjdGXCJdO1xuICAgIGxldCBteUNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xuICAgICAgICB0eXBlOiBcImxpbmVcIixcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbGFiZWxzOiBkYXRlcyxcbiAgICAgICAgICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICAgICAgICAgIGxhYmVsOiBsYWJlbHNbMF0sXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiIzIyREQ5QVwiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgICAgICAgIGRhdGE6IHdlZWtseURhdGEuY29tcGxldGVcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogbGFiZWxzWzFdLFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIiNGOUM2NDRcIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICAgICAgICBkYXRhOiB3ZWVrbHlEYXRhLm92ZXJ0aW1lLFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBsYWJlbHNbMl0sXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiI0ZBN0Y3RlwiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgICAgICAgIGRhdGE6IHdlZWtseURhdGEuaW5jb21wbGV0ZVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgc2NhbGVzOiB7XG4gICAgICAgICAgICAgICAgeUF4ZXM6IFt7XG4gICAgICAgICAgICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=