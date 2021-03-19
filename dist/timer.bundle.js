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

/***/ "./source/assets/scripts/utils/format-time.js":
/*!****************************************************!*\
  !*** ./source/assets/scripts/utils/format-time.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatTime": () => (/* binding */ formatTime)
/* harmony export */ });
/**
 * Takes a number of seconds and formats it into a MM:SS format
 * @param {number} seconds 
 * @returns {string}
 */
function formatTime(seconds) {
  var s = seconds % 60;
  var sstr = "";

  if (s < 10) {
    sstr = "0" + s;
  } else {
    sstr = s;
  }

  var m = Math.floor(seconds / 60);
  var mstr = "";

  if (m < 10) {
    mstr = "0" + m;
  } else {
    mstr = m;
  }

  return mstr + ":" + sstr;
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
/*!****************************************!*\
  !*** ./source/assets/scripts/timer.js ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_format_time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/format-time */ "./source/assets/scripts/utils/format-time.js");
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./database */ "./source/assets/scripts/database/index.js");
/* harmony import */ var _database_session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./database/session */ "./source/assets/scripts/database/session.js");
/* harmony import */ var _database_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./database/task */ "./source/assets/scripts/database/task.js");
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/theme */ "./source/assets/scripts/utils/theme.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }







window.addEventListener("DOMContentLoaded", function () {
  (0,_utils_theme__WEBPACK_IMPORTED_MODULE_4__.selectAndSetTheme)();
  var urlParams = new URLSearchParams(window.location.search);
  var loadSaved = urlParams.get("loadSaved");
  var addTaskButton = document.getElementById("taskCreator");
  var modal = document.getElementById("addTaskModal");
  var taskList = document.getElementById("taskList");
  var startTimerButton = document.getElementById("startTimer");
  var currentTaskHTML = document.getElementById("currentTask");
  var taskListHTML = document.getElementById("taskList");
  var timerProgressCircle = document.getElementById("timer-progress");
  var distractedButton = document.getElementById("distractedWrapper");
  var completeSessionButton = document.getElementById("completeSession");
  var EndBreakEarlyButton = document.getElementById("EndBreakEarlyWrapper");

  completeSessionButton.onclick = function () {
    currentPomoSession.mode = _database_session__WEBPACK_IMPORTED_MODULE_2__.POMO_SESSION_MODES.COMPLETE;
    (0,_database_session__WEBPACK_IMPORTED_MODULE_2__.storePomoSession)(currentPomoSession);
  }; // TODO: move this time variable into the pomo session object class using localstorage


  var maxPomoTime = 5;
  var maxBreakTime = 5 * 60;
  var maxLongBreakTime = 10 * 60;
  (0,_database__WEBPACK_IMPORTED_MODULE_1__.initializeDatabase)();

  if (loadSaved == "false") {
    var oldTasksLeft = (0,_database_task__WEBPACK_IMPORTED_MODULE_3__.areThereUnfinishedTasksFromLastSession)();

    if (oldTasksLeft) {
      var confirmed = confirm("By starting a new timer, you will lose any unfinished tasks from your previous session");

      if (!confirmed) {
        window.location = "./index.html";
        return;
      }
    }
  }
  /** @type {PomoSession} */


  var currentPomoSession = null; // Use leftover tasks and render them

  if (loadSaved == "true") {
    var sessionID = (0,_database_session__WEBPACK_IMPORTED_MODULE_2__.getLatestSessionID)();
    currentPomoSession = (0,_database_session__WEBPACK_IMPORTED_MODULE_2__.getPomoSession)(sessionID);

    if ((0,_database_session__WEBPACK_IMPORTED_MODULE_2__.thereIsUnfinishedSession)() && currentPomoSession.mode != _database_session__WEBPACK_IMPORTED_MODULE_2__.POMO_SESSION_MODES.INACTIVE) {
      loadTasks();
      initiateTimer();
    } else {
      // create new session and use old tasks from last time
      var _sessionID = (0,_database_session__WEBPACK_IMPORTED_MODULE_2__.getNewSessionID)();

      (0,_database_session__WEBPACK_IMPORTED_MODULE_2__.setCurrentSessionStatus)("in-progress"); // take the old tasks and update the session ids to the new one

      var oldTasks = currentPomoSession.allTasks;
      oldTasks.forEach(function (task) {
        task.sessionID = _sessionID;
        (0,_database_task__WEBPACK_IMPORTED_MODULE_3__.storeTask)(task);
      });
      currentPomoSession = new _database_session__WEBPACK_IMPORTED_MODULE_2__.PomoSession(_sessionID);
      currentPomoSession.time = maxPomoTime;
      currentPomoSession.allTasks = oldTasks; // save our new pomo session

      (0,_database_session__WEBPACK_IMPORTED_MODULE_2__.storePomoSession)(currentPomoSession);
      loadTasks();
    }
  } else if (loadSaved == "false") {
    // note, if you refresh for now, you will lose your session's changes...
    var _sessionID2 = (0,_database_session__WEBPACK_IMPORTED_MODULE_2__.getNewSessionID)();

    (0,_database_session__WEBPACK_IMPORTED_MODULE_2__.setCurrentSessionStatus)("in-progress");
    currentPomoSession = new _database_session__WEBPACK_IMPORTED_MODULE_2__.PomoSession(_sessionID2);
    currentPomoSession.time = maxPomoTime; // save our new pomo session

    (0,_database_session__WEBPACK_IMPORTED_MODULE_2__.storePomoSession)(currentPomoSession);
    loadTasks();
  }

  urlParams.set("loadSaved", true);
  timerProgressCircle.setDisplayText((0,_utils_format_time__WEBPACK_IMPORTED_MODULE_0__.formatTime)(currentPomoSession.time));
  timerProgressCircle.setPercentage(currentPomoSession.time / maxPomoTime);

  if (currentPomoSession.mode === _database_session__WEBPACK_IMPORTED_MODULE_2__.POMO_SESSION_MODES.BREAK) {
    renderBreakMode();
    timerProgressCircle.setPercentage(currentPomoSession.time / maxBreakTime);
  } else if (currentPomoSession.mode === _database_session__WEBPACK_IMPORTED_MODULE_2__.POMO_SESSION_MODES.LONG_BREAK) {
    renderBreakMode();
    timerProgressCircle.setPercentage(currentPomoSession.time / SVGFEColorMatrixElement);
  } // Implements the onclick functionality of End Break Early Button, which immediately stop the break 
  // and go to the work time


  EndBreakEarlyButton.onclick = function () {
    renderActiveMode();
    currentPomoSession.time = maxPomoTime;
    currentPomoSession.mode = _database_session__WEBPACK_IMPORTED_MODULE_2__.POMO_SESSION_MODES.ACTIVE;
    timerProgressCircle.setDisplayText((0,_utils_format_time__WEBPACK_IMPORTED_MODULE_0__.formatTime)(currentPomoSession.time));
    timerProgressCircle.setPercentage(currentPomoSession.time / maxPomoTime);
    (0,_database_session__WEBPACK_IMPORTED_MODULE_2__.storePomoSession)(currentPomoSession);
  };

  startTimerButton.onclick = initiateTimer;
  modal.shadowRoot.getElementById("save-btn").addEventListener("click", contentsSaved);

  addTaskButton.onclick = function () {
    modal.displayModal();
  };
  /**
   * Implements the onClick functionality of the Start Timer button, which starts the pomo timer and cycles
   * pomo and break timers until all pomos are completed.
   */


  function initiateTimer() {
    currentTaskHTML.setAttribute("class", "currentTaskWorkTime");
    timerProgressCircle.setSize("1.5rem");
    taskList.setAttribute("class", "taskListWorkTime");
    var timerWrapper = document.getElementById("timerWrapper");
    timerWrapper.setAttribute("class", "timerWrapperWorkTime");
    distractedButton.style.display = "block";
    var completeSessionWrapper = document.getElementById("completeSessionWrapper");
    completeSessionWrapper.setAttribute("class", "completeSessionWrapperWorkTime");
    var taskCreatorWrapper = document.getElementById("taskCreatorWrapper");
    taskCreatorWrapper.style.display = "none";
    document.getElementById("currentTaskWrapper").style.display = "block";
    startNewTask();

    if (currentPomoSession.mode === _database_session__WEBPACK_IMPORTED_MODULE_2__.POMO_SESSION_MODES.INACTIVE) {
      currentPomoSession.mode = _database_session__WEBPACK_IMPORTED_MODULE_2__.POMO_SESSION_MODES.ACTIVE;
      (0,_database_session__WEBPACK_IMPORTED_MODULE_2__.storePomoSession)(currentPomoSession);
    } //removes first child from task list and adds to current task


    var timerLoop = setInterval(timeChanger, 1000);
    var currentTaskFirstChild = currentTaskHTML.childNodes[0];
    currentTaskFirstChild.setFinishTaskCallback(function () {
      removeCompletedTasks();
      startNewTask();
    });
    var currentTask = currentPomoSession.currentTask();
    currentTaskFirstChild.task = currentTask;

    function timeChanger() {
      currentPomoSession = (0,_database_session__WEBPACK_IMPORTED_MODULE_2__.getPomoSession)(currentPomoSession.id);
      currentPomoSession.time -= 1;

      if (currentPomoSession.time < 0) {
        currentPomoSession.time = 0;
      } // check if session is incomplete. if incomplete, 
      // If timer hits 0, toggle to next break or pomo timer


      if (currentPomoSession.time == 0) {
        if (currentPomoSession.mode === _database_session__WEBPACK_IMPORTED_MODULE_2__.POMO_SESSION_MODES.ACTIVE) {
          var alarm = new Audio("assets/audio/alarm.mp3");
          alarm.play(); //break 

          renderBreakMode();
          currentPomoSession.pomosElapsed += 1;
          var _currentTaskFirstChild = currentTaskHTML.childNodes[0];

          _currentTaskFirstChild.incrementPomosUsed();

          _currentTaskFirstChild.task.pomosUsed += 1;
          currentPomoSession.incrementTaskPomosUsed(_currentTaskFirstChild.task.id);
          (0,_database_session__WEBPACK_IMPORTED_MODULE_2__.storePomoSession)(currentPomoSession);

          _currentTaskFirstChild.setAttribute("pomosused", 1 + parseInt(_currentTaskFirstChild.getAttribute("pomosused"))); // Long break, currently hardcoded after every 4 pomos


          if (currentPomoSession.pomosElapsed % 4 == 0) {
            currentPomoSession.time = maxLongBreakTime;
            currentPomoSession.mode = _database_session__WEBPACK_IMPORTED_MODULE_2__.POMO_SESSION_MODES.LONG_BREAK;
          } // Short break
          else {
              currentPomoSession.time = maxBreakTime;
              currentPomoSession.mode = _database_session__WEBPACK_IMPORTED_MODULE_2__.POMO_SESSION_MODES.BREAK;
            }
        } // Next timer should be a pomo timer
        else if (currentPomoSession.mode !== _database_session__WEBPACK_IMPORTED_MODULE_2__.POMO_SESSION_MODES.COMPLETE) {
            renderActiveMode();
            currentPomoSession.time = maxPomoTime;
            currentPomoSession.mode = _database_session__WEBPACK_IMPORTED_MODULE_2__.POMO_SESSION_MODES.ACTIVE; // TODO: Add functionality for moving onto next task, updating pomos used on current task, etc.
          }
      } // Push updated time to the page


      document.title = (0,_utils_format_time__WEBPACK_IMPORTED_MODULE_0__.formatTime)(currentPomoSession.time);
      timerProgressCircle.setDisplayText((0,_utils_format_time__WEBPACK_IMPORTED_MODULE_0__.formatTime)(currentPomoSession.time));

      if (currentPomoSession.mode === _database_session__WEBPACK_IMPORTED_MODULE_2__.POMO_SESSION_MODES.ACTIVE) {
        timerProgressCircle.setPercentage(currentPomoSession.time / maxPomoTime);
        document.title += " - Work";
      } else if (currentPomoSession.mode === _database_session__WEBPACK_IMPORTED_MODULE_2__.POMO_SESSION_MODES.BREAK) {
        timerProgressCircle.setPercentage(currentPomoSession.time / maxBreakTime);
        document.title += " - Break";
      } else if (currentPomoSession.mode === _database_session__WEBPACK_IMPORTED_MODULE_2__.POMO_SESSION_MODES.LONG_BREAK) {
        timerProgressCircle.setPercentage(currentPomoSession.time / maxLongBreakTime);
        document.title += " - Long Break";
      }

      (0,_database_session__WEBPACK_IMPORTED_MODULE_2__.storePomoSession)(currentPomoSession);
    }
  }

  function renderActiveMode() {
    document.getElementById("timer-status").innerText = "Pomo Time";
    currentTaskHTML.setAttribute("class", "currentTaskWorkTime");
    taskListHTML.setAttribute("class", "taskListWorkTime");
    distractedButton.style.display = "block";
    EndBreakEarlyButton.style.display = "none";
    timerWrapper.setAttribute("class", "timerWrapperWorkTime");
    completeSessionWrapper.setAttribute("class", "completeSessionWrapperWorkTime");
  }

  function renderBreakMode() {
    currentTaskHTML.setAttribute("class", "currentTaskBreakTime");
    taskListHTML.setAttribute("class", "taskListBreakTime");
    document.getElementById("timer-status").innerText = "Break Time";
    EndBreakEarlyButton.style.display = "block";
    distractedButton.style.display = "none";
    timerWrapper.setAttribute("class", "timerWrapperBreakTime");
    completeSessionWrapper.setAttribute("class", "completeSessionWrapperBreakTime");
  }
  /**
  * Render a task onto the 
  * @param {Task} task 
  */


  function renderTaskIntoTaskList(task) {
    var currentTaskElement = "<pomo-task description =\"".concat(task.description, "\" pomosUsed=\"").concat(task.pomosUsed, "\", pomosRequired =\"").concat(task.pomosRequired, "\">").concat(task.title, "</pomo-task>");
    taskList.insertAdjacentHTML("beforeend", currentTaskElement);
    var element = taskList.childNodes[taskList.childNodes.length - 1];
    element.setFinishTaskCallback(function () {
      removeCompletedTasks();
    });
    element.setDeleteTaskCallback(function () {
      deleteTaskById(task.id);
    });
    element.task = task;
  }
  /**
   * Function that gets called when we save a new task.
   * Adds new task to the current tasks list.
   */


  function contentsSaved() {
    var taskValues = modal.elements.values;

    if (taskValues != undefined) {
      var _sessionID3 = (0,_database_session__WEBPACK_IMPORTED_MODULE_2__.getLatestSessionID)(); // console.log(taskValues);


      var newTask = new _database_task__WEBPACK_IMPORTED_MODULE_3__.Task(_sessionID3, taskValues.taskName, taskValues.description, parseInt(taskValues.pomosRequired));
      renderTaskIntoTaskList(newTask);
      currentPomoSession.addTask(newTask);
      (0,_database_session__WEBPACK_IMPORTED_MODULE_2__.storePomoSession)(currentPomoSession);
      resetInputs();
    }
  }
  /**
   * Clears inputs and resets style
   */


  function resetInputs() {
    var taskName = modal.shadowRoot.getElementById("task-name").elements.wrapper;
    var pomosRequired = modal.shadowRoot.getElementById("pomos-required").elements.wrapper;
    var description = modal.shadowRoot.getElementById("description").elements.wrapper;
    taskName.innerText = taskName.placeholder;
    taskName.userTyped = undefined;
    taskName.setAttribute("class", "pomo-input placeholder");
    pomosRequired.innerText = pomosRequired.placeholder;
    pomosRequired.userTyped = undefined;
    pomosRequired.setAttribute("class", "pomo-input placeholder");
    description.innerText = description.placeholder;
    description.userTyped = undefined;
    description.setAttribute("class", "pomo-input placeholder");
    modal.elements.values = undefined;
  }
  /**
   * Shows a new task onto the display
   */


  function startNewTask() {
    var taskListFirstChild = taskListHTML.childNodes[0];
    var nextTask = currentPomoSession.getNextTask();

    if (nextTask === null) {
      // complete the session
      currentPomoSession.mode = _database_session__WEBPACK_IMPORTED_MODULE_2__.POMO_SESSION_MODES.COMPLETE;
      (0,_database_session__WEBPACK_IMPORTED_MODULE_2__.storePomoSession)(currentPomoSession);
      window.location = "./history.html";
      return;
    }

    var currentTaskToBeAdded = "<pomo-task description=\"".concat(nextTask.description, "\" pomosUsed=\"").concat(nextTask.pomosUsed, "\" pomosRequired=").concat(nextTask.pomosRequired, ">").concat(nextTask.title, "</pomo-task>");
    currentTaskHTML.insertAdjacentHTML("beforeend", currentTaskToBeAdded);
    taskListHTML.removeChild(taskListHTML.childNodes[0]);
    var element = currentTaskHTML.childNodes[currentTaskHTML.childNodes.length - 1];
    element.setFinishTaskCallback(function () {
      removeCompletedTasks();
      startNewTask();
    });
    element.setDeleteTaskCallback(function () {
      deleteTaskById(nextTask.id);
    });
    element.task = nextTask;
  }
  /**
   * remove completed tasks from display and update the current pomo session
   */


  function removeCompletedTasks() {
    var completedIds = [];

    var _iterator = _createForOfIteratorHelper(currentTaskHTML.childNodes),
        _step;

    try {
      var _loop = function _loop() {
        var node = _step.value;

        if (node.completed) {
          completedIds.push(node.task.id);
          node.hide();
          setTimeout(function () {
            currentTaskHTML.removeChild(node);
          }, 200);
        }
      };

      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var _iterator2 = _createForOfIteratorHelper(taskListHTML.childNodes),
        _step2;

    try {
      var _loop2 = function _loop2() {
        var node = _step2.value;

        if (node.completed) {
          completedIds.push(node.task.id);
          node.hide();
          setTimeout(function () {
            taskListHTML.removeChild(node);
          }, 200);
        }
      };

      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        _loop2();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    completedIds.forEach(function (id) {
      currentPomoSession.completeTask(id);
    });
    (0,_database_session__WEBPACK_IMPORTED_MODULE_2__.storePomoSession)(currentPomoSession);
  }

  function deleteTaskById(id) {
    // search current task list and task lists for this id and remove it from display and the pomo session
    var currentTaskElementList = currentTaskHTML.childNodes;

    if (currentTaskElementList.length) {
      var task = currentTaskElementList[currentTaskElementList.length - 1].task;

      if (task.id === id) {
        if (confirm("Are you sure you want to delete this task?")) {
          currentPomoSession.deleteTask(task);
          currentTaskHTML.removeChild(currentTaskHTML.childNodes[currentTaskElementList.length - 1]);
          startNewTask();
          (0,_database_session__WEBPACK_IMPORTED_MODULE_2__.storePomoSession)(currentPomoSession);
          return;
        }
      }
    }

    if (taskListHTML.childNodes.length) {
      var i = 0;

      var _iterator3 = _createForOfIteratorHelper(taskListHTML.childNodes),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var node = _step3.value;
          var _task = node.task;

          if (_task.id === id) {
            if (confirm("Are you sure you want to delete this task?")) {
              currentPomoSession.deleteTask(_task);
              taskListHTML.removeChild(taskListHTML.childNodes[i]);
              (0,_database_session__WEBPACK_IMPORTED_MODULE_2__.storePomoSession)(currentPomoSession);
              return;
            }
          }

          i++;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    } // 

  }
  /**
   * Load all tasks from storage for the current session and render them
   */


  function loadTasks() {
    var id = (0,_database_session__WEBPACK_IMPORTED_MODULE_2__.getLatestSessionID)();
    var allTasks = [];

    if (id !== null) {
      var tasks = currentPomoSession.allTasks;
      Object.values(tasks).forEach(function (task) {
        console.log(task);

        if (task.sessionID === id && !task.completed) {
          allTasks.push(task);
        }
      });
      allTasks.forEach(function (task) {
        renderTaskIntoTaskList(task);
      });
    }

    var _iterator4 = _createForOfIteratorHelper(taskListHTML.childNodes),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var node = _step4.value;
        node.setFinishTaskCallback(function () {
          removeCompletedTasks();
        });
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jc2UxMTAtdzIxLWdyb3VwMjEvLi9zb3VyY2UvYXNzZXRzL3NjcmlwdHMvZGF0YWJhc2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3NlMTEwLXcyMS1ncm91cDIxLy4vc291cmNlL2Fzc2V0cy9zY3JpcHRzL2RhdGFiYXNlL3Nlc3Npb24uanMiLCJ3ZWJwYWNrOi8vY3NlMTEwLXcyMS1ncm91cDIxLy4vc291cmNlL2Fzc2V0cy9zY3JpcHRzL2RhdGFiYXNlL3Rhc2suanMiLCJ3ZWJwYWNrOi8vY3NlMTEwLXcyMS1ncm91cDIxLy4vc291cmNlL2Fzc2V0cy9zY3JpcHRzL3V0aWxzL2Zvcm1hdC10aW1lLmpzIiwid2VicGFjazovL2NzZTExMC13MjEtZ3JvdXAyMS8uL3NvdXJjZS9hc3NldHMvc2NyaXB0cy91dGlscy90aGVtZS5qcyIsIndlYnBhY2s6Ly9jc2UxMTAtdzIxLWdyb3VwMjEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY3NlMTEwLXcyMS1ncm91cDIxL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jc2UxMTAtdzIxLWdyb3VwMjEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jc2UxMTAtdzIxLWdyb3VwMjEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jc2UxMTAtdzIxLWdyb3VwMjEvLi9zb3VyY2UvYXNzZXRzL3NjcmlwdHMvdGltZXIuanMiXSwibmFtZXMiOlsiaW5pdGlhbGl6ZURhdGFiYXNlIiwibmVlZFRvSW5pdGlhbGl6ZSIsImdldE9iamVjdCIsIlBPTU9fVEFTS19NQVAiLCJQT01PX1RBU0tfSU5ERVgiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiUE9NT19TRVNTSU9OX0lEIiwiTEFURVNUX1BPTU9fU0VTU0lPTl9TVEFUVVMiLCJQT01PX1NFU1NJT05fTUFQIiwic3RvcmVPYmplY3QiLCJyZXNldERhdGFiYXNlIiwia2V5Iiwib2JqZWN0Iiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYXJzZSIsIlBPTU9fU0VTU0lPTl9NT0RFUyIsIklOQUNUSVZFIiwiQlJFQUsiLCJMT05HX0JSRUFLIiwiQUNUSVZFIiwiQ09NUExFVEUiLCJQb21vU2Vzc2lvbiIsImlkIiwiYWxsVGFza3MiLCJtb2RlIiwidGltZSIsInBvbW9zRWxhcHNlZCIsInN0YXJ0RGF0ZSIsIkRhdGUiLCJhbGxJblByb2dyZXNzVGFza3MiLCJmaWx0ZXIiLCJ0YXNrIiwiY29tcGxldGVkIiwibGVuZ3RoIiwic3RvcmVUYXNrIiwicHVzaCIsImRlbGV0ZVRhc2tCeVRhc2tJRCIsImkiLCJzdG9yZWRUYXNrIiwic3BsaWNlIiwicG9tb3NVc2VkIiwibGVmdCIsImZvckVhY2giLCJNYXRoIiwibWF4IiwicG9tb3NSZXF1aXJlZCIsInNlc3Npb25fb2JqIiwibWFwIiwidGFza09iaiIsInQiLCJUYXNrIiwicGFyc2VUYXNrRnJvbU9iaiIsInNlcmlhbGl6ZUludG9PYmoiLCJnZXRUaW1lIiwiZ2V0UG9tb1Nlc3Npb24iLCJhbGxTZXNzaW9ucyIsInAiLCJwYXJzZVNlc3Npb25Gcm9tT2JqIiwic3RvcmVQb21vU2Vzc2lvbiIsInNlc3Npb24iLCJnZXROZXdTZXNzaW9uSUQiLCJwcmV2SUQiLCJwYXJzZUludCIsInNldEN1cnJlbnRTZXNzaW9uU3RhdHVzIiwic3RhdHVzIiwiZ2V0TGF0ZXN0U2Vzc2lvbklEIiwidGhlcmVJc1VuZmluaXNoZWRTZXNzaW9uIiwic2Vzc2lvbklEIiwiY3VycmVudFBvbW9TZXNzaW9uIiwiY29udGludWVBY3RpdmVTZXNzaW9uIiwid2luZG93IiwibG9jYXRpb24iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidGFza19vYmoiLCJ0YXNrX21hcCIsIm9iaiIsImdldFRhc2siLCJnZXRBbGxUYXNrcyIsInBhcnNlZF90YXNrX21hcCIsImFyZVRoZXJlVW5maW5pc2hlZFRhc2tzRnJvbUxhc3RTZXNzaW9uIiwib2xkU2Vzc2lvbklEIiwiY3VycmVudFRhc2siLCJmb3JtYXRUaW1lIiwic2Vjb25kcyIsInMiLCJzc3RyIiwibSIsImZsb29yIiwibXN0ciIsInNlbGVjdEFuZFNldFRoZW1lIiwidG9kYXkiLCJudW1CR3MiLCJkIiwiZ2V0RGF5Iiwic2VlZCIsInJhbmRvbSIsInRpbWVQZXJpb2QiLCJnZXRUaGVtZU1vZGUiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiVEhFTUVfTU9ERVMiLCJEQVkiLCJOSUdIVCIsImdldEhvdXJzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsInNlYXJjaCIsImxvYWRTYXZlZCIsImdldCIsImFkZFRhc2tCdXR0b24iLCJtb2RhbCIsInRhc2tMaXN0Iiwic3RhcnRUaW1lckJ1dHRvbiIsImN1cnJlbnRUYXNrSFRNTCIsInRhc2tMaXN0SFRNTCIsInRpbWVyUHJvZ3Jlc3NDaXJjbGUiLCJkaXN0cmFjdGVkQnV0dG9uIiwiY29tcGxldGVTZXNzaW9uQnV0dG9uIiwiRW5kQnJlYWtFYXJseUJ1dHRvbiIsIm9uY2xpY2siLCJtYXhQb21vVGltZSIsIm1heEJyZWFrVGltZSIsIm1heExvbmdCcmVha1RpbWUiLCJvbGRUYXNrc0xlZnQiLCJjb25maXJtZWQiLCJjb25maXJtIiwibG9hZFRhc2tzIiwiaW5pdGlhdGVUaW1lciIsIm9sZFRhc2tzIiwic2V0Iiwic2V0RGlzcGxheVRleHQiLCJzZXRQZXJjZW50YWdlIiwicmVuZGVyQnJlYWtNb2RlIiwiU1ZHRkVDb2xvck1hdHJpeEVsZW1lbnQiLCJyZW5kZXJBY3RpdmVNb2RlIiwic2hhZG93Um9vdCIsImNvbnRlbnRzU2F2ZWQiLCJkaXNwbGF5TW9kYWwiLCJzZXRBdHRyaWJ1dGUiLCJzZXRTaXplIiwidGltZXJXcmFwcGVyIiwiZGlzcGxheSIsImNvbXBsZXRlU2Vzc2lvbldyYXBwZXIiLCJ0YXNrQ3JlYXRvcldyYXBwZXIiLCJzdGFydE5ld1Rhc2siLCJ0aW1lckxvb3AiLCJzZXRJbnRlcnZhbCIsInRpbWVDaGFuZ2VyIiwiY3VycmVudFRhc2tGaXJzdENoaWxkIiwiY2hpbGROb2RlcyIsInNldEZpbmlzaFRhc2tDYWxsYmFjayIsInJlbW92ZUNvbXBsZXRlZFRhc2tzIiwiYWxhcm0iLCJBdWRpbyIsInBsYXkiLCJpbmNyZW1lbnRQb21vc1VzZWQiLCJpbmNyZW1lbnRUYXNrUG9tb3NVc2VkIiwiZ2V0QXR0cmlidXRlIiwiaW5uZXJUZXh0IiwicmVuZGVyVGFza0ludG9UYXNrTGlzdCIsImN1cnJlbnRUYXNrRWxlbWVudCIsImluc2VydEFkamFjZW50SFRNTCIsInNldERlbGV0ZVRhc2tDYWxsYmFjayIsImRlbGV0ZVRhc2tCeUlkIiwidGFza1ZhbHVlcyIsImVsZW1lbnRzIiwidmFsdWVzIiwidW5kZWZpbmVkIiwibmV3VGFzayIsInRhc2tOYW1lIiwiYWRkVGFzayIsInJlc2V0SW5wdXRzIiwid3JhcHBlciIsInBsYWNlaG9sZGVyIiwidXNlclR5cGVkIiwidGFza0xpc3RGaXJzdENoaWxkIiwibmV4dFRhc2siLCJnZXROZXh0VGFzayIsImN1cnJlbnRUYXNrVG9CZUFkZGVkIiwicmVtb3ZlQ2hpbGQiLCJjb21wbGV0ZWRJZHMiLCJub2RlIiwiaGlkZSIsInNldFRpbWVvdXQiLCJjb21wbGV0ZVRhc2siLCJjdXJyZW50VGFza0VsZW1lbnRMaXN0IiwiZGVsZXRlVGFzayIsInRhc2tzIiwiT2JqZWN0IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxTQUFTQSxrQkFBVCxHQUE4QjtBQUNqQztBQUNBLE1BQUlDLGdCQUFnQixHQUFHLEtBQXZCOztBQUNBLE1BQUlDLFNBQVMsQ0FBQ0MsZ0RBQUQsQ0FBVCxLQUE2QixJQUFqQyxFQUF1QztBQUNuQ0Ysb0JBQWdCLEdBQUcsSUFBbkI7QUFDSDs7QUFDRCxNQUFJ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QUNBMEssWUFBTSxDQUFDdEIsTUFBUCxDQUFjcUIsS0FBZCxFQUFxQnRKLE9BQXJCLENBQTZCLFVBQUNYLElBQUQsRUFBVTtBQUNuQ21LLGVBQU8sQ0FBQ0MsR0FBUixDQUFZcEssSUFBWjs7QUFDQSxZQUFJQSxJQUFJLENBQUNvQyxTQUFMLEtBQW1CN0MsRUFBbkIsSUFBeUIsQ0FBQ1MsSUFBSSxDQUFDQyxTQUFuQyxFQUE4QztBQUMxQ1Qsa0JBQVEsQ0FBQ1ksSUFBVCxDQUFjSixJQUFkO0FBQ0g7QUFDSixPQUxEO0FBTUFSLGNBQVEsQ0FBQ21CLE9BQVQsQ0FBaUIsVUFBQ1gsSUFBRCxFQUFVO0FBQ3ZCcUksOEJBQXNCLENBQUNySSxJQUFELENBQXRCO0FBQ0gsT0FGRDtBQUdIOztBQWRnQixnREFlQXdGLFlBQVksQ0FBQ21DLFVBZmI7QUFBQTs7QUFBQTtBQWVqQiw2REFBMEM7QUFBQSxZQUFqQ2dDLElBQWlDO0FBQ3RDQSxZQUFJLENBQUMvQixxQkFBTCxDQUEyQixZQUFNO0FBQzdCQyw4QkFBb0I7QUFDdkIsU0FGRDtBQUdIO0FBbkJnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBb0JwQjtBQUNKLENBemFELEUiLCJmaWxlIjoidGltZXIuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUE9NT19UQVNLX0lOREVYLCBQT01PX1RBU0tfTUFQIH0gZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IHsgUE9NT19TRVNTSU9OX0lELCBMQVRFU1RfUE9NT19TRVNTSU9OX1NUQVRVUywgUE9NT19TRVNTSU9OX01BUCB9IGZyb20gXCIuL3Nlc3Npb25cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVEYXRhYmFzZSgpIHtcbiAgICAvLyBjaGVjayBpZiB3ZSBuZWVkIHRvIGluaXRpYWxpemVcbiAgICBsZXQgbmVlZFRvSW5pdGlhbGl6ZSA9IGZhbHNlO1xuICAgIGlmIChnZXRPYmplY3QoUE9NT19UQVNLX01BUCkgPT09IG51bGwpIHtcbiAgICAgICAgbmVlZFRvSW5pdGlhbGl6ZSA9IHRydWU7XG4gICAgfVxuICAgIGlmIChnZXRPYmplY3QoUE9NT19UQVNLX0lOREVYKSA9PT0gbnVsbCkge1xuICAgICAgICBuZWVkVG9Jbml0aWFsaXplID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShQT01PX1NFU1NJT05fSUQpID09PSBudWxsKSB7XG4gICAgICAgIG5lZWRUb0luaXRpYWxpemUgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKExBVEVTVF9QT01PX1NFU1NJT05fU1RBVFVTKSA9PT0gbnVsbCkge1xuICAgICAgICBuZWVkVG9Jbml0aWFsaXplID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGdldE9iamVjdChQT01PX1NFU1NJT05fTUFQKSA9PT0gbnVsbCkge1xuICAgICAgICBuZWVkVG9Jbml0aWFsaXplID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyB0aGVuIGluaXRpYWxpemVcbiAgICBpZiAobmVlZFRvSW5pdGlhbGl6ZSkge1xuICAgICAgICBzdG9yZU9iamVjdChQT01PX1RBU0tfTUFQLCB7fSk7XG4gICAgICAgIHN0b3JlT2JqZWN0KFBPTU9fVEFTS19JTkRFWCwgMCk7XG4gICAgICAgIHN0b3JlT2JqZWN0KExBVEVTVF9QT01PX1NFU1NJT05fU1RBVFVTLCBcImNvbXBsZXRlXCIpO1xuICAgICAgICBzdG9yZU9iamVjdChQT01PX1NFU1NJT05fSUQsIDApO1xuICAgICAgICBzdG9yZU9iamVjdChQT01PX1NFU1NJT05fTUFQLCB7fSk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0RGF0YWJhc2UoKSB7XG4gICAgZGVsZXRlIGxvY2FsU3RvcmFnZVtQT01PX1RBU0tfTUFQXTtcbiAgICBkZWxldGUgbG9jYWxTdG9yYWdlW1BPTU9fVEFTS19JTkRFWF07XG4gICAgZGVsZXRlIGxvY2FsU3RvcmFnZVtMQVRFU1RfUE9NT19TRVNTSU9OX1NUQVRVU107XG4gICAgZGVsZXRlIGxvY2FsU3RvcmFnZVtQT01PX1NFU1NJT05fSURdO1xuICAgIGRlbGV0ZSBsb2NhbFN0b3JhZ2VbUE9NT19TRVNTSU9OX01BUF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdG9yZU9iamVjdChrZXksIG9iamVjdCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkob2JqZWN0KSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0T2JqZWN0KGtleSkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpO1xufSIsIi8qKlxuICogVGhpcyBmaWxlIGlzIHJlbGF0ZWQgdG8gZmluZGluZyBwb21vIHNlc3Npb25zXG4gKi9cbmltcG9ydCB7IGdldE9iamVjdCwgc3RvcmVPYmplY3QgfSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHsgZGVsZXRlVGFza0J5VGFza0lELCBzdG9yZVRhc2ssIFRhc2sgfSBmcm9tIFwiLi90YXNrXCI7XG5cblxuZXhwb3J0IGNvbnN0IFBPTU9fU0VTU0lPTl9JRCA9IFwicG9tb19zZXNzaW9uX2lkXCI7XG5leHBvcnQgY29uc3QgTEFURVNUX1BPTU9fU0VTU0lPTl9TVEFUVVMgPSBcImxhdGVzdF9wb21vX3Nlc3Npb25fc3RhdHVzXCI7XG5leHBvcnQgY29uc3QgUE9NT19TRVNTSU9OX01BUCA9IFwicG9tb19zZXNzaW9uX21hcFwiO1xuXG4vKiogdGhlIGRpZmZlcmVudCBwb21vIHNlc3Npb24gbW9kZXMgYXMgY29uc3RhbnRzICovXG5leHBvcnQgY29uc3QgUE9NT19TRVNTSU9OX01PREVTID0ge1xuICAvKiogd2hlbiB0aGUgdXNlciBpcyBpbiB0aGUgaW50ZXJmYWNlIG9mIGNyZWF0aW5nIGEgbmV3IHRpbWVyIGFuZCBoYXMgbm90IHN0YXJ0ZWQgdGhlaXIgbmV3IHNlc3Npb24geWV0ICovXG4gIElOQUNUSVZFOiBcImluYWN0aXZlXCIsXG4gIC8qKiB3aGVuIHJ1bm5pbmcgdGhlIGJyZWFrIHRpbWVyICovXG4gIEJSRUFLOiBcImJyZWFrXCIsXG4gIC8qKiB3aGVuIHJ1bm5pbmcgdGhlIGxvbmdlciBicmVhayB0aW1lciAqL1xuICBMT05HX0JSRUFLOiBcImxvbmdicmVha1wiLFxuICAvKiogd2hlbiBydW5uaW5nIHRoZSBhY3RpdmUgcG9tbyB3b3JrIHRpbWUgKi9cbiAgQUNUSVZFOiBcImFjdGl2ZVwiLFxuICAvKiogd2hlbiB0aGUgdXNlciBtYXJrcyB0aGlzIHBvbW8gc2Vzc2lvbiBhcyBjb21wbGV0ZSwgcmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRhc2tzIGFyZSBjb21wbGV0ZWQgb3Igbm90ICovXG4gIENPTVBMRVRFOiBcImNvbXBsZXRlXCIsXG59O1xuXG5leHBvcnQgY2xhc3MgUG9tb1Nlc3Npb24ge1xuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IFBvbW8gU2Vzc2lvbiBvYmplY3RcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlkIC0gaWQgb2YgdGhpcyBzZXNzaW9uXG4gICAqL1xuICBjb25zdHJ1Y3RvcihpZCkge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICAvKiogQHR5cGUge1Rhc2tbXX0gLSBhIGxpc3Qgb2YgYWxsIHRhc2tzIGFzc29jaWF0ZWQgd2l0aCB0aGlzIHNlc3Npb24gKi9cbiAgICB0aGlzLmFsbFRhc2tzID0gW107XG4gICAgLyoqIEB0eXBlIHtzdHJpbmd9IC0gdGhlIGN1cnJlbnQgbW9kZSBvZiB0aGUgcG9tbyBzZXNzaW9uICovXG4gICAgdGhpcy5tb2RlID0gUE9NT19TRVNTSU9OX01PREVTLklOQUNUSVZFO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAtIHRoZSBjdXJyZW50IHRpbWUgb2YgdGhlIHBvbW8gc2Vzc2lvbiAqL1xuICAgIHRoaXMudGltZSA9IDA7XG5cbiAgICAvKiogQHR5cGUge051bWJlcn0gLSBudW1iZXIgb2YgcG9tb3MgZWxhcHNlZCBzdWNjZXNmdWxseSBmb3IgdGhpcyBwb21vIHNlc3Npb24gKi9cbiAgICB0aGlzLnBvbW9zRWxhcHNlZCA9IDA7XG5cbiAgICB0aGlzLnN0YXJ0RGF0ZSA9IG5ldyBEYXRlKCk7XG4gIH1cbiAgLyoqXG4gICAqIFxuICAgKiBAcmV0dXJucyB7VGFzayB8IG51bGwgfSAtIHRoZSBjdXJyZW50IHRhc2sgZm9yIHRoaXMgcG9tbyBzZXNzaW9uIG9yIG51bGwgaWYgdGhlcmUgYXJlIG5vIHRhc2tzIGxlZnRcbiAgICovXG4gIGN1cnJlbnRUYXNrKCkge1xuICAgIGxldCBhbGxJblByb2dyZXNzVGFza3MgPSB0aGlzLmFsbFRhc2tzLmZpbHRlcigodGFzaykgPT4gIXRhc2suY29tcGxldGVkKTtcbiAgICBpZiAoYWxsSW5Qcm9ncmVzc1Rhc2tzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIGFsbEluUHJvZ3Jlc3NUYXNrc1swXTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgLyoqXG4gICAqIEFkZHMgYSBuZXcgdGFza1xuICAgKiBAcGFyYW0ge1Rhc2t9IHRhc2sgXG4gICAqL1xuICBhZGRUYXNrKHRhc2spIHtcbiAgICBzdG9yZVRhc2sodGFzayk7XG4gICAgdGhpcy5hbGxUYXNrcy5wdXNoKHRhc2spO1xuICB9XG4gIC8qKlxuICAgKiBEZWxldGUgYSB0YXNrXG4gICAqIEBwYXJhbSB7VGFza30gdGFzayBcbiAgICovXG4gIGRlbGV0ZVRhc2sodGFzaykge1xuICAgIGRlbGV0ZVRhc2tCeVRhc2tJRCh0YXNrLmlkKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYWxsVGFza3MubGVuZ3RoOyBpKyspe1xuICAgICAgY29uc3Qgc3RvcmVkVGFzayA9IHRoaXMuYWxsVGFza3NbaV07XG4gICAgICBpZiAodGFzay5pZCA9PT0gc3RvcmVkVGFzay5pZCkge1xuICAgICAgICB0aGlzLmFsbFRhc2tzLnNwbGljZShpLCAxKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wbGV0ZXMgdGhlIGdpdmVuIHRhc2sgYXNzb2NpYXRlZCB0byB0aGUgaWRcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlkIFxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiBjb21wbGV0ZWQsIGZhbHNlIGlmIG5vIHRhc2sgZm91bmRcbiAgICovXG4gIGNvbXBsZXRlVGFzayhpZCkge1xuICAgIGZvciAobGV0IHRhc2sgb2YgdGhpcy5hbGxUYXNrcykge1xuICAgICAgaWYgKHRhc2suaWQgPT09IGlkKSB7XG4gICAgICAgIHRhc2suY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbmV4dCBpbmNvbXBsZXRlIHRhc2sgaW4gdGhlIG9yZGVyIG9yIG51bGwgaWYgYWxsIGNvbXBsZXRlZFxuICAgKiBAcmV0dXJucyB7VGFzayB8IG51bGx9XG4gICAqL1xuICBnZXROZXh0VGFzaygpIHtcbiAgICBmb3IgKGNvbnN0IHRhc2sgb2YgdGhpcy5hbGxUYXNrcykge1xuICAgICAgaWYgKHRhc2suY29tcGxldGVkID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gdGFzaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgLyoqXG4gICAqIEluY3JlbWVudCB0aGUgcG9tb3MgdXNlZCBmb3IgYSB0YXNrIGFuZCBpbmNyZW1lbnQgcG9tb3NFbGFwc2VkXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpZCBcbiAgICovXG4gIGluY3JlbWVudFRhc2tQb21vc1VzZWQoaWQpIHtcbiAgICBmb3IgKGNvbnN0IHRhc2sgb2YgdGhpcy5hbGxUYXNrcykge1xuICAgICAgaWYgKHRhc2suaWQgPT09IGlkKSB7XG4gICAgICAgIHRhc2sucG9tb3NVc2VkICs9IDE7XG4gICAgICAgIHRoaXMucG9tb3NFbGFwc2VkICs9IDE7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogXG4gICAqIEByZXR1cm5zIHRydWUgaWYgc2Vzc2lvbiBpcyBpbiBicmVhayBtb2RlIHJpZ2h0IG5vdywgZmFsc2Ugb3RoZXJ3aXNlXG4gICAqL1xuICBpc0JyZWFrKCkge1xuICAgIHJldHVybiB0aGlzLm1vZGUgPT09IFBPTU9fU0VTU0lPTl9NT0RFUy5MT05HX0JSRUFLIHx8IHRoaXMubW9kZSA9PT0gUE9NT19TRVNTSU9OX01PREVTLkJSRUFLO1xuICB9XG5cbiAgLyoqXG4gICAqIFRPRE9cbiAgICovXG4gIHJlb3JkZXJUYXNrcygpIHtcblxuICB9XG5cbiAgZ2V0UG9tb3NMZWZ0SW5TZXNzaW9uKCkge1xuICAgIGxldCBsZWZ0ID0gMDtcbiAgICB0aGlzLmFsbFRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGxlZnQgKz0gTWF0aC5tYXgodGFzay5wb21vc1JlcXVpcmVkIC0gdGFzay5wb21vc1VzZWQsIDApO1xuICAgIH0pO1xuICAgIHJldHVybiBsZWZ0O1xuICB9XG4gIHBhcnNlU2Vzc2lvbkZyb21PYmooc2Vzc2lvbl9vYmopIHtcbiAgICB0aGlzLmlkID0gc2Vzc2lvbl9vYmouaWQ7XG4gICAgdGhpcy5tb2RlID0gc2Vzc2lvbl9vYmoubW9kZTtcbiAgICB0aGlzLnRpbWUgPSBzZXNzaW9uX29iai50aW1lO1xuICAgIHRoaXMucG9tb3NFbGFwc2VkID0gc2Vzc2lvbl9vYmoucG9tb3NFbGFwc2VkO1xuICAgIHRoaXMuc3RhcnREYXRlID0gbmV3IERhdGUoc2Vzc2lvbl9vYmouc3RhcnREYXRlKTtcbiAgICB0aGlzLmFsbFRhc2tzID0gc2Vzc2lvbl9vYmouYWxsVGFza3MubWFwKCh0YXNrT2JqKSA9PiB7XG4gICAgICBsZXQgdCA9IG5ldyBUYXNrKCk7XG4gICAgICB0ID0gdC5wYXJzZVRhc2tGcm9tT2JqKHRhc2tPYmopO1xuICAgICAgcmV0dXJuIHQ7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgc2VyaWFsaXplSW50b09iaigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHRoaXMuaWQsIGFsbFRhc2tzOiB0aGlzLmFsbFRhc2tzLm1hcCgodGFzaykgPT4gdGFzay5zZXJpYWxpemVJbnRvT2JqKCkpLCBtb2RlOiB0aGlzLm1vZGUsIHRpbWU6IHRoaXMudGltZSwgcG9tb3NFbGFwc2VkOiB0aGlzLnBvbW9zRWxhcHNlZCwgc3RhcnREYXRlOiB0aGlzLnN0YXJ0RGF0ZS5nZXRUaW1lKClcbiAgICB9O1xuICB9XG59XG5cbi8qKlxuICogR2V0IGEgcG9tbyBzZXNzaW9uIG9iamVjdFxuICogQHBhcmFtIHtudW1iZXJ9IGlkIFxuICogQHJldHVybnMge1BvbW9TZXNzaW9uIHwgbnVsbH0gdGhlIHNlc3Npb24gZm9yIHRoaXMgaWQgb3IgbnVsbCBpZiB0aGVyZSBpcyBubyBzZXNzaW9uIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGlkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb21vU2Vzc2lvbihpZCkge1xuICBjb25zdCBhbGxTZXNzaW9ucyA9IGdldE9iamVjdChQT01PX1NFU1NJT05fTUFQKTtcbiAgbGV0IHAgPSBuZXcgUG9tb1Nlc3Npb24oKTtcbiAgaWYgKCFhbGxTZXNzaW9uc1tpZF0pIHJldHVybiBudWxsO1xuICByZXR1cm4gcC5wYXJzZVNlc3Npb25Gcm9tT2JqKGFsbFNlc3Npb25zW2lkXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdG9yZVBvbW9TZXNzaW9uKHNlc3Npb24pIHtcbiAgY29uc3QgYWxsU2Vzc2lvbnMgPSBnZXRPYmplY3QoUE9NT19TRVNTSU9OX01BUCk7XG4gIGFsbFNlc3Npb25zW3Nlc3Npb24uaWRdID0gc2Vzc2lvbi5zZXJpYWxpemVJbnRvT2JqKCk7XG4gIHN0b3JlT2JqZWN0KFBPTU9fU0VTU0lPTl9NQVAsIGFsbFNlc3Npb25zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5ld1Nlc3Npb25JRCgpIHtcbiAgbGV0IHByZXZJRCA9IHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKFBPTU9fU0VTU0lPTl9JRCkpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShQT01PX1NFU1NJT05fSUQsIHByZXZJRCArIDEpO1xuICByZXR1cm4gcHJldklEO1xufVxuXG4vKipcbiAqIFNldCB0aGUgY3VycmVudCBzZXNzaW9uJ3Mgc3RhdHVzXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RhdHVzIC0gY2FuIGJlIFwiY29tcGxldGVcIiBvciBcImluLXByb2dyZXNzXCJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldEN1cnJlbnRTZXNzaW9uU3RhdHVzKHN0YXR1cykge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShMQVRFU1RfUE9NT19TRVNTSU9OX1NUQVRVUywgc3RhdHVzKTtcbn1cblxuLyoqXG4gKiBXaWxsIHJldHVybiB0aGUgc2Vzc2lvbiBJRCBvZiB0aGUgbGFzdCBzZXNzaW9uIGlmIGl0IHdhcyBub3QgZW5kZWQuIE90aGVyd2lzZSBpZiB0aGUgbGFzdCBzZXNzaW9uIGRvZXMgbm90IGV4aXN0IFxuICogb3Igd2FzIGVuZGVkIGFscmVhZHksIHRoaXMgZnVuY3Rpb24gcmV0dXJucyBudWxsXG4gKiBcbiAqIEByZXR1cm5zIHtudW1iZXIgfCBudWxsfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGF0ZXN0U2Vzc2lvbklEKCkge1xuICBsZXQgc3RhdHVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oTEFURVNUX1BPTU9fU0VTU0lPTl9TVEFUVVMpO1xuICBpZiAoc3RhdHVzID09PSBcImNvbXBsZXRlXCIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oUE9NT19TRVNTSU9OX0lEKSkgLSAxO1xuICB9XG59XG5cbi8qKlxuICogQHJldHVybnMge2Jvb2xlYW59IC0gdHJ1ZSBpZiB0aGVyZSBpcyBhIHVuZmluaXNoZWQgc2Vzc2lvbiB0aGF0IHdhcyBub3QgY29tcGxldGVkIG9yIHF1aXR0ZWQuIGZhbHNlIG90aGVyd2lzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gdGhlcmVJc1VuZmluaXNoZWRTZXNzaW9uKCkge1xuICBsZXQgc2Vzc2lvbklEID0gZ2V0TGF0ZXN0U2Vzc2lvbklEKCk7XG4gIGlmIChzZXNzaW9uSUQgPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgbGV0IGN1cnJlbnRQb21vU2Vzc2lvbiA9IGdldFBvbW9TZXNzaW9uKHNlc3Npb25JRCk7XG4gIGlmIChjdXJyZW50UG9tb1Nlc3Npb24gIT09IG51bGwgJiYgY3VycmVudFBvbW9TZXNzaW9uLm1vZGUgIT09IFBPTU9fU0VTU0lPTl9NT0RFUy5DT01QTEVURSAmJiBjdXJyZW50UG9tb1Nlc3Npb24ubW9kZSAhPT0gUE9NT19TRVNTSU9OX01PREVTLklOQUNUSVZFKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udGludWVBY3RpdmVTZXNzaW9uKCkge1xuICBpZiAodGhlcmVJc1VuZmluaXNoZWRTZXNzaW9uKCkpIHtcbiAgICB3aW5kb3cubG9jYXRpb24gPSBcIi90aW1lci5odG1sP2xvYWRTYXZlZD10cnVlXCI7XG4gIH1cbn0iLCJpbXBvcnQgeyBnZXRPYmplY3QsIHN0b3JlT2JqZWN0IH0gZnJvbSBcIi5cIjtcbmltcG9ydCB7IGdldExhdGVzdFNlc3Npb25JRCwgZ2V0UG9tb1Nlc3Npb24gfSBmcm9tIFwiLi9zZXNzaW9uXCI7XG5cbmV4cG9ydCBjbGFzcyBUYXNrIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2Vzc2lvbklEIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZSBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGVzY3JpcHRpb24gXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBvbW9zUmVxdWlyZWQgXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2Vzc2lvbklELCB0aXRsZSwgZGVzY3JpcHRpb24sIHBvbW9zUmVxdWlyZWQpIHtcbiAgICAgICAgdGhpcy5zZXNzaW9uSUQgPSBzZXNzaW9uSUQ7XG4gICAgICAgIHRoaXMuaWQgPSAtMTtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMucG9tb3NSZXF1aXJlZCA9IHBvbW9zUmVxdWlyZWQ7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucG9tb3NVc2VkID0gMDtcbiAgICB9XG4gICAgcGFyc2VUYXNrRnJvbU9iaih0YXNrX29iaikge1xuICAgICAgICBsZXQgdGFzayA9IG5ldyBUYXNrKHRhc2tfb2JqLnNlc3Npb25JRCwgdGFza19vYmoudGl0bGUsIHRhc2tfb2JqLmRlc2NyaXB0aW9uLCB0YXNrX29iai5wb21vc1JlcXVpcmVkKTtcbiAgICAgICAgdGFzay5jb21wbGV0ZWQgPSB0YXNrX29iai5jb21wbGV0ZWQ7XG4gICAgICAgIHRhc2suaWQgPSB0YXNrX29iai5pZDtcbiAgICAgICAgdGFzay5wb21vc1VzZWQgPSB0YXNrX29iai5wb21vc1VzZWQ7XG4gICAgICAgIHJldHVybiB0YXNrO1xuICAgIH1cbiAgICBzZXJpYWxpemVJbnRvT2JqKCkge1xuICAgICAgICByZXR1cm4geyB0aXRsZTogdGhpcy50aXRsZSwgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sIHBvbW9zUmVxdWlyZWQ6IHRoaXMucG9tb3NSZXF1aXJlZCwgY29tcGxldGVkOiB0aGlzLmNvbXBsZXRlZCwgcG9tb3NVc2VkOiB0aGlzLnBvbW9zVXNlZCwgaWQ6IHRoaXMuaWQsIHNlc3Npb25JRDogdGhpcy5zZXNzaW9uSUQgfTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBQT01PX1RBU0tfTUFQID0gXCJwb21vX3Rhc2tfbWFwXCI7XG5leHBvcnQgY29uc3QgUE9NT19UQVNLX0lOREVYID0gXCJwb21vX3Rhc2tfaW5kZXhcIjtcblxuLyoqXG4gKiBXaWxsIHN0b3JlIGEgbmV3IG9yIHVwZGF0ZWQgdGFzayBpbnRvIGxvY2FsIHN0b3JhZ2VcbiAqIFxuICogSGFzIGEgc2lkZSBlZmZlY3Qgb2YgYWRkaW5nIHRoZSBpZCBvZiB0aGUgbmV3IHRhc2sgaWYgaXQgd2FzbnQgc3RvcmVkIGluIHN0b3JhZ2UgYmVmb3JlXG4gKiBcbiAqIEBwYXJhbSB7VGFza30gdGFza1xuICogQHJldHVybnMge251bWJlcn0gLSB0aGUgaWQgb2YgdGhlIHRhc2tcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0b3JlVGFzayh0YXNrKSB7XG4gICAgbGV0IHRhc2tfbWFwID0gZ2V0T2JqZWN0KFBPTU9fVEFTS19NQVApO1xuICAgIGlmICghdGFza19tYXBbdGFzay5pZF0pIHtcbiAgICAgICAgLy8gaWYgdGFzayBtYXAgZG9lcyBub3QgaGF2ZSB0aGlzIHRhc2ssIGNyZWF0ZSBhIG5ldyBpbmRleFxuICAgICAgICBsZXQgaWQgPSBwYXJzZUludChnZXRPYmplY3QoUE9NT19UQVNLX0lOREVYKSk7XG4gICAgICAgIHRhc2suaWQgPSBpZDtcbiAgICAgICAgLy8gaW5jcmVtZW50IGdsb2JhbCBpZFxuICAgICAgICBzdG9yZU9iamVjdChQT01PX1RBU0tfSU5ERVgsIGlkICsgMSk7XG4gICAgfVxuICAgIGxldCBvYmogPSB0YXNrLnNlcmlhbGl6ZUludG9PYmooKTtcbiAgICB0YXNrX21hcFt0YXNrLmlkXSA9IG9iajtcbiAgICBzdG9yZU9iamVjdChQT01PX1RBU0tfTUFQLCB0YXNrX21hcCk7XG4gICAgcmV0dXJuIHRhc2suaWQ7XG59XG5cbi8qKlxuICogR2V0IHRoZSB0YXNrIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGlkXG4gKiBAcGFyYW0ge251bWJlcn0gaWQgXG4gKiBAcmV0dXJucyB7VGFza31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRhc2soaWQpIHtcbiAgICBsZXQgdGFza19tYXAgPSBnZXRPYmplY3QoUE9NT19UQVNLX01BUCk7XG4gICAgbGV0IHRhc2tfb2JqID0gdGFza19tYXBbaWRdO1xuICAgIGxldCB0ID0gbmV3IFRhc2soKTtcbiAgICB0ID0gdC5wYXJzZVRhc2tGcm9tT2JqKHRhc2tfb2JqKTtcbiAgICByZXR1cm4gdDtcblxufVxuLyoqXG4gKiBHZXQgYWxsIHRhc2tzXG4gKiBcbiAqIEByZXR1cm5zIHtNYXA8bnVtYmVyLCBUYXNrPn0gLSBhIG1hcCBmcm9tIHRhc2sgaWQgdG8gdGFza1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsVGFza3MoKSB7XG4gICAgbGV0IHRhc2tfbWFwID0gZ2V0T2JqZWN0KFBPTU9fVEFTS19NQVApO1xuICAgIGxldCBwYXJzZWRfdGFza19tYXAgPSB7fTtcbiAgICBmb3IgKGxldCBpZCBpbiB0YXNrX21hcCkge1xuICAgICAgICBsZXQgdGFza19vYmogPSB0YXNrX21hcFtpZF07XG4gICAgICAgIGxldCB0ID0gbmV3IFRhc2soKTtcbiAgICAgICAgdCA9IHQucGFyc2VUYXNrRnJvbU9iaih0YXNrX29iaik7XG4gICAgICAgIHBhcnNlZF90YXNrX21hcFtpZF0gPSB0O1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VkX3Rhc2tfbWFwO1xufVxuXG4vKipcbiAqIERlbGV0ZSBhIHNwZWNpZmljIHRhc2sgZnJvbSBkYXRhYmFzZSBieSB0aGUgdW5pcXVlIHRhc2sgSURcbiAqIFxuICogQHBhcmFtIHtudW1iZXJ9IGlkIFxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVGFza0J5VGFza0lEKGlkKSB7XG4gICAgbGV0IHRhc2tfbWFwID0gZ2V0T2JqZWN0KFBPTU9fVEFTS19NQVApO1xuICAgIGRlbGV0ZSB0YXNrX21hcFtpZF07XG4gICAgc3RvcmVPYmplY3QoUE9NT19UQVNLX01BUCwgdGFza19tYXApO1xufVxuXG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZXJlIGFyZSBhbnkgdW5maW5pc2hlZCB0YXNrcyBmcm9tIHRoZSBwcmV2aW91cyBzZXNzaW9uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSB0cnVlIGlmIHVuaWZpbmlzaGVkIHRhc2tzIGV4aXN0LCBmYWxzZSBvdGhlcndpc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFyZVRoZXJlVW5maW5pc2hlZFRhc2tzRnJvbUxhc3RTZXNzaW9uKCkge1xuICAgIGxldCBvbGRTZXNzaW9uSUQgPSBnZXRMYXRlc3RTZXNzaW9uSUQoKTtcbiAgICBpZiAob2xkU2Vzc2lvbklEID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgbGV0IHNlc3Npb24gPSBnZXRQb21vU2Vzc2lvbihvbGRTZXNzaW9uSUQpO1xuICAgIGlmIChzZXNzaW9uID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHNlc3Npb24uY3VycmVudFRhc2soKSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuIiwiLyoqXG4gKiBUYWtlcyBhIG51bWJlciBvZiBzZWNvbmRzIGFuZCBmb3JtYXRzIGl0IGludG8gYSBNTTpTUyBmb3JtYXRcbiAqIEBwYXJhbSB7bnVtYmVyfSBzZWNvbmRzIFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFRpbWUoc2Vjb25kcykge1xuICBsZXQgcyA9IHNlY29uZHMgJSA2MDtcbiAgbGV0IHNzdHIgPSBcIlwiO1xuICBpZiAocyA8IDEwKSB7XG4gICAgc3N0ciA9IFwiMFwiICsgcztcbiAgfSBlbHNlIHtcbiAgICBzc3RyID0gcztcbiAgfVxuICBsZXQgbSA9IE1hdGguZmxvb3Ioc2Vjb25kcyAvIDYwKTtcbiAgbGV0IG1zdHIgPSBcIlwiO1xuICBpZiAobSA8IDEwKSB7XG4gICAgbXN0ciA9IFwiMFwiICsgbTtcbiAgfSBlbHNlIHtcbiAgICBtc3RyID0gbTtcbiAgfVxuICByZXR1cm4gbXN0ciArIFwiOlwiICsgc3N0cjtcbn0iLCIvKipcbiAqIFdpbGwgcmFuZG9tbHkgcGljayBhIHRoZW1lIGFuZCB1bmlxdWUgYmFja2dyb3VuZCBkZXBlbmRpbmcgb24gd2hhdCBkYXkgaXQgaXMgYW5kIHdoYXQgdGltZSBpdCBpcyBhbmQgc2V0IGl0IG9uIHRoZSBwYWdlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RBbmRTZXRUaGVtZSh0b2RheSA9IG5ldyBEYXRlKCkpIHtcbiAgbGV0IGlkID0gMDtcbiAgbGV0IG51bUJHcyA9IDY7XG5cbiAgbGV0IGQgPSB0b2RheS5nZXREYXkoKTtcblxuICBsZXQgc2VlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmctc2VlZFwiKTtcblxuICBpZiAoc2VlZCA9PT0gbnVsbCB8fCBzZWVkWzBdICE9IGQpIHtcbiAgICBzZWVkID0gZCArIFwiLVwiICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbnVtQkdzKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJnLXNlZWRcIiwgc2VlZCk7XG4gIH1cbiAgbGV0IHRpbWVQZXJpb2QgPSBnZXRUaGVtZU1vZGUodG9kYXkpO1xuICBpZCA9IHBhcnNlSW50KHNlZWRbMl0pO1xuXG4gIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrZHJvcFwiKTtcbiAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy8ke3RpbWVQZXJpb2R9L2JnJHtpZH0uanBnXCIpYDtcbn07XG5cbmV4cG9ydCBjb25zdCBUSEVNRV9NT0RFUyA9IHtcbiAgREFZOiBcImRheVwiLFxuICBOSUdIVDogXCJuaWdodFwiLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRoZW1lTW9kZSh0b2RheSA9IG5ldyBEYXRlKCkpIHtcbiAgbGV0IHRpbWVQZXJpb2QgPSBUSEVNRV9NT0RFUy5EQVk7XG4gIGlmICh0b2RheS5nZXRIb3VycygpIDwgNCkge1xuICAgIHRpbWVQZXJpb2QgPSBUSEVNRV9NT0RFUy5OSUdIVDtcbiAgfVxuICBlbHNlIGlmICh0b2RheS5nZXRIb3VycygpIDwgMTgpIHtcbiAgICB0aW1lUGVyaW9kID0gVEhFTUVfTU9ERVMuREFZO1xuICB9IGVsc2UgaWYgKHRvZGF5LmdldEhvdXJzKCkgPCAyNCkge1xuICAgIHRpbWVQZXJpb2QgPSBUSEVNRV9NT0RFUy5OSUdIVDtcbiAgfVxuICByZXR1cm4gdGltZVBlcmlvZDtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBmb3JtYXRUaW1lIH0gZnJvbSBcIi4vdXRpbHMvZm9ybWF0LXRpbWVcIjtcbmltcG9ydCB7IGluaXRpYWxpemVEYXRhYmFzZSB9IGZyb20gXCIuL2RhdGFiYXNlXCI7XG5pbXBvcnQgeyBnZXRMYXRlc3RTZXNzaW9uSUQsIGdldE5ld1Nlc3Npb25JRCwgZ2V0UG9tb1Nlc3Npb24sIFBvbW9TZXNzaW9uLCBQT01PX1NFU1NJT05fTU9ERVMsIHNldEN1cnJlbnRTZXNzaW9uU3RhdHVzLCBzdG9yZVBvbW9TZXNzaW9uLCB0aGVyZUlzVW5maW5pc2hlZFNlc3Npb24gfSBmcm9tIFwiLi9kYXRhYmFzZS9zZXNzaW9uXCI7XG5pbXBvcnQgeyBhcmVUaGVyZVVuZmluaXNoZWRUYXNrc0Zyb21MYXN0U2Vzc2lvbiwgc3RvcmVUYXNrfSBmcm9tIFwiLi9kYXRhYmFzZS90YXNrXCI7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vZGF0YWJhc2UvdGFza1wiO1xuaW1wb3J0IHsgc2VsZWN0QW5kU2V0VGhlbWUgfSBmcm9tIFwiLi91dGlscy90aGVtZVwiO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBzZWxlY3RBbmRTZXRUaGVtZSgpO1xuICAgIFxuICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gICAgY29uc3QgbG9hZFNhdmVkID0gdXJsUGFyYW1zLmdldChcImxvYWRTYXZlZFwiKTtcblxuICAgIGxldCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrQ3JlYXRvclwiKTtcbiAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRhc2tNb2RhbFwiKTtcbiAgICBsZXQgdGFza0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tMaXN0XCIpO1xuICAgIGxldCBzdGFydFRpbWVyQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydFRpbWVyXCIpO1xuICAgIGxldCBjdXJyZW50VGFza0hUTUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnRUYXNrXCIpO1xuICAgIGxldCB0YXNrTGlzdEhUTUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tMaXN0XCIpO1xuICAgIGxldCB0aW1lclByb2dyZXNzQ2lyY2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aW1lci1wcm9ncmVzc1wiKTtcbiAgICBsZXQgZGlzdHJhY3RlZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlzdHJhY3RlZFdyYXBwZXJcIik7XG4gICAgbGV0IGNvbXBsZXRlU2Vzc2lvbkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tcGxldGVTZXNzaW9uXCIpO1xuICAgIGxldCBFbmRCcmVha0Vhcmx5QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJFbmRCcmVha0Vhcmx5V3JhcHBlclwiKTtcblxuICAgIGNvbXBsZXRlU2Vzc2lvbkJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjdXJyZW50UG9tb1Nlc3Npb24ubW9kZSA9IFBPTU9fU0VTU0lPTl9NT0RFUy5DT01QTEVURTtcbiAgICAgICAgc3RvcmVQb21vU2Vzc2lvbihjdXJyZW50UG9tb1Nlc3Npb24pO1xuICAgIH07XG5cbiAgICAvLyBUT0RPOiBtb3ZlIHRoaXMgdGltZSB2YXJpYWJsZSBpbnRvIHRoZSBwb21vIHNlc3Npb24gb2JqZWN0IGNsYXNzIHVzaW5nIGxvY2Fsc3RvcmFnZVxuICAgIGxldCBtYXhQb21vVGltZSA9IDU7XG4gICAgbGV0IG1heEJyZWFrVGltZSA9IDUgKiA2MDtcbiAgICBsZXQgbWF4TG9uZ0JyZWFrVGltZSA9IDEwICogNjA7XG5cbiAgICBcbiAgICBpbml0aWFsaXplRGF0YWJhc2UoKTtcbiAgICBpZiAobG9hZFNhdmVkID09IFwiZmFsc2VcIikge1xuICAgICAgICBsZXQgb2xkVGFza3NMZWZ0ID0gYXJlVGhlcmVVbmZpbmlzaGVkVGFza3NGcm9tTGFzdFNlc3Npb24oKTtcbiAgICAgICAgaWYgKG9sZFRhc2tzTGVmdCkge1xuICAgICAgICAgICAgbGV0IGNvbmZpcm1lZCA9IGNvbmZpcm0oXCJCeSBzdGFydGluZyBhIG5ldyB0aW1lciwgeW91IHdpbGwgbG9zZSBhbnkgdW5maW5pc2hlZCB0YXNrcyBmcm9tIHlvdXIgcHJldmlvdXMgc2Vzc2lvblwiKTtcbiAgICAgICAgICAgIGlmICghY29uZmlybWVkKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gXCIuL2luZGV4Lmh0bWxcIjtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBcblxuICAgIC8qKiBAdHlwZSB7UG9tb1Nlc3Npb259ICovXG4gICAgbGV0IGN1cnJlbnRQb21vU2Vzc2lvbiA9IG51bGw7XG5cbiAgICAvLyBVc2UgbGVmdG92ZXIgdGFza3MgYW5kIHJlbmRlciB0aGVtXG4gICAgaWYgKGxvYWRTYXZlZCA9PSBcInRydWVcIikge1xuICAgICAgICBsZXQgc2Vzc2lvbklEID0gZ2V0TGF0ZXN0U2Vzc2lvbklEKCk7XG4gICAgICAgIGN1cnJlbnRQb21vU2Vzc2lvbiA9IGdldFBvbW9TZXNzaW9uKHNlc3Npb25JRCk7XG5cbiAgICAgICAgaWYgKHRoZXJlSXNVbmZpbmlzaGVkU2Vzc2lvbigpICYmIGN1cnJlbnRQb21vU2Vzc2lvbi5tb2RlICE9IFBPTU9fU0VTU0lPTl9NT0RFUy5JTkFDVElWRSkge1xuICAgICAgICAgICAgbG9hZFRhc2tzKCk7XG4gICAgICAgICAgICBpbml0aWF0ZVRpbWVyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBjcmVhdGUgbmV3IHNlc3Npb24gYW5kIHVzZSBvbGQgdGFza3MgZnJvbSBsYXN0IHRpbWVcbiAgICAgICAgICAgIGxldCBzZXNzaW9uSUQgPSBnZXROZXdTZXNzaW9uSUQoKTtcbiAgICAgICAgICAgIHNldEN1cnJlbnRTZXNzaW9uU3RhdHVzKFwiaW4tcHJvZ3Jlc3NcIik7XG5cbiAgICAgICAgICAgIC8vIHRha2UgdGhlIG9sZCB0YXNrcyBhbmQgdXBkYXRlIHRoZSBzZXNzaW9uIGlkcyB0byB0aGUgbmV3IG9uZVxuICAgICAgICAgICAgbGV0IG9sZFRhc2tzID0gY3VycmVudFBvbW9TZXNzaW9uLmFsbFRhc2tzO1xuICAgICAgICAgICAgb2xkVGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgICAgIHRhc2suc2Vzc2lvbklEID0gc2Vzc2lvbklEO1xuICAgICAgICAgICAgICAgIHN0b3JlVGFzayh0YXNrKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjdXJyZW50UG9tb1Nlc3Npb24gPSBuZXcgUG9tb1Nlc3Npb24oc2Vzc2lvbklEKTtcblxuICAgICAgICAgICAgY3VycmVudFBvbW9TZXNzaW9uLnRpbWUgPSBtYXhQb21vVGltZTtcbiAgICAgICAgICAgIGN1cnJlbnRQb21vU2Vzc2lvbi5hbGxUYXNrcyA9IG9sZFRhc2tzO1xuICAgICAgICAgICAgLy8gc2F2ZSBvdXIgbmV3IHBvbW8gc2Vzc2lvblxuICAgICAgICAgICAgc3RvcmVQb21vU2Vzc2lvbihjdXJyZW50UG9tb1Nlc3Npb24pO1xuICAgICAgICAgICAgbG9hZFRhc2tzKCk7XG4gICAgICAgIH1cbiAgICBcbiAgICB9XG4gICAgZWxzZSBpZiAobG9hZFNhdmVkID09IFwiZmFsc2VcIikge1xuICAgICAgICAvLyBub3RlLCBpZiB5b3UgcmVmcmVzaCBmb3Igbm93LCB5b3Ugd2lsbCBsb3NlIHlvdXIgc2Vzc2lvbidzIGNoYW5nZXMuLi5cbiAgICAgICAgbGV0IHNlc3Npb25JRCA9IGdldE5ld1Nlc3Npb25JRCgpO1xuICAgICAgICBzZXRDdXJyZW50U2Vzc2lvblN0YXR1cyhcImluLXByb2dyZXNzXCIpO1xuXG4gICAgICAgIGN1cnJlbnRQb21vU2Vzc2lvbiA9IG5ldyBQb21vU2Vzc2lvbihzZXNzaW9uSUQpO1xuICAgICAgICBjdXJyZW50UG9tb1Nlc3Npb24udGltZSA9IG1heFBvbW9UaW1lO1xuICAgICAgICAvLyBzYXZlIG91ciBuZXcgcG9tbyBzZXNzaW9uXG4gICAgICAgIHN0b3JlUG9tb1Nlc3Npb24oY3VycmVudFBvbW9TZXNzaW9uKTtcbiAgICAgICAgbG9hZFRhc2tzKCk7XG5cbiAgICB9XG5cbiAgICB1cmxQYXJhbXMuc2V0KFwibG9hZFNhdmVkXCIsIHRydWUpO1xuXG4gICAgdGltZXJQcm9ncmVzc0NpcmNsZS5zZXREaXNwbGF5VGV4dChmb3JtYXRUaW1lKGN1cnJlbnRQb21vU2Vzc2lvbi50aW1lKSk7XG4gICAgdGltZXJQcm9ncmVzc0NpcmNsZS5zZXRQZXJjZW50YWdlKGN1cnJlbnRQb21vU2Vzc2lvbi50aW1lIC8gbWF4UG9tb1RpbWUpO1xuICAgIGlmIChjdXJyZW50UG9tb1Nlc3Npb24ubW9kZSA9PT0gUE9NT19TRVNTSU9OX01PREVTLkJSRUFLKSB7XG4gICAgICAgIHJlbmRlckJyZWFrTW9kZSgpO1xuICAgICAgICB0aW1lclByb2dyZXNzQ2lyY2xlLnNldFBlcmNlbnRhZ2UoY3VycmVudFBvbW9TZXNzaW9uLnRpbWUgLyBtYXhCcmVha1RpbWUpO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudFBvbW9TZXNzaW9uLm1vZGUgPT09IFBPTU9fU0VTU0lPTl9NT0RFUy5MT05HX0JSRUFLKSB7XG4gICAgICAgIHJlbmRlckJyZWFrTW9kZSgpO1xuICAgICAgICB0aW1lclByb2dyZXNzQ2lyY2xlLnNldFBlcmNlbnRhZ2UoY3VycmVudFBvbW9TZXNzaW9uLnRpbWUgLyBTVkdGRUNvbG9yTWF0cml4RWxlbWVudCk7XG4gICAgfVxuXG4gICAgLy8gSW1wbGVtZW50cyB0aGUgb25jbGljayBmdW5jdGlvbmFsaXR5IG9mIEVuZCBCcmVhayBFYXJseSBCdXR0b24sIHdoaWNoIGltbWVkaWF0ZWx5IHN0b3AgdGhlIGJyZWFrIFxuICAgIC8vIGFuZCBnbyB0byB0aGUgd29yayB0aW1lXG4gICAgRW5kQnJlYWtFYXJseUJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZW5kZXJBY3RpdmVNb2RlKCk7XG4gICAgICAgIGN1cnJlbnRQb21vU2Vzc2lvbi50aW1lID0gbWF4UG9tb1RpbWU7XG4gICAgICAgIGN1cnJlbnRQb21vU2Vzc2lvbi5tb2RlID0gUE9NT19TRVNTSU9OX01PREVTLkFDVElWRTtcbiAgICAgICAgdGltZXJQcm9ncmVzc0NpcmNsZS5zZXREaXNwbGF5VGV4dChmb3JtYXRUaW1lKGN1cnJlbnRQb21vU2Vzc2lvbi50aW1lKSk7XG4gICAgICAgIHRpbWVyUHJvZ3Jlc3NDaXJjbGUuc2V0UGVyY2VudGFnZShjdXJyZW50UG9tb1Nlc3Npb24udGltZSAvIG1heFBvbW9UaW1lKTtcbiAgICAgICAgc3RvcmVQb21vU2Vzc2lvbihjdXJyZW50UG9tb1Nlc3Npb24pO1xuICAgIH07XG5cbiAgICBzdGFydFRpbWVyQnV0dG9uLm9uY2xpY2sgPSBpbml0aWF0ZVRpbWVyO1xuXG4gICAgbW9kYWwuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZChcInNhdmUtYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjb250ZW50c1NhdmVkKTtcbiAgICBhZGRUYXNrQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG1vZGFsLmRpc3BsYXlNb2RhbCgpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbXBsZW1lbnRzIHRoZSBvbkNsaWNrIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIFN0YXJ0IFRpbWVyIGJ1dHRvbiwgd2hpY2ggc3RhcnRzIHRoZSBwb21vIHRpbWVyIGFuZCBjeWNsZXNcbiAgICAgKiBwb21vIGFuZCBicmVhayB0aW1lcnMgdW50aWwgYWxsIHBvbW9zIGFyZSBjb21wbGV0ZWQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gaW5pdGlhdGVUaW1lcigpIHtcbiAgICAgICAgY3VycmVudFRhc2tIVE1MLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY3VycmVudFRhc2tXb3JrVGltZVwiKTtcbiAgICAgICAgdGltZXJQcm9ncmVzc0NpcmNsZS5zZXRTaXplKFwiMS41cmVtXCIpO1xuXG4gICAgICAgIHRhc2tMaXN0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFza0xpc3RXb3JrVGltZVwiKTtcblxuICAgICAgICBsZXQgdGltZXJXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aW1lcldyYXBwZXJcIik7XG4gICAgICAgIHRpbWVyV3JhcHBlci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRpbWVyV3JhcHBlcldvcmtUaW1lXCIpO1xuXG4gICAgICAgIGRpc3RyYWN0ZWRCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuXG4gICAgICAgIGxldCBjb21wbGV0ZVNlc3Npb25XcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb21wbGV0ZVNlc3Npb25XcmFwcGVyXCIpO1xuICAgICAgICBjb21wbGV0ZVNlc3Npb25XcmFwcGVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29tcGxldGVTZXNzaW9uV3JhcHBlcldvcmtUaW1lXCIpO1xuICAgICAgICBsZXQgdGFza0NyZWF0b3JXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrQ3JlYXRvcldyYXBwZXJcIik7XG4gICAgICAgIHRhc2tDcmVhdG9yV3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50VGFza1dyYXBwZXJcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICAgICAgICBzdGFydE5ld1Rhc2soKTtcblxuICAgICAgICBpZiAoY3VycmVudFBvbW9TZXNzaW9uLm1vZGUgPT09IFBPTU9fU0VTU0lPTl9NT0RFUy5JTkFDVElWRSkge1xuICAgICAgICAgICAgY3VycmVudFBvbW9TZXNzaW9uLm1vZGUgPSBQT01PX1NFU1NJT05fTU9ERVMuQUNUSVZFO1xuICAgICAgICAgICAgc3RvcmVQb21vU2Vzc2lvbihjdXJyZW50UG9tb1Nlc3Npb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9yZW1vdmVzIGZpcnN0IGNoaWxkIGZyb20gdGFzayBsaXN0IGFuZCBhZGRzIHRvIGN1cnJlbnQgdGFza1xuXG4gICAgICAgIGxldCB0aW1lckxvb3AgPSBzZXRJbnRlcnZhbCh0aW1lQ2hhbmdlciwgMTAwMCk7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRUYXNrRmlyc3RDaGlsZCA9IGN1cnJlbnRUYXNrSFRNTC5jaGlsZE5vZGVzWzBdO1xuICAgICAgICBjdXJyZW50VGFza0ZpcnN0Q2hpbGQuc2V0RmluaXNoVGFza0NhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJlbW92ZUNvbXBsZXRlZFRhc2tzKCk7XG4gICAgICAgICAgICBzdGFydE5ld1Rhc2soKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBjdXJyZW50VGFzayA9IGN1cnJlbnRQb21vU2Vzc2lvbi5jdXJyZW50VGFzaygpO1xuICAgICAgICBjdXJyZW50VGFza0ZpcnN0Q2hpbGQudGFzayA9IGN1cnJlbnRUYXNrO1xuICAgICAgICBmdW5jdGlvbiB0aW1lQ2hhbmdlcigpIHtcbiAgICAgICAgICAgIGN1cnJlbnRQb21vU2Vzc2lvbiA9IGdldFBvbW9TZXNzaW9uKGN1cnJlbnRQb21vU2Vzc2lvbi5pZCk7XG4gICAgICAgICAgICBjdXJyZW50UG9tb1Nlc3Npb24udGltZSAtPSAxO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRQb21vU2Vzc2lvbi50aW1lIDwgMCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQb21vU2Vzc2lvbi50aW1lID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gY2hlY2sgaWYgc2Vzc2lvbiBpcyBpbmNvbXBsZXRlLiBpZiBpbmNvbXBsZXRlLCBcbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAvLyBJZiB0aW1lciBoaXRzIDAsIHRvZ2dsZSB0byBuZXh0IGJyZWFrIG9yIHBvbW8gdGltZXJcbiAgICAgICAgICAgIGlmIChjdXJyZW50UG9tb1Nlc3Npb24udGltZSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQb21vU2Vzc2lvbi5tb2RlID09PSBQT01PX1NFU1NJT05fTU9ERVMuQUNUSVZFKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhbGFybSA9IG5ldyBBdWRpbyhcImFzc2V0cy9hdWRpby9hbGFybS5tcDNcIik7XG4gICAgICAgICAgICAgICAgICAgIGFsYXJtLnBsYXkoKTtcblxuICAgICAgICAgICAgICAgICAgICAvL2JyZWFrIFxuICAgICAgICAgICAgICAgICAgICByZW5kZXJCcmVha01vZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFBvbW9TZXNzaW9uLnBvbW9zRWxhcHNlZCArPSAxO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50VGFza0ZpcnN0Q2hpbGQgPSBjdXJyZW50VGFza0hUTUwuY2hpbGROb2Rlc1swXTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRhc2tGaXJzdENoaWxkLmluY3JlbWVudFBvbW9zVXNlZCgpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGFza0ZpcnN0Q2hpbGQudGFzay5wb21vc1VzZWQgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFBvbW9TZXNzaW9uLmluY3JlbWVudFRhc2tQb21vc1VzZWQoY3VycmVudFRhc2tGaXJzdENoaWxkLnRhc2suaWQpO1xuICAgICAgICAgICAgICAgICAgICBzdG9yZVBvbW9TZXNzaW9uKGN1cnJlbnRQb21vU2Vzc2lvbik7XG5cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRhc2tGaXJzdENoaWxkLnNldEF0dHJpYnV0ZShcInBvbW9zdXNlZFwiLCAxICsgcGFyc2VJbnQoY3VycmVudFRhc2tGaXJzdENoaWxkLmdldEF0dHJpYnV0ZShcInBvbW9zdXNlZFwiKSkpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIExvbmcgYnJlYWssIGN1cnJlbnRseSBoYXJkY29kZWQgYWZ0ZXIgZXZlcnkgNCBwb21vc1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBvbW9TZXNzaW9uLnBvbW9zRWxhcHNlZCAlIDQgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBvbW9TZXNzaW9uLnRpbWUgPSBtYXhMb25nQnJlYWtUaW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBvbW9TZXNzaW9uLm1vZGUgPSBQT01PX1NFU1NJT05fTU9ERVMuTE9OR19CUkVBSztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBTaG9ydCBicmVha1xuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQb21vU2Vzc2lvbi50aW1lID0gbWF4QnJlYWtUaW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBvbW9TZXNzaW9uLm1vZGUgPSBQT01PX1NFU1NJT05fTU9ERVMuQlJFQUs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gTmV4dCB0aW1lciBzaG91bGQgYmUgYSBwb21vIHRpbWVyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY3VycmVudFBvbW9TZXNzaW9uLm1vZGUgIT09IFBPTU9fU0VTU0lPTl9NT0RFUy5DT01QTEVURSkge1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJBY3RpdmVNb2RlKCk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQb21vU2Vzc2lvbi50aW1lID0gbWF4UG9tb1RpbWU7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQb21vU2Vzc2lvbi5tb2RlID0gUE9NT19TRVNTSU9OX01PREVTLkFDVElWRTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBBZGQgZnVuY3Rpb25hbGl0eSBmb3IgbW92aW5nIG9udG8gbmV4dCB0YXNrLCB1cGRhdGluZyBwb21vcyB1c2VkIG9uIGN1cnJlbnQgdGFzaywgZXRjLlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFB1c2ggdXBkYXRlZCB0aW1lIHRvIHRoZSBwYWdlXG4gICAgICAgICAgICBkb2N1bWVudC50aXRsZSA9IGZvcm1hdFRpbWUoY3VycmVudFBvbW9TZXNzaW9uLnRpbWUpO1xuICAgICAgICAgICAgdGltZXJQcm9ncmVzc0NpcmNsZS5zZXREaXNwbGF5VGV4dChmb3JtYXRUaW1lKGN1cnJlbnRQb21vU2Vzc2lvbi50aW1lKSk7XG4gICAgICAgICAgICBpZiAoY3VycmVudFBvbW9TZXNzaW9uLm1vZGUgPT09IFBPTU9fU0VTU0lPTl9NT0RFUy5BQ1RJVkUpIHtcbiAgICAgICAgICAgICAgICB0aW1lclByb2dyZXNzQ2lyY2xlLnNldFBlcmNlbnRhZ2UoY3VycmVudFBvbW9TZXNzaW9uLnRpbWUgLyBtYXhQb21vVGltZSk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQudGl0bGUgKz0gXCIgLSBXb3JrXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjdXJyZW50UG9tb1Nlc3Npb24ubW9kZSA9PT0gUE9NT19TRVNTSU9OX01PREVTLkJSRUFLKSB7XG4gICAgICAgICAgICAgICAgdGltZXJQcm9ncmVzc0NpcmNsZS5zZXRQZXJjZW50YWdlKGN1cnJlbnRQb21vU2Vzc2lvbi50aW1lIC8gbWF4QnJlYWtUaW1lKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC50aXRsZSArPSBcIiAtIEJyZWFrXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjdXJyZW50UG9tb1Nlc3Npb24ubW9kZSA9PT0gUE9NT19TRVNTSU9OX01PREVTLkxPTkdfQlJFQUspIHtcbiAgICAgICAgICAgICAgICB0aW1lclByb2dyZXNzQ2lyY2xlLnNldFBlcmNlbnRhZ2UoY3VycmVudFBvbW9TZXNzaW9uLnRpbWUgLyBtYXhMb25nQnJlYWtUaW1lKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC50aXRsZSArPSBcIiAtIExvbmcgQnJlYWtcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0b3JlUG9tb1Nlc3Npb24oY3VycmVudFBvbW9TZXNzaW9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlckFjdGl2ZU1vZGUoKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGltZXItc3RhdHVzXCIpLmlubmVyVGV4dCA9IFwiUG9tbyBUaW1lXCI7XG4gICAgICAgIGN1cnJlbnRUYXNrSFRNTC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImN1cnJlbnRUYXNrV29ya1RpbWVcIik7XG4gICAgICAgIHRhc2tMaXN0SFRNTC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2tMaXN0V29ya1RpbWVcIik7XG4gICAgICAgIGRpc3RyYWN0ZWRCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgRW5kQnJlYWtFYXJseUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICAgICAgdGltZXJXcmFwcGVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGltZXJXcmFwcGVyV29ya1RpbWVcIik7XG4gICAgICAgIGNvbXBsZXRlU2Vzc2lvbldyYXBwZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb21wbGV0ZVNlc3Npb25XcmFwcGVyV29ya1RpbWVcIik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyQnJlYWtNb2RlKCkge1xuICAgICAgICBjdXJyZW50VGFza0hUTUwuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjdXJyZW50VGFza0JyZWFrVGltZVwiKTtcbiAgICAgICAgdGFza0xpc3RIVE1MLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFza0xpc3RCcmVha1RpbWVcIik7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGltZXItc3RhdHVzXCIpLmlubmVyVGV4dCA9IFwiQnJlYWsgVGltZVwiO1xuICAgICAgICBFbmRCcmVha0Vhcmx5QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIGRpc3RyYWN0ZWRCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgICAgIHRpbWVyV3JhcHBlci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRpbWVyV3JhcHBlckJyZWFrVGltZVwiKTtcbiAgICAgICAgY29tcGxldGVTZXNzaW9uV3JhcHBlci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvbXBsZXRlU2Vzc2lvbldyYXBwZXJCcmVha1RpbWVcIik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBSZW5kZXIgYSB0YXNrIG9udG8gdGhlIFxuICAgICogQHBhcmFtIHtUYXNrfSB0YXNrIFxuICAgICovXG4gICAgZnVuY3Rpb24gcmVuZGVyVGFza0ludG9UYXNrTGlzdCh0YXNrKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUYXNrRWxlbWVudCA9IGA8cG9tby10YXNrIGRlc2NyaXB0aW9uID1cIiR7dGFzay5kZXNjcmlwdGlvbn1cIiBwb21vc1VzZWQ9XCIke3Rhc2sucG9tb3NVc2VkfVwiLCBwb21vc1JlcXVpcmVkID1cIiR7dGFzay5wb21vc1JlcXVpcmVkfVwiPiR7dGFzay50aXRsZX08L3BvbW8tdGFzaz5gO1xuICAgICAgICB0YXNrTGlzdC5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgY3VycmVudFRhc2tFbGVtZW50KTtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRhc2tMaXN0LmNoaWxkTm9kZXNbdGFza0xpc3QuY2hpbGROb2Rlcy5sZW5ndGggLSAxXTtcbiAgICAgICAgZWxlbWVudC5zZXRGaW5pc2hUYXNrQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICAgICAgcmVtb3ZlQ29tcGxldGVkVGFza3MoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGVsZW1lbnQuc2V0RGVsZXRlVGFza0NhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgICAgIGRlbGV0ZVRhc2tCeUlkKHRhc2suaWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgZWxlbWVudC50YXNrID0gdGFzaztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IGdldHMgY2FsbGVkIHdoZW4gd2Ugc2F2ZSBhIG5ldyB0YXNrLlxuICAgICAqIEFkZHMgbmV3IHRhc2sgdG8gdGhlIGN1cnJlbnQgdGFza3MgbGlzdC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjb250ZW50c1NhdmVkKCkge1xuICAgICAgICBsZXQgdGFza1ZhbHVlcyA9IG1vZGFsLmVsZW1lbnRzLnZhbHVlcztcbiAgICAgICAgaWYodGFza1ZhbHVlcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxldCBzZXNzaW9uSUQgPSBnZXRMYXRlc3RTZXNzaW9uSUQoKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRhc2tWYWx1ZXMpO1xuICAgICAgICAgICAgbGV0IG5ld1Rhc2sgPSBuZXcgVGFzayhzZXNzaW9uSUQsIHRhc2tWYWx1ZXMudGFza05hbWUsIHRhc2tWYWx1ZXMuZGVzY3JpcHRpb24sIHBhcnNlSW50KHRhc2tWYWx1ZXMucG9tb3NSZXF1aXJlZCkpO1xuICAgICAgICAgICAgcmVuZGVyVGFza0ludG9UYXNrTGlzdChuZXdUYXNrKTtcbiAgICAgICAgICAgIGN1cnJlbnRQb21vU2Vzc2lvbi5hZGRUYXNrKG5ld1Rhc2spO1xuICAgICAgICAgICAgc3RvcmVQb21vU2Vzc2lvbihjdXJyZW50UG9tb1Nlc3Npb24pO1xuXG4gICAgICAgICAgICByZXNldElucHV0cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGlucHV0cyBhbmQgcmVzZXRzIHN0eWxlXG4gICAgICovXG4gICAgZnVuY3Rpb24gcmVzZXRJbnB1dHMoKSB7XG4gICAgICAgIGNvbnN0IHRhc2tOYW1lID0gbW9kYWwuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZChcInRhc2stbmFtZVwiKS5lbGVtZW50cy53cmFwcGVyO1xuICAgICAgICBjb25zdCBwb21vc1JlcXVpcmVkID0gbW9kYWwuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZChcInBvbW9zLXJlcXVpcmVkXCIpLmVsZW1lbnRzLndyYXBwZXI7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gbW9kYWwuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpLmVsZW1lbnRzLndyYXBwZXI7XG5cbiAgICAgICAgdGFza05hbWUuaW5uZXJUZXh0ID0gdGFza05hbWUucGxhY2Vob2xkZXI7XG4gICAgICAgIHRhc2tOYW1lLnVzZXJUeXBlZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGFza05hbWUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwb21vLWlucHV0IHBsYWNlaG9sZGVyXCIpO1xuXG4gICAgICAgIHBvbW9zUmVxdWlyZWQuaW5uZXJUZXh0ID0gcG9tb3NSZXF1aXJlZC5wbGFjZWhvbGRlcjtcbiAgICAgICAgcG9tb3NSZXF1aXJlZC51c2VyVHlwZWQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHBvbW9zUmVxdWlyZWQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwb21vLWlucHV0IHBsYWNlaG9sZGVyXCIpO1xuXG4gICAgICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGRlc2NyaXB0aW9uLnBsYWNlaG9sZGVyO1xuICAgICAgICBkZXNjcmlwdGlvbi51c2VyVHlwZWQgPSB1bmRlZmluZWQ7XG4gICAgICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicG9tby1pbnB1dCBwbGFjZWhvbGRlclwiKTtcblxuICAgICAgICBtb2RhbC5lbGVtZW50cy52YWx1ZXMgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTaG93cyBhIG5ldyB0YXNrIG9udG8gdGhlIGRpc3BsYXlcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzdGFydE5ld1Rhc2soKSB7XG4gICAgICAgIGxldCB0YXNrTGlzdEZpcnN0Q2hpbGQgPSB0YXNrTGlzdEhUTUwuY2hpbGROb2Rlc1swXTtcbiAgICAgICAgbGV0IG5leHRUYXNrID0gY3VycmVudFBvbW9TZXNzaW9uLmdldE5leHRUYXNrKCk7XG4gICAgICAgIGlmIChuZXh0VGFzayA9PT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gY29tcGxldGUgdGhlIHNlc3Npb25cbiAgICAgICAgICAgIGN1cnJlbnRQb21vU2Vzc2lvbi5tb2RlID0gUE9NT19TRVNTSU9OX01PREVTLkNPTVBMRVRFO1xuICAgICAgICAgICAgc3RvcmVQb21vU2Vzc2lvbihjdXJyZW50UG9tb1Nlc3Npb24pO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID1cIi4vaGlzdG9yeS5odG1sXCI7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY3VycmVudFRhc2tUb0JlQWRkZWQgPSBgPHBvbW8tdGFzayBkZXNjcmlwdGlvbj1cIiR7bmV4dFRhc2suZGVzY3JpcHRpb259XCIgcG9tb3NVc2VkPVwiJHtuZXh0VGFzay5wb21vc1VzZWR9XCIgcG9tb3NSZXF1aXJlZD0ke25leHRUYXNrLnBvbW9zUmVxdWlyZWR9PiR7bmV4dFRhc2sudGl0bGV9PC9wb21vLXRhc2s+YDtcbiAgICAgICAgY3VycmVudFRhc2tIVE1MLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBjdXJyZW50VGFza1RvQmVBZGRlZCk7XG4gICAgICAgIHRhc2tMaXN0SFRNTC5yZW1vdmVDaGlsZCh0YXNrTGlzdEhUTUwuY2hpbGROb2Rlc1swXSk7XG4gICAgICAgIGxldCBlbGVtZW50ID0gY3VycmVudFRhc2tIVE1MLmNoaWxkTm9kZXNbY3VycmVudFRhc2tIVE1MLmNoaWxkTm9kZXMubGVuZ3RoIC0gMV07XG4gICAgICAgIGVsZW1lbnQuc2V0RmluaXNoVGFza0NhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgICAgIHJlbW92ZUNvbXBsZXRlZFRhc2tzKCk7XG4gICAgICAgICAgICBzdGFydE5ld1Rhc2soKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGVsZW1lbnQuc2V0RGVsZXRlVGFza0NhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgICAgIGRlbGV0ZVRhc2tCeUlkKG5leHRUYXNrLmlkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGVsZW1lbnQudGFzayA9IG5leHRUYXNrO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmVtb3ZlIGNvbXBsZXRlZCB0YXNrcyBmcm9tIGRpc3BsYXkgYW5kIHVwZGF0ZSB0aGUgY3VycmVudCBwb21vIHNlc3Npb25cbiAgICAgKi9cbiAgICBmdW5jdGlvbiByZW1vdmVDb21wbGV0ZWRUYXNrcygpIHtcbiAgICAgICAgbGV0IGNvbXBsZXRlZElkcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBub2RlIG9mIGN1cnJlbnRUYXNrSFRNTC5jaGlsZE5vZGVzKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5jb21wbGV0ZWQpIHtcbiAgICAgICAgICAgICAgICBjb21wbGV0ZWRJZHMucHVzaChub2RlLnRhc2suaWQpO1xuICAgICAgICAgICAgICAgIG5vZGUuaGlkZSgpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGFza0hUTUwucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IG5vZGUgb2YgdGFza0xpc3RIVE1MLmNoaWxkTm9kZXMpIHtcbiAgICAgICAgICAgIGlmIChub2RlLmNvbXBsZXRlZCkge1xuICAgICAgICAgICAgICAgIGNvbXBsZXRlZElkcy5wdXNoKG5vZGUudGFzay5pZCk7XG4gICAgICAgICAgICAgICAgbm9kZS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tMaXN0SFRNTC5yZW1vdmVDaGlsZChub2RlKTtcbiAgICAgICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbXBsZXRlZElkcy5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgICAgICAgY3VycmVudFBvbW9TZXNzaW9uLmNvbXBsZXRlVGFzayhpZCk7XG4gICAgICAgIH0pO1xuICAgICAgICBzdG9yZVBvbW9TZXNzaW9uKGN1cnJlbnRQb21vU2Vzc2lvbik7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVUYXNrQnlJZChpZCkge1xuICAgICAgICAvLyBzZWFyY2ggY3VycmVudCB0YXNrIGxpc3QgYW5kIHRhc2sgbGlzdHMgZm9yIHRoaXMgaWQgYW5kIHJlbW92ZSBpdCBmcm9tIGRpc3BsYXkgYW5kIHRoZSBwb21vIHNlc3Npb25cbiAgICAgICAgbGV0IGN1cnJlbnRUYXNrRWxlbWVudExpc3QgPSBjdXJyZW50VGFza0hUTUwuY2hpbGROb2RlcztcbiAgICAgICAgaWYgKGN1cnJlbnRUYXNrRWxlbWVudExpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICBsZXQgdGFzayA9IGN1cnJlbnRUYXNrRWxlbWVudExpc3RbY3VycmVudFRhc2tFbGVtZW50TGlzdC5sZW5ndGggLSAxXS50YXNrO1xuICAgICAgICAgICAgaWYgKHRhc2suaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgdGFzaz9cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFBvbW9TZXNzaW9uLmRlbGV0ZVRhc2sodGFzayk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUYXNrSFRNTC5yZW1vdmVDaGlsZChjdXJyZW50VGFza0hUTUwuY2hpbGROb2Rlc1tjdXJyZW50VGFza0VsZW1lbnRMaXN0Lmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnROZXdUYXNrKCk7ICAgICBcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVQb21vU2Vzc2lvbihjdXJyZW50UG9tb1Nlc3Npb24pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0YXNrTGlzdEhUTUwuY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiB0YXNrTGlzdEhUTUwuY2hpbGROb2Rlcykge1xuICAgICAgICAgICAgICAgIGxldCB0YXNrID0gbm9kZS50YXNrO1xuICAgICAgICAgICAgICAgIGlmICh0YXNrLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyB0YXNrP1wiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBvbW9TZXNzaW9uLmRlbGV0ZVRhc2sodGFzayk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrTGlzdEhUTUwucmVtb3ZlQ2hpbGQodGFza0xpc3RIVE1MLmNoaWxkTm9kZXNbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVQb21vU2Vzc2lvbihjdXJyZW50UG9tb1Nlc3Npb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIGFsbCB0YXNrcyBmcm9tIHN0b3JhZ2UgZm9yIHRoZSBjdXJyZW50IHNlc3Npb24gYW5kIHJlbmRlciB0aGVtXG4gICAgICovXG4gICAgZnVuY3Rpb24gbG9hZFRhc2tzKCkge1xuICAgICAgICBsZXQgaWQgPSBnZXRMYXRlc3RTZXNzaW9uSUQoKTtcbiAgICAgICAgbGV0IGFsbFRhc2tzID0gW107XG4gICAgICAgIGlmIChpZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgbGV0IHRhc2tzID0gY3VycmVudFBvbW9TZXNzaW9uLmFsbFRhc2tzO1xuICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyh0YXNrcykuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2spO1xuICAgICAgICAgICAgICAgIGlmICh0YXNrLnNlc3Npb25JRCA9PT0gaWQgJiYgIXRhc2suY29tcGxldGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsbFRhc2tzLnB1c2godGFzayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhbGxUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVuZGVyVGFza0ludG9UYXNrTGlzdCh0YXNrKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IG5vZGUgb2YgdGFza0xpc3RIVE1MLmNoaWxkTm9kZXMpIHtcbiAgICAgICAgICAgIG5vZGUuc2V0RmluaXNoVGFza0NhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICByZW1vdmVDb21wbGV0ZWRUYXNrcygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59KTsiXSwic291cmNlUm9vdCI6IiJ9