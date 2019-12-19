describe('Check Recipe Page', () => {
    it('Visits the app create recipe url', () => {

      cy.visit('/create-recipe')
      cy.contains('h1', 'Add a Recipe')
      cy.contains('label', 'URL')
      cy.contains('label', 'Name')
      cy.contains('label', 'Description')
      cy.contains('label', 'Servings')
      cy.contains('label', 'Cook Time')
      cy.contains('label', 'Categories')
      cy.contains('label', 'Ingredients')
    })
  })
  