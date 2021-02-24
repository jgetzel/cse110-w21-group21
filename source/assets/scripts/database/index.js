function initializeDatabase() {
    // check if we need to initialize
    let needToInitialize = false;
    if (getObject(POMO_TASK_MAP) === null) {
        needToInitialize = true;
    }
    if (!getObject(POMO_TASK_INDEX) === null) {
        needToInitialize = true;
    }
    if (!localStorage.getItem(POMO_SESSION_ID) === null) {
        needToInitialize = true;
    }
    if (!localStorage.getItem(LATEST_POMO_SESSION_STATUS) === null) {
        needToInitialize = true;
    }

    // then initialize
    if (needToInitialize) {
        storeObject(POMO_TASK_MAP, {});
        storeObject(POMO_TASK_INDEX, 0);
        storeObject(LATEST_POMO_SESSION_STATUS, "complete");
        storeObject(POMO_SESSION_ID, 0);
    }
}
function resetDatabase() {
    delete localStorage[POMO_TASK_MAP];
    delete localStorage[POMO_TASK_INDEX];
    delete localStorage[LATEST_POMO_SESSION_STATUS];
    delete localStorage[POMO_SESSION_ID];
}

function storeObject(key, object) {
    localStorage.setItem(key, JSON.stringify(object));
}
function getObject(key) {
    return JSON.parse(localStorage.getItem(key));
}