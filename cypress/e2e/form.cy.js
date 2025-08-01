
/* global describe, it, beforeEach, cy */

describe("Create Set Form", () => {
  beforeEach(() => {
   cy.visit("http://localhost:1234/");
   cy.get("#cardSetPage").click();

  cy.get("[data-cy='toggle_form']").click();

  cy.get("[data-cy='set_form']").should("be.visible");
  });

  it("submits with valid input (happy path)", () => {
    cy.get("input[name='titleInput']").type("My New Set");
    cy.get("[data-cy='set_form']").submit();
    cy.contains("My New Set").should("be.visible");
  });

  it("shows error when submitted with empty input (unhappy path)", () => {
    cy.get("[data-cy='set_form']").submit();
    cy.contains("TITLE CANNOT BE EMPTY").should("be.visible");
  });
});
