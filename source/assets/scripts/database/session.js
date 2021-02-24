/**
 * This file is related to finding pomo sessions
 */


const POMO_SESSION_ID = "pomo_session_id";
const LATEST_POMO_SESSION_STATUS = "latest_pomo_session_status";
class PomoSession {
  constructor() {
    this.id = -1;
  }
  serializeIntoObj() {
    return { id: this.id };
  }
}


function getNewSessionID() {
  let prevID = parseInt(localStorage.getItem(POMO_SESSION_ID));
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
  let status = localStorage.getItem(LATEST_POMO_SESSION_STATUS);
  if (status === "complete") {
    return null;
  } else {
    return localStorage.getItem(POMO_SESSION_ID);
  }
}