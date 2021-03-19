/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./source/assets/scripts/database/index.js":
/*!*************************************************!*\
  !*** ./source/assets/scripts/database/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./source/assets/scripts/database/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jc2UxMTAtdzIxLWdyb3VwMjEvLi9zb3VyY2UvYXNzZXRzL3NjcmlwdHMvZGF0YWJhc2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3NlMTEwLXcyMS1ncm91cDIxLy4vc291cmNlL2Fzc2V0cy9zY3JpcHRzL2RhdGFiYXNlL3Nlc3Npb24uanMiLCJ3ZWJwYWNrOi8vY3NlMTEwLXcyMS1ncm91cDIxLy4vc291cmNlL2Fzc2V0cy9zY3JpcHRzL2RhdGFiYXNlL3Rhc2suanMiLCJ3ZWJwYWNrOi8vY3NlMTEwLXcyMS1ncm91cDIxL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NzZTExMC13MjEtZ3JvdXAyMS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY3NlMTEwLXcyMS1ncm91cDIxL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY3NlMTEwLXcyMS1ncm91cDIxL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY3NlMTEwLXcyMS1ncm91cDIxL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJpbml0aWFsaXplRGF0YWJhc2UiLCJuZWVkVG9Jbml0aWFsaXplIiwiZ2V0T2JqZWN0IiwiUE9NT19UQVNLX01BUCIsIlBPTU9fVEFTS19JTkRFWCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJQT01PX1NFU1NJT05fSUQiLCJMQVRFU1RfUE9NT19TRVNTSU9OX1NUQVRVUyIsIlBPTU9fU0VTU0lPTl9NQVAiLCJzdG9yZU9iamVjdCIsInJlc2V0RGF0YWJhc2UiLCJrZXkiLCJvYmplY3QiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInBhcnNlIiwiUE9NT19TRVNTSU9OX01PREVTIiwiSU5BQ1RJVkUiLCJCUkVBSyIsIkxPTkdfQlJFQUsiLCJBQ1RJVkUiLCJDT01QTEVURSIsIlBvbW9TZXNzaW9uIiwiaWQiLCJhbGxUYXNrcyIsIm1vZGUiLCJ0aW1lIiwicG9tb3NFbGFwc2VkIiwic3RhcnREYXRlIiwiRGF0ZSIsImFsbEluUHJvZ3Jlc3NUYXNrcyIsImZpbHRlciIsInRhc2siLCJjb21wbGV0ZWQiLCJsZW5ndGgiLCJzdG9yZVRhc2siLCJwdXNoIiwiZGVsZXRlVGFza0J5VGFza0lEIiwiaSIsInN0b3JlZFRhc2siLCJzcGxpY2UiLCJwb21vc1VzZWQiLCJsZWZ0IiwiZm9yRWFjaCIsIk1hdGgiLCJtYXgiLCJwb21vc1JlcXVpcmVkIiwic2Vzc2lvbl9vYmoiLCJtYXAiLCJ0YXNrT2JqIiwidCIsIlRhc2siLCJwYXJzZVRhc2tGcm9tT2JqIiwic2VyaWFsaXplSW50b09iaiIsImdldFRpbWUiLCJnZXRQb21vU2Vzc2lvbiIsImFsbFNlc3Npb25zIiwicCIsInBhcnNlU2Vzc2lvbkZyb21PYmoiLCJzdG9yZVBvbW9TZXNzaW9uIiwic2Vzc2lvbiIsImdldE5ld1Nlc3Npb25JRCIsInByZXZJRCIsInBhcnNlSW50Iiwic2V0Q3VycmVudFNlc3Npb25TdGF0dXMiLCJzdGF0dXMiLCJnZXRMYXRlc3RTZXNzaW9uSUQiLCJ0aGVyZUlzVW5maW5pc2hlZFNlc3Npb24iLCJzZXNzaW9uSUQiLCJjdXJyZW50UG9tb1Nlc3Npb24iLCJjb250aW51ZUFjdGl2ZVNlc3Npb24iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ0YXNrX29iaiIsInRhc2tfbWFwIiwib2JqIiwiZ2V0VGFzayIsImdldEFsbFRhc2tzIiwicGFyc2VkX3Rhc2tfbWFwIiwiYXJlVGhlcmVVbmZpbmlzaGVkVGFza3NGcm9tTGFzdFNlc3Npb24iLCJvbGRTZXNzaW9uSUQiLCJjdXJyZW50VGFzayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxTQUFTQSxrQkFBVCxHQUE4QjtBQUNqQztBQUNBLE1BQUlDLGdCQUFnQixHQUFHLEtBQXZCOztBQUNBLE1BQUlD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QUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiZGF0YWJhc2UuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUE9NT19UQVNLX0lOREVYLCBQT01PX1RBU0tfTUFQIH0gZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IHsgUE9NT19TRVNTSU9OX0lELCBMQVRFU1RfUE9NT19TRVNTSU9OX1NUQVRVUywgUE9NT19TRVNTSU9OX01BUCB9IGZyb20gXCIuL3Nlc3Npb25cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVEYXRhYmFzZSgpIHtcbiAgICAvLyBjaGVjayBpZiB3ZSBuZWVkIHRvIGluaXRpYWxpemVcbiAgICBsZXQgbmVlZFRvSW5pdGlhbGl6ZSA9IGZhbHNlO1xuICAgIGlmIChnZXRPYmplY3QoUE9NT19UQVNLX01BUCkgPT09IG51bGwpIHtcbiAgICAgICAgbmVlZFRvSW5pdGlhbGl6ZSA9IHRydWU7XG4gICAgfVxuICAgIGlmIChnZXRPYmplY3QoUE9NT19UQVNLX0lOREVYKSA9PT0gbnVsbCkge1xuICAgICAgICBuZWVkVG9Jbml0aWFsaXplID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShQT01PX1NFU1NJT05fSUQpID09PSBudWxsKSB7XG4gICAgICAgIG5lZWRUb0luaXRpYWxpemUgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKExBVEVTVF9QT01PX1NFU1NJT05fU1RBVFVTKSA9PT0gbnVsbCkge1xuICAgICAgICBuZWVkVG9Jbml0aWFsaXplID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGdldE9iamVjdChQT01PX1NFU1NJT05fTUFQKSA9PT0gbnVsbCkge1xuICAgICAgICBuZWVkVG9Jbml0aWFsaXplID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyB0aGVuIGluaXRpYWxpemVcbiAgICBpZiAobmVlZFRvSW5pdGlhbGl6ZSkge1xuICAgICAgICBzdG9yZU9iamVjdChQT01PX1RBU0tfTUFQLCB7fSk7XG4gICAgICAgIHN0b3JlT2JqZWN0KFBPTU9fVEFTS19JTkRFWCwgMCk7XG4gICAgICAgIHN0b3JlT2JqZWN0KExBVEVTVF9QT01PX1NFU1NJT05fU1RBVFVTLCBcImNvbXBsZXRlXCIpO1xuICAgICAgICBzdG9yZU9iamVjdChQT01PX1NFU1NJT05fSUQsIDApO1xuICAgICAgICBzdG9yZU9iamVjdChQT01PX1NFU1NJT05fTUFQLCB7fSk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0RGF0YWJhc2UoKSB7XG4gICAgZGVsZXRlIGxvY2FsU3RvcmFnZVtQT01PX1RBU0tfTUFQXTtcbiAgICBkZWxldGUgbG9jYWxTdG9yYWdlW1BPTU9fVEFTS19JTkRFWF07XG4gICAgZGVsZXRlIGxvY2FsU3RvcmFnZVtMQVRFU1RfUE9NT19TRVNTSU9OX1NUQVRVU107XG4gICAgZGVsZXRlIGxvY2FsU3RvcmFnZVtQT01PX1NFU1NJT05fSURdO1xuICAgIGRlbGV0ZSBsb2NhbFN0b3JhZ2VbUE9NT19TRVNTSU9OX01BUF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdG9yZU9iamVjdChrZXksIG9iamVjdCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkob2JqZWN0KSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0T2JqZWN0KGtleSkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpO1xufSIsIi8qKlxuICogVGhpcyBmaWxlIGlzIHJlbGF0ZWQgdG8gZmluZGluZyBwb21vIHNlc3Npb25zXG4gKi9cbmltcG9ydCB7IGdldE9iamVjdCwgc3RvcmVPYmplY3QgfSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHsgZGVsZXRlVGFza0J5VGFza0lELCBzdG9yZVRhc2ssIFRhc2sgfSBmcm9tIFwiLi90YXNrXCI7XG5cblxuZXhwb3J0IGNvbnN0IFBPTU9fU0VTU0lPTl9JRCA9IFwicG9tb19zZXNzaW9uX2lkXCI7XG5leHBvcnQgY29uc3QgTEFURVNUX1BPTU9fU0VTU0lPTl9TVEFUVVMgPSBcImxhdGVzdF9wb21vX3Nlc3Npb25fc3RhdHVzXCI7XG5leHBvcnQgY29uc3QgUE9NT19TRVNTSU9OX01BUCA9IFwicG9tb19zZXNzaW9uX21hcFwiO1xuXG4vKiogdGhlIGRpZmZlcmVudCBwb21vIHNlc3Npb24gbW9kZXMgYXMgY29uc3RhbnRzICovXG5leHBvcnQgY29uc3QgUE9NT19TRVNTSU9OX01PREVTID0ge1xuICAvKiogd2hlbiB0aGUgdXNlciBpcyBpbiB0aGUgaW50ZXJmYWNlIG9mIGNyZWF0aW5nIGEgbmV3IHRpbWVyIGFuZCBoYXMgbm90IHN0YXJ0ZWQgdGhlaXIgbmV3IHNlc3Npb24geWV0ICovXG4gIElOQUNUSVZFOiBcImluYWN0aXZlXCIsXG4gIC8qKiB3aGVuIHJ1bm5pbmcgdGhlIGJyZWFrIHRpbWVyICovXG4gIEJSRUFLOiBcImJyZWFrXCIsXG4gIC8qKiB3aGVuIHJ1bm5pbmcgdGhlIGxvbmdlciBicmVhayB0aW1lciAqL1xuICBMT05HX0JSRUFLOiBcImxvbmdicmVha1wiLFxuICAvKiogd2hlbiBydW5uaW5nIHRoZSBhY3RpdmUgcG9tbyB3b3JrIHRpbWUgKi9cbiAgQUNUSVZFOiBcImFjdGl2ZVwiLFxuICAvKiogd2hlbiB0aGUgdXNlciBtYXJrcyB0aGlzIHBvbW8gc2Vzc2lvbiBhcyBjb21wbGV0ZSwgcmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRhc2tzIGFyZSBjb21wbGV0ZWQgb3Igbm90ICovXG4gIENPTVBMRVRFOiBcImNvbXBsZXRlXCIsXG59O1xuXG5leHBvcnQgY2xhc3MgUG9tb1Nlc3Npb24ge1xuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IFBvbW8gU2Vzc2lvbiBvYmplY3RcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlkIC0gaWQgb2YgdGhpcyBzZXNzaW9uXG4gICAqL1xuICBjb25zdHJ1Y3RvcihpZCkge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICAvKiogQHR5cGUge1Rhc2tbXX0gLSBhIGxpc3Qgb2YgYWxsIHRhc2tzIGFzc29jaWF0ZWQgd2l0aCB0aGlzIHNlc3Npb24gKi9cbiAgICB0aGlzLmFsbFRhc2tzID0gW107XG4gICAgLyoqIEB0eXBlIHtzdHJpbmd9IC0gdGhlIGN1cnJlbnQgbW9kZSBvZiB0aGUgcG9tbyBzZXNzaW9uICovXG4gICAgdGhpcy5tb2RlID0gUE9NT19TRVNTSU9OX01PREVTLklOQUNUSVZFO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAtIHRoZSBjdXJyZW50IHRpbWUgb2YgdGhlIHBvbW8gc2Vzc2lvbiAqL1xuICAgIHRoaXMudGltZSA9IDA7XG5cbiAgICAvKiogQHR5cGUge051bWJlcn0gLSBudW1iZXIgb2YgcG9tb3MgZWxhcHNlZCBzdWNjZXNmdWxseSBmb3IgdGhpcyBwb21vIHNlc3Npb24gKi9cbiAgICB0aGlzLnBvbW9zRWxhcHNlZCA9IDA7XG5cbiAgICB0aGlzLnN0YXJ0RGF0ZSA9IG5ldyBEYXRlKCk7XG4gIH1cbiAgLyoqXG4gICAqIFxuICAgKiBAcmV0dXJucyB7VGFzayB8IG51bGwgfSAtIHRoZSBjdXJyZW50IHRhc2sgZm9yIHRoaXMgcG9tbyBzZXNzaW9uIG9yIG51bGwgaWYgdGhlcmUgYXJlIG5vIHRhc2tzIGxlZnRcbiAgICovXG4gIGN1cnJlbnRUYXNrKCkge1xuICAgIGxldCBhbGxJblByb2dyZXNzVGFza3MgPSB0aGlzLmFsbFRhc2tzLmZpbHRlcigodGFzaykgPT4gIXRhc2suY29tcGxldGVkKTtcbiAgICBpZiAoYWxsSW5Qcm9ncmVzc1Rhc2tzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIGFsbEluUHJvZ3Jlc3NUYXNrc1swXTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgLyoqXG4gICAqIEFkZHMgYSBuZXcgdGFza1xuICAgKiBAcGFyYW0ge1Rhc2t9IHRhc2sgXG4gICAqL1xuICBhZGRUYXNrKHRhc2spIHtcbiAgICBzdG9yZVRhc2sodGFzayk7XG4gICAgdGhpcy5hbGxUYXNrcy5wdXNoKHRhc2spO1xuICB9XG4gIC8qKlxuICAgKiBEZWxldGUgYSB0YXNrXG4gICAqIEBwYXJhbSB7VGFza30gdGFzayBcbiAgICovXG4gIGRlbGV0ZVRhc2sodGFzaykge1xuICAgIGRlbGV0ZVRhc2tCeVRhc2tJRCh0YXNrLmlkKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYWxsVGFza3MubGVuZ3RoOyBpKyspe1xuICAgICAgY29uc3Qgc3RvcmVkVGFzayA9IHRoaXMuYWxsVGFza3NbaV07XG4gICAgICBpZiAodGFzay5pZCA9PT0gc3RvcmVkVGFzay5pZCkge1xuICAgICAgICB0aGlzLmFsbFRhc2tzLnNwbGljZShpLCAxKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wbGV0ZXMgdGhlIGdpdmVuIHRhc2sgYXNzb2NpYXRlZCB0byB0aGUgaWRcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlkIFxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiBjb21wbGV0ZWQsIGZhbHNlIGlmIG5vIHRhc2sgZm91bmRcbiAgICovXG4gIGNvbXBsZXRlVGFzayhpZCkge1xuICAgIGZvciAobGV0IHRhc2sgb2YgdGhpcy5hbGxUYXNrcykge1xuICAgICAgaWYgKHRhc2suaWQgPT09IGlkKSB7XG4gICAgICAgIHRhc2suY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbmV4dCBpbmNvbXBsZXRlIHRhc2sgaW4gdGhlIG9yZGVyIG9yIG51bGwgaWYgYWxsIGNvbXBsZXRlZFxuICAgKiBAcmV0dXJucyB7VGFzayB8IG51bGx9XG4gICAqL1xuICBnZXROZXh0VGFzaygpIHtcbiAgICBmb3IgKGNvbnN0IHRhc2sgb2YgdGhpcy5hbGxUYXNrcykge1xuICAgICAgaWYgKHRhc2suY29tcGxldGVkID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gdGFzaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgLyoqXG4gICAqIEluY3JlbWVudCB0aGUgcG9tb3MgdXNlZCBmb3IgYSB0YXNrIGFuZCBpbmNyZW1lbnQgcG9tb3NFbGFwc2VkXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpZCBcbiAgICovXG4gIGluY3JlbWVudFRhc2tQb21vc1VzZWQoaWQpIHtcbiAgICBmb3IgKGNvbnN0IHRhc2sgb2YgdGhpcy5hbGxUYXNrcykge1xuICAgICAgaWYgKHRhc2suaWQgPT09IGlkKSB7XG4gICAgICAgIHRhc2sucG9tb3NVc2VkICs9IDE7XG4gICAgICAgIHRoaXMucG9tb3NFbGFwc2VkICs9IDE7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogXG4gICAqIEByZXR1cm5zIHRydWUgaWYgc2Vzc2lvbiBpcyBpbiBicmVhayBtb2RlIHJpZ2h0IG5vdywgZmFsc2Ugb3RoZXJ3aXNlXG4gICAqL1xuICBpc0JyZWFrKCkge1xuICAgIHJldHVybiB0aGlzLm1vZGUgPT09IFBPTU9fU0VTU0lPTl9NT0RFUy5MT05HX0JSRUFLIHx8IHRoaXMubW9kZSA9PT0gUE9NT19TRVNTSU9OX01PREVTLkJSRUFLO1xuICB9XG5cbiAgLyoqXG4gICAqIFRPRE9cbiAgICovXG4gIHJlb3JkZXJUYXNrcygpIHtcblxuICB9XG5cbiAgZ2V0UG9tb3NMZWZ0SW5TZXNzaW9uKCkge1xuICAgIGxldCBsZWZ0ID0gMDtcbiAgICB0aGlzLmFsbFRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGxlZnQgKz0gTWF0aC5tYXgodGFzay5wb21vc1JlcXVpcmVkIC0gdGFzay5wb21vc1VzZWQsIDApO1xuICAgIH0pO1xuICAgIHJldHVybiBsZWZ0O1xuICB9XG4gIHBhcnNlU2Vzc2lvbkZyb21PYmooc2Vzc2lvbl9vYmopIHtcbiAgICB0aGlzLmlkID0gc2Vzc2lvbl9vYmouaWQ7XG4gICAgdGhpcy5tb2RlID0gc2Vzc2lvbl9vYmoubW9kZTtcbiAgICB0aGlzLnRpbWUgPSBzZXNzaW9uX29iai50aW1lO1xuICAgIHRoaXMucG9tb3NFbGFwc2VkID0gc2Vzc2lvbl9vYmoucG9tb3NFbGFwc2VkO1xuICAgIHRoaXMuc3RhcnREYXRlID0gbmV3IERhdGUoc2Vzc2lvbl9vYmouc3RhcnREYXRlKTtcbiAgICB0aGlzLmFsbFRhc2tzID0gc2Vzc2lvbl9vYmouYWxsVGFza3MubWFwKCh0YXNrT2JqKSA9PiB7XG4gICAgICBsZXQgdCA9IG5ldyBUYXNrKCk7XG4gICAgICB0ID0gdC5wYXJzZVRhc2tGcm9tT2JqKHRhc2tPYmopO1xuICAgICAgcmV0dXJuIHQ7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgc2VyaWFsaXplSW50b09iaigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHRoaXMuaWQsIGFsbFRhc2tzOiB0aGlzLmFsbFRhc2tzLm1hcCgodGFzaykgPT4gdGFzay5zZXJpYWxpemVJbnRvT2JqKCkpLCBtb2RlOiB0aGlzLm1vZGUsIHRpbWU6IHRoaXMudGltZSwgcG9tb3NFbGFwc2VkOiB0aGlzLnBvbW9zRWxhcHNlZCwgc3RhcnREYXRlOiB0aGlzLnN0YXJ0RGF0ZS5nZXRUaW1lKClcbiAgICB9O1xuICB9XG59XG5cbi8qKlxuICogR2V0IGEgcG9tbyBzZXNzaW9uIG9iamVjdFxuICogQHBhcmFtIHtudW1iZXJ9IGlkIFxuICogQHJldHVybnMge1BvbW9TZXNzaW9uIHwgbnVsbH0gdGhlIHNlc3Npb24gZm9yIHRoaXMgaWQgb3IgbnVsbCBpZiB0aGVyZSBpcyBubyBzZXNzaW9uIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGlkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb21vU2Vzc2lvbihpZCkge1xuICBjb25zdCBhbGxTZXNzaW9ucyA9IGdldE9iamVjdChQT01PX1NFU1NJT05fTUFQKTtcbiAgbGV0IHAgPSBuZXcgUG9tb1Nlc3Npb24oKTtcbiAgaWYgKCFhbGxTZXNzaW9uc1tpZF0pIHJldHVybiBudWxsO1xuICByZXR1cm4gcC5wYXJzZVNlc3Npb25Gcm9tT2JqKGFsbFNlc3Npb25zW2lkXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdG9yZVBvbW9TZXNzaW9uKHNlc3Npb24pIHtcbiAgY29uc3QgYWxsU2Vzc2lvbnMgPSBnZXRPYmplY3QoUE9NT19TRVNTSU9OX01BUCk7XG4gIGFsbFNlc3Npb25zW3Nlc3Npb24uaWRdID0gc2Vzc2lvbi5zZXJpYWxpemVJbnRvT2JqKCk7XG4gIHN0b3JlT2JqZWN0KFBPTU9fU0VTU0lPTl9NQVAsIGFsbFNlc3Npb25zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5ld1Nlc3Npb25JRCgpIHtcbiAgbGV0IHByZXZJRCA9IHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKFBPTU9fU0VTU0lPTl9JRCkpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShQT01PX1NFU1NJT05fSUQsIHByZXZJRCArIDEpO1xuICByZXR1cm4gcHJldklEO1xufVxuXG4vKipcbiAqIFNldCB0aGUgY3VycmVudCBzZXNzaW9uJ3Mgc3RhdHVzXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RhdHVzIC0gY2FuIGJlIFwiY29tcGxldGVcIiBvciBcImluLXByb2dyZXNzXCJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldEN1cnJlbnRTZXNzaW9uU3RhdHVzKHN0YXR1cykge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShMQVRFU1RfUE9NT19TRVNTSU9OX1NUQVRVUywgc3RhdHVzKTtcbn1cblxuLyoqXG4gKiBXaWxsIHJldHVybiB0aGUgc2Vzc2lvbiBJRCBvZiB0aGUgbGFzdCBzZXNzaW9uIGlmIGl0IHdhcyBub3QgZW5kZWQuIE90aGVyd2lzZSBpZiB0aGUgbGFzdCBzZXNzaW9uIGRvZXMgbm90IGV4aXN0IFxuICogb3Igd2FzIGVuZGVkIGFscmVhZHksIHRoaXMgZnVuY3Rpb24gcmV0dXJucyBudWxsXG4gKiBcbiAqIEByZXR1cm5zIHtudW1iZXIgfCBudWxsfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGF0ZXN0U2Vzc2lvbklEKCkge1xuICBsZXQgc3RhdHVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oTEFURVNUX1BPTU9fU0VTU0lPTl9TVEFUVVMpO1xuICBpZiAoc3RhdHVzID09PSBcImNvbXBsZXRlXCIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oUE9NT19TRVNTSU9OX0lEKSkgLSAxO1xuICB9XG59XG5cbi8qKlxuICogQHJldHVybnMge2Jvb2xlYW59IC0gdHJ1ZSBpZiB0aGVyZSBpcyBhIHVuZmluaXNoZWQgc2Vzc2lvbiB0aGF0IHdhcyBub3QgY29tcGxldGVkIG9yIHF1aXR0ZWQuIGZhbHNlIG90aGVyd2lzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gdGhlcmVJc1VuZmluaXNoZWRTZXNzaW9uKCkge1xuICBsZXQgc2Vzc2lvbklEID0gZ2V0TGF0ZXN0U2Vzc2lvbklEKCk7XG4gIGlmIChzZXNzaW9uSUQgPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgbGV0IGN1cnJlbnRQb21vU2Vzc2lvbiA9IGdldFBvbW9TZXNzaW9uKHNlc3Npb25JRCk7XG4gIGlmIChjdXJyZW50UG9tb1Nlc3Npb24gIT09IG51bGwgJiYgY3VycmVudFBvbW9TZXNzaW9uLm1vZGUgIT09IFBPTU9fU0VTU0lPTl9NT0RFUy5DT01QTEVURSAmJiBjdXJyZW50UG9tb1Nlc3Npb24ubW9kZSAhPT0gUE9NT19TRVNTSU9OX01PREVTLklOQUNUSVZFKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udGludWVBY3RpdmVTZXNzaW9uKCkge1xuICBpZiAodGhlcmVJc1VuZmluaXNoZWRTZXNzaW9uKCkpIHtcbiAgICB3aW5kb3cubG9jYXRpb24gPSBcIi90aW1lci5odG1sP2xvYWRTYXZlZD10cnVlXCI7XG4gIH1cbn0iLCJpbXBvcnQgeyBnZXRPYmplY3QsIHN0b3JlT2JqZWN0IH0gZnJvbSBcIi5cIjtcbmltcG9ydCB7IGdldExhdGVzdFNlc3Npb25JRCwgZ2V0UG9tb1Nlc3Npb24gfSBmcm9tIFwiLi9zZXNzaW9uXCI7XG5cbmV4cG9ydCBjbGFzcyBUYXNrIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2Vzc2lvbklEIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZSBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGVzY3JpcHRpb24gXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBvbW9zUmVxdWlyZWQgXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2Vzc2lvbklELCB0aXRsZSwgZGVzY3JpcHRpb24sIHBvbW9zUmVxdWlyZWQpIHtcbiAgICAgICAgdGhpcy5zZXNzaW9uSUQgPSBzZXNzaW9uSUQ7XG4gICAgICAgIHRoaXMuaWQgPSAtMTtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMucG9tb3NSZXF1aXJlZCA9IHBvbW9zUmVxdWlyZWQ7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucG9tb3NVc2VkID0gMDtcbiAgICB9XG4gICAgcGFyc2VUYXNrRnJvbU9iaih0YXNrX29iaikge1xuICAgICAgICBsZXQgdGFzayA9IG5ldyBUYXNrKHRhc2tfb2JqLnNlc3Npb25JRCwgdGFza19vYmoudGl0bGUsIHRhc2tfb2JqLmRlc2NyaXB0aW9uLCB0YXNrX29iai5wb21vc1JlcXVpcmVkKTtcbiAgICAgICAgdGFzay5jb21wbGV0ZWQgPSB0YXNrX29iai5jb21wbGV0ZWQ7XG4gICAgICAgIHRhc2suaWQgPSB0YXNrX29iai5pZDtcbiAgICAgICAgdGFzay5wb21vc1VzZWQgPSB0YXNrX29iai5wb21vc1VzZWQ7XG4gICAgICAgIHJldHVybiB0YXNrO1xuICAgIH1cbiAgICBzZXJpYWxpemVJbnRvT2JqKCkge1xuICAgICAgICByZXR1cm4geyB0aXRsZTogdGhpcy50aXRsZSwgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sIHBvbW9zUmVxdWlyZWQ6IHRoaXMucG9tb3NSZXF1aXJlZCwgY29tcGxldGVkOiB0aGlzLmNvbXBsZXRlZCwgcG9tb3NVc2VkOiB0aGlzLnBvbW9zVXNlZCwgaWQ6IHRoaXMuaWQsIHNlc3Npb25JRDogdGhpcy5zZXNzaW9uSUQgfTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBQT01PX1RBU0tfTUFQID0gXCJwb21vX3Rhc2tfbWFwXCI7XG5leHBvcnQgY29uc3QgUE9NT19UQVNLX0lOREVYID0gXCJwb21vX3Rhc2tfaW5kZXhcIjtcblxuLyoqXG4gKiBXaWxsIHN0b3JlIGEgbmV3IG9yIHVwZGF0ZWQgdGFzayBpbnRvIGxvY2FsIHN0b3JhZ2VcbiAqIFxuICogSGFzIGEgc2lkZSBlZmZlY3Qgb2YgYWRkaW5nIHRoZSBpZCBvZiB0aGUgbmV3IHRhc2sgaWYgaXQgd2FzbnQgc3RvcmVkIGluIHN0b3JhZ2UgYmVmb3JlXG4gKiBcbiAqIEBwYXJhbSB7VGFza30gdGFza1xuICogQHJldHVybnMge251bWJlcn0gLSB0aGUgaWQgb2YgdGhlIHRhc2tcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0b3JlVGFzayh0YXNrKSB7XG4gICAgbGV0IHRhc2tfbWFwID0gZ2V0T2JqZWN0KFBPTU9fVEFTS19NQVApO1xuICAgIGlmICghdGFza19tYXBbdGFzay5pZF0pIHtcbiAgICAgICAgLy8gaWYgdGFzayBtYXAgZG9lcyBub3QgaGF2ZSB0aGlzIHRhc2ssIGNyZWF0ZSBhIG5ldyBpbmRleFxuICAgICAgICBsZXQgaWQgPSBwYXJzZUludChnZXRPYmplY3QoUE9NT19UQVNLX0lOREVYKSk7XG4gICAgICAgIHRhc2suaWQgPSBpZDtcbiAgICAgICAgLy8gaW5jcmVtZW50IGdsb2JhbCBpZFxuICAgICAgICBzdG9yZU9iamVjdChQT01PX1RBU0tfSU5ERVgsIGlkICsgMSk7XG4gICAgfVxuICAgIGxldCBvYmogPSB0YXNrLnNlcmlhbGl6ZUludG9PYmooKTtcbiAgICB0YXNrX21hcFt0YXNrLmlkXSA9IG9iajtcbiAgICBzdG9yZU9iamVjdChQT01PX1RBU0tfTUFQLCB0YXNrX21hcCk7XG4gICAgcmV0dXJuIHRhc2suaWQ7XG59XG5cbi8qKlxuICogR2V0IHRoZSB0YXNrIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGlkXG4gKiBAcGFyYW0ge251bWJlcn0gaWQgXG4gKiBAcmV0dXJucyB7VGFza31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRhc2soaWQpIHtcbiAgICBsZXQgdGFza19tYXAgPSBnZXRPYmplY3QoUE9NT19UQVNLX01BUCk7XG4gICAgbGV0IHRhc2tfb2JqID0gdGFza19tYXBbaWRdO1xuICAgIGxldCB0ID0gbmV3IFRhc2soKTtcbiAgICB0ID0gdC5wYXJzZVRhc2tGcm9tT2JqKHRhc2tfb2JqKTtcbiAgICByZXR1cm4gdDtcblxufVxuLyoqXG4gKiBHZXQgYWxsIHRhc2tzXG4gKiBcbiAqIEByZXR1cm5zIHtNYXA8bnVtYmVyLCBUYXNrPn0gLSBhIG1hcCBmcm9tIHRhc2sgaWQgdG8gdGFza1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsVGFza3MoKSB7XG4gICAgbGV0IHRhc2tfbWFwID0gZ2V0T2JqZWN0KFBPTU9fVEFTS19NQVApO1xuICAgIGxldCBwYXJzZWRfdGFza19tYXAgPSB7fTtcbiAgICBmb3IgKGxldCBpZCBpbiB0YXNrX21hcCkge1xuICAgICAgICBsZXQgdGFza19vYmogPSB0YXNrX21hcFtpZF07XG4gICAgICAgIGxldCB0ID0gbmV3IFRhc2soKTtcbiAgICAgICAgdCA9IHQucGFyc2VUYXNrRnJvbU9iaih0YXNrX29iaik7XG4gICAgICAgIHBhcnNlZF90YXNrX21hcFtpZF0gPSB0O1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VkX3Rhc2tfbWFwO1xufVxuXG4vKipcbiAqIERlbGV0ZSBhIHNwZWNpZmljIHRhc2sgZnJvbSBkYXRhYmFzZSBieSB0aGUgdW5pcXVlIHRhc2sgSURcbiAqIFxuICogQHBhcmFtIHtudW1iZXJ9IGlkIFxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVGFza0J5VGFza0lEKGlkKSB7XG4gICAgbGV0IHRhc2tfbWFwID0gZ2V0T2JqZWN0KFBPTU9fVEFTS19NQVApO1xuICAgIGRlbGV0ZSB0YXNrX21hcFtpZF07XG4gICAgc3RvcmVPYmplY3QoUE9NT19UQVNLX01BUCwgdGFza19tYXApO1xufVxuXG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZXJlIGFyZSBhbnkgdW5maW5pc2hlZCB0YXNrcyBmcm9tIHRoZSBwcmV2aW91cyBzZXNzaW9uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSB0cnVlIGlmIHVuaWZpbmlzaGVkIHRhc2tzIGV4aXN0LCBmYWxzZSBvdGhlcndpc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFyZVRoZXJlVW5maW5pc2hlZFRhc2tzRnJvbUxhc3RTZXNzaW9uKCkge1xuICAgIGxldCBvbGRTZXNzaW9uSUQgPSBnZXRMYXRlc3RTZXNzaW9uSUQoKTtcbiAgICBpZiAob2xkU2Vzc2lvbklEID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgbGV0IHNlc3Npb24gPSBnZXRQb21vU2Vzc2lvbihvbGRTZXNzaW9uSUQpO1xuICAgIGlmIChzZXNzaW9uID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHNlc3Npb24uY3VycmVudFRhc2soKSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zb3VyY2UvYXNzZXRzL3NjcmlwdHMvZGF0YWJhc2UvaW5kZXguanNcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9