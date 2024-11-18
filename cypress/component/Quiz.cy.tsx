import React from 'react'
import Quiz from "../../client/src/components/Quiz"
import { getQuestions } from '../../client/src/services/questionApi';
//import Quiz from '../../../client/src/components/Quiz'

const testQuestions = [
  {
    "question": "What is the output of print(2 ** 3)?",
    "answers": [
      { "text": "6", "isCorrect": false },
      { "text": "8", "isCorrect": true },
      { "text": "9", "isCorrect": false },
      { "text": "12", "isCorrect": false }
    ]
  },
  {
    "question": "Which of the following is a mutable data type in Python?",
    "answers": [
      { "text": "str", "isCorrect": false },
      { "text": "tuple", "isCorrect": false },
      { "text": "list", "isCorrect": true },
      { "text": "int", "isCorrect": false }
    ]
  },
  {
    "question": "What is the keyword used to define a function in Python?",
    "answers": [
      { "text": "function", "isCorrect": false },
      { "text": "func", "isCorrect": false },
      { "text": "def", "isCorrect": true },
      { "text": "define", "isCorrect": false }
    ]
  },
  {
    "question": "Which of the following is used to create an empty set?",
    "answers": [
      { "text": "{}", "isCorrect": false },
      { "text": "[]", "isCorrect": false },
      { "text": "set()", "isCorrect": true },
      { "text": "()", "isCorrect": false }
    ]
  },
  {
    "question": "What is the output of len('hello world')?",
    "answers": [
      { "text": "10", "isCorrect": false },
      { "text": "11", "isCorrect": true },
      { "text": "12", "isCorrect": false },
      { "text": "13", "isCorrect": false }
    ]
  },
  {
    "question": "Which method is used to remove whitespace from the beginning and end of a string?",
    "answers": [
      { "text": "strip()", "isCorrect": true },
      { "text": "trim()", "isCorrect": false },
      { "text": "clean()", "isCorrect": false },
      { "text": "remove()", "isCorrect": false }
    ]
  },
  {
    "question": "What does the // operator do in Python?",
    "answers": [
      { "text": "Performs integer division", "isCorrect": true },
      { "text": "Performs floating-point division", "isCorrect": false },
      { "text": "Calculates the power of a number", "isCorrect": false },
      { "text": "Performs a logical AND operation", "isCorrect": false }
    ]
  },
  {
    "question": "Which of the following is a valid variable name in Python?",
    "answers": [
      { "text": "1_variable", "isCorrect": false },
      { "text": "variable_1", "isCorrect": true },
      { "text": "variable-1", "isCorrect": false },
      { "text": "variable 1", "isCorrect": false }
    ]
  },
  {
    "question": "What is the output of type(3.14)?",
    "answers": [
      { "text": "<class 'int'>", "isCorrect": false },
      { "text": "<class 'float'>", "isCorrect": true },
      { "text": "<class 'complex'>", "isCorrect": false },
      { "text": "<class 'decimal'>", "isCorrect": false }
    ]
  },
  {
    "question": "Which of the following statements is used to handle exceptions in Python?",
    "answers": [
      { "text": "catch", "isCorrect": false },
      { "text": "except", "isCorrect": true },
      { "text": "handle", "isCorrect": false },
      { "text": "try", "isCorrect": false }
    ]
  }
];

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
