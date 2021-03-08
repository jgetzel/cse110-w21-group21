import { PomoSession } from "../../source/assets/scripts/database/session";
import { Task } from "../../source/assets/scripts/database/task";

describe("Test PomoSession class", () => {
  let p = new PomoSession(1);
  let taskObjSerialized = {
    completed: false,
    description: "desc",
    id: -1,
    pomosRequired: 4,
    pomosUsed: 0,
    sessionID: 1,
    title: "test",
  };
  beforeEach(() => {
    p.allTasks.push(new Task(1, "test", "desc", 4));
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
    });
    expect(parsedP.id).toEqual(1);
    expect(parsedP.allTasks[0].id).toEqual(-1);
    expect(parsedP.allTasks[0].pomosRequired).toEqual(4);
    expect(parsedP.allTasks[0].description).toEqual("desc");
    expect(parsedP.allTasks[0].completed).toEqual(false);
    expect(parsedP.allTasks[0].sessionID).toEqual(1);
    expect(parsedP.allTasks[0].title).toEqual("test");
  });
});
