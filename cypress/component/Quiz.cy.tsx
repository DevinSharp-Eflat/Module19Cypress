import React from 'react'
import Quiz from "../../client/src/components/Quiz"

describe('<Quiz />', () => {
  it('Should render the Quiz component', () => {
    cy.mount(<Quiz />)
  })

  it("Should display the start quiz button that when clicked begins the quiz", () => {
    cy.mount(<Quiz />)
    cy.get('button').should('be.visible').click();
  })

  it("The quiz loads 10 different questions and associated answers", () => {
    cy.mount(<Quiz />)
    cy.get('button').should('be.visible').click().then(() => {
      Cypress._.times(10, () => {
        cy.get('button').contains(1).click();
      });
    })
  });

  it("The user score is displayed along with a button to take the quiz again", () => {
    cy.mount(<Quiz />)
    cy.get('button').should('be.visible').click().then(() => {
      Cypress._.times(10, () => {
        cy.get('button').contains(1).click();
      });
      cy.get('h2').should("be.visible").contains("Quiz Completed");
      cy.get('.alert').should('be.visible').contains("Your score:");
    })
  });

  it("Pressing the take quiz again button begins the quiz again", () => {
    cy.mount(<Quiz />)
    cy.get('button').should('be.visible').click().then(() => {
      Cypress._.times(10, () => {
        cy.get('button').contains(1).click();
      });
      cy.get('h2').should("be.visible").contains("Quiz Completed");
      cy.get('.alert').should('be.visible').contains("Your score:");
    cy.get('button').should('be.visible').contains('Take New Quiz').click();
    })
  });
});
