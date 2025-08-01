/// <reference types="cypress" />
/* global describe, it, beforeEach, cy */

describe("Navigation", () => {
  // Run before every test
  beforeEach(() => {
    cy.visit("http://localhost:1234"); // Replace with your actual local dev URL
  });

  it("should navigate to the About page", () => {
    
    cy.visit("http://localhost:1234/");
    cy.contains("About").should("be.visible");
  });

  it("should navigate to the Home page", () => {
     cy.visit("http://localhost:1234/");
    cy.contains("Home").should("be.visible");
 // Adjust text based on your actual content
  });

  it("should navigate to the card sets  page", () => {
     cy.visit("http://localhost:1234/");
    cy.contains("Card Set").should("be.visible");
 // Adjust text based on your actual content
  });
});
