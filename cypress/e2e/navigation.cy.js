/// <reference types="cypress" />
/* global describe, it, beforeEach, cy */

describe('Navigation Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234'); // Or your actual dev server URL
  });

  it('navigates to Home page', () => {
    cy.get('#homePage').click();
    //cy.url().should('include', '/'); // Adjust if you use routing
    cy.get('[data-cy="header"]').should('contain', 'Study Night');
  });

  it('navigates to About page', () => {
    cy.get('#aboutPage').click();
  });

  it('navigates to Card Sets page', () => {
    cy.get('#cardSetPage').click();
  });
});
