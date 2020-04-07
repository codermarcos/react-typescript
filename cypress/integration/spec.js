// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

describe('App test example', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it(
    'Show correct title',
    () => {
      cy.document()
        .title()
        .should('include', 'Home')
    }
  )

  it(
    'Show correct description',
    () => {
      cy.document()
        .get('meta[name="description"]')
        .should('have.attr', 'content', 'Home description')
    }
  );
})
