describe('Check Recipe Page', () => {
    it('Visits the app root url', () => {
      cy.visit('/favorites')
      cy.contains('h1', 'Your Favorite Recipes')
    })
  })
  