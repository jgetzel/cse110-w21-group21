import { getObject, storeObject } from ".";
import { getLatestSessionID, getPomoSession } from "./session";

export class Task {
    /**
     * 
     * @param {number} sessionID 
     * @param {string} title 
     * @param {string} description 
     * @param {number} pomosRequired 
     */
    constructor(sessionID, title, description, pomosRequired) {
        this.sessionID = sessionID;
        this.id = -1;
        this.title = title;
        this.description = description;
        this.pomosRequired = pomosRequired;
        this.completed = false;
        this.pomosUsed = 0;
    }
    parseTaskFromObj(task_obj) {
        let task = new Task(task_obj.sessionID, task_obj.title, task_obj.description, task_obj.pomosRequired);
        task.completed = task_obj.completed;
        task.id = task_obj.id;
        task.pomosUsed = task_obj.pomosUsed;
        return task;
    }
    serializeIntoObj() {
        return { title: this.title, description: this.description, pomosRequired: this.pomosRequired, completed: this.completed, pomosUsed: this.pomosUsed, id: this.id, sessionID: this.sessionID };
    }
}

export const POMO_TASK_MAP = "pomo_task_map";
export const POMO_TASK_INDEX = "pomo_task_index";

/**
 * Will store a new or updated task into local storage
 * 
 * Has a side effect of adding the id of the new task if it wasnt stored in storage before
 * 
 * @param {Task} task
 * @returns {number} - the id of the task
 */
export function storeTask(task) {
    let task_map = getObject(POMO_TASK_MAP);
    if (!task_map[task.id]) {
        // if task map does not have this task, create a new index
        let id = parseInt(getObject(POMO_TASK_INDEX));
        task.id = id;
        // increment global id
        storeObject(POMO_TASK_INDEX, id + 1);
    }
    let obj = task.serializeIntoObj();
    task_map[task.id] = obj;
    storeObject(POMO_TASK_MAP, task_map);
    return task.id;
}

/**
 * Get the task associated with this id
 * @param {number} id 
 * @returns {Task}
 */
export function getTask(id) {
    let task_map = getObject(POMO_TASK_MAP);
    let task_obj = task_map[id];
    let t = new Task();
    t = t.parseTaskFromObj(task_obj);
    return t;

}
/**
 * Get all tasks
 * 
 * @returns {Map<number, Task>} - a map from task id to task
 */
export function getAllTasks() {
    let task_map = getObject(POMO_TASK_MAP);
    let parsed_task_map = {};
    for (let id in task_map) {
        let task_obj = task_map[id];
        let t = new Task();
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
export function deleteTaskByTaskID(id) {
    let task_map = getObject(POMO_TASK_MAP);
    delete task_map[id];
    storeObject(POMO_TASK_MAP, task_map);
}


/**
 * Checks if there are any unfinished tasks from the previous session
 * @returns {boolean} - true if unifinished tasks exist, false otherwise
 */
export function areThereUnfinishedTasksFromLastSession() {
    let oldSessionID = getLatestSessionID();
    if (oldSessionID === null) return false;
    let session = getPomoSession(oldSessionID);
    if (session === null) return false;
    if (session.currentTask() === null) {
        return false;
    }
    return true;
}
