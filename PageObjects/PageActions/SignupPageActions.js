const signupElementLocators = require('../PageElements/SignupPageElements.json')

export class signupPageElements{

    signup(){
        cy.get('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > button:nth-child(1)')
        .contains('Sign Up')
        cy.get(signupElementLocators.SignupPageLocators.signup_tab).click({force: true })
    }

    sbutton(){
        cy.get('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > button:nth-child(4)')
            .contains('Sign Up with Email')
        cy.get(signupElementLocators.SignupPageLocators.signup_button).click({force: true })
    }

    title(){
        cy.get(signupElementLocators.SignupPageLocators.page_title).should('have.text', 'Sign Up')
    }

    fname(FName){
        cy.get(':nth-child(1) > .form-control').should('have.attr', 'placeholder', 'Enter First Name')
        cy.get(signupElementLocators.SignupPageLocators.first_name).type(FName, { force: true })
    }

    lname(LName){
        cy.get('form > :nth-child(2) > .form-control').should('have.attr', 'placeholder', 'Enter Last Name')
        cy.get(signupElementLocators.SignupPageLocators.last_name).type(LName, { force: true })
    }

    email(newEmail){
        cy.get(':nth-child(3) > .form-control').should('have.attr', 'placeholder', 'Enter Email')
        cy.get(signupElementLocators.SignupPageLocators.email_id).type(newEmail + '@mailinator.com')

    }
    phone(){
        cy.get(':nth-child(4) > .form-control').should('have.attr', 'placeholder', 'Enter Phone Number')
        cy.get(signupElementLocators.SignupPageLocators.phone_number).type('+15166184624', { force: true })
    }

    password(){
        cy.get('.input_group > .form-control').should('have.attr', 'placeholder', 'Enter your password')
        cy.get(signupElementLocators.SignupPageLocators.password).type("Qwerty12#", { force: true })
    }

    checkbox(){
        cy.get(signupElementLocators.SignupPageLocators.check_box).check()
    }

    signupbutton(){
        cy.get("button[type='submit'").contains('Sign Up')
        cy.get(signupElementLocators.SignupPageLocators.submit_button).click({force: true })
    }

    next(){
        cy.get('.w-100').contains('Next')
        cy.get(signupElementLocators.SignupPageLocators.next_button).click({force: true })
    }

    unitNext(){
        cy.get('.w-100').contains('Next')
        cy.get(signupElementLocators.SignupPageLocators.next_button).click({force: true })
    }

    cardnumber(){
        cy.get('.input_group > .form-control').should('have.attr', 'placeholder', '0000 0000 0000 0000')
        cy.get(signupElementLocators.SignupPageLocators.card_number).type('4242424242424242')
    }

    date(){
        cy.get(':nth-child(1) > .mb-3 > .form-control').should('have.attr', 'placeholder', 'MM/YY')
        cy.get(signupElementLocators.SignupPageLocators.date_field).type('0823')
    }

    cvc(){
        cy.get(':nth-child(2) > .mb-3 > .form-control').should('have.attr', 'placeholder', 'CVC')
        cy.get(signupElementLocators.SignupPageLocators.cvc_number).type('123')
    }

    holderName(){
        cy.get(':nth-child(3) > .mb-3 > .form-control').should('have.attr', 'placeholder', 'Enter Name on Card')
        cy.get(signupElementLocators.SignupPageLocators.card_holder_name).type('Test')
    }

    zipCode(){
        cy.get(':nth-child(4) > .mb-3 > .form-control').should('have.attr', 'placeholder', 'Enter Zip Code')
        cy.get(signupElementLocators.SignupPageLocators.zip_code).type('54000')
    }

    startFreeTrailButton(){
        cy.get('.btn-md').contains('Start Free Trial')
        cy.get(signupElementLocators.SignupPageLocators.start_trial_button).click({force: true })

    }

}

