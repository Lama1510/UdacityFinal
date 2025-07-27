/// <reference types="cypress" />

describe('Navigation Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234'); // Replace with the correct port
  });

  it('navigates to Card Set page', () => {
    cy.contains('Card Set').click();
    cy.url().should('include', '/card-set');
    cy.contains('Card Sets');
  });

  it('navigates to About page', () => {
    cy.contains('About').click();
    cy.url().should('include', '/about');
    cy.contains('About Us');
  });

  it('navigates to Home page', () => {
    cy.contains('Home').click();
    cy.url().should('eq', 'http://localhost:1234/');
    cy.contains('Welcome');
  });
});
