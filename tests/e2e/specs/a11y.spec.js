// https://docs.cypress.io/api/introduction/api.html

describe('Test A11y with AXE', () => {
  beforeEach(() => {
    cy.mock_scenario('full')
    cy.visit('/list')
    cy.injectAxe()
  })

  it.skip('should run ALL Cypress-Axe tests', () => {
    cy.wait(500)
    cy.checkA11y()
  })

  it('should run Cypress-Axe tests: WCAG 2 A', () => {
    cy.wait(500)
    cy.checkA11y({
      runOnly: {
        type: 'tag',
        values: ['wcag2a']
      }
    })
  })

  it('should run Cypress-Axe tests: WCAG 2 AA', () => {
    cy.wait(500)
    cy.checkA11y({
      runOnly: {
        type: 'tag',
        values: ['wcag2aa']
      }
    })
  })

  it('should run Cypress-Axe tests: WCAG 2 AAA', () => {
    cy.wait(500)
    cy.checkA11y({
      runOnly: {
        type: 'tag',
        values: ['wcag2aaa']
      }
    })
  })

  it('should run Cypress-Axe tests: WCAG 2.1 A', () => {
    cy.wait(500)
    cy.checkA11y({
      runOnly: {
        type: 'tag',
        values: ['wcag21a']
      }
    })
  })

  it('should run Cypress-Axe tests: WCAG 2.1 AA', () => {
    cy.wait(500)
    cy.checkA11y({
      runOnly: {
        type: 'tag',
        values: ['wcag21aa']
      }
    })
  })
})
