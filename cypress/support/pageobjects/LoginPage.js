/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements
const url = Cypress.config("baseUrl")

class LoginPage {
    // ACESSAR O SITE
    acessarSite() {
        cy.visit(url)
    }

    // INSERE OS DADOS DE LOGIN E VALIDA SE FOI EFETUADO COM SUCESSO
    efetuarLogin() {
        cy.get(loginElements.campoUserName()).type("standard_user")
        cy.get(loginElements.campoPassword()).type("secret_sauce")
        cy.get(loginElements.botaoLogin()).click()
    }
  
    // VERIFICA SE O LOGIN FOI EFETUADO
    visualizarBotaoLogout() {
        cy.get(loginElements.menuLateral()).click
        cy.get(loginElements.logout()).should('contain', 'Logout')
    }
}

export default LoginPage;