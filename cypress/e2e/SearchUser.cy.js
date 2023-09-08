describe('Search User', () => {
    it('Verify that Admin is able to search user', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('[name="username"]').type('Admin');
        cy.get('[type="password"]').type('admin123');
        cy.get('button[type="submit"]').click();
        cy.title().should('eq', 'OrangeHRM');
        let user = cy.xpath("//p[@class='oxd-userdropdown-name']").then(($value) => {
            user = $value.text();
            })
        cy.xpath("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name' and .='Admin']").click();
        cy.xpath("//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']")
        .type('Admin');
        cy.xpath("//label[@class='oxd-label' and .='User Role']/../..//div[@class='oxd-select-text-input' and .='-- Select --']")
        .click({force: true});
        cy.xpath("//div[@role ='option']//span[.='Admin']").click();
        cy.xpath("//input[@placeholder='Type for hints...']").type('Co');
        cy.wait(5000);
        cy.xpath("//div[@role='option']//span").trigger('mouseover').click();
        
        cy.xpath("//label[@class='oxd-label' and .='Status']/../..//div[@class='oxd-select-text-input' and .='-- Select --']")
        .click({force: true});
        cy.xpath("//span[.='Enabled']").click();
        cy.xpath("//button[@type='submit']").click({force: true});
        //cy.wait(2500);
        cy.xpath("//span[.='(1) Record Found']").should('have.text', '(1) Record Found');
        cy.xpath("//div[@class='oxd-table-cell oxd-padding-cell']//div[.='Enabled']")
        .should('have.text','Enabled');

    
    });
});