/// <reference types="cypress" />
/* global describe, it, beforeEach, cy */

describe('Navigation Tests', () => {
  beforeEach(() => {
    cy.visit('/');  // Adjust baseUrl in cypress.config.js accordingly
  });

  it('navigates to Home page when clicking Home', () => {
    cy.get('[data-cy=nav-home]').click();
    cy.get('h1').should('contain', 'Study Night');
    cy.get('h2').should('contain', 'A Digital Study Solution for the Modern World');
    cy.get('.homeContainer').should('exist');
  });

  it('navigates to Card Set page when clicking Card Set', () => {
    cy.get('[data-cy=nav-card-set]').click();
    cy.get('h2').should('contain', 'Study Set Library');
    cy.get('.cardPageContainer').should('exist');
  });

  it('navigates to About page when clicking About', () => {
    cy.get('[data-cy=nav-about]').click();
    cy.get('h2').should('contain', 'About Study Night');
    cy.get('.aboutContainer').should('exist');
  });
});
