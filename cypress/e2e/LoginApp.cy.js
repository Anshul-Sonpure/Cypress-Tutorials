describe('Login into the application', () => {
    it('Verify that User is able to login', () => {
       
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('[name="username"]').type('Admin');
        cy.get('[type="password"]').type('admin123');
        cy.get('button[type="submit"]').click();
        cy.title().should('eq', 'OrangeHRM');
        
    });
});