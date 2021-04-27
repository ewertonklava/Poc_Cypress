Feature: Login site DEMO_SAUCELABS

    @login
    Scenario: Efetuar login no site saucelabs demo
        Given acesso o site saucelabs
        When inserir os dados do usuario
        Then login efetuado com sucesso
