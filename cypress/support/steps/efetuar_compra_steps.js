/* global Given, Then, When */

import EfetuarCompra from '../pageobjects/EfetuarCompra'
const efetuarCompra = new EfetuarCompra

When("efetuar uma compra", () => {
    efetuarCompra.adicionatItem();
    efetuarCompra.efetuarCheckout();
})

Then("compra efetuada com sucesso", () => {
    efetuarCompra.compraConcluida();
})
