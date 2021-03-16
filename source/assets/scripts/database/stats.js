import { getObject } from ".";
import { getLatestSessionID, getNewSessionID, getPomoSession, PomoSession, setCurrentSessionStatus, storePomoSession, POMO_SESSION_MAP } from "../database/session";

export class PomoStats {
    constructor(id) {
        this.sessionID = id;
        this.tasks = getObject(POMO_SESSION_MAP)[id]["allTasks"];
        this.greenTasks = 0;
        this.yellowTasks = 0;
        this.redTasks = 0;
        console.log(this.tasks);
        for(let taskID in this.tasks) {
            if(this.tasks[taskID].completed) {
                if (this.tasks[taskID].pomosUsed <= this.tasks[taskID].pomosRequired) {
                    this.greenTasks+=1;
                }
                else this.yellowTasks+=1;
            }
            else this.redTasks+=1;
        }
    }
}