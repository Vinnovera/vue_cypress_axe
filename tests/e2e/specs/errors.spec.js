// https://docs.cypress.io/api/introduction/api.html

describe('Test Users errors', () => {
  it('should display error message when service is down', () => {
    cy.mock_scenario('500')
    cy.visit('/list')
    cy.get('h1').contains('The users list')
    cy.get('.error-message').contains('Sorry, but something went bananas')
  })
})
