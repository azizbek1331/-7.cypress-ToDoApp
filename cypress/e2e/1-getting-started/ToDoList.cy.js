describe('The Home Page', () => {
    it('succesfully loads', () => {
        cy.visit(" http://localhost:5173/")
    });
    it('add new todo items', () => {
        cy.get('.task-item li')
            .should('have.length', 0)
    });
    it('delete todo items', () => {
        cy.get('task-item li')
            .should('have.length', 0)
        cy.contains('Clear completed').should('not.exist')
    })
})