const portfolioElementLocators = require('../PageElements/PortfolioPageElements.json')
export class portfolioPageElements{

    portfolioButton(){
        cy.get('.simplebar-content > .sidebar-nav > [href="/Portfolios"]')
            .contains('Portfolios')
        cy.get(portfolioElementLocators.PortfolioPageLocators.menu_button).click()
    }

    addPortfolio(){
        cy.get('.no-img').contains('Add Portfolio')
        cy.get(portfolioElementLocators.PortfolioPageLocators.add_portfolio).click()
    }

    portfolioName(pName){
        cy.get('.col-xl-10 > .mb-3 > .form-control').should('have.attr', 'placeholder', 'Portfolio Name')
        cy.get(portfolioElementLocators.PortfolioPageLocators.portfolio_name).type(pName)
    }

    ownership(value){
        cy.get('.percentInput > .mb-3 > .form-control').should('have.attr', 'placeholder', '%')
        cy.get(portfolioElementLocators.PortfolioPageLocators.ownership_per).type('100')
    }

    save(){
        cy.get('.text-end > .btn-md').contains('Save')
        cy.get(portfolioElementLocators.PortfolioPageLocators.save_button).click()
    }

    validatePortfolio(PUName){
        cy.get(portfolioElementLocators.PortfolioPageLocators.portfolio_username).should('have.text', PUName)
    }

}    