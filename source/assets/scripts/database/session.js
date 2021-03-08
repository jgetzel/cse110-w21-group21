/**
 * This file is related to finding pomo sessions
 */
import { getObject, storeObject } from "./index";
import { getAllSessionTasks, storeTask, Task } from "./task";


export const POMO_SESSION_ID = "pomo_session_id";
export const LATEST_POMO_SESSION_STATUS = "latest_pomo_session_status";
export const POMO_SESSION_MAP = "pomo_session_map";
export class PomoSession {
  constructor(id) {
    this.id = id;
    /** @type {Task[]} */
    this.allTasks = getAllSessionTasks(this.id);
  }
  /**
   * 
   * @returns {Task | null } - the current task for this pomo session or null if there are no tasks left
   * 
   */
  currentTask() {
    let allInProgressTasks = this.allTasks.filter((task) => !task.completed);
    if (allInProgressTasks.length > 0) {
        return allInProgressTasks[0];
    }
    return null;
  }
  /**
   * Adds a new task
   * @param {Task} task 
   */
  addTask(task) {
    storeTask(task);
    this.allTasks.push(task);
  }
  /**
   * Completes the given task associated to the id
   * @param {number} id 
   * @returns {boolean} true if completed, false if no task found
   */
  completeTask(id) {
    for (let task of this.allTasks) {
      if (task.id === id) {
        task.completed = true;
        return true;
      }
    }
    return false;
  }
  /**
   * Returns the next incomplete task in the order or null if all completed
   * @returns {Task | null}
   */
  getNextTask() {
    for (const task of this.allTasks) {
      if (task.completed === false) {
        return task;
      }
    }
    return null;
  }
  /**
   * Increment the pomos used for a task
   * @param {number} id 
   */
  incrementTaskPomosUsed(id) {
    for (const task of this.allTasks) {
      if (task.id === id) {
        task.pomosUsed += 1;
        return;
      }
    }
  }

  /**
   * TODO
   */
  reorderTasks() {

  }
  serializeIntoObj() {
    return { id: this.id };
  }
  getPomosLeftInSession() {
    let left = 0;
    this.allTasks.forEach((task) => {
      left += Math.max(task.pomosRequired - task.pomosUsed, 0);
    });
    return left;
  }
  parseSessionFromObj(session_obj) {
    this.id = session_obj.id;
    this.allTasks = session_obj.allTasks.map((taskObj) => {
      let t = new Task();
      t = t.parseTaskFromObj(taskObj);
      return t;
    });
    return this;
  }
  serializeIntoObj() {
    return {
      id: this.id, allTasks: this.allTasks.map((task) => task.serializeIntoObj()),
    }
  }
}

/**
 * Get a pomo session object
 * @param {number} id 
 * @returns {PomoSession | null} the session for this id or null if there is no session associated with this id
 */
export function getPomoSession(id) {
  const allSessions = getObject(POMO_SESSION_MAP);
  let p = new PomoSession();
  if (!allSessions[id]) return null;
  return p.parseSessionFromObj(allSessions[id])
}

export function storePomoSession(session) {
  const allSessions = getObject(POMO_SESSION_MAP);
  allSessions[session.id] = session.serializeIntoObj();
  storeObject(POMO_SESSION_MAP, allSessions);
}

export function getNewSessionID() {
  let prevID = parseInt(localStorage.getItem(POMO_SESSION_ID));
  localStorage.setItem(POMO_SESSION_ID, prevID + 1);
  return prevID;
}

/**
 * Set the current session's status
 * @param {string} status - can be "complete" or "in-progress"
 */
export function setCurrentSessionStatus(status) {
  localStorage.setItem(LATEST_POMO_SESSION_STATUS, status);
}

/**
 * Will return the session ID of the last session if it was not ended. Otherwise if the last session does not exist 
 * or was ended already, this function returns null
 * 
 * @returns {number | null}
 */
export function getLatestSessionID() {
  let status = localStorage.getItem(LATEST_POMO_SESSION_STATUS);
  if (status === "complete") {
    return null;
  } else {
    return parseInt(localStorage.getItem(POMO_SESSION_ID)) - 1;
  }
}