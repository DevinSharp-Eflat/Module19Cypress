describe('Python Quiz', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3001/');
    });

    it('should display the Start Quiz button on the screen that when clicked begins the test', () => {
        cy.visit('http://localhost:3001/');
        cy.get('button').should('be.visible').contains("Start Quiz");
        cy.get('button').click();
    });

    it('Should display a question with multiple choice answers below, each with a clickable button', () => {
        cy.visit('http://localhost:3001/');
        cy.get('button').click().then(() => {
            cy.get('h2').should("be.visible");
            cy.get('button').click({multiple: true});
        });
    });
    it('After selecting 10 answers, the users score should be displayed', () => {
        cy.get('button').click().then(() => {
            Cypress._.times(10, () => {
                cy.get('button').contains(1).click();
            });
            cy.get('h2').should("be.visible").contains("Quiz Completed");
            cy.get('.alert').should('be.visible').contains("Your score:");
            cy.get('button').should('be.visible').contains('Take New Quiz').click();
        });
    })
})

