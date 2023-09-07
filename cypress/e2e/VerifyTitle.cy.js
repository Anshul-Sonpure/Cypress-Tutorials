describe('Verify Title of Web Page', () => {
    it('Verify that the Title displayed is Correct', () => {
       
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.title().should('eq', 'OrangeHRM');
    });
});
