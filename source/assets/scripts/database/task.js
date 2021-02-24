
class Task {
    constructor(sessionID, title, description, pomos) {
        this.sessionID = sessionID;
        this.id = -1;
        this.title = title;
        this.description = description;
        this.pomos = pomos;
        this.completed = false;
        this.pomosCompleted = 0;
    }
    parseTaskFromObj(task_obj) {
        let task = new Task(task_obj.sessionID, task_obj.title, task_obj.description, task_obj.pomos);
        task.completed = task_obj.completed;
        task.id = task_obj.id;
        task.pomosCompleted = task_obj.pomosCompleted;
        return task;
    }
    serializeIntoObj() {
        return { title: this.title, description: this.description, pomos: this.pomos, completed: this.completed, pomosCompleted: this.pomosCompleted, id: this.id, sessionID: this.sessionID }
    }
}

const POMO_TASK_MAP = "pomo_task_map"
const POMO_TASK_INDEX = "pomo_task_index"

/**
 * Will store a new or updated task into local storage
 * 
 * Has a side effect of adding the id of the new task if it wasnt stored in storage before
 * 
 * @param {Task} task
 * @returns {number} - the id of the task
 */
function storeTask(task) {
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
function getTask(id) {
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
function getAllTasks() {
    let task_map = getObject(POMO_TASK_MAP);
    let parsed_task_map = {}
    for (let id in task_map) {
        let task_obj = task_map[id];
        let t = new Task();
        t = t.parseTaskFromObj(task_obj);
        parsed_task_map[id] = t;
    }
    return parsed_task_map
}

/**
 * Get all tasks associated with a particular sessionID
 * @param {number} sessionID 
 */
function getAllSessionTasks(sessionID) {
    if (sessionID !== null) {
        let tasks = getAllTasks();
        let allTasks = []
        Object.values(tasks).forEach((task) => {
            if (task.sessionID === sessionID) {
                allTasks.push(task);
            }
        });
        return allTasks;
    }
}

/**
 * Delete a specific task from database by the unique task ID
 * 
 * @param {number} id 
 */
function deleteTaskByTaskID(id) {
    let task_map = getObject(POMO_TASK_MAP);
    delete task_map[id];
    storeObject(POMO_TASK_MAP, task_map);
}