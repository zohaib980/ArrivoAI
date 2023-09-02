/// <reference types ="Cypress" />

import { portfolioPageElements } from "../../PageObjects/PageActions/AddPortfolio"
import { loginPageElements } from "../../PageObjects/PageActions/LoginPageActions"

const Login_Elements = new loginPageElements
const Portfolio_Elements = new portfolioPageElements

describe('Sign In usign 3 type of Users', () => {

  it('Validate User Essential user is able to add new portfolio with Single Owner with 100% Ownership ', () => {
    cy.visit('/',  { timeout: 1000000 }, {failOnStatusCode: false})
    Login_Elements.signin()
    Login_Elements.username('rafia+24/7.landlord@vimware.com')
    Login_Elements.Password('Qwerty12#')
    Login_Elements.LoginButton()
    cy.get('.page-header > h2').should('have.text', 'Dashboard')
    Portfolio_Elements.portfolioButton()
    cy.url().should('include', '/Portfolios')
    cy.get('h2').should('have.text', 'Portfolios')
    Portfolio_Elements.addPortfolio()
    cy.wait(3000)
    cy.get('.mb-5').should('have.text', 'General info')
    // This function will create a unique name for Portfolio
      function generatePortfolioName() {
        let text = "";
        let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        
        for (let i = 0; i < 10; i++)
        text += alphabet.charAt(Math.floor(Math.random() * alphabet.length))
        return text;  
      }
    const generatedPortfolioName = generatePortfolioName()
    Portfolio_Elements.portfolioName(generatedPortfolioName)
    Portfolio_Elements.ownership()
    cy.get('.blank').should('have.text', '100%')
    Portfolio_Elements.save()
    cy.url().should('include', '/Portfolios')
    Portfolio_Elements.validatePortfolio(generatedPortfolioName)
  })
})    