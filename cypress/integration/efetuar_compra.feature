Feature: Efetuar compra no site DEMO_SAUCELABS

    Scenario: Efetuar compra no site saucelabs demo
        Given acesso o site saucelabs
        When inserir os dados do usuario
        When efetuar uma compra
        Then compra efetuada com sucesso
