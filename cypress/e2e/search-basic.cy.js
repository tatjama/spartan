describe('search basics', () => {
   it('should render nav', () => {
        cy.visit('http://localhost:3000/search');
        cy.get('nav');
        cy.get('nav').find('h2').contains('OMDb API');
        cy.get('nav').contains('to Home').click();
        cy.visit('http://localhost:3000');
    });

    it('should render input fields', () => {
        cy.visit('http://localhost:3000/search');
        cy.get('input').should('have.length',1);
        cy.get('i').should('have.length',1);
    });

    it('should render select fields', () => {
        cy.visit('http://localhost:3000/search');
        cy.get('#types').should('have.length',1);
        cy.get('#years').should('have.length',1);
    });
    
    it('should render error', () => {
         cy.visit('http://localhost:3000/search');
        cy.get('.error').contains('Incorrect IMDb ID.');
    })
    

    it('should fill search field', () => {
        cy.visit('http://localhost:3000/search');
        cy.get('input').type('friends');
        cy.get('.listMovies').find('section').should('have.length', 10);
        cy.get('.active').should('have.length', 2);
        cy.get('.active').contains('1'); 
        cy.get('.page').last().contains('261');
    });

    it('should choose type', () => {
        cy.visit('http://localhost:3000/search');
        cy.get('input').type('friends');
        cy.get('#types').select('series');
        cy.get('.listMovies').find('section').should('have.length', 10);
        cy.get('.active').should('have.length', 2);
        cy.get('.active').contains('1'); 
        cy.get('.page').last().contains('59');
        cy.get('#types').select('movie');
        cy.get('.page').last().contains('199');
        cy.get('#types').select('episode');
        cy.get('.listMovies').find('section').should('have.length', 0);
        cy.get('.error').contains('Movie not found');        
    });

    it('should choose year', () => {
        cy.visit('http://localhost:3000/search');
        cy.get('input').type('friends');
        cy.get('#years').select('2022');
        cy.get('.listMovies').find('section').should('have.length', 10);
        cy.get('.active').should('have.length', 2);
        cy.get('.active').contains('1'); 
        cy.get('.page').last().contains('8');
        cy.get('#types').select('movie');
        cy.get('.page').last().contains('5');
        cy.get('#types').select('episode');
        cy.get('.listMovies').find('section').should('have.length', 0);
        cy.get('.error').contains('Movie not found');        
    });

    it('should open and close single movie', () => {
        cy.visit('http://localhost:3000/search');
        cy.get('input').type('friends');
        cy.get('.listMovies').find('section').first().click();
        cy.get('.background').find('.module').find('article');
        cy.get('.background').find('.module').find('img');
        cy.get('.close').click();
        cy.get('.module').should('not.exist');
        cy.get('.background').should('not.exist');
    });

    it('should choose another page', () => {
        cy.visit('http://localhost:3000/search');
        cy.get('input').type('friends');
        cy.get('#types').select('series');
        cy.get('#years').select('2020');
        cy.get('.active').contains('1');
        cy.get('.page').contains('3').click();
        cy.get('.active').contains('3');
        cy.get('.page').last().click();
        cy.get('.active').contains('6');
        cy.get('.page').last().click();
        cy.get('.active').contains('6');
    });

});