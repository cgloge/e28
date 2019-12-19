// https://docs.cypress.io/api/introduction/api.html

describe('Check Recipe Page', () => {
  it('Visits the app root url', () => {
    cy.visit('/recipes')
    cy.contains('h1', 'Easy, delicious, and extra share-able recipes!')
  })
})
