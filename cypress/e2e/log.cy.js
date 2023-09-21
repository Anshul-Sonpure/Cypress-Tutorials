import '../support/commands';
import { Faker, en } from '@faker-js/faker';

const faker = new Faker({ locale: [en] });
const FirstName = faker.person.firstName();
const LastName = faker.person.lastName();
describe('Verify PageLoad Time of Web Page', () => {
  it('Verify that the PageLoad Time is Correct', () => {
    cy.logToExternalFile("Launched and logging to application")
    cy.AdminLogin();
   
    cy.xpath("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name' and .='PIM']").click();
    cy.logToExternalFile("Clicked on PIM")  
    cy.xpath("//div[@class='orangehrm-header-container']/button").click();
    
    cy.xpath("//input[@name='firstName']").type(FirstName);
    cy.logToExternalFile('Typed into the input field, First Name');
      
    cy.xpath("//input[@name='lastName']").type(LastName);
    cy.logToExternalFile('Typed into the input field,Last Name'); 
  });
});
