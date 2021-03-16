import {
  getPomoSession,
  getLatestSessionID,
  POMO_SESSION_MODES,
} from "../../../source/assets/scripts/database/session";
describe("Testing leaving an active session", () => {
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
  // add some mock up tasks first and start timer
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
    cy.get(".startTimerWrapper .startTimer")
      .shadow()
      .find("button")
      .then(($el) => {
        console.log($el);
        cy.get($el[0]).click({ force: true });
      });
  });
  it("should prompt user about leaving page for home or history page", () => {
    cy.get("pomo-header").shadow().find("a").then(($el) => {
      cy.get($el[0]).click({ force: true });
    });
    cy.on('window:confirm', (confirmText) => {
      expect(confirmText).to.equal("Are you sure want to leave? This will automatically complete your session");
      return false;
    });
  });
  it("should complete session if user leaves or keep it active if user does not leave", () => {
    cy.get("pomo-header").shadow().find("a").then(($el) => {
      cy.get($el[0]).click({ force: true });
    });
    cy.on('window:confirm', (confirmText) => {
      expect(confirmText).to.equal("Are you sure want to leave? This will automatically complete your session");
      return false;
    });
    cy.window();
    let id = getLatestSessionID();
    let pomoSession = getPomoSession(id);
    expect(pomoSession.mode).to.equal(POMO_SESSION_MODES.ACTIVE);
  });
  it.only("should not complete session if user keeps it active if user does not leave", () => {
    cy.window();
    cy.get("pomo-header").shadow().find("a").then(($el) => {
      cy.get($el[0]).click({ force: true });
    });
    cy.on('window:confirm', (confirmText) => {
      expect(confirmText).to.equal("Are you sure want to leave? This will automatically complete your session");
      return true;
    });
    cy.on('window:before:unload', () => {
      let id = getLatestSessionID();
      let pomoSession = getPomoSession(id);
      console.log(pomoSession);
    });
  });
});
