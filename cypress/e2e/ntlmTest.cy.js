const apiconfig = require('../../appconfig.json');

const user = `${apiconfig.username}`;
const password = `${apiconfig.password}`;

describe('Login into the application using Windows Authentication', () => {
    it('Verify that User is able to login', () => {
       
       cy.ntlm(['172.24.0.1:8081'], user, password);
        cy.wait(1500)
        cy.visit('http://172.24.0.1:8081/')
        
    });
});