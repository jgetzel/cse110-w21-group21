import { getObject } from ".";
import { getLatestSessionID, getNewSessionID, getPomoSession, PomoSession, setCurrentSessionStatus, storePomoSession, POMO_SESSION_MAP, POMO_SESSION_MODES } from "../database/session";

export class PomoStats {
    constructor(date) {
        this.date = date;
        this.tasks = {};

        this.greenTasks = 0;
        this.yellowTasks = 0;
        this.redTasks = 0;

        let id = getLatestSessionID();
        let counter = 0;
        while(id != 0) {
            let session = getPomoSession(id);
            if (session.mode !== POMO_SESSION_MODES.COMPLETE) {
                id -= 1;
                continue;
            }
            let session_object_date = session.startDate;
            if(this.date.getMonth() === session_object_date.getMonth() && this.date.getDate() === session_object_date.getDate() && this.date.getYear() === session_object_date.getYear()){
                Object.keys(session.allTasks)
                    .forEach(key => this.tasks[counter++] = session.allTasks[key]);
            }
            else if(this.date.getMonth() > session_object_date.getMonth() || this.date.getDate() > session_object_date.getDate() || this.date.getYear() > session_object_date.getYear()){
                break;
            } 
            id -= 1;
        }
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