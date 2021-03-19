import { getObject } from ".";
import { getLatestSessionID, getNewSessionID, getPomoSession, PomoSession, setCurrentSessionStatus, storePomoSession, POMO_SESSION_MAP } from "../database/session";

export class PomoStats {
    constructor(date) {
        this.date = date;
        this.tasks = {};

        this.greenTasks = 0;
        this.yellowTasks = 0;
        this.redTasks = 0;

        let id = getLatestSessionID();
        let counter = 0;
        while(id!= 0) {
            let session_object_date = new Date(getObject(POMO_SESSION_MAP)[id]["startDate"]);
            if(this.date.getMonth() === session_object_date.getMonth() && this.date.getDate() === session_object_date.getDate() && this.date.getYear() === session_object_date.getYear()){
                Object.keys(getObject(POMO_SESSION_MAP)[id]["allTasks"])
                    .forEach(key => this.tasks[counter++] = getObject(POMO_SESSION_MAP)[id]["allTasks"][key]);
            }
            else if(this.date.getMonth() > session_object_date.getMonth() || this.date.getDate() > session_object_date.getDate() || this.date.getYear() > session_object_date.getYear()){
                break;
            } 
            id-=1;
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