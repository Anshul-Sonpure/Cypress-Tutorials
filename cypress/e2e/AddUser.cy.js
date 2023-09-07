import { Faker, en } from '@faker-js/faker';

const faker = new Faker({ locale: [en] });
const FirstName = faker.person.firstName();
const LastName = faker.person.lastName();
const password= faker.internet.password()+faker.number.int({ min: 100, max: 500 });
const usrname = FirstName+' '+LastName

describe('Login into the application', () => {
    it('Verify that User is able to login', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('[name="username"]').type('Admin');
        cy.get('[type="password"]').type('admin123');
        cy.get('button[type="submit"]').click();
        cy.title().should('eq', 'OrangeHRM');
        cy.xpath("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name' and .='PIM']").click();
        cy.xpath("//div[@class='orangehrm-header-container']/button").click();
        cy.xpath("//input[@name='firstName']").type(FirstName);
        cy.xpath("//input[@name='lastName']").type(LastName);
        cy.xpath("(//div[@class='oxd-input-group__label-wrapper']//following::input)[5]").clear().type(faker.number.int({ min: 100, max: 500 }));
        cy.xpath("//span[@class='oxd-switch-input oxd-switch-input--active --label-right']").click();
        cy.xpath("(//label[@class='oxd-label oxd-input-field-required' and .='Username']//following::div/input)[1]").type(faker.internet.userName());
        cy.xpath("(//label[@class='oxd-label oxd-input-field-required' and .='Password']//following::div/input)[1]").type(password);
        cy.xpath("//label[@class='oxd-label oxd-input-field-required' and .='Confirm Password']//following::div/input").type(password);
        cy.xpath("//button[@type='submit' and .=' Save ']").click();
        cy.xpath("//h6[@class='oxd-text oxd-text--h6 --strong']").should('contains',usrname);
        
    });
});