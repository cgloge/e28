// https://docs.cypress.io/api/introduction/api.html

describe('Check Header', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Easy, delicious, and extra share-able recipes!')
  })
})
