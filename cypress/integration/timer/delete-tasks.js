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
    {
      title: "Happy eggs",
      description: "a task about eggs",
      pomos: 2,
    },
  ];
  const verifyTaskObject = (task, groundTruthTask) => {
    expect(task.sessionID).to.equal(0);
    expect(task.description).to.equal(groundTruthTask.description);
    expect(task.pomosRequired).to.equal(groundTruthTask.pomos);
    expect(task.pomosUsed).to.equal(0);
    expect(task.title).to.equal(groundTruthTask.title);
    expect(task.completed).to.equal(false);
  };
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
  it("should delete tasks when timer is inactive", () => {
    cy.get("#taskListWrapper")
      .find("pomo-task")
      .shadow().then(($el) => {
        cy.get($el[0]).find(".delete-task-btn").then(($el) => {
          cy.get($el[0]).click({force: true});
        });
      });
    cy.get("#taskList").then(($el) => {
      console.log($el[0])
      expect($el[0].childNodes.length).to.equal(2)
    });
  });
  it("should delete current or pending tasks when timer is active", () => {
    cy.get(".startTimerWrapper .startTimer")
    .shadow()
    .find("button")
    .then(($el) => {
      cy.get($el[0]).click({ force: true });
    });
    cy.get("#taskListWrapper")
      .find("pomo-task")
      .shadow().then(($el) => {
        cy.get($el[0]).find(".delete-task-btn").then(($el) => {
          cy.get($el[0]).click({force: true});
        });
      });
    cy.get("#taskList").then(($el) => {
      expect($el[0].childNodes.length).to.equal(1)
    });
    cy.get("#currentTask")
      .find("pomo-task")
      .shadow().then(($el) => {
        cy.get($el[0]).find(".delete-task-btn").then(($el) => {
          cy.get($el[0]).click({force: true});
        });
      });
    cy.get("#taskList").then(($el) => {
      expect($el[0].childNodes.length).to.equal(0)
    });
  });
});