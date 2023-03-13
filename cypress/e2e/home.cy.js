/// <reference types = "Cypress"/>

describe('basics home', () => {
  it('should have main ol with 3 li', () => {
    cy.visit('http://localhost:3000');
    cy.get('#root > ol').should('have.length', 1);
    cy.get('#root > ol > li').should('have.length', 3);
    cy.get('#root > ol > li').first().contains('Bash');
    cy.get('#root > ol > li').eq(1).contains('React');
    cy.get('#root > ol > li').last().contains('JavaScript');
    
  });

  it('should download bash script', () => {
    cy.visit('http://localhost:3000');
    cy.get('pre').should('have.length', 1);
    
    cy.get('#types').select('json');
    cy.contains('Download').click();

    cy.get('#types').select('text');
    cy.contains('Download').click();

    cy.get('#types').select('sh');
    cy.contains('Download').click();
    
  });

  it('should go to react search page', () => {
    cy.visit('http://localhost:3000');
    cy.contains('to Search').click();
    cy.visit('http://localhost:3000/search');
  });

  it('should have java script task result', () => {
    cy.visit('http://localhost:3000');
    cy.get('h4').contains('a=15, b=28, x=4, y=2')
  })
});