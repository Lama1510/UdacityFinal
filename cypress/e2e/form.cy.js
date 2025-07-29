
/* global describe, it, beforeEach, cy */

describe('Form Tests', () => {
  beforeEach(() => {
    cy.visit('index.html'); // Change if your entry point is different
  });

  describe('Create Set Form', () => {
    it('submits form with valid input (happy path)', () => {
      cy.get('[data-cy="set_form"]').should('exist').within(() => {
        cy.get('#titleInput').type('Science Set');
        cy.root().submit(); // submits the form
      });
      cy.contains('Science Set').should('exist');
    });

    it('shows error when submitting empty title (unhappy path)', () => {
      cy.get('[data-cy="set_form"]').within(() => {
        cy.get('#titleInput').clear();
        cy.root().submit();
      });
      cy.contains('TITLE CANNOT BE EMPTY').should('exist');
    });
  });

  describe('Create Card Form', () => {
    beforeEach(() => {
      // Assuming clicking on a set opens the card form
      // Simulate that interaction if needed
      cy.get('[data-cy="set_form"]').within(() => {
        cy.get('#titleInput').type('Math Set');
        cy.root().submit();
      });
      cy.contains('Math Set').click();
    });

    it('submits form with valid inputs (happy path)', () => {
      cy.get('[data-cy="card_form"]').should('exist').within(() => {
        cy.get('#termInput').type('Equation');
        cy.get('#descriptionInput').type('A mathematical statement');
        cy.root().submit();
      });
      cy.contains('Equation').should('exist');
      cy.contains('A mathematical statement').should('exist');
    });

    it('shows error when submitting empty fields (unhappy path)', () => {
      cy.get('[data-cy="card_form"]').within(() => {
        cy.get('#termInput').clear();
        cy.get('#descriptionInput').clear();
        cy.root().submit();
      });
      cy.contains('TERM AND DESCRIPTION CANNOT BE EMPTY').should('exist');
    });

    it('shows error when term is empty only', () => {
      cy.get('[data-cy="card_form"]').within(() => {
        cy.get('#termInput').clear();
        cy.get('#descriptionInput').type('Only description');
        cy.root().submit();
      });
      cy.contains('TERM CANNOT BE EMPTY').should('exist');
    });

    it('shows error when description is empty only', () => {
      cy.get('[data-cy="card_form"]').within(() => {
        cy.get('#termInput').type('Only term');
        cy.get('#descriptionInput').clear();
        cy.root().submit();
      });
      cy.contains('DESCRIPTION CANNOT BE EMPTY').should('exist');
    });
  });
});
