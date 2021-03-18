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
          verifyTaskObject($el[i].task, testTasks[i]);
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
  it("should start timer and set a current task", () => {
    cy.get(".startTimerWrapper .startTimer").shadow().find("button").then(($el) => {
      console.log($el);
      cy.get($el[0]).click({force: true});
    });
    cy.get(".currentTaskWorkTime").find("pomo-task").then(($el) => {
      verifyTaskObject($el[0].task, testTasks[0]);
    });
  });
});
