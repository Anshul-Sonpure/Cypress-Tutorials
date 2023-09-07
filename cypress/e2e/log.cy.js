import { Faker, en } from '@faker-js/faker';

const faker = new Faker({ locale: [en] });
const FirstName = faker.person.firstName();
const LastName = faker.person.lastName();
const password= faker.internet.password();
const usrname = FirstName+' '+LastName


describe('Concatenate First Name and Last Name', () => {
    it('Generate and Concatenate Random First Name and Last Name', () => {
       

        // Log the full name to the Cypress console
        cy.log(password+faker.number.int({ min: 100, max: 500 }));
        cy.log(usrname);
        
    });
})
