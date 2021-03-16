
describe('Testing Home Page Links', () => {
  it('should go to timer page when clicking create timer and have loadSaved=false', () => {
    cy.visit('/');
    cy.get("#btn-create").parent().then(async ($el) => {
      console.log($el[0]);
      expect($el[0].href).to.equal(`http://localhost:8080/timer.html?loadSaved=false`)
    });
  });
  it('should go to timer page when clicking create timer and have loadSaved=true', () => {
    cy.visit('/');
    cy.get("#btn-check-leftover").parent().then(async ($el) => {
      console.log($el[0]);
      expect($el[0].href).to.equal(`http://localhost:8080/timer.html?loadSaved=true`)
    });
  });
})