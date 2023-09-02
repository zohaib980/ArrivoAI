const loginElementLocators = require('../PageElements/LoginPageElements.json')
export class loginPageElements{

    signin(){
        cy.get('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > button:nth-child(4)')
        .contains('Sign In with Email')
        cy.get(loginElementLocators.LoginPageLocators.signin_button).click()
    }

    username(emailid){
        cy.get('#email').should('have.attr', 'placeholder', 'Enter Email')
        cy.get(loginElementLocators.LoginPageLocators.username_text).type(emailid)
        return
    }

    Password(pass){
        cy.get('#password').should('have.attr', 'placeholder', 'Enter Password')
        cy.get(loginElementLocators.LoginPageLocators.Password_text).type(pass, { force: true })
        return
    }

    LoginButton(){
        cy.get('#signin')
            .should('have.text', 'Sign In')
        cy.get(loginElementLocators.LoginPageLocators.login_button).click({force: true }).wait(10000)
        return
    }
        
}