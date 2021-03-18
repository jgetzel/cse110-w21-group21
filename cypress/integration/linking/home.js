
describe('Testing Home Page Links', () => {
  beforeEach(() => {
    cy.visit('index.html');
  })
  it('should go to timer page when clicking create timer and have loadSaved=false', () => {
    cy.get("#btn-create").parent().then(($el) => {
      expect($el[0].href).to.equal(`http://localhost:8080/timer.html?loadSaved=false`)
    });
  });
  it('should go to timer page when clicking create timer and have loadSaved=true', () => {
    cy.get("#btn-check-leftover").parent().then(($el) => {
      expect($el[0].href).to.equal(`http://localhost:8080/timer.html?loadSaved=true`)
    });
  });
  it('should have correct links on the header', () => {
    cy.get("pomo-header").shadow().find("a").then(($el) => {
      expect($el[0].href).to.equal(`http://localhost:8080/index.html`)
      expect($el[1].href).to.equal(`http://localhost:8080/history.html`)
    });
  });
})