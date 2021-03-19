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

/***/ "./source/assets/scripts/database/stats.js":
/*!*************************************************!*\
  !*** ./source/assets/scripts/database/stats.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PomoStats": () => (/* binding */ PomoStats)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./source/assets/scripts/database/index.js");
/* harmony import */ var _database_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../database/session */ "./source/assets/scripts/database/session.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var PomoStats = function PomoStats(date) {
  var _this = this;

  _classCallCheck(this, PomoStats);

  this.date = date;
  this.tasks = {};
  this.greenTasks = 0;
  this.yellowTasks = 0;
  this.redTasks = 0;
  var id = (0,_database_session__WEBPACK_IMPORTED_MODULE_1__.getLatestSessionID)();
  var counter = 0;

  var _loop = function _loop() {
    var session = (0,_database_session__WEBPACK_IMPORTED_MODULE_1__.getPomoSession)(id);

    if (session.mode !== _database_session__WEBPACK_IMPORTED_MODULE_1__.POMO_SESSION_MODES.COMPLETE) {
      id -= 1;
      return "continue";
    }

    var session_object_date = session.startDate;

    if (_this.date.getMonth() === session_object_date.getMonth() && _this.date.getDate() === session_object_date.getDate() && _this.date.getYear() === session_object_date.getYear()) {
      Object.keys(session.allTasks).forEach(function (key) {
        return _this.tasks[counter++] = session.allTasks[key];
      });
    } else if (_this.date.getMonth() > session_object_date.getMonth() || _this.date.getDate() > session_object_date.getDate() || _this.date.getYear() > session_object_date.getYear()) {
      return "break";
    }

    id -= 1;
  };

  while (id != 0) {
    var _ret = _loop();

    if (_ret === "continue") continue;
    if (_ret === "break") break;
  }

  for (var taskID in this.tasks) {
    if (this.tasks[taskID].completed) {
      if (this.tasks[taskID].pomosUsed <= this.tasks[taskID].pomosRequired) {
        this.greenTasks += 1;
      } else this.yellowTasks += 1;
    } else this.redTasks += 1;
  }
};

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

/***/ "./source/assets/scripts/history-graph.js":
/*!************************************************!*\
  !*** ./source/assets/scripts/history-graph.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderEfficiencyData": () => (/* binding */ renderEfficiencyData),
/* harmony export */   "renderEfficiencyWeeklyData": () => (/* binding */ renderEfficiencyWeeklyData)
/* harmony export */ });
/**
 * Renders a bar chart onto the given chart element showing the daily data
 * 
 * @param {HTMLCanvasElement} chartelement - the element to render chart data on
 * @param {{complete: number, overtime: number, incomplete: number}} data
 */
function renderEfficiencyData(chartelement, data) {
  var ctx = chartelement.getContext("2d");
  var labels = ["Tasks Completed on Time", "Tasks Completed over Time", "Tasks Incomplete"];
  var colors = ["#22DD9A", "#F9C644", "#FA7F7F"];
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [{
        label: "# of Tasks",
        data: [data.complete, data.overtime, data.incomplete],
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 1
      }]
    },
    options: {
      legend: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}
/**
 * Renders a line chart onto the chart element of weekly data
 * 
 * @param {HTMLCanvasElement} chartelement - the element to render chart data on
 * @param {{complete: number[], overtime: number[], incomplete: number[]}} weeklyData
 * @param {string[]} dates
 */

function renderEfficiencyWeeklyData(chartelement, weeklyData, dates) {
  var ctx = chartelement.getContext("2d");
  var labels = ["Tasks Completed on Time", "Tasks Completed over Time", "Tasks Incomplete"];
  var colors = ["#22DD9A", "#F9C644", "#FA7F7F"];
  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: dates,
      datasets: [{
        label: labels[0],
        borderColor: "#22DD9A",
        backgroundColor: "transparent",
        data: weeklyData.complete
      }, {
        label: labels[1],
        borderColor: "#F9C644",
        backgroundColor: "transparent",
        data: weeklyData.overtime
      }, {
        label: labels[2],
        borderColor: "#FA7F7F",
        backgroundColor: "transparent",
        data: weeklyData.incomplete
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
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
/*!******************************************!*\
  !*** ./source/assets/scripts/history.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./database */ "./source/assets/scripts/database/index.js");
/* harmony import */ var _database_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./database/session */ "./source/assets/scripts/database/session.js");
/* harmony import */ var _database_stats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./database/stats */ "./source/assets/scripts/database/stats.js");
/* harmony import */ var _history_graph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./history-graph */ "./source/assets/scripts/history-graph.js");
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/theme */ "./source/assets/scripts/utils/theme.js");





window.addEventListener("DOMContentLoaded", function () {
  (0,_utils_theme__WEBPACK_IMPORTED_MODULE_4__.selectAndSetTheme)(); // TODO: load data from local storage

  (0,_database__WEBPACK_IMPORTED_MODULE_0__.initializeDatabase)();
  var stats = new _database_stats__WEBPACK_IMPORTED_MODULE_2__.PomoStats(new Date());
  var taskList = document.getElementById("taskList");

  for (var taskID in stats.tasks) {
    var task = stats.tasks[taskID];
    var currentTaskElement = "<pomo-task description =\"".concat(task.description, "\" pomosUsed=\"").concat(task.pomosUsed, "\", pomosRequired =\"").concat(task.pomosRequired, "\">").concat(task.title, "</pomo-task>");
    taskList.insertAdjacentHTML("beforeend", currentTaskElement);
    var element = taskList.childNodes[taskList.childNodes.length - 1];
    element.task = task;
    element.shadowRoot.childNodes[0].childNodes[0].childNodes[3].style.display = "none";
    element.shadowRoot.childNodes[0].childNodes[0].childNodes[2].style.display = "none";

    if (task.completed) {
      if (task.pomosUsed <= task.pomosRequired) {
        element.shadowRoot.childNodes[0].childNodes[0].childNodes[1].childNodes[0].setAttribute("class", "goodTimingTask");
      } else element.shadowRoot.childNodes[0].childNodes[0].childNodes[1].childNodes[0].setAttribute("class", "badTimingTask");
    } else element.shadowRoot.childNodes[0].childNodes[0].childNodes[1].childNodes[0].setAttribute("class", "incompleteTask");
  }

  var data = {
    complete: stats.greenTasks,
    overtime: stats.yellowTasks,
    incomplete: stats.redTasks
  };
  var canvas = document.getElementById("efficiency-chart");
  (0,_history_graph__WEBPACK_IMPORTED_MODULE_3__.renderEfficiencyData)(canvas, data);
  var canvas2 = document.getElementById("efficiency-weekly-chart");
  var sevenDates = datesForSevenDays();
  sevenDates.reverse();
  var datesForGraph = [];
  var weekStats = [];

  for (var dateID in sevenDates) {
    datesForGraph.push(new Date(sevenDates[dateID]).getMonth() + "/" + new Date(sevenDates[dateID]).getDate());
    weekStats.push(new _database_stats__WEBPACK_IMPORTED_MODULE_2__.PomoStats(new Date(sevenDates[dateID])));
  }

  var completeWeek = [];
  var overTimeWeek = [];
  var incompleteWeek = [];

  for (var statID in weekStats) {
    completeWeek.push(weekStats[statID].greenTasks);
    overTimeWeek.push(weekStats[statID].yellowTasks);
    incompleteWeek.push(weekStats[statID].redTasks);
  }

  var weeklyData = {
    complete: completeWeek,
    overtime: overTimeWeek,
    incomplete: incompleteWeek
  };
  (0,_history_graph__WEBPACK_IMPORTED_MODULE_3__.renderEfficiencyWeeklyData)(canvas2, weeklyData, datesForGraph);
});

function datesForSevenDays() {
  var dates = [];

  for (var i = 0; i < 7; i++) {
    var d = new Date();
    d.setDate(d.getDate() - i);
    dates.push(d);
  }

  return dates;
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jc2UxMTAtdzIxLWdyb3VwMjEvLi9zb3VyY2UvYXNzZXRzL3NjcmlwdHMvZGF0YWJhc2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3NlMTEwLXcyMS1ncm91cDIxLy4vc291cmNlL2Fzc2V0cy9zY3JpcHRzL2RhdGFiYXNlL3Nlc3Npb24uanMiLCJ3ZWJwYWNrOi8vY3NlMTEwLXcyMS1ncm91cDIxLy4vc291cmNlL2Fzc2V0cy9zY3JpcHRzL2RhdGFiYXNlL3N0YXRzLmpzIiwid2VicGFjazovL2NzZTExMC13MjEtZ3JvdXAyMS8uL3NvdXJjZS9hc3NldHMvc2NyaXB0cy9kYXRhYmFzZS90YXNrLmpzIiwid2VicGFjazovL2NzZTExMC13MjEtZ3JvdXAyMS8uL3NvdXJjZS9hc3NldHMvc2NyaXB0cy9oaXN0b3J5LWdyYXBoLmpzIiwid2VicGFjazovL2NzZTExMC13MjEtZ3JvdXAyMS8uL3NvdXJjZS9hc3NldHMvc2NyaXB0cy91dGlscy90aGVtZS5qcyIsIndlYnBhY2s6Ly9jc2UxMTAtdzIxLWdyb3VwMjEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY3NlMTEwLXcyMS1ncm91cDIxL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jc2UxMTAtdzIxLWdyb3VwMjEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jc2UxMTAtdzIxLWdyb3VwMjEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jc2UxMTAtdzIxLWdyb3VwMjEvLi9zb3VyY2UvYXNzZXRzL3NjcmlwdHMvaGlzdG9yeS5qcyJdLCJuYW1lcyI6WyJpbml0aWFsaXplRGF0YWJhc2UiLCJuZWVkVG9Jbml0aWFsaXplIiwiZ2V0T2JqZWN0IiwiUE9NT19UQVNLX01BUCIsIlBPTU9fVEFTS19JTkRFWCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJQT01PX1NFU1NJT05fSUQiLCJMQVRFU1RfUE9NT19TRVNTSU9OX1NUQVRVUyIsIlBPTU9fU0VTU0lPTl9NQVAiLCJzdG9yZU9iamVjdCIsInJlc2V0RGF0YWJhc2UiLCJrZXkiLCJvYmplY3QiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInBhcnNlIiwiUE9NT19TRVNTSU9OX01PREVTIiwiSU5BQ1RJVkUiLCJCUkVBSyIsIkxPTkdfQlJFQUsiLCJBQ1RJVkUiLCJDT01QTEVURSIsIlBvbW9TZXNzaW9uIiwiaWQiLCJhbGxUYXNrcyIsIm1vZGUiLCJ0aW1lIiwicG9tb3NFbGFwc2VkIiwic3RhcnREYXRlIiwiRGF0ZSIsImFsbEluUHJvZ3Jlc3NUYXNrcyIsImZpbHRlciIsInRhc2siLCJjb21wbGV0ZWQiLCJsZW5ndGgiLCJzdG9yZVRhc2siLCJwdXNoIiwiZGVsZXRlVGFza0J5VGFza0lEIiwiaSIsInN0b3JlZFRhc2siLCJzcGxpY2UiLCJwb21vc1VzZWQiLCJsZWZ0IiwiZm9yRWFjaCIsIk1hdGgiLCJtYXgiLCJwb21vc1JlcXVpcmVkIiwic2Vzc2lvbl9vYmoiLCJtYXAiLCJ0YXNrT2JqIiwidCIsIlRhc2siLCJwYXJzZVRhc2tGcm9tT2JqIiwic2VyaWFsaXplSW50b09iaiIsImdldFRpbWUiLCJnZXRQb21vU2Vzc2lvbiIsImFsbFNlc3Npb25zIiwicCIsInBhcnNlU2Vzc2lvbkZyb21PYmoiLCJzdG9yZVBvbW9TZXNzaW9uIiwic2Vzc2lvbiIsImdldE5ld1Nlc3Npb25JRCIsInByZXZJRCIsInBhcnNlSW50Iiwic2V0Q3VycmVudFNlc3Npb25TdGF0dXMiLCJzdGF0dXMiLCJnZXRMYXRlc3RTZXNzaW9uSUQiLCJ0aGVyZUlzVW5maW5pc2hlZFNlc3Npb24iLCJzZXNzaW9uSUQiLCJjdXJyZW50UG9tb1Nlc3Npb24iLCJjb250aW51ZUFjdGl2ZVNlc3Npb24iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIlBvbW9TdGF0cyIsImRhdGUiLCJ0YXNrcyIsImdyZWVuVGFza3MiLCJ5ZWxsb3dUYXNrcyIsInJlZFRhc2tzIiwiY291bnRlciIsInNlc3Npb25fb2JqZWN0X2RhdGUiLCJnZXRNb250aCIsImdldERhdGUiLCJnZXRZZWFyIiwiT2JqZWN0Iiwia2V5cyIsInRhc2tJRCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ0YXNrX29iaiIsInRhc2tfbWFwIiwib2JqIiwiZ2V0VGFzayIsImdldEFsbFRhc2tzIiwicGFyc2VkX3Rhc2tfbWFwIiwiYXJlVGhlcmVVbmZpbmlzaGVkVGFza3NGcm9tTGFzdFNlc3Npb24iLCJvbGRTZXNzaW9uSUQiLCJjdXJyZW50VGFzayIsInJlbmRlckVmZmljaWVuY3lEYXRhIiwiY2hhcnRlbGVtZW50IiwiZGF0YSIsImN0eCIsImdldENvbnRleHQiLCJsYWJlbHMiLCJjb2xvcnMiLCJteUNoYXJ0IiwiQ2hhcnQiLCJ0eXBlIiwiZGF0YXNldHMiLCJsYWJlbCIsImNvbXBsZXRlIiwib3ZlcnRpbWUiLCJpbmNvbXBsZXRlIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsIm9wdGlvbnMiLCJsZWdlbmQiLCJzY2FsZXMiLCJ5QXhlcyIsInRpY2tzIiwiYmVnaW5BdFplcm8iLCJyZW5kZXJFZmZpY2llbmN5V2Vla2x5RGF0YSIsIndlZWtseURhdGEiLCJkYXRlcyIsInNlbGVjdEFuZFNldFRoZW1lIiwidG9kYXkiLCJudW1CR3MiLCJkIiwiZ2V0RGF5Iiwic2VlZCIsImZsb29yIiwicmFuZG9tIiwidGltZVBlcmlvZCIsImdldFRoZW1lTW9kZSIsImVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJUSEVNRV9NT0RFUyIsIkRBWSIsIk5JR0hUIiwiZ2V0SG91cnMiLCJhZGRFdmVudExpc3RlbmVyIiwic3RhdHMiLCJ0YXNrTGlzdCIsImN1cnJlbnRUYXNrRWxlbWVudCIsImluc2VydEFkamFjZW50SFRNTCIsImNoaWxkTm9kZXMiLCJzaGFkb3dSb290IiwiZGlzcGxheSIsInNldEF0dHJpYnV0ZSIsImNhbnZhcyIsImNhbnZhczIiLCJzZXZlbkRhdGVzIiwiZGF0ZXNGb3JTZXZlbkRheXMiLCJyZXZlcnNlIiwiZGF0ZXNGb3JHcmFwaCIsIndlZWtTdGF0cyIsImRhdGVJRCIsImNvbXBsZXRlV2VlayIsIm92ZXJUaW1lV2VlayIsImluY29tcGxldGVXZWVrIiwic3RhdElEIiwic2V0RGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxTQUFTQSxrQkFBVCxHQUE4QjtBQUNqQztBQUNBLE1BQUlDLGdCQUFnQixHQUFHLEtBQXZCOztBQUNBLE1BQUlDLFNBQVMsQ0FBQ0MsZ0RBQUQsQ0FBVCxLQUE2QixJQUFqQyxFQUF1QztBQUNuQ0Ysb0JBQWdCLEdBQUcsSUFBbkI7QUFDSDs7QUFDRCxNQUFJQyxTQUFTLENBQUNFLGtEQUFELENBQVQsS0FBK0IsSUFBbkMsRUFBeUM7QUFDckNILG9CQUFnQixHQUFHLElBQW5CO0FBQ0g7O0FBQ0QsTUFBSSxDQUFDSSxZQUFZLENBQUNDLE9BQWIsQ0FBcUJDLHFEQUFyQixDQUFELEtBQTJDLElBQS9DLEVBQXFEO0FBQ2pETixvQkFBZ0IsR0FBRyxJQUFuQjtBQUNIOztBQUNELE1BQUksQ0FBQ0ksWUFBWSxDQUFDQyxPQUFiLENBQXFCRSxnRUFBckIsQ0FBRCxLQUFzRCxJQUExRCxFQUFnRTtBQUM1RFAsb0JBQWdCLEdBQUcsSUFBbkI7QUFDSDs7QUFDRCxNQUFJQyxTQUFTLENBQUNPLHNEQUFELENBQVQsS0FBZ0MsSUFBcEMsRUFBMEM7QUFDdENSLG9CQUFnQixHQUFHLElBQW5CO0FBQ0gsR0FqQmdDLENBbUJqQzs7O0FBQ0EsTUFBSUEsZ0JBQUosRUFBc0I7QUFDbEJTLGVBQVcsQ0FBQ1AsZ0RBQUQsRUFBZ0IsRUFBaEIsQ0FBWDtBQUNBTyxlQUFXLENBQUNOLGtEQUFELEVBQWtCLENBQWxCLENBQVg7QUFDQU0sZUFBVyxDQUFDRixnRUFBRCxFQUE2QixVQUE3QixDQUFYO0FB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RCxDQUFULENBQWtCdkYsV0FBcEM7QUFDQXNGLGtCQUFjLENBQUMvSCxJQUFmLENBQW9CMkgsU0FBUyxDQUFDSyxNQUFELENBQVQsQ0FBa0J0RixRQUF0QztBQUNIOztBQUNELE1BQUk2QyxVQUFVLEdBQUc7QUFDYmIsWUFBUSxFQUFFbUQsWUFERztBQUVibEQsWUFBUSxFQUFFbUQsWUFGRztBQUdibEQsY0FBVSxFQUFFbUQ7QUFIQyxHQUFqQjtBQUtBekMsNEVBQTBCLENBQUNnQyxPQUFELEVBQVUvQixVQUFWLEVBQXNCbUMsYUFBdEIsQ0FBMUI7QUFDSCxDQXJERDs7QUF1REEsU0FBU0YsaUJBQVQsR0FBNkI7QUFDekIsTUFBSWhDLEtBQUssR0FBRyxFQUFaOztBQUNBLE9BQUssSUFBSXRGLENBQUMsR0FBQyxDQUFYLEVBQWNBLENBQUMsR0FBQyxDQUFoQixFQUFtQkEsQ0FBQyxFQUFwQixFQUF3QjtBQUNwQixRQUFJMEYsQ0FBQyxHQUFHLElBQUluRyxJQUFKLEVBQVI7QUFDQW1HLEtBQUMsQ0FBQ3FDLE9BQUYsQ0FBVXJDLENBQUMsQ0FBQzlDLE9BQUYsS0FBYzVDLENBQXhCO0FBQ0FzRixTQUFLLENBQUN4RixJQUFOLENBQVc0RixDQUFYO0FBQ0g7O0FBQ0QsU0FBT0osS0FBUDtBQUNILEMiLCJmaWxlIjoiaGlzdG9yeS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQT01PX1RBU0tfSU5ERVgsIFBPTU9fVEFTS19NQVAgfSBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgeyBQT01PX1NFU1NJT05fSUQsIExBVEVTVF9QT01PX1NFU1NJT05fU1RBVFVTLCBQT01PX1NFU1NJT05fTUFQIH0gZnJvbSBcIi4vc2Vzc2lvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZURhdGFiYXNlKCkge1xuICAgIC8vIGNoZWNrIGlmIHdlIG5lZWQgdG8gaW5pdGlhbGl6ZVxuICAgIGxldCBuZWVkVG9Jbml0aWFsaXplID0gZmFsc2U7XG4gICAgaWYgKGdldE9iamVjdChQT01PX1RBU0tfTUFQKSA9PT0gbnVsbCkge1xuICAgICAgICBuZWVkVG9Jbml0aWFsaXplID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGdldE9iamVjdChQT01PX1RBU0tfSU5ERVgpID09PSBudWxsKSB7XG4gICAgICAgIG5lZWRUb0luaXRpYWxpemUgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFBPTU9fU0VTU0lPTl9JRCkgPT09IG51bGwpIHtcbiAgICAgICAgbmVlZFRvSW5pdGlhbGl6ZSA9IHRydWU7XG4gICAgfVxuICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oTEFURVNUX1BPTU9fU0VTU0lPTl9TVEFUVVMpID09PSBudWxsKSB7XG4gICAgICAgIG5lZWRUb0luaXRpYWxpemUgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoZ2V0T2JqZWN0KFBPTU9fU0VTU0lPTl9NQVApID09PSBudWxsKSB7XG4gICAgICAgIG5lZWRUb0luaXRpYWxpemUgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIHRoZW4gaW5pdGlhbGl6ZVxuICAgIGlmIChuZWVkVG9Jbml0aWFsaXplKSB7XG4gICAgICAgIHN0b3JlT2JqZWN0KFBPTU9fVEFTS19NQVAsIHt9KTtcbiAgICAgICAgc3RvcmVPYmplY3QoUE9NT19UQVNLX0lOREVYLCAwKTtcbiAgICAgICAgc3RvcmVPYmplY3QoTEFURVNUX1BPTU9fU0VTU0lPTl9TVEFUVVMsIFwiY29tcGxldGVcIik7XG4gICAgICAgIHN0b3JlT2JqZWN0KFBPTU9fU0VTU0lPTl9JRCwgMCk7XG4gICAgICAgIHN0b3JlT2JqZWN0KFBPTU9fU0VTU0lPTl9NQVAsIHt9KTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gcmVzZXREYXRhYmFzZSgpIHtcbiAgICBkZWxldGUgbG9jYWxTdG9yYWdlW1BPTU9fVEFTS19NQVBdO1xuICAgIGRlbGV0ZSBsb2NhbFN0b3JhZ2VbUE9NT19UQVNLX0lOREVYXTtcbiAgICBkZWxldGUgbG9jYWxTdG9yYWdlW0xBVEVTVF9QT01PX1NFU1NJT05fU1RBVFVTXTtcbiAgICBkZWxldGUgbG9jYWxTdG9yYWdlW1BPTU9fU0VTU0lPTl9JRF07XG4gICAgZGVsZXRlIGxvY2FsU3RvcmFnZVtQT01PX1NFU1NJT05fTUFQXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JlT2JqZWN0KGtleSwgb2JqZWN0KSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShvYmplY3QpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRPYmplY3Qoa2V5KSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSk7XG59IiwiLyoqXG4gKiBUaGlzIGZpbGUgaXMgcmVsYXRlZCB0byBmaW5kaW5nIHBvbW8gc2Vzc2lvbnNcbiAqL1xuaW1wb3J0IHsgZ2V0T2JqZWN0LCBzdG9yZU9iamVjdCB9IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgeyBkZWxldGVUYXNrQnlUYXNrSUQsIHN0b3JlVGFzaywgVGFzayB9IGZyb20gXCIuL3Rhc2tcIjtcblxuXG5leHBvcnQgY29uc3QgUE9NT19TRVNTSU9OX0lEID0gXCJwb21vX3Nlc3Npb25faWRcIjtcbmV4cG9ydCBjb25zdCBMQVRFU1RfUE9NT19TRVNTSU9OX1NUQVRVUyA9IFwibGF0ZXN0X3BvbW9fc2Vzc2lvbl9zdGF0dXNcIjtcbmV4cG9ydCBjb25zdCBQT01PX1NFU1NJT05fTUFQID0gXCJwb21vX3Nlc3Npb25fbWFwXCI7XG5cbi8qKiB0aGUgZGlmZmVyZW50IHBvbW8gc2Vzc2lvbiBtb2RlcyBhcyBjb25zdGFudHMgKi9cbmV4cG9ydCBjb25zdCBQT01PX1NFU1NJT05fTU9ERVMgPSB7XG4gIC8qKiB3aGVuIHRoZSB1c2VyIGlzIGluIHRoZSBpbnRlcmZhY2Ugb2YgY3JlYXRpbmcgYSBuZXcgdGltZXIgYW5kIGhhcyBub3Qgc3RhcnRlZCB0aGVpciBuZXcgc2Vzc2lvbiB5ZXQgKi9cbiAgSU5BQ1RJVkU6IFwiaW5hY3RpdmVcIixcbiAgLyoqIHdoZW4gcnVubmluZyB0aGUgYnJlYWsgdGltZXIgKi9cbiAgQlJFQUs6IFwiYnJlYWtcIixcbiAgLyoqIHdoZW4gcnVubmluZyB0aGUgbG9uZ2VyIGJyZWFrIHRpbWVyICovXG4gIExPTkdfQlJFQUs6IFwibG9uZ2JyZWFrXCIsXG4gIC8qKiB3aGVuIHJ1bm5pbmcgdGhlIGFjdGl2ZSBwb21vIHdvcmsgdGltZSAqL1xuICBBQ1RJVkU6IFwiYWN0aXZlXCIsXG4gIC8qKiB3aGVuIHRoZSB1c2VyIG1hcmtzIHRoaXMgcG9tbyBzZXNzaW9uIGFzIGNvbXBsZXRlLCByZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGFza3MgYXJlIGNvbXBsZXRlZCBvciBub3QgKi9cbiAgQ09NUExFVEU6IFwiY29tcGxldGVcIixcbn07XG5cbmV4cG9ydCBjbGFzcyBQb21vU2Vzc2lvbiB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgUG9tbyBTZXNzaW9uIG9iamVjdFxuICAgKiBAcGFyYW0ge251bWJlcn0gaWQgLSBpZCBvZiB0aGlzIHNlc3Npb25cbiAgICovXG4gIGNvbnN0cnVjdG9yKGlkKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIC8qKiBAdHlwZSB7VGFza1tdfSAtIGEgbGlzdCBvZiBhbGwgdGFza3MgYXNzb2NpYXRlZCB3aXRoIHRoaXMgc2Vzc2lvbiAqL1xuICAgIHRoaXMuYWxsVGFza3MgPSBbXTtcbiAgICAvKiogQHR5cGUge3N0cmluZ30gLSB0aGUgY3VycmVudCBtb2RlIG9mIHRoZSBwb21vIHNlc3Npb24gKi9cbiAgICB0aGlzLm1vZGUgPSBQT01PX1NFU1NJT05fTU9ERVMuSU5BQ1RJVkU7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9IC0gdGhlIGN1cnJlbnQgdGltZSBvZiB0aGUgcG9tbyBzZXNzaW9uICovXG4gICAgdGhpcy50aW1lID0gMDtcblxuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAtIG51bWJlciBvZiBwb21vcyBlbGFwc2VkIHN1Y2Nlc2Z1bGx5IGZvciB0aGlzIHBvbW8gc2Vzc2lvbiAqL1xuICAgIHRoaXMucG9tb3NFbGFwc2VkID0gMDtcblxuICAgIHRoaXMuc3RhcnREYXRlID0gbmV3IERhdGUoKTtcbiAgfVxuICAvKipcbiAgICogXG4gICAqIEByZXR1cm5zIHtUYXNrIHwgbnVsbCB9IC0gdGhlIGN1cnJlbnQgdGFzayBmb3IgdGhpcyBwb21vIHNlc3Npb24gb3IgbnVsbCBpZiB0aGVyZSBhcmUgbm8gdGFza3MgbGVmdFxuICAgKi9cbiAgY3VycmVudFRhc2soKSB7XG4gICAgbGV0IGFsbEluUHJvZ3Jlc3NUYXNrcyA9IHRoaXMuYWxsVGFza3MuZmlsdGVyKCh0YXNrKSA9PiAhdGFzay5jb21wbGV0ZWQpO1xuICAgIGlmIChhbGxJblByb2dyZXNzVGFza3MubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gYWxsSW5Qcm9ncmVzc1Rhc2tzWzBdO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICAvKipcbiAgICogQWRkcyBhIG5ldyB0YXNrXG4gICAqIEBwYXJhbSB7VGFza30gdGFzayBcbiAgICovXG4gIGFkZFRhc2sodGFzaykge1xuICAgIHN0b3JlVGFzayh0YXNrKTtcbiAgICB0aGlzLmFsbFRhc2tzLnB1c2godGFzayk7XG4gIH1cbiAgLyoqXG4gICAqIERlbGV0ZSBhIHRhc2tcbiAgICogQHBhcmFtIHtUYXNrfSB0YXNrIFxuICAgKi9cbiAgZGVsZXRlVGFzayh0YXNrKSB7XG4gICAgZGVsZXRlVGFza0J5VGFza0lEKHRhc2suaWQpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hbGxUYXNrcy5sZW5ndGg7IGkrKyl7XG4gICAgICBjb25zdCBzdG9yZWRUYXNrID0gdGhpcy5hbGxUYXNrc1tpXTtcbiAgICAgIGlmICh0YXNrLmlkID09PSBzdG9yZWRUYXNrLmlkKSB7XG4gICAgICAgIHRoaXMuYWxsVGFza3Muc3BsaWNlKGksIDEpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbXBsZXRlcyB0aGUgZ2l2ZW4gdGFzayBhc3NvY2lhdGVkIHRvIHRoZSBpZFxuICAgKiBAcGFyYW0ge251bWJlcn0gaWQgXG4gICAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIGNvbXBsZXRlZCwgZmFsc2UgaWYgbm8gdGFzayBmb3VuZFxuICAgKi9cbiAgY29tcGxldGVUYXNrKGlkKSB7XG4gICAgZm9yIChsZXQgdGFzayBvZiB0aGlzLmFsbFRhc2tzKSB7XG4gICAgICBpZiAodGFzay5pZCA9PT0gaWQpIHtcbiAgICAgICAgdGFzay5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBuZXh0IGluY29tcGxldGUgdGFzayBpbiB0aGUgb3JkZXIgb3IgbnVsbCBpZiBhbGwgY29tcGxldGVkXG4gICAqIEByZXR1cm5zIHtUYXNrIHwgbnVsbH1cbiAgICovXG4gIGdldE5leHRUYXNrKCkge1xuICAgIGZvciAoY29uc3QgdGFzayBvZiB0aGlzLmFsbFRhc2tzKSB7XG4gICAgICBpZiAodGFzay5jb21wbGV0ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiB0YXNrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICAvKipcbiAgICogSW5jcmVtZW50IHRoZSBwb21vcyB1c2VkIGZvciBhIHRhc2sgYW5kIGluY3JlbWVudCBwb21vc0VsYXBzZWRcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlkIFxuICAgKi9cbiAgaW5jcmVtZW50VGFza1BvbW9zVXNlZChpZCkge1xuICAgIGZvciAoY29uc3QgdGFzayBvZiB0aGlzLmFsbFRhc2tzKSB7XG4gICAgICBpZiAodGFzay5pZCA9PT0gaWQpIHtcbiAgICAgICAgdGFzay5wb21vc1VzZWQgKz0gMTtcbiAgICAgICAgdGhpcy5wb21vc0VsYXBzZWQgKz0gMTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBcbiAgICogQHJldHVybnMgdHJ1ZSBpZiBzZXNzaW9uIGlzIGluIGJyZWFrIG1vZGUgcmlnaHQgbm93LCBmYWxzZSBvdGhlcndpc2VcbiAgICovXG4gIGlzQnJlYWsoKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZSA9PT0gUE9NT19TRVNTSU9OX01PREVTLkxPTkdfQlJFQUsgfHwgdGhpcy5tb2RlID09PSBQT01PX1NFU1NJT05fTU9ERVMuQlJFQUs7XG4gIH1cblxuICAvKipcbiAgICogVE9ET1xuICAgKi9cbiAgcmVvcmRlclRhc2tzKCkge1xuXG4gIH1cblxuICBnZXRQb21vc0xlZnRJblNlc3Npb24oKSB7XG4gICAgbGV0IGxlZnQgPSAwO1xuICAgIHRoaXMuYWxsVGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgbGVmdCArPSBNYXRoLm1heCh0YXNrLnBvbW9zUmVxdWlyZWQgLSB0YXNrLnBvbW9zVXNlZCwgMCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGxlZnQ7XG4gIH1cbiAgcGFyc2VTZXNzaW9uRnJvbU9iaihzZXNzaW9uX29iaikge1xuICAgIHRoaXMuaWQgPSBzZXNzaW9uX29iai5pZDtcbiAgICB0aGlzLm1vZGUgPSBzZXNzaW9uX29iai5tb2RlO1xuICAgIHRoaXMudGltZSA9IHNlc3Npb25fb2JqLnRpbWU7XG4gICAgdGhpcy5wb21vc0VsYXBzZWQgPSBzZXNzaW9uX29iai5wb21vc0VsYXBzZWQ7XG4gICAgdGhpcy5zdGFydERhdGUgPSBuZXcgRGF0ZShzZXNzaW9uX29iai5zdGFydERhdGUpO1xuICAgIHRoaXMuYWxsVGFza3MgPSBzZXNzaW9uX29iai5hbGxUYXNrcy5tYXAoKHRhc2tPYmopID0+IHtcbiAgICAgIGxldCB0ID0gbmV3IFRhc2soKTtcbiAgICAgIHQgPSB0LnBhcnNlVGFza0Zyb21PYmoodGFza09iaik7XG4gICAgICByZXR1cm4gdDtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBzZXJpYWxpemVJbnRvT2JqKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogdGhpcy5pZCwgYWxsVGFza3M6IHRoaXMuYWxsVGFza3MubWFwKCh0YXNrKSA9PiB0YXNrLnNlcmlhbGl6ZUludG9PYmooKSksIG1vZGU6IHRoaXMubW9kZSwgdGltZTogdGhpcy50aW1lLCBwb21vc0VsYXBzZWQ6IHRoaXMucG9tb3NFbGFwc2VkLCBzdGFydERhdGU6IHRoaXMuc3RhcnREYXRlLmdldFRpbWUoKVxuICAgIH07XG4gIH1cbn1cblxuLyoqXG4gKiBHZXQgYSBwb21vIHNlc3Npb24gb2JqZWN0XG4gKiBAcGFyYW0ge251bWJlcn0gaWQgXG4gKiBAcmV0dXJucyB7UG9tb1Nlc3Npb24gfCBudWxsfSB0aGUgc2Vzc2lvbiBmb3IgdGhpcyBpZCBvciBudWxsIGlmIHRoZXJlIGlzIG5vIHNlc3Npb24gYXNzb2NpYXRlZCB3aXRoIHRoaXMgaWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFBvbW9TZXNzaW9uKGlkKSB7XG4gIGNvbnN0IGFsbFNlc3Npb25zID0gZ2V0T2JqZWN0KFBPTU9fU0VTU0lPTl9NQVApO1xuICBsZXQgcCA9IG5ldyBQb21vU2Vzc2lvbigpO1xuICBpZiAoIWFsbFNlc3Npb25zW2lkXSkgcmV0dXJuIG51bGw7XG4gIHJldHVybiBwLnBhcnNlU2Vzc2lvbkZyb21PYmooYWxsU2Vzc2lvbnNbaWRdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JlUG9tb1Nlc3Npb24oc2Vzc2lvbikge1xuICBjb25zdCBhbGxTZXNzaW9ucyA9IGdldE9iamVjdChQT01PX1NFU1NJT05fTUFQKTtcbiAgYWxsU2Vzc2lvbnNbc2Vzc2lvbi5pZF0gPSBzZXNzaW9uLnNlcmlhbGl6ZUludG9PYmooKTtcbiAgc3RvcmVPYmplY3QoUE9NT19TRVNTSU9OX01BUCwgYWxsU2Vzc2lvbnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmV3U2Vzc2lvbklEKCkge1xuICBsZXQgcHJldklEID0gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oUE9NT19TRVNTSU9OX0lEKSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFBPTU9fU0VTU0lPTl9JRCwgcHJldklEICsgMSk7XG4gIHJldHVybiBwcmV2SUQ7XG59XG5cbi8qKlxuICogU2V0IHRoZSBjdXJyZW50IHNlc3Npb24ncyBzdGF0dXNcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0dXMgLSBjYW4gYmUgXCJjb21wbGV0ZVwiIG9yIFwiaW4tcHJvZ3Jlc3NcIlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0Q3VycmVudFNlc3Npb25TdGF0dXMoc3RhdHVzKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKExBVEVTVF9QT01PX1NFU1NJT05fU1RBVFVTLCBzdGF0dXMpO1xufVxuXG4vKipcbiAqIFdpbGwgcmV0dXJuIHRoZSBzZXNzaW9uIElEIG9mIHRoZSBsYXN0IHNlc3Npb24gaWYgaXQgd2FzIG5vdCBlbmRlZC4gT3RoZXJ3aXNlIGlmIHRoZSBsYXN0IHNlc3Npb24gZG9lcyBub3QgZXhpc3QgXG4gKiBvciB3YXMgZW5kZWQgYWxyZWFkeSwgdGhpcyBmdW5jdGlvbiByZXR1cm5zIG51bGxcbiAqIFxuICogQHJldHVybnMge251bWJlciB8IG51bGx9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMYXRlc3RTZXNzaW9uSUQoKSB7XG4gIGxldCBzdGF0dXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShMQVRFU1RfUE9NT19TRVNTSU9OX1NUQVRVUyk7XG4gIGlmIChzdGF0dXMgPT09IFwiY29tcGxldGVcIikge1xuICAgIHJldHVybiBudWxsO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShQT01PX1NFU1NJT05fSUQpKSAtIDE7XG4gIH1cbn1cblxuLyoqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSB0cnVlIGlmIHRoZXJlIGlzIGEgdW5maW5pc2hlZCBzZXNzaW9uIHRoYXQgd2FzIG5vdCBjb21wbGV0ZWQgb3IgcXVpdHRlZC4gZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0aGVyZUlzVW5maW5pc2hlZFNlc3Npb24oKSB7XG4gIGxldCBzZXNzaW9uSUQgPSBnZXRMYXRlc3RTZXNzaW9uSUQoKTtcbiAgaWYgKHNlc3Npb25JRCA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICBsZXQgY3VycmVudFBvbW9TZXNzaW9uID0gZ2V0UG9tb1Nlc3Npb24oc2Vzc2lvbklEKTtcbiAgaWYgKGN1cnJlbnRQb21vU2Vzc2lvbiAhPT0gbnVsbCAmJiBjdXJyZW50UG9tb1Nlc3Npb24ubW9kZSAhPT0gUE9NT19TRVNTSU9OX01PREVTLkNPTVBMRVRFICYmIGN1cnJlbnRQb21vU2Vzc2lvbi5tb2RlICE9PSBQT01PX1NFU1NJT05fTU9ERVMuSU5BQ1RJVkUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb250aW51ZUFjdGl2ZVNlc3Npb24oKSB7XG4gIGlmICh0aGVyZUlzVW5maW5pc2hlZFNlc3Npb24oKSkge1xuICAgIHdpbmRvdy5sb2NhdGlvbiA9IFwiL3RpbWVyLmh0bWw/bG9hZFNhdmVkPXRydWVcIjtcbiAgfVxufSIsImltcG9ydCB7IGdldE9iamVjdCB9IGZyb20gXCIuXCI7XG5pbXBvcnQgeyBnZXRMYXRlc3RTZXNzaW9uSUQsIGdldE5ld1Nlc3Npb25JRCwgZ2V0UG9tb1Nlc3Npb24sIFBvbW9TZXNzaW9uLCBzZXRDdXJyZW50U2Vzc2lvblN0YXR1cywgc3RvcmVQb21vU2Vzc2lvbiwgUE9NT19TRVNTSU9OX01BUCwgUE9NT19TRVNTSU9OX01PREVTIH0gZnJvbSBcIi4uL2RhdGFiYXNlL3Nlc3Npb25cIjtcblxuZXhwb3J0IGNsYXNzIFBvbW9TdGF0cyB7XG4gICAgY29uc3RydWN0b3IoZGF0ZSkge1xuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgICAgICB0aGlzLnRhc2tzID0ge307XG5cbiAgICAgICAgdGhpcy5ncmVlblRhc2tzID0gMDtcbiAgICAgICAgdGhpcy55ZWxsb3dUYXNrcyA9IDA7XG4gICAgICAgIHRoaXMucmVkVGFza3MgPSAwO1xuXG4gICAgICAgIGxldCBpZCA9IGdldExhdGVzdFNlc3Npb25JRCgpO1xuICAgICAgICBsZXQgY291bnRlciA9IDA7XG4gICAgICAgIHdoaWxlKGlkICE9IDApIHtcbiAgICAgICAgICAgIGxldCBzZXNzaW9uID0gZ2V0UG9tb1Nlc3Npb24oaWQpO1xuICAgICAgICAgICAgaWYgKHNlc3Npb24ubW9kZSAhPT0gUE9NT19TRVNTSU9OX01PREVTLkNPTVBMRVRFKSB7XG4gICAgICAgICAgICAgICAgaWQgLT0gMTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBzZXNzaW9uX29iamVjdF9kYXRlID0gc2Vzc2lvbi5zdGFydERhdGU7XG4gICAgICAgICAgICBpZih0aGlzLmRhdGUuZ2V0TW9udGgoKSA9PT0gc2Vzc2lvbl9vYmplY3RfZGF0ZS5nZXRNb250aCgpICYmIHRoaXMuZGF0ZS5nZXREYXRlKCkgPT09IHNlc3Npb25fb2JqZWN0X2RhdGUuZ2V0RGF0ZSgpICYmIHRoaXMuZGF0ZS5nZXRZZWFyKCkgPT09IHNlc3Npb25fb2JqZWN0X2RhdGUuZ2V0WWVhcigpKXtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhzZXNzaW9uLmFsbFRhc2tzKVxuICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaChrZXkgPT4gdGhpcy50YXNrc1tjb3VudGVyKytdID0gc2Vzc2lvbi5hbGxUYXNrc1trZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYodGhpcy5kYXRlLmdldE1vbnRoKCkgPiBzZXNzaW9uX29iamVjdF9kYXRlLmdldE1vbnRoKCkgfHwgdGhpcy5kYXRlLmdldERhdGUoKSA+IHNlc3Npb25fb2JqZWN0X2RhdGUuZ2V0RGF0ZSgpIHx8IHRoaXMuZGF0ZS5nZXRZZWFyKCkgPiBzZXNzaW9uX29iamVjdF9kYXRlLmdldFllYXIoKSl7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgaWQgLT0gMTtcbiAgICAgICAgfVxuICAgICAgICBmb3IobGV0IHRhc2tJRCBpbiB0aGlzLnRhc2tzKSB7XG4gICAgICAgICAgICBpZih0aGlzLnRhc2tzW3Rhc2tJRF0uY29tcGxldGVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGFza3NbdGFza0lEXS5wb21vc1VzZWQgPD0gdGhpcy50YXNrc1t0YXNrSURdLnBvbW9zUmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmVlblRhc2tzKz0xO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHRoaXMueWVsbG93VGFza3MrPTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHRoaXMucmVkVGFza3MrPTE7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgZ2V0T2JqZWN0LCBzdG9yZU9iamVjdCB9IGZyb20gXCIuXCI7XG5pbXBvcnQgeyBnZXRMYXRlc3RTZXNzaW9uSUQsIGdldFBvbW9TZXNzaW9uIH0gZnJvbSBcIi4vc2Vzc2lvblwiO1xuXG5leHBvcnQgY2xhc3MgVGFzayB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNlc3Npb25JRCBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGUgXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRlc2NyaXB0aW9uIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwb21vc1JlcXVpcmVkIFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNlc3Npb25JRCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBwb21vc1JlcXVpcmVkKSB7XG4gICAgICAgIHRoaXMuc2Vzc2lvbklEID0gc2Vzc2lvbklEO1xuICAgICAgICB0aGlzLmlkID0gLTE7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnBvbW9zUmVxdWlyZWQgPSBwb21vc1JlcXVpcmVkO1xuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBvbW9zVXNlZCA9IDA7XG4gICAgfVxuICAgIHBhcnNlVGFza0Zyb21PYmoodGFza19vYmopIHtcbiAgICAgICAgbGV0IHRhc2sgPSBuZXcgVGFzayh0YXNrX29iai5zZXNzaW9uSUQsIHRhc2tfb2JqLnRpdGxlLCB0YXNrX29iai5kZXNjcmlwdGlvbiwgdGFza19vYmoucG9tb3NSZXF1aXJlZCk7XG4gICAgICAgIHRhc2suY29tcGxldGVkID0gdGFza19vYmouY29tcGxldGVkO1xuICAgICAgICB0YXNrLmlkID0gdGFza19vYmouaWQ7XG4gICAgICAgIHRhc2sucG9tb3NVc2VkID0gdGFza19vYmoucG9tb3NVc2VkO1xuICAgICAgICByZXR1cm4gdGFzaztcbiAgICB9XG4gICAgc2VyaWFsaXplSW50b09iaigpIHtcbiAgICAgICAgcmV0dXJuIHsgdGl0bGU6IHRoaXMudGl0bGUsIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLCBwb21vc1JlcXVpcmVkOiB0aGlzLnBvbW9zUmVxdWlyZWQsIGNvbXBsZXRlZDogdGhpcy5jb21wbGV0ZWQsIHBvbW9zVXNlZDogdGhpcy5wb21vc1VzZWQsIGlkOiB0aGlzLmlkLCBzZXNzaW9uSUQ6IHRoaXMuc2Vzc2lvbklEIH07XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgUE9NT19UQVNLX01BUCA9IFwicG9tb190YXNrX21hcFwiO1xuZXhwb3J0IGNvbnN0IFBPTU9fVEFTS19JTkRFWCA9IFwicG9tb190YXNrX2luZGV4XCI7XG5cbi8qKlxuICogV2lsbCBzdG9yZSBhIG5ldyBvciB1cGRhdGVkIHRhc2sgaW50byBsb2NhbCBzdG9yYWdlXG4gKiBcbiAqIEhhcyBhIHNpZGUgZWZmZWN0IG9mIGFkZGluZyB0aGUgaWQgb2YgdGhlIG5ldyB0YXNrIGlmIGl0IHdhc250IHN0b3JlZCBpbiBzdG9yYWdlIGJlZm9yZVxuICogXG4gKiBAcGFyYW0ge1Rhc2t9IHRhc2tcbiAqIEByZXR1cm5zIHtudW1iZXJ9IC0gdGhlIGlkIG9mIHRoZSB0YXNrXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdG9yZVRhc2sodGFzaykge1xuICAgIGxldCB0YXNrX21hcCA9IGdldE9iamVjdChQT01PX1RBU0tfTUFQKTtcbiAgICBpZiAoIXRhc2tfbWFwW3Rhc2suaWRdKSB7XG4gICAgICAgIC8vIGlmIHRhc2sgbWFwIGRvZXMgbm90IGhhdmUgdGhpcyB0YXNrLCBjcmVhdGUgYSBuZXcgaW5kZXhcbiAgICAgICAgbGV0IGlkID0gcGFyc2VJbnQoZ2V0T2JqZWN0KFBPTU9fVEFTS19JTkRFWCkpO1xuICAgICAgICB0YXNrLmlkID0gaWQ7XG4gICAgICAgIC8vIGluY3JlbWVudCBnbG9iYWwgaWRcbiAgICAgICAgc3RvcmVPYmplY3QoUE9NT19UQVNLX0lOREVYLCBpZCArIDEpO1xuICAgIH1cbiAgICBsZXQgb2JqID0gdGFzay5zZXJpYWxpemVJbnRvT2JqKCk7XG4gICAgdGFza19tYXBbdGFzay5pZF0gPSBvYmo7XG4gICAgc3RvcmVPYmplY3QoUE9NT19UQVNLX01BUCwgdGFza19tYXApO1xuICAgIHJldHVybiB0YXNrLmlkO1xufVxuXG4vKipcbiAqIEdldCB0aGUgdGFzayBhc3NvY2lhdGVkIHdpdGggdGhpcyBpZFxuICogQHBhcmFtIHtudW1iZXJ9IGlkIFxuICogQHJldHVybnMge1Rhc2t9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUYXNrKGlkKSB7XG4gICAgbGV0IHRhc2tfbWFwID0gZ2V0T2JqZWN0KFBPTU9fVEFTS19NQVApO1xuICAgIGxldCB0YXNrX29iaiA9IHRhc2tfbWFwW2lkXTtcbiAgICBsZXQgdCA9IG5ldyBUYXNrKCk7XG4gICAgdCA9IHQucGFyc2VUYXNrRnJvbU9iaih0YXNrX29iaik7XG4gICAgcmV0dXJuIHQ7XG5cbn1cbi8qKlxuICogR2V0IGFsbCB0YXNrc1xuICogXG4gKiBAcmV0dXJucyB7TWFwPG51bWJlciwgVGFzaz59IC0gYSBtYXAgZnJvbSB0YXNrIGlkIHRvIHRhc2tcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbFRhc2tzKCkge1xuICAgIGxldCB0YXNrX21hcCA9IGdldE9iamVjdChQT01PX1RBU0tfTUFQKTtcbiAgICBsZXQgcGFyc2VkX3Rhc2tfbWFwID0ge307XG4gICAgZm9yIChsZXQgaWQgaW4gdGFza19tYXApIHtcbiAgICAgICAgbGV0IHRhc2tfb2JqID0gdGFza19tYXBbaWRdO1xuICAgICAgICBsZXQgdCA9IG5ldyBUYXNrKCk7XG4gICAgICAgIHQgPSB0LnBhcnNlVGFza0Zyb21PYmoodGFza19vYmopO1xuICAgICAgICBwYXJzZWRfdGFza19tYXBbaWRdID0gdDtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZF90YXNrX21hcDtcbn1cblxuLyoqXG4gKiBEZWxldGUgYSBzcGVjaWZpYyB0YXNrIGZyb20gZGF0YWJhc2UgYnkgdGhlIHVuaXF1ZSB0YXNrIElEXG4gKiBcbiAqIEBwYXJhbSB7bnVtYmVyfSBpZCBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRhc2tCeVRhc2tJRChpZCkge1xuICAgIGxldCB0YXNrX21hcCA9IGdldE9iamVjdChQT01PX1RBU0tfTUFQKTtcbiAgICBkZWxldGUgdGFza19tYXBbaWRdO1xuICAgIHN0b3JlT2JqZWN0KFBPTU9fVEFTS19NQVAsIHRhc2tfbWFwKTtcbn1cblxuXG4vKipcbiAqIENoZWNrcyBpZiB0aGVyZSBhcmUgYW55IHVuZmluaXNoZWQgdGFza3MgZnJvbSB0aGUgcHJldmlvdXMgc2Vzc2lvblxuICogQHJldHVybnMge2Jvb2xlYW59IC0gdHJ1ZSBpZiB1bmlmaW5pc2hlZCB0YXNrcyBleGlzdCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcmVUaGVyZVVuZmluaXNoZWRUYXNrc0Zyb21MYXN0U2Vzc2lvbigpIHtcbiAgICBsZXQgb2xkU2Vzc2lvbklEID0gZ2V0TGF0ZXN0U2Vzc2lvbklEKCk7XG4gICAgaWYgKG9sZFNlc3Npb25JRCA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgIGxldCBzZXNzaW9uID0gZ2V0UG9tb1Nlc3Npb24ob2xkU2Vzc2lvbklEKTtcbiAgICBpZiAoc2Vzc2lvbiA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChzZXNzaW9uLmN1cnJlbnRUYXNrKCkgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbiIsIi8qKlxuICogUmVuZGVycyBhIGJhciBjaGFydCBvbnRvIHRoZSBnaXZlbiBjaGFydCBlbGVtZW50IHNob3dpbmcgdGhlIGRhaWx5IGRhdGFcbiAqIFxuICogQHBhcmFtIHtIVE1MQ2FudmFzRWxlbWVudH0gY2hhcnRlbGVtZW50IC0gdGhlIGVsZW1lbnQgdG8gcmVuZGVyIGNoYXJ0IGRhdGEgb25cbiAqIEBwYXJhbSB7e2NvbXBsZXRlOiBudW1iZXIsIG92ZXJ0aW1lOiBudW1iZXIsIGluY29tcGxldGU6IG51bWJlcn19IGRhdGFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckVmZmljaWVuY3lEYXRhKGNoYXJ0ZWxlbWVudCwgZGF0YSkge1xuICAgIGxldCBjdHggPSBjaGFydGVsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGxldCBsYWJlbHMgPSBbXCJUYXNrcyBDb21wbGV0ZWQgb24gVGltZVwiLCBcIlRhc2tzIENvbXBsZXRlZCBvdmVyIFRpbWVcIiwgXCJUYXNrcyBJbmNvbXBsZXRlXCJdO1xuICAgIGxldCBjb2xvcnMgPSBbXCIjMjJERDlBXCIsIFwiI0Y5QzY0NFwiLCBcIiNGQTdGN0ZcIl07XG4gICAgbGV0IG15Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XG4gICAgICAgIHR5cGU6IFwiYmFyXCIsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGxhYmVsczogbGFiZWxzLFxuICAgICAgICAgICAgZGF0YXNldHM6IFt7XG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiIyBvZiBUYXNrc1wiLFxuICAgICAgICAgICAgICAgIGRhdGE6IFtkYXRhLmNvbXBsZXRlLCBkYXRhLm92ZXJ0aW1lLCBkYXRhLmluY29tcGxldGVdLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBjb2xvcnMsXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDFcbiAgICAgICAgICAgIH1dXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGxlZ2VuZDogZmFsc2UsXG4gICAgICAgICAgICBzY2FsZXM6IHtcbiAgICAgICAgICAgICAgICB5QXhlczogW3tcbiAgICAgICAgICAgICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8qKlxuICogUmVuZGVycyBhIGxpbmUgY2hhcnQgb250byB0aGUgY2hhcnQgZWxlbWVudCBvZiB3ZWVrbHkgZGF0YVxuICogXG4gKiBAcGFyYW0ge0hUTUxDYW52YXNFbGVtZW50fSBjaGFydGVsZW1lbnQgLSB0aGUgZWxlbWVudCB0byByZW5kZXIgY2hhcnQgZGF0YSBvblxuICogQHBhcmFtIHt7Y29tcGxldGU6IG51bWJlcltdLCBvdmVydGltZTogbnVtYmVyW10sIGluY29tcGxldGU6IG51bWJlcltdfX0gd2Vla2x5RGF0YVxuICogQHBhcmFtIHtzdHJpbmdbXX0gZGF0ZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckVmZmljaWVuY3lXZWVrbHlEYXRhKGNoYXJ0ZWxlbWVudCwgd2Vla2x5RGF0YSwgZGF0ZXMpIHtcbiAgICBsZXQgY3R4ID0gY2hhcnRlbGVtZW50LmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBsZXQgbGFiZWxzID0gW1wiVGFza3MgQ29tcGxldGVkIG9uIFRpbWVcIiwgXCJUYXNrcyBDb21wbGV0ZWQgb3ZlciBUaW1lXCIsIFwiVGFza3MgSW5jb21wbGV0ZVwiXTtcbiAgICBsZXQgY29sb3JzID0gW1wiIzIyREQ5QVwiLCBcIiNGOUM2NDRcIiwgXCIjRkE3RjdGXCJdO1xuICAgIGxldCBteUNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xuICAgICAgICB0eXBlOiBcImxpbmVcIixcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbGFiZWxzOiBkYXRlcyxcbiAgICAgICAgICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICAgICAgICAgIGxhYmVsOiBsYWJlbHNbMF0sXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiIzIyREQ5QVwiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgICAgICAgIGRhdGE6IHdlZWtseURhdGEuY29tcGxldGVcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogbGFiZWxzWzFdLFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIiNGOUM2NDRcIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICAgICAgICBkYXRhOiB3ZWVrbHlEYXRhLm92ZXJ0aW1lLFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBsYWJlbHNbMl0sXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiI0ZBN0Y3RlwiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgICAgICAgIGRhdGE6IHdlZWtseURhdGEuaW5jb21wbGV0ZVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgc2NhbGVzOiB7XG4gICAgICAgICAgICAgICAgeUF4ZXM6IFt7XG4gICAgICAgICAgICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufSIsIi8qKlxuICogV2lsbCByYW5kb21seSBwaWNrIGEgdGhlbWUgYW5kIHVuaXF1ZSBiYWNrZ3JvdW5kIGRlcGVuZGluZyBvbiB3aGF0IGRheSBpdCBpcyBhbmQgd2hhdCB0aW1lIGl0IGlzIGFuZCBzZXQgaXQgb24gdGhlIHBhZ2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdEFuZFNldFRoZW1lKHRvZGF5ID0gbmV3IERhdGUoKSkge1xuICBsZXQgaWQgPSAwO1xuICBsZXQgbnVtQkdzID0gNjtcblxuICBsZXQgZCA9IHRvZGF5LmdldERheSgpO1xuXG4gIGxldCBzZWVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJiZy1zZWVkXCIpO1xuXG4gIGlmIChzZWVkID09PSBudWxsIHx8IHNlZWRbMF0gIT0gZCkge1xuICAgIHNlZWQgPSBkICsgXCItXCIgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBudW1CR3MpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmctc2VlZFwiLCBzZWVkKTtcbiAgfVxuICBsZXQgdGltZVBlcmlvZCA9IGdldFRoZW1lTW9kZSh0b2RheSk7XG4gIGlkID0gcGFyc2VJbnQoc2VlZFsyXSk7XG5cbiAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tkcm9wXCIpO1xuICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIuLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzLyR7dGltZVBlcmlvZH0vYmcke2lkfS5qcGdcIilgO1xufTtcblxuZXhwb3J0IGNvbnN0IFRIRU1FX01PREVTID0ge1xuICBEQVk6IFwiZGF5XCIsXG4gIE5JR0hUOiBcIm5pZ2h0XCIsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGhlbWVNb2RlKHRvZGF5ID0gbmV3IERhdGUoKSkge1xuICBsZXQgdGltZVBlcmlvZCA9IFRIRU1FX01PREVTLkRBWTtcbiAgaWYgKHRvZGF5LmdldEhvdXJzKCkgPCA0KSB7XG4gICAgdGltZVBlcmlvZCA9IFRIRU1FX01PREVTLk5JR0hUO1xuICB9XG4gIGVsc2UgaWYgKHRvZGF5LmdldEhvdXJzKCkgPCAxOCkge1xuICAgIHRpbWVQZXJpb2QgPSBUSEVNRV9NT0RFUy5EQVk7XG4gIH0gZWxzZSBpZiAodG9kYXkuZ2V0SG91cnMoKSA8IDI0KSB7XG4gICAgdGltZVBlcmlvZCA9IFRIRU1FX01PREVTLk5JR0hUO1xuICB9XG4gIHJldHVybiB0aW1lUGVyaW9kO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGluaXRpYWxpemVEYXRhYmFzZSB9IGZyb20gXCIuL2RhdGFiYXNlXCI7XG5pbXBvcnQgeyBnZXRMYXRlc3RTZXNzaW9uSUQgfSBmcm9tIFwiLi9kYXRhYmFzZS9zZXNzaW9uXCI7XG5pbXBvcnQgeyBQb21vU3RhdHMgfSBmcm9tIFwiLi9kYXRhYmFzZS9zdGF0c1wiO1xuaW1wb3J0IHsgcmVuZGVyRWZmaWNpZW5jeVdlZWtseURhdGEsIHJlbmRlckVmZmljaWVuY3lEYXRhIH0gZnJvbSBcIi4vaGlzdG9yeS1ncmFwaFwiO1xuaW1wb3J0IHsgc2VsZWN0QW5kU2V0VGhlbWUgfSBmcm9tIFwiLi91dGlscy90aGVtZVwiO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBzZWxlY3RBbmRTZXRUaGVtZSgpO1xuICAgIC8vIFRPRE86IGxvYWQgZGF0YSBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgICBpbml0aWFsaXplRGF0YWJhc2UoKTtcbiAgICBsZXQgc3RhdHMgPSBuZXcgUG9tb1N0YXRzKG5ldyBEYXRlKCkpO1xuICAgIGxldCB0YXNrTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0xpc3RcIik7XG4gICAgZm9yKGxldCB0YXNrSUQgaW4gc3RhdHMudGFza3MpIHtcbiAgICAgICAgbGV0IHRhc2sgPSBzdGF0cy50YXNrc1t0YXNrSURdO1xuICAgICAgICBjb25zdCBjdXJyZW50VGFza0VsZW1lbnQgPSBgPHBvbW8tdGFzayBkZXNjcmlwdGlvbiA9XCIke3Rhc2suZGVzY3JpcHRpb259XCIgcG9tb3NVc2VkPVwiJHt0YXNrLnBvbW9zVXNlZH1cIiwgcG9tb3NSZXF1aXJlZCA9XCIke3Rhc2sucG9tb3NSZXF1aXJlZH1cIj4ke3Rhc2sudGl0bGV9PC9wb21vLXRhc2s+YDtcbiAgICAgICAgdGFza0xpc3QuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGN1cnJlbnRUYXNrRWxlbWVudCk7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0YXNrTGlzdC5jaGlsZE5vZGVzW3Rhc2tMaXN0LmNoaWxkTm9kZXMubGVuZ3RoIC0gMV07XG4gICAgICAgIGVsZW1lbnQudGFzayA9IHRhc2s7XG4gICAgICAgIGVsZW1lbnQuc2hhZG93Um9vdC5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1szXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGVsZW1lbnQuc2hhZG93Um9vdC5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1syXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGlmKHRhc2suY29tcGxldGVkKSB7XG4gICAgICAgICAgICBpZih0YXNrLnBvbW9zVXNlZCA8PSB0YXNrLnBvbW9zUmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNoYWRvd1Jvb3QuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1swXS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImdvb2RUaW1pbmdUYXNrXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBlbGVtZW50LnNoYWRvd1Jvb3QuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1swXS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJhZFRpbWluZ1Rhc2tcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBlbGVtZW50LnNoYWRvd1Jvb3QuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1swXS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImluY29tcGxldGVUYXNrXCIpO1xuICAgIH1cbiAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgY29tcGxldGU6IHN0YXRzLmdyZWVuVGFza3MsXG4gICAgICAgIG92ZXJ0aW1lOiBzdGF0cy55ZWxsb3dUYXNrcyxcbiAgICAgICAgaW5jb21wbGV0ZTogc3RhdHMucmVkVGFza3MsXG4gICAgfTtcbiAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZmZpY2llbmN5LWNoYXJ0XCIpO1xuICAgIHJlbmRlckVmZmljaWVuY3lEYXRhKGNhbnZhcywgZGF0YSk7XG4gICAgbGV0IGNhbnZhczIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVmZmljaWVuY3ktd2Vla2x5LWNoYXJ0XCIpO1xuXG4gICAgbGV0IHNldmVuRGF0ZXMgPSBkYXRlc0ZvclNldmVuRGF5cygpO1xuICAgIHNldmVuRGF0ZXMucmV2ZXJzZSgpO1xuICAgIGxldCBkYXRlc0ZvckdyYXBoID0gW107XG4gICAgbGV0IHdlZWtTdGF0cyA9IFtdO1xuICAgIGZvcihsZXQgZGF0ZUlEIGluIHNldmVuRGF0ZXMpIHtcbiAgICAgICAgZGF0ZXNGb3JHcmFwaC5wdXNoKG5ldyBEYXRlKHNldmVuRGF0ZXNbZGF0ZUlEXSkuZ2V0TW9udGgoKSArIFwiL1wiICsgbmV3IERhdGUoc2V2ZW5EYXRlc1tkYXRlSURdKS5nZXREYXRlKCkpO1xuICAgICAgICB3ZWVrU3RhdHMucHVzaChuZXcgUG9tb1N0YXRzKG5ldyBEYXRlKHNldmVuRGF0ZXNbZGF0ZUlEXSkpKTtcbiAgICB9XG4gICAgbGV0IGNvbXBsZXRlV2VlayA9IFtdO1xuICAgIGxldCBvdmVyVGltZVdlZWsgPSBbXTtcbiAgICBsZXQgaW5jb21wbGV0ZVdlZWsgPSBbXTtcbiAgICBmb3IobGV0IHN0YXRJRCBpbiB3ZWVrU3RhdHMpIHtcbiAgICAgICAgY29tcGxldGVXZWVrLnB1c2god2Vla1N0YXRzW3N0YXRJRF0uZ3JlZW5UYXNrcyk7XG4gICAgICAgIG92ZXJUaW1lV2Vlay5wdXNoKHdlZWtTdGF0c1tzdGF0SURdLnllbGxvd1Rhc2tzKTtcbiAgICAgICAgaW5jb21wbGV0ZVdlZWsucHVzaCh3ZWVrU3RhdHNbc3RhdElEXS5yZWRUYXNrcyk7XG4gICAgfVxuICAgIGxldCB3ZWVrbHlEYXRhID0ge1xuICAgICAgICBjb21wbGV0ZTogY29tcGxldGVXZWVrLFxuICAgICAgICBvdmVydGltZTogb3ZlclRpbWVXZWVrLFxuICAgICAgICBpbmNvbXBsZXRlOiBpbmNvbXBsZXRlV2VlayxcbiAgICB9O1xuICAgIHJlbmRlckVmZmljaWVuY3lXZWVrbHlEYXRhKGNhbnZhczIsIHdlZWtseURhdGEsIGRhdGVzRm9yR3JhcGgpO1xufSk7XG5cbmZ1bmN0aW9uIGRhdGVzRm9yU2V2ZW5EYXlzKCkge1xuICAgIGxldCBkYXRlcyA9IFtdO1xuICAgIGZvciAobGV0IGk9MDsgaTw3OyBpKyspIHtcbiAgICAgICAgbGV0IGQgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBkLnNldERhdGUoZC5nZXREYXRlKCkgLSBpKTtcbiAgICAgICAgZGF0ZXMucHVzaChkKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGVzO1xufSJdLCJzb3VyY2VSb290IjoiIn0=