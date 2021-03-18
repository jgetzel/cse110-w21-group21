import { initializeDatabase } from "../../source/assets/scripts/database";
import { getPomoSession, PomoSession } from "../../source/assets/scripts/database/session";
import { Task } from "../../source/assets/scripts/database/task";

describe("Test PomoSession class", () => {
  initializeDatabase();
  let p;
  let taskObjSerialized = {
    completed: false,
    description: "desc",
    id: -1,
    pomosRequired: 4,
    pomosUsed: 0,
    sessionID: 1,
    title: "test",
  };
  let firstTask = new Task(1, "test", "desc", 4);
  beforeEach(() => {
    p = new PomoSession(1);

    p.allTasks.push(firstTask);
  });
  test("it should serialize correctly into localStorage", () => {
    let obj = p.serializeIntoObj();
    expect(obj.id).toEqual(1);
    expect(obj.allTasks[0]).toEqual(taskObjSerialized);
  });
  test("it should parse correctly", () => {
    let parsedP = new PomoSession(-1);
    parsedP.parseSessionFromObj({
      id: 1,
      allTasks: [taskObjSerialized],
      startDate: p.startDate.getTime()
    });
    expect(parsedP.id).toEqual(1);
    expect(parsedP.allTasks[0].id).toEqual(-1);
    expect(parsedP.allTasks[0].pomosRequired).toEqual(4);
    expect(parsedP.allTasks[0].description).toEqual("desc");
    expect(parsedP.allTasks[0].completed).toEqual(false);
    expect(parsedP.allTasks[0].sessionID).toEqual(1);
    expect(parsedP.allTasks[0].title).toEqual("test");
    expect(parsedP.startDate.getTime()).toEqual(p.startDate.getTime())
  });
  test("it should add tasks", () => {
    let t = new Task(p.id, "test2", "desc", 4);
    t.id = 0;
    p.addTask(t);
    expect(p.allTasks.length).toEqual(2);
    expect(p.allTasks[1].title).toEqual("test2");
  });
  test("it should delete tasks", () => {
    let t = new Task(p.id, "test2", "desc", 4);
    t.id = 0;
    p.addTask(t);
    p.deleteTask(firstTask)
    expect(p.allTasks.length).toEqual(1);
    expect(p.allTasks[0].title).toEqual("test2");
  });
});
