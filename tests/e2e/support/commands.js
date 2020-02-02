// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import axios from 'axios'

Cypress.Commands.add('mock_scenario', scenario => {
  let requestParams

  switch (scenario) {
    case 'full': {
      requestParams = {
        method: 'POST',
        url: 'http://localhost:3333/robohydra-admin/rest/plugins/myproject/scenarios/200_Full_response',
        headers: {
          'Content-type': 'application/x-www-form-urlencoded'
        },
        data: 'active=true'
      }
      break
    }

    case '500': {
      requestParams = {
        method: 'POST',
        url: 'http://localhost:3333/robohydra-admin/rest/plugins/myproject/scenarios/500_Internal_Server_Error',
        headers: {
          'Content-type': 'application/x-www-form-urlencoded'
        },
        data: 'active=true'
      }
      break
    }
  }

  axios.request(requestParams)
})
