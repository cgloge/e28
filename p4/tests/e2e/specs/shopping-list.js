describe('Check Recipe Page', () => {
    it('Visits the app root url', () => {
      cy.visit('/shopping-list')
      cy.contains('h1', 'Your Shopping List')
    })
  })
  