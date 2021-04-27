/* global Given, Then, When */

import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage

Given("acesso o site saucelabs", () => {
    loginPage.acessarSite();
})

When("inserir os dados do usuario", () => {
    loginPage.efetuarLogin();
})

Then("login efetuado com sucesso", () => {
    loginPage.visualizarBotaoLogout();
})