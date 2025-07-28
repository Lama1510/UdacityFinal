
/* global describe, it, beforeEach, cy */

describe('Add Card Form Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234'); // Adjust as needed
    cy.get('#cardSetPage').click(); // Navigate to Card Set page where the form appears
  });

  it('submits Add Card Form with valid input', () => {
    cy.get('[data-cy="card_form"]').within(() => {
      cy.get('input[name="termInput"]').type('Photosynthesis');
      cy.get('input[name="descriptionInput"]').type('Process by which plants make food.');
      cy.root().submit(); // Submit the form
    });

    // Check if the card was added
    cy.contains('Photosynthesis').should('exist');
    cy.contains('Process by which plants make food.').should('exist');
  });

  it('shows error when both fields are empty', () => {
    cy.get('[data-cy="card_form"]').within(() => {
      cy.root().submit();
    });

    cy.contains('TERM AND DESCRIPTION CANNOT BE EMPTY').should('exist');
  });

  it('shows error when term is empty', () => {
    cy.get('[data-cy="card_form"]').within(() => {
      cy.get('input[name="descriptionInput"]').type('Just a description');
      cy.root().submit();
    });

    cy.contains('TERM CANNOT BE EMPTY').should('exist');
  });

  it('shows error when description is empty', () => {
    cy.get('[data-cy="card_form"]').within(() => {
      cy.get('input[name="termInput"]').type('Just a term');
      cy.root().submit();
    });

    cy.contains('DESCRIPTION CANNOT BE EMPTY').should('exist');
  });
});

