import { getPomoSession, getLatestSessionID } from "../../../source/assets/scripts/database/session";
describe("Testing Adding Tasks", () => {
  const testTasks = [
    {
      title: "My new task",
      description: "a task about tomatoes",
      pomos: 3,
    },
    {
      title: "Cooking eggs",
      description: "a task about eggs",
      pomos: 5,
    },
  ];
  beforeEach(() => {
    cy.visit("timer.html?loadSaved=false");
    for (const task of testTasks) {
      cy.get("#taskCreator").shadow().find("button").click({ force: true });
      cy.clock(new Date().getTime() + 500);
      cy.get("#addTaskModal")
        .shadow()
        .find("#task-name")
        .shadow()
        .find("div")
        .then(($el) => {
          cy.get($el).type(task.title);
        });
      cy.get("#addTaskModal")
        .shadow()
        .find("#pomos-required")
        .shadow()
        .find("div")
        .then(($el) => {
          cy.get($el[0]).type(task.pomos, { force: true });
        });
      cy.get("#addTaskModal")
        .shadow()
        .find("#description")
        .shadow()
        .find("div")
        .then(($el) => {
          cy.get($el[0]).type(task.description, { force: true });
        });
      cy.get("#addTaskModal")
        .shadow()
        .find("#save-btn")
        .shadow()
        .find("button")
        .click();
    }
  });
  it("should add tasks correctly when creating timer", () => {
    cy.get("#taskListWrapper")
      .find("pomo-task")
      .shadow()
      .then(($el) => {
        for (let i = 0; i < testTasks.length; i++) {
          cy.get($el[i])
            .find(".title")
            .then(($title) => {
              expect($title[0].textContent).to.equal(testTasks[i].title);
            });
          cy.get($el[i])
            .find(".description")
            .then(($desc) => {
              expect($desc[0].textContent).to.equal(testTasks[i].description);
            });
          cy.get($el[i])
            .find(".pomoCircle")
            .then(($pc) => {
              expect($pc[0].textContent).to.equal(`0/${testTasks[i].pomos}`);
            });
        }
      });
  });
  it("should store the Task object with the element", () => {
    cy.get("#taskListWrapper")
      .find("pomo-task")
      .then(($el) => {
        for (let i = 0; i < testTasks.length; i++) {
          expect($el[i].task.sessionID).to.equal(0);
          expect($el[i].task.description).to.equal(testTasks[i].description);
          expect($el[i].task.pomosRequired).to.equal(testTasks[i].pomos);
          expect($el[i].task.pomosUsed).to.equal(0);
          expect($el[i].task.title).to.equal(testTasks[i].title);
          expect($el[i].task.completed).to.equal(false);
        }
      });
  });
  it("should be updating the pomo sessions in localstorage", () => {
    cy.window();
    const id = getLatestSessionID()
    const pomoSession = getPomoSession(id);
    expect(pomoSession.id).to.equal(0);
    expect(pomoSession.allTasks.length).to.equal(2);
    expect(pomoSession.mode).to.equal("inactive");
  });
});
