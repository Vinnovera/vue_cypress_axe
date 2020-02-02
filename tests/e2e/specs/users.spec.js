// https://docs.cypress.io/api/introduction/api.html

describe('Test Users list', () => {
  it('should display users header', () => {
    cy.mock_scenario('full')
    cy.visit('/list')
    cy.contains('h1', 'The users list')
  })

  it('should display ten users', () => {
    cy.mock_scenario('full')
    cy.visit('/list')
    cy.get('ul.users-list').within(() => {
      cy.get('li').should('have.length', 10)
    })
  })
})
