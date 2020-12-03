const { Item } = require("semantic-ui-react");

describe("User can search github", () => {
  beforeEach(() => {
    cy.server();
      cy.route({
        method: 'GET',
        url: 'http://localhost:3000/api/users',
        response: 'fixture:example.json'
      });
    cy.visit("/");
  });

  it('fills in form with correct user info', () => {
      cy.get('[data-cy="search-input"]').type("user1@cypress.io");
      cy.get('[data-cy="search-button"]').click()
      cy.get('[data-cy="search-result"]').should('contain', "user1@cypress.io")
  }); 
})