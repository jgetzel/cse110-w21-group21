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

/***/ }),

/***/ "./source/assets/scripts/utils/theme.js":
/*!**********************************************!*\
  !*** ./source/assets/scripts/utils/theme.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************************!*\
  !*** ./source/assets/scripts/main.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./database */ "./source/assets/scripts/database/index.js");
/* harmony import */ var _database_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./database/session */ "./source/assets/scripts/database/session.js");
/* harmony import */ var _database_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./database/task */ "./source/assets/scripts/database/task.js");
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/theme */ "./source/assets/scripts/utils/theme.js");




window.addEventListener("DOMContentLoaded", function () {
  // create example button i guess
  (0,_database__WEBPACK_IMPORTED_MODULE_0__.initializeDatabase)();
  (0,_database_session__WEBPACK_IMPORTED_MODULE_1__.continueActiveSession)();
  (0,_utils_theme__WEBPACK_IMPORTED_MODULE_3__.selectAndSetTheme)();
  var oldTasksLeft = (0,_database_task__WEBPACK_IMPORTED_MODULE_2__.areThereUnfinishedTasksFromLastSession)();

  if (!oldTasksLeft) {
    console.log(document.getElementById("leftover-tasks-wrapper"));
    document.getElementById("leftover-tasks-wrapper").style.display = "none";
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jc2UxMTAtdzIxLWdyb3VwMjEvLi9zb3VyY2UvYXNzZXRzL3NjcmlwdHMvZGF0YWJhc2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3NlMTEwLXcyMS1ncm91cDIxLy4vc291cmNlL2Fzc2V0cy9zY3JpcHRzL2RhdGFiYXNlL3Nlc3Npb24uanMiLCJ3ZWJwYWNrOi8vY3NlMTEwLXcyMS1ncm91cDIxLy4vc291cmNlL2Fzc2V0cy9zY3JpcHRzL2RhdGFiYXNlL3Rhc2suanMiLCJ3ZWJwYWNrOi8vY3NlMTEwLXcyMS1ncm91cDIxLy4vc291cmNlL2Fzc2V0cy9zY3JpcHRzL3V0aWxzL3RoZW1lLmpzIiwid2VicGFjazovL2NzZTExMC13MjEtZ3JvdXAyMS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jc2UxMTAtdzIxLWdyb3VwMjEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NzZTExMC13MjEtZ3JvdXAyMS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NzZTExMC13MjEtZ3JvdXAyMS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NzZTExMC13MjEtZ3JvdXAyMS8uL3NvdXJjZS9hc3NldHMvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbImluaXRpYWxpemVEYXRhYmFzZSIsIm5lZWRUb0luaXRpYWxpemUiLCJnZXRPYmplY3QiLCJQT01PX1RBU0tfTUFQIiwiUE9NT19UQVNLX0lOREVYIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIlBPTU9fU0VTU0lPTl9JRCIsIkxBVEVTVF9QT01PX1NFU1NJT05fU1RBVFVTIiwiUE9NT19TRVNTSU9OX01BUCIsInN0b3JlT2JqZWN0IiwicmVzZXREYXRhYmFzZSIsImtleSIsIm9iamVjdCIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwicGFyc2UiLCJQT01PX1NFU1NJT05fTU9ERVMiLCJJTkFDVElWRSIsIkJSRUFLIiwiTE9OR19CUkVBSyIsIkFDVElWRSIsIkNPTVBMRVRFIiwiUG9tb1Nlc3Npb24iLCJpZCIsImFsbFRhc2tzIiwibW9kZSIsInRpbWUiLCJwb21vc0VsYXBzZWQiLCJzdGFydERhdGUiLCJEYXRlIiwiYWxsSW5Qcm9ncmVzc1Rhc2tzIiwiZmlsdGVyIiwidGFzayIsImNvbXBsZXRlZCIsImxlbmd0aCIsInN0b3JlVGFzayIsInB1c2giLCJkZWxldGVUYXNrQnlUYXNrSUQiLCJpIiwic3RvcmVkVGFzayIsInNwbGljZSIsInBvbW9zVXNlZCIsImxlZnQiLCJmb3JFYWNoIiwiTWF0aCIsIm1heCIsInBvbW9zUmVxdWlyZWQiLCJzZXNzaW9uX29iaiIsIm1hcCIsInRhc2tPYmoiLCJ0IiwiVGFzayIsInBhcnNlVGFza0Zyb21PYmoiLCJzZXJpYWxpemVJbnRvT2JqIiwiZ2V0VGltZSIsImdldFBvbW9TZXNzaW9uIiwiYWxsU2Vzc2lvbnMiLCJwIiwicGFyc2VTZXNzaW9uRnJvbU9iaiIsInN0b3JlUG9tb1Nlc3Npb24iLCJzZXNzaW9uIiwiZ2V0TmV3U2Vzc2lvbklEIiwicHJldklEIiwicGFyc2VJbnQiLCJzZXRDdXJyZW50U2Vzc2lvblN0YXR1cyIsInN0YXR1cyIsImdldExhdGVzdFNlc3Npb25JRCIsInRoZXJlSXNVbmZpbmlzaGVkU2Vzc2lvbiIsInNlc3Npb25JRCIsImN1cnJlbnRQb21vU2Vzc2lvbiIsImNvbnRpbnVlQWN0aXZlU2Vzc2lvbiIsIndpbmRvdyIsImxvY2F0aW9uIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInRhc2tfb2JqIiwidGFza19tYXAiLCJvYmoiLCJnZXRUYXNrIiwiZ2V0QWxsVGFza3MiLCJwYXJzZWRfdGFza19tYXAiLCJhcmVUaGVyZVVuZmluaXNoZWRUYXNrc0Zyb21MYXN0U2Vzc2lvbiIsIm9sZFNlc3Npb25JRCIsImN1cnJlbnRUYXNrIiwic2VsZWN0QW5kU2V0VGhlbWUiLCJ0b2RheSIsIm51bUJHcyIsImQiLCJnZXREYXkiLCJzZWVkIiwiZmxvb3IiLCJyYW5kb20iLCJ0aW1lUGVyaW9kIiwiZ2V0VGhlbWVNb2RlIiwiZWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsIlRIRU1FX01PREVTIiwiREFZIiwiTklHSFQiLCJnZXRIb3VycyIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbGRUYXNrc0xlZnQiLCJjb25zb2xlIiwibG9nIiwiZGlzcGxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxTQUFTQSxrQkFBVCxHQUE4QjtBQUNqQztBQUNBLE1BQUlDLGdCQUFnQixHQUFHLEtBQXZCOztBQUNBLE1BQUlDLFNBQVMsQ0FBQ0MsZ0RBQUQsQ0FBVCxLQUE2QixJQUFqQyxFQUF1QztBQUNuQ0Ysb0JBQWdCLEdBQUcsSUFBbkI7QUFDSDs7QUFDRCxNQUFJQyxTQUFTLENBQUNFLGtEQUFELENBQVQsS0FBK0IsSUFBbkMsRUFBeUM7QUFDckNILG9CQUFnQixHQUFHLElBQW5CO0FBQ0g7O0FBQ0QsTUFBSSxDQUFDSSxZQUFZLENBQUNDLE9BQWIsQ0FBcUJDLHFEQUFyQixDQUFELEtBQTJDLElBQS9DLEVBQXFEO0FBQ2pETixvQkFBZ0IsR0FBRyxJQUFuQjtBQUNIOztBQUNELE1BQUksQ0FBQ0ksWUFBWSxDQUFDQyxPQUFiLENBQXFCRSxnRUFBckIsQ0FBRCxLQUFzRCxJQUExRCxFQUFnRTtBQUM1RFAsb0JBQWdCLEdBQUcsSUFBbkI7QUFDSDs7QUFDRCxNQUFJQyxTQUFTLENBQUNPLHNEQUFELENBQVQsS0FBZ0MsSUFBcEMsRUFBMEM7QUFDdENSLG9CQUFnQixHQUFHLElBQW5CO0FBQ0gsR0FqQmdDLENBbUJqQzs7O0FBQ0EsTUFBSUEsZ0JBQUosRUFBc0I7QUFDbEJTLGVBQVcsQ0FBQ1AsZ0RBQUQsRUFBZ0IsRUFBaEIsQ0FBWDtBQUNBTyxlQUFXLENBQUNOLGtEQUFELEVBQWtCLENBQWxC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UixDQUFZWCxRQUFRLENBQUNDLGNBQVQsQ0FBd0Isd0JBQXhCLENBQVo7QUFDQUQsWUFBUSxDQUFDQyxjQUFULENBQXdCLHdCQUF4QixFQUFrREMsS0FBbEQsQ0FBd0RVLE9BQXhELEdBQWtFLE1BQWxFO0FBQ0g7QUFDSixDQVZELEUiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQT01PX1RBU0tfSU5ERVgsIFBPTU9fVEFTS19NQVAgfSBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgeyBQT01PX1NFU1NJT05fSUQsIExBVEVTVF9QT01PX1NFU1NJT05fU1RBVFVTLCBQT01PX1NFU1NJT05fTUFQIH0gZnJvbSBcIi4vc2Vzc2lvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZURhdGFiYXNlKCkge1xuICAgIC8vIGNoZWNrIGlmIHdlIG5lZWQgdG8gaW5pdGlhbGl6ZVxuICAgIGxldCBuZWVkVG9Jbml0aWFsaXplID0gZmFsc2U7XG4gICAgaWYgKGdldE9iamVjdChQT01PX1RBU0tfTUFQKSA9PT0gbnVsbCkge1xuICAgICAgICBuZWVkVG9Jbml0aWFsaXplID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGdldE9iamVjdChQT01PX1RBU0tfSU5ERVgpID09PSBudWxsKSB7XG4gICAgICAgIG5lZWRUb0luaXRpYWxpemUgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFBPTU9fU0VTU0lPTl9JRCkgPT09IG51bGwpIHtcbiAgICAgICAgbmVlZFRvSW5pdGlhbGl6ZSA9IHRydWU7XG4gICAgfVxuICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oTEFURVNUX1BPTU9fU0VTU0lPTl9TVEFUVVMpID09PSBudWxsKSB7XG4gICAgICAgIG5lZWRUb0luaXRpYWxpemUgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoZ2V0T2JqZWN0KFBPTU9fU0VTU0lPTl9NQVApID09PSBudWxsKSB7XG4gICAgICAgIG5lZWRUb0luaXRpYWxpemUgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIHRoZW4gaW5pdGlhbGl6ZVxuICAgIGlmIChuZWVkVG9Jbml0aWFsaXplKSB7XG4gICAgICAgIHN0b3JlT2JqZWN0KFBPTU9fVEFTS19NQVAsIHt9KTtcbiAgICAgICAgc3RvcmVPYmplY3QoUE9NT19UQVNLX0lOREVYLCAwKTtcbiAgICAgICAgc3RvcmVPYmplY3QoTEFURVNUX1BPTU9fU0VTU0lPTl9TVEFUVVMsIFwiY29tcGxldGVcIik7XG4gICAgICAgIHN0b3JlT2JqZWN0KFBPTU9fU0VTU0lPTl9JRCwgMCk7XG4gICAgICAgIHN0b3JlT2JqZWN0KFBPTU9fU0VTU0lPTl9NQVAsIHt9KTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gcmVzZXREYXRhYmFzZSgpIHtcbiAgICBkZWxldGUgbG9jYWxTdG9yYWdlW1BPTU9fVEFTS19NQVBdO1xuICAgIGRlbGV0ZSBsb2NhbFN0b3JhZ2VbUE9NT19UQVNLX0lOREVYXTtcbiAgICBkZWxldGUgbG9jYWxTdG9yYWdlW0xBVEVTVF9QT01PX1NFU1NJT05fU1RBVFVTXTtcbiAgICBkZWxldGUgbG9jYWxTdG9yYWdlW1BPTU9fU0VTU0lPTl9JRF07XG4gICAgZGVsZXRlIGxvY2FsU3RvcmFnZVtQT01PX1NFU1NJT05fTUFQXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JlT2JqZWN0KGtleSwgb2JqZWN0KSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShvYmplY3QpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRPYmplY3Qoa2V5KSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSk7XG59IiwiLyoqXG4gKiBUaGlzIGZpbGUgaXMgcmVsYXRlZCB0byBmaW5kaW5nIHBvbW8gc2Vzc2lvbnNcbiAqL1xuaW1wb3J0IHsgZ2V0T2JqZWN0LCBzdG9yZU9iamVjdCB9IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgeyBkZWxldGVUYXNrQnlUYXNrSUQsIHN0b3JlVGFzaywgVGFzayB9IGZyb20gXCIuL3Rhc2tcIjtcblxuXG5leHBvcnQgY29uc3QgUE9NT19TRVNTSU9OX0lEID0gXCJwb21vX3Nlc3Npb25faWRcIjtcbmV4cG9ydCBjb25zdCBMQVRFU1RfUE9NT19TRVNTSU9OX1NUQVRVUyA9IFwibGF0ZXN0X3BvbW9fc2Vzc2lvbl9zdGF0dXNcIjtcbmV4cG9ydCBjb25zdCBQT01PX1NFU1NJT05fTUFQID0gXCJwb21vX3Nlc3Npb25fbWFwXCI7XG5cbi8qKiB0aGUgZGlmZmVyZW50IHBvbW8gc2Vzc2lvbiBtb2RlcyBhcyBjb25zdGFudHMgKi9cbmV4cG9ydCBjb25zdCBQT01PX1NFU1NJT05fTU9ERVMgPSB7XG4gIC8qKiB3aGVuIHRoZSB1c2VyIGlzIGluIHRoZSBpbnRlcmZhY2Ugb2YgY3JlYXRpbmcgYSBuZXcgdGltZXIgYW5kIGhhcyBub3Qgc3RhcnRlZCB0aGVpciBuZXcgc2Vzc2lvbiB5ZXQgKi9cbiAgSU5BQ1RJVkU6IFwiaW5hY3RpdmVcIixcbiAgLyoqIHdoZW4gcnVubmluZyB0aGUgYnJlYWsgdGltZXIgKi9cbiAgQlJFQUs6IFwiYnJlYWtcIixcbiAgLyoqIHdoZW4gcnVubmluZyB0aGUgbG9uZ2VyIGJyZWFrIHRpbWVyICovXG4gIExPTkdfQlJFQUs6IFwibG9uZ2JyZWFrXCIsXG4gIC8qKiB3aGVuIHJ1bm5pbmcgdGhlIGFjdGl2ZSBwb21vIHdvcmsgdGltZSAqL1xuICBBQ1RJVkU6IFwiYWN0aXZlXCIsXG4gIC8qKiB3aGVuIHRoZSB1c2VyIG1hcmtzIHRoaXMgcG9tbyBzZXNzaW9uIGFzIGNvbXBsZXRlLCByZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGFza3MgYXJlIGNvbXBsZXRlZCBvciBub3QgKi9cbiAgQ09NUExFVEU6IFwiY29tcGxldGVcIixcbn07XG5cbmV4cG9ydCBjbGFzcyBQb21vU2Vzc2lvbiB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgUG9tbyBTZXNzaW9uIG9iamVjdFxuICAgKiBAcGFyYW0ge251bWJlcn0gaWQgLSBpZCBvZiB0aGlzIHNlc3Npb25cbiAgICovXG4gIGNvbnN0cnVjdG9yKGlkKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIC8qKiBAdHlwZSB7VGFza1tdfSAtIGEgbGlzdCBvZiBhbGwgdGFza3MgYXNzb2NpYXRlZCB3aXRoIHRoaXMgc2Vzc2lvbiAqL1xuICAgIHRoaXMuYWxsVGFza3MgPSBbXTtcbiAgICAvKiogQHR5cGUge3N0cmluZ30gLSB0aGUgY3VycmVudCBtb2RlIG9mIHRoZSBwb21vIHNlc3Npb24gKi9cbiAgICB0aGlzLm1vZGUgPSBQT01PX1NFU1NJT05fTU9ERVMuSU5BQ1RJVkU7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9IC0gdGhlIGN1cnJlbnQgdGltZSBvZiB0aGUgcG9tbyBzZXNzaW9uICovXG4gICAgdGhpcy50aW1lID0gMDtcblxuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAtIG51bWJlciBvZiBwb21vcyBlbGFwc2VkIHN1Y2Nlc2Z1bGx5IGZvciB0aGlzIHBvbW8gc2Vzc2lvbiAqL1xuICAgIHRoaXMucG9tb3NFbGFwc2VkID0gMDtcblxuICAgIHRoaXMuc3RhcnREYXRlID0gbmV3IERhdGUoKTtcbiAgfVxuICAvKipcbiAgICogXG4gICAqIEByZXR1cm5zIHtUYXNrIHwgbnVsbCB9IC0gdGhlIGN1cnJlbnQgdGFzayBmb3IgdGhpcyBwb21vIHNlc3Npb24gb3IgbnVsbCBpZiB0aGVyZSBhcmUgbm8gdGFza3MgbGVmdFxuICAgKi9cbiAgY3VycmVudFRhc2soKSB7XG4gICAgbGV0IGFsbEluUHJvZ3Jlc3NUYXNrcyA9IHRoaXMuYWxsVGFza3MuZmlsdGVyKCh0YXNrKSA9PiAhdGFzay5jb21wbGV0ZWQpO1xuICAgIGlmIChhbGxJblByb2dyZXNzVGFza3MubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gYWxsSW5Qcm9ncmVzc1Rhc2tzWzBdO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICAvKipcbiAgICogQWRkcyBhIG5ldyB0YXNrXG4gICAqIEBwYXJhbSB7VGFza30gdGFzayBcbiAgICovXG4gIGFkZFRhc2sodGFzaykge1xuICAgIHN0b3JlVGFzayh0YXNrKTtcbiAgICB0aGlzLmFsbFRhc2tzLnB1c2godGFzayk7XG4gIH1cbiAgLyoqXG4gICAqIERlbGV0ZSBhIHRhc2tcbiAgICogQHBhcmFtIHtUYXNrfSB0YXNrIFxuICAgKi9cbiAgZGVsZXRlVGFzayh0YXNrKSB7XG4gICAgZGVsZXRlVGFza0J5VGFza0lEKHRhc2suaWQpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hbGxUYXNrcy5sZW5ndGg7IGkrKyl7XG4gICAgICBjb25zdCBzdG9yZWRUYXNrID0gdGhpcy5hbGxUYXNrc1tpXTtcbiAgICAgIGlmICh0YXNrLmlkID09PSBzdG9yZWRUYXNrLmlkKSB7XG4gICAgICAgIHRoaXMuYWxsVGFza3Muc3BsaWNlKGksIDEpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbXBsZXRlcyB0aGUgZ2l2ZW4gdGFzayBhc3NvY2lhdGVkIHRvIHRoZSBpZFxuICAgKiBAcGFyYW0ge251bWJlcn0gaWQgXG4gICAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIGNvbXBsZXRlZCwgZmFsc2UgaWYgbm8gdGFzayBmb3VuZFxuICAgKi9cbiAgY29tcGxldGVUYXNrKGlkKSB7XG4gICAgZm9yIChsZXQgdGFzayBvZiB0aGlzLmFsbFRhc2tzKSB7XG4gICAgICBpZiAodGFzay5pZCA9PT0gaWQpIHtcbiAgICAgICAgdGFzay5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBuZXh0IGluY29tcGxldGUgdGFzayBpbiB0aGUgb3JkZXIgb3IgbnVsbCBpZiBhbGwgY29tcGxldGVkXG4gICAqIEByZXR1cm5zIHtUYXNrIHwgbnVsbH1cbiAgICovXG4gIGdldE5leHRUYXNrKCkge1xuICAgIGZvciAoY29uc3QgdGFzayBvZiB0aGlzLmFsbFRhc2tzKSB7XG4gICAgICBpZiAodGFzay5jb21wbGV0ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiB0YXNrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICAvKipcbiAgICogSW5jcmVtZW50IHRoZSBwb21vcyB1c2VkIGZvciBhIHRhc2sgYW5kIGluY3JlbWVudCBwb21vc0VsYXBzZWRcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlkIFxuICAgKi9cbiAgaW5jcmVtZW50VGFza1BvbW9zVXNlZChpZCkge1xuICAgIGZvciAoY29uc3QgdGFzayBvZiB0aGlzLmFsbFRhc2tzKSB7XG4gICAgICBpZiAodGFzay5pZCA9PT0gaWQpIHtcbiAgICAgICAgdGFzay5wb21vc1VzZWQgKz0gMTtcbiAgICAgICAgdGhpcy5wb21vc0VsYXBzZWQgKz0gMTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBcbiAgICogQHJldHVybnMgdHJ1ZSBpZiBzZXNzaW9uIGlzIGluIGJyZWFrIG1vZGUgcmlnaHQgbm93LCBmYWxzZSBvdGhlcndpc2VcbiAgICovXG4gIGlzQnJlYWsoKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZSA9PT0gUE9NT19TRVNTSU9OX01PREVTLkxPTkdfQlJFQUsgfHwgdGhpcy5tb2RlID09PSBQT01PX1NFU1NJT05fTU9ERVMuQlJFQUs7XG4gIH1cblxuICAvKipcbiAgICogVE9ET1xuICAgKi9cbiAgcmVvcmRlclRhc2tzKCkge1xuXG4gIH1cblxuICBnZXRQb21vc0xlZnRJblNlc3Npb24oKSB7XG4gICAgbGV0IGxlZnQgPSAwO1xuICAgIHRoaXMuYWxsVGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgbGVmdCArPSBNYXRoLm1heCh0YXNrLnBvbW9zUmVxdWlyZWQgLSB0YXNrLnBvbW9zVXNlZCwgMCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGxlZnQ7XG4gIH1cbiAgcGFyc2VTZXNzaW9uRnJvbU9iaihzZXNzaW9uX29iaikge1xuICAgIHRoaXMuaWQgPSBzZXNzaW9uX29iai5pZDtcbiAgICB0aGlzLm1vZGUgPSBzZXNzaW9uX29iai5tb2RlO1xuICAgIHRoaXMudGltZSA9IHNlc3Npb25fb2JqLnRpbWU7XG4gICAgdGhpcy5wb21vc0VsYXBzZWQgPSBzZXNzaW9uX29iai5wb21vc0VsYXBzZWQ7XG4gICAgdGhpcy5zdGFydERhdGUgPSBuZXcgRGF0ZShzZXNzaW9uX29iai5zdGFydERhdGUpO1xuICAgIHRoaXMuYWxsVGFza3MgPSBzZXNzaW9uX29iai5hbGxUYXNrcy5tYXAoKHRhc2tPYmopID0+IHtcbiAgICAgIGxldCB0ID0gbmV3IFRhc2soKTtcbiAgICAgIHQgPSB0LnBhcnNlVGFza0Zyb21PYmoodGFza09iaik7XG4gICAgICByZXR1cm4gdDtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBzZXJpYWxpemVJbnRvT2JqKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogdGhpcy5pZCwgYWxsVGFza3M6IHRoaXMuYWxsVGFza3MubWFwKCh0YXNrKSA9PiB0YXNrLnNlcmlhbGl6ZUludG9PYmooKSksIG1vZGU6IHRoaXMubW9kZSwgdGltZTogdGhpcy50aW1lLCBwb21vc0VsYXBzZWQ6IHRoaXMucG9tb3NFbGFwc2VkLCBzdGFydERhdGU6IHRoaXMuc3RhcnREYXRlLmdldFRpbWUoKVxuICAgIH07XG4gIH1cbn1cblxuLyoqXG4gKiBHZXQgYSBwb21vIHNlc3Npb24gb2JqZWN0XG4gKiBAcGFyYW0ge251bWJlcn0gaWQgXG4gKiBAcmV0dXJucyB7UG9tb1Nlc3Npb24gfCBudWxsfSB0aGUgc2Vzc2lvbiBmb3IgdGhpcyBpZCBvciBudWxsIGlmIHRoZXJlIGlzIG5vIHNlc3Npb24gYXNzb2NpYXRlZCB3aXRoIHRoaXMgaWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFBvbW9TZXNzaW9uKGlkKSB7XG4gIGNvbnN0IGFsbFNlc3Npb25zID0gZ2V0T2JqZWN0KFBPTU9fU0VTU0lPTl9NQVApO1xuICBsZXQgcCA9IG5ldyBQb21vU2Vzc2lvbigpO1xuICBpZiAoIWFsbFNlc3Npb25zW2lkXSkgcmV0dXJuIG51bGw7XG4gIHJldHVybiBwLnBhcnNlU2Vzc2lvbkZyb21PYmooYWxsU2Vzc2lvbnNbaWRdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JlUG9tb1Nlc3Npb24oc2Vzc2lvbikge1xuICBjb25zdCBhbGxTZXNzaW9ucyA9IGdldE9iamVjdChQT01PX1NFU1NJT05fTUFQKTtcbiAgYWxsU2Vzc2lvbnNbc2Vzc2lvbi5pZF0gPSBzZXNzaW9uLnNlcmlhbGl6ZUludG9PYmooKTtcbiAgc3RvcmVPYmplY3QoUE9NT19TRVNTSU9OX01BUCwgYWxsU2Vzc2lvbnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmV3U2Vzc2lvbklEKCkge1xuICBsZXQgcHJldklEID0gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oUE9NT19TRVNTSU9OX0lEKSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFBPTU9fU0VTU0lPTl9JRCwgcHJldklEICsgMSk7XG4gIHJldHVybiBwcmV2SUQ7XG59XG5cbi8qKlxuICogU2V0IHRoZSBjdXJyZW50IHNlc3Npb24ncyBzdGF0dXNcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0dXMgLSBjYW4gYmUgXCJjb21wbGV0ZVwiIG9yIFwiaW4tcHJvZ3Jlc3NcIlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0Q3VycmVudFNlc3Npb25TdGF0dXMoc3RhdHVzKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKExBVEVTVF9QT01PX1NFU1NJT05fU1RBVFVTLCBzdGF0dXMpO1xufVxuXG4vKipcbiAqIFdpbGwgcmV0dXJuIHRoZSBzZXNzaW9uIElEIG9mIHRoZSBsYXN0IHNlc3Npb24gaWYgaXQgd2FzIG5vdCBlbmRlZC4gT3RoZXJ3aXNlIGlmIHRoZSBsYXN0IHNlc3Npb24gZG9lcyBub3QgZXhpc3QgXG4gKiBvciB3YXMgZW5kZWQgYWxyZWFkeSwgdGhpcyBmdW5jdGlvbiByZXR1cm5zIG51bGxcbiAqIFxuICogQHJldHVybnMge251bWJlciB8IG51bGx9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMYXRlc3RTZXNzaW9uSUQoKSB7XG4gIGxldCBzdGF0dXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShMQVRFU1RfUE9NT19TRVNTSU9OX1NUQVRVUyk7XG4gIGlmIChzdGF0dXMgPT09IFwiY29tcGxldGVcIikge1xuICAgIHJldHVybiBudWxsO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShQT01PX1NFU1NJT05fSUQpKSAtIDE7XG4gIH1cbn1cblxuLyoqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSB0cnVlIGlmIHRoZXJlIGlzIGEgdW5maW5pc2hlZCBzZXNzaW9uIHRoYXQgd2FzIG5vdCBjb21wbGV0ZWQgb3IgcXVpdHRlZC4gZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0aGVyZUlzVW5maW5pc2hlZFNlc3Npb24oKSB7XG4gIGxldCBzZXNzaW9uSUQgPSBnZXRMYXRlc3RTZXNzaW9uSUQoKTtcbiAgaWYgKHNlc3Npb25JRCA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICBsZXQgY3VycmVudFBvbW9TZXNzaW9uID0gZ2V0UG9tb1Nlc3Npb24oc2Vzc2lvbklEKTtcbiAgaWYgKGN1cnJlbnRQb21vU2Vzc2lvbiAhPT0gbnVsbCAmJiBjdXJyZW50UG9tb1Nlc3Npb24ubW9kZSAhPT0gUE9NT19TRVNTSU9OX01PREVTLkNPTVBMRVRFICYmIGN1cnJlbnRQb21vU2Vzc2lvbi5tb2RlICE9PSBQT01PX1NFU1NJT05fTU9ERVMuSU5BQ1RJVkUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb250aW51ZUFjdGl2ZVNlc3Npb24oKSB7XG4gIGlmICh0aGVyZUlzVW5maW5pc2hlZFNlc3Npb24oKSkge1xuICAgIHdpbmRvdy5sb2NhdGlvbiA9IFwiL3RpbWVyLmh0bWw/bG9hZFNhdmVkPXRydWVcIjtcbiAgfVxufSIsImltcG9ydCB7IGdldE9iamVjdCwgc3RvcmVPYmplY3QgfSBmcm9tIFwiLlwiO1xuaW1wb3J0IHsgZ2V0TGF0ZXN0U2Vzc2lvbklELCBnZXRQb21vU2Vzc2lvbiB9IGZyb20gXCIuL3Nlc3Npb25cIjtcblxuZXhwb3J0IGNsYXNzIFRhc2sge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzZXNzaW9uSUQgXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkZXNjcmlwdGlvbiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcG9tb3NSZXF1aXJlZCBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzZXNzaW9uSUQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgcG9tb3NSZXF1aXJlZCkge1xuICAgICAgICB0aGlzLnNlc3Npb25JRCA9IHNlc3Npb25JRDtcbiAgICAgICAgdGhpcy5pZCA9IC0xO1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5wb21vc1JlcXVpcmVkID0gcG9tb3NSZXF1aXJlZDtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wb21vc1VzZWQgPSAwO1xuICAgIH1cbiAgICBwYXJzZVRhc2tGcm9tT2JqKHRhc2tfb2JqKSB7XG4gICAgICAgIGxldCB0YXNrID0gbmV3IFRhc2sodGFza19vYmouc2Vzc2lvbklELCB0YXNrX29iai50aXRsZSwgdGFza19vYmouZGVzY3JpcHRpb24sIHRhc2tfb2JqLnBvbW9zUmVxdWlyZWQpO1xuICAgICAgICB0YXNrLmNvbXBsZXRlZCA9IHRhc2tfb2JqLmNvbXBsZXRlZDtcbiAgICAgICAgdGFzay5pZCA9IHRhc2tfb2JqLmlkO1xuICAgICAgICB0YXNrLnBvbW9zVXNlZCA9IHRhc2tfb2JqLnBvbW9zVXNlZDtcbiAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgfVxuICAgIHNlcmlhbGl6ZUludG9PYmooKSB7XG4gICAgICAgIHJldHVybiB7IHRpdGxlOiB0aGlzLnRpdGxlLCBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbiwgcG9tb3NSZXF1aXJlZDogdGhpcy5wb21vc1JlcXVpcmVkLCBjb21wbGV0ZWQ6IHRoaXMuY29tcGxldGVkLCBwb21vc1VzZWQ6IHRoaXMucG9tb3NVc2VkLCBpZDogdGhpcy5pZCwgc2Vzc2lvbklEOiB0aGlzLnNlc3Npb25JRCB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IFBPTU9fVEFTS19NQVAgPSBcInBvbW9fdGFza19tYXBcIjtcbmV4cG9ydCBjb25zdCBQT01PX1RBU0tfSU5ERVggPSBcInBvbW9fdGFza19pbmRleFwiO1xuXG4vKipcbiAqIFdpbGwgc3RvcmUgYSBuZXcgb3IgdXBkYXRlZCB0YXNrIGludG8gbG9jYWwgc3RvcmFnZVxuICogXG4gKiBIYXMgYSBzaWRlIGVmZmVjdCBvZiBhZGRpbmcgdGhlIGlkIG9mIHRoZSBuZXcgdGFzayBpZiBpdCB3YXNudCBzdG9yZWQgaW4gc3RvcmFnZSBiZWZvcmVcbiAqIFxuICogQHBhcmFtIHtUYXNrfSB0YXNrXG4gKiBAcmV0dXJucyB7bnVtYmVyfSAtIHRoZSBpZCBvZiB0aGUgdGFza1xuICovXG5leHBvcnQgZnVuY3Rpb24gc3RvcmVUYXNrKHRhc2spIHtcbiAgICBsZXQgdGFza19tYXAgPSBnZXRPYmplY3QoUE9NT19UQVNLX01BUCk7XG4gICAgaWYgKCF0YXNrX21hcFt0YXNrLmlkXSkge1xuICAgICAgICAvLyBpZiB0YXNrIG1hcCBkb2VzIG5vdCBoYXZlIHRoaXMgdGFzaywgY3JlYXRlIGEgbmV3IGluZGV4XG4gICAgICAgIGxldCBpZCA9IHBhcnNlSW50KGdldE9iamVjdChQT01PX1RBU0tfSU5ERVgpKTtcbiAgICAgICAgdGFzay5pZCA9IGlkO1xuICAgICAgICAvLyBpbmNyZW1lbnQgZ2xvYmFsIGlkXG4gICAgICAgIHN0b3JlT2JqZWN0KFBPTU9fVEFTS19JTkRFWCwgaWQgKyAxKTtcbiAgICB9XG4gICAgbGV0IG9iaiA9IHRhc2suc2VyaWFsaXplSW50b09iaigpO1xuICAgIHRhc2tfbWFwW3Rhc2suaWRdID0gb2JqO1xuICAgIHN0b3JlT2JqZWN0KFBPTU9fVEFTS19NQVAsIHRhc2tfbWFwKTtcbiAgICByZXR1cm4gdGFzay5pZDtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHRhc2sgYXNzb2NpYXRlZCB3aXRoIHRoaXMgaWRcbiAqIEBwYXJhbSB7bnVtYmVyfSBpZCBcbiAqIEByZXR1cm5zIHtUYXNrfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFzayhpZCkge1xuICAgIGxldCB0YXNrX21hcCA9IGdldE9iamVjdChQT01PX1RBU0tfTUFQKTtcbiAgICBsZXQgdGFza19vYmogPSB0YXNrX21hcFtpZF07XG4gICAgbGV0IHQgPSBuZXcgVGFzaygpO1xuICAgIHQgPSB0LnBhcnNlVGFza0Zyb21PYmoodGFza19vYmopO1xuICAgIHJldHVybiB0O1xuXG59XG4vKipcbiAqIEdldCBhbGwgdGFza3NcbiAqIFxuICogQHJldHVybnMge01hcDxudW1iZXIsIFRhc2s+fSAtIGEgbWFwIGZyb20gdGFzayBpZCB0byB0YXNrXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxUYXNrcygpIHtcbiAgICBsZXQgdGFza19tYXAgPSBnZXRPYmplY3QoUE9NT19UQVNLX01BUCk7XG4gICAgbGV0IHBhcnNlZF90YXNrX21hcCA9IHt9O1xuICAgIGZvciAobGV0IGlkIGluIHRhc2tfbWFwKSB7XG4gICAgICAgIGxldCB0YXNrX29iaiA9IHRhc2tfbWFwW2lkXTtcbiAgICAgICAgbGV0IHQgPSBuZXcgVGFzaygpO1xuICAgICAgICB0ID0gdC5wYXJzZVRhc2tGcm9tT2JqKHRhc2tfb2JqKTtcbiAgICAgICAgcGFyc2VkX3Rhc2tfbWFwW2lkXSA9IHQ7XG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRfdGFza19tYXA7XG59XG5cbi8qKlxuICogRGVsZXRlIGEgc3BlY2lmaWMgdGFzayBmcm9tIGRhdGFiYXNlIGJ5IHRoZSB1bmlxdWUgdGFzayBJRFxuICogXG4gKiBAcGFyYW0ge251bWJlcn0gaWQgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVUYXNrQnlUYXNrSUQoaWQpIHtcbiAgICBsZXQgdGFza19tYXAgPSBnZXRPYmplY3QoUE9NT19UQVNLX01BUCk7XG4gICAgZGVsZXRlIHRhc2tfbWFwW2lkXTtcbiAgICBzdG9yZU9iamVjdChQT01PX1RBU0tfTUFQLCB0YXNrX21hcCk7XG59XG5cblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlcmUgYXJlIGFueSB1bmZpbmlzaGVkIHRhc2tzIGZyb20gdGhlIHByZXZpb3VzIHNlc3Npb25cbiAqIEByZXR1cm5zIHtib29sZWFufSAtIHRydWUgaWYgdW5pZmluaXNoZWQgdGFza3MgZXhpc3QsIGZhbHNlIG90aGVyd2lzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXJlVGhlcmVVbmZpbmlzaGVkVGFza3NGcm9tTGFzdFNlc3Npb24oKSB7XG4gICAgbGV0IG9sZFNlc3Npb25JRCA9IGdldExhdGVzdFNlc3Npb25JRCgpO1xuICAgIGlmIChvbGRTZXNzaW9uSUQgPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICBsZXQgc2Vzc2lvbiA9IGdldFBvbW9TZXNzaW9uKG9sZFNlc3Npb25JRCk7XG4gICAgaWYgKHNlc3Npb24gPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoc2Vzc2lvbi5jdXJyZW50VGFzaygpID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG4iLCIvKipcbiAqIFdpbGwgcmFuZG9tbHkgcGljayBhIHRoZW1lIGFuZCB1bmlxdWUgYmFja2dyb3VuZCBkZXBlbmRpbmcgb24gd2hhdCBkYXkgaXQgaXMgYW5kIHdoYXQgdGltZSBpdCBpcyBhbmQgc2V0IGl0IG9uIHRoZSBwYWdlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RBbmRTZXRUaGVtZSh0b2RheSA9IG5ldyBEYXRlKCkpIHtcbiAgbGV0IGlkID0gMDtcbiAgbGV0IG51bUJHcyA9IDY7XG5cbiAgbGV0IGQgPSB0b2RheS5nZXREYXkoKTtcblxuICBsZXQgc2VlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmctc2VlZFwiKTtcblxuICBpZiAoc2VlZCA9PT0gbnVsbCB8fCBzZWVkWzBdICE9IGQpIHtcbiAgICBzZWVkID0gZCArIFwiLVwiICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbnVtQkdzKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJnLXNlZWRcIiwgc2VlZCk7XG4gIH1cbiAgbGV0IHRpbWVQZXJpb2QgPSBnZXRUaGVtZU1vZGUodG9kYXkpO1xuICBpZCA9IHBhcnNlSW50KHNlZWRbMl0pO1xuXG4gIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrZHJvcFwiKTtcbiAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy8ke3RpbWVQZXJpb2R9L2JnJHtpZH0uanBnXCIpYDtcbn07XG5cbmV4cG9ydCBjb25zdCBUSEVNRV9NT0RFUyA9IHtcbiAgREFZOiBcImRheVwiLFxuICBOSUdIVDogXCJuaWdodFwiLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRoZW1lTW9kZSh0b2RheSA9IG5ldyBEYXRlKCkpIHtcbiAgbGV0IHRpbWVQZXJpb2QgPSBUSEVNRV9NT0RFUy5EQVk7XG4gIGlmICh0b2RheS5nZXRIb3VycygpIDwgNCkge1xuICAgIHRpbWVQZXJpb2QgPSBUSEVNRV9NT0RFUy5OSUdIVDtcbiAgfVxuICBlbHNlIGlmICh0b2RheS5nZXRIb3VycygpIDwgMTgpIHtcbiAgICB0aW1lUGVyaW9kID0gVEhFTUVfTU9ERVMuREFZO1xuICB9IGVsc2UgaWYgKHRvZGF5LmdldEhvdXJzKCkgPCAyNCkge1xuICAgIHRpbWVQZXJpb2QgPSBUSEVNRV9NT0RFUy5OSUdIVDtcbiAgfVxuICByZXR1cm4gdGltZVBlcmlvZDtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBpbml0aWFsaXplRGF0YWJhc2UgfSBmcm9tIFwiLi9kYXRhYmFzZVwiO1xuaW1wb3J0IHsgY29udGludWVBY3RpdmVTZXNzaW9uIH0gZnJvbSBcIi4vZGF0YWJhc2Uvc2Vzc2lvblwiO1xuaW1wb3J0IHsgYXJlVGhlcmVVbmZpbmlzaGVkVGFza3NGcm9tTGFzdFNlc3Npb24gfSBmcm9tIFwiLi9kYXRhYmFzZS90YXNrXCI7XG5pbXBvcnQgeyBzZWxlY3RBbmRTZXRUaGVtZSB9IGZyb20gXCIuL3V0aWxzL3RoZW1lXCI7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIC8vIGNyZWF0ZSBleGFtcGxlIGJ1dHRvbiBpIGd1ZXNzXG4gICAgaW5pdGlhbGl6ZURhdGFiYXNlKCk7XG4gICAgY29udGludWVBY3RpdmVTZXNzaW9uKCk7XG4gICAgc2VsZWN0QW5kU2V0VGhlbWUoKTtcbiAgICBsZXQgb2xkVGFza3NMZWZ0ID0gYXJlVGhlcmVVbmZpbmlzaGVkVGFza3NGcm9tTGFzdFNlc3Npb24oKTtcbiAgICBpZiAoIW9sZFRhc2tzTGVmdCkge1xuICAgICAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRvdmVyLXRhc2tzLXdyYXBwZXJcIikpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRvdmVyLXRhc2tzLXdyYXBwZXJcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==