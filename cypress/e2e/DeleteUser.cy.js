describe('Delete User', () => {
    it('Verify that Admin is able to delete user', () => {
        cy.AdminLogin();
        cy.xpath("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name' and .='PIM']").click();
        cy.get(':nth-child(2) > .oxd-table-header-sort > .bi-arrow-down-up').click({force: true});
        cy.get('.--active > ul > :nth-child(1) > .oxd-text').click({force: true});
        
        cy.xpath("//div[.='0050']/..//input[@type='checkbox']").click({force: true});
        cy.xpath("//div[.='0050']/..//i[@class='oxd-icon bi-trash']").click({force: true});
        cy.xpath("//button[.=' Yes, Delete ']").click({force: true});
        cy.xpath("//p[.='Successfully Deleted']").should('have.text', 'Successfully Deleted');
    })
})