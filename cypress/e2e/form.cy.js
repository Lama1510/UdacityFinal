describe('Create Set Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234/create-set');
  });

  it('submits form with valid input', () => {
    cy.get('#set-name').type('Science Set');
    cy.get('#submit-set').click();
    cy.contains('Set created successfully'); // Adjust based on success message
  });

  it('shows error for empty input', () => {
    cy.get('#submit-set').click();
    cy.contains('Set name is required'); // Adjust based on actual error message
  });
});

describe('Add Card Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234/add-card');
  });

  it('submits form with valid input', () => {
    cy.get('#question').type('What is the capital of France?');
    cy.get('#answer').type('Paris');
    cy.get('#submit-card').click();
    cy.contains('Card added'); // Adjust based on success message
  });

  it('shows error for empty input', () => {
    cy.get('#submit-card').click();
    cy.contains('Question is required');
    cy.contains('Answer is required');
  });
});
