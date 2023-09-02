/// <reference types ="Cypress" />

import { signupPageElements } from "../../PageObjects/PageActions/SignupPageActions";


const Signup_Elements = new signupPageElements

describe('User want to register new Account', () => {

    it('Validate user is able to Signup using Email', () => {
   /*   Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      }) */
      cy.visit('/',  { timeout: 1000000 }, {failOnStatusCode: false})
      Signup_Elements.signup()
      Signup_Elements.sbutton()
      Signup_Elements.title()
    // This Function will Generate the UserName Last Name
      function generateFirstName() {
        let text = "";
        let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        
        for (let i = 0; i < 10; i++)
        text += alphabet.charAt(Math.floor(Math.random() * alphabet.length))
        return text;  
      }
        const generatedFirstName = generateFirstName()
        Signup_Elements.fname(generatedFirstName)

      // This Function will Generate the UserName Last Name
      function generateLastName() {
        let text = "";
        let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        
        for (let i = 0; i < 10; i++)
        text += alphabet.charAt(Math.floor(Math.random() * alphabet.length))
        return text;  
      }
        const generatedLastName = generateLastName()
        Signup_Elements.lname(generatedLastName)
    
    // Enter new Email Address
    function generateNewUser() {
        let text = "";
        let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        
        for (let i = 0; i < 10; i++)
        text += alphabet.charAt(Math.floor(Math.random() * alphabet.length))
        return text;  
      }
        const generatedNewUserName = generateNewUser()
        Signup_Elements.email(generatedNewUserName)
    // Enter Phone number It will accept everytime the same Number
     Signup_Elements.phone()
     Signup_Elements.password()
     Signup_Elements.checkbox()
     Signup_Elements.signupbutton()
     cy.wait(8000)
    // User will move to Select Plan page
     cy.get('.mb-4').should('have.text', 'Select your plan')
     Signup_Elements.next()
     cy.wait(10000)
    // Now user will move to Units Page
     cy.get('.title').should('have.text', 'How many units do you own?')
     cy.get(':nth-child(1) > .card-body').click( {force: true} )
     Signup_Elements.next()
    // Now user will move to Add Payment Method page
     cy.get('.mb-4').should('have.text', 'Add Payment Method')
     Signup_Elements.cardnumber()
     Signup_Elements.date()
     Signup_Elements.cvc()
     Signup_Elements.holderName()
     Signup_Elements.zipCode()
     Signup_Elements.startFreeTrailButton()
     cy.wait(12000)
     //cy.get('.btn-close').click( {force: true} )
     cy.get('.page-header > h2').should('have.text', 'Dashboard')
     cy.url().should('include', '/Dashboard')
    
    })
})