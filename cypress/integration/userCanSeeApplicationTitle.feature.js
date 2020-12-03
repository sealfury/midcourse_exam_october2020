describe('Application main view', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('contains title', () => {
    cy.get("section[name='title']")
      .should('contain', 'GitHub Search engine')
  });
});