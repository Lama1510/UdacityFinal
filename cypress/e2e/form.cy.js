
/* global describe, it, beforeEach, cy */

// Prevent Cypress from failing on uncaught exceptions in app code


describe('Study Set App Tests', () => {

  beforeEach(() => {
    cy.visit('http://localhost:1234');
    cy.get('#cardSetPage').click({ force: true });

  });

  // -------------------------------
  // 1. Add New Set Form
  // -------------------------------
  describe('Create Set Form', () => {
    it('shows and submits the set form with valid input', () => {
      cy.get('[data-cy="toggle_form"]').click();
      cy.get('[data-cy="set_form"]').should('be.visible');
      cy.get('#titleInput').type('Science Set');
      cy.get('input[type="submit"]').click();

      // Check if set was added or success message appears
      // cy.contains('Science Set').should('exist');
    });

    it('prevents submit when title is empty', () => {
      cy.get('[data-cy="toggle_form"]').click();
      cy.get('[data-cy="set_form"]').should('be.visible');
      cy.get('input[type="submit"]').click();
    });
  });

  // -------------------------------
  // 2. Add New Card Form
  // -------------------------------




   describe('Create Card Form', () => {
  beforeEach(() => {
    // Visit your app before each test (change this URL if needed)
     cy.visit('http://localhost:1234');
    cy.get('#cardSetPage').click({ force: true });
  });

  const openFirstCardAndForm = () => {
    cy.get('.cardSets').first().click();
    cy.get('[data-cy="toggle_form"]').should('exist').click();
    cy.get('.notVisible').invoke('removeClass', 'notVisible');
  };

  it('shows and submits card form with valid inputs', () => {
    openFirstCardAndForm();

    // Fill in form fields
    cy.get('#termInput').type('Science Term');
    cy.get('#descriptionInput').type('Description for Science Term');

    // Submit the form
    cy.get('input[type="submit"]').click();

    // Assert that form submission had an effect (modify as needed)
    cy.contains('Science Term').should('exist');
  });

  it('prevents submit when inputs are empty', () => {
    openFirstCardAndForm();

    // Try submitting with empty inputs
    cy.get('input[type="submit"]').click();

 
  });
});









})