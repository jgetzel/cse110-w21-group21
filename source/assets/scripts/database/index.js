function initializeDatabase() {
    // check if we need to initialize
    let needToInitialize = false;
    if (!getObject(POMO_TASK_MAP)) {
        needToInitialize = true;
    }
    if (!getObject(POMO_TASK_INDEX) || getObject(POMO_TASK_INDEX) != 0) {
        needToInitialize = true;
    }
    // then initialize
    if (needToInitialize) {
        storeObject(POMO_TASK_MAP, {});
        storeObject(POMO_TASK_INDEX, 0);
    }
}
function resetDatabase() {
    delete localStorage[POMO_TASK_MAP];
    delete localStorage[POMO_TASK_INDEX];
}

function storeObject(key, object) {
    localStorage.setItem(key, JSON.stringify(object));
}
function getObject(key) {
    return JSON.parse(localStorage.getItem(key));
}