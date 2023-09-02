/// <reference types ="Cypress" />

import { loginPageElements } from "../../PageObjects/PageActions/LoginPageActions"

const Login_Elements = new loginPageElements

describe('Sign In usign 3 type of Users', () => {

  it('Validate User is able to login using Growth User', () => {
 /*   Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    }) */
    cy.visit('/',  { timeout: 1000000 }, {failOnStatusCode: false})
    Login_Elements.signin()
    Login_Elements.username('maham+7/4.pm@vimware.com')
    Login_Elements.Password('Qwerty12#')
    Login_Elements.LoginButton()
    cy.get('.page-header > h2').should('have.text', 'Dashboard')
  })

  it ('Validate User is able to login using Essential User', () => {
    cy.visit('/',  { timeout: 1000000 }, {failOnStatusCode: false})
    Login_Elements.signin()
    Login_Elements.username('rafia+24/7.landlord@vimware.com')
    Login_Elements.Password('Qwerty12#')
    Login_Elements.LoginButton()
    cy.get('.page-header > h2').should('have.text', 'Dashboard')
  })

  it('Validate User is able to login using Free User', () => {
    cy.visit('/',  { timeout: 1000000 }, {failOnStatusCode: false})
    Login_Elements.signin()
    Login_Elements.username('maham+free.test22@vimware.com')
    Login_Elements.Password('Qwerty12#')
    Login_Elements.LoginButton()
    cy.get('.page-header > h2').should('have.text', 'Dashboard')
  })
})