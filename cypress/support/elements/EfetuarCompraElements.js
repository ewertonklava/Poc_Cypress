class EfetuarCompraElements {
  botaoAddItem = () => { return '[data-test=add-to-cart-sauce-labs-backpack]' }

  btnCarrinho = () => { return '.shopping_cart_link' }
  btnCheckuout = () => { return '.btn_action' }
  campoPrimeroNome = () => { return '[data-test=firstName]' }
  campoUltimoNome = () => { return '[data-test=lastName]' }
  campoZipCode = () => { return '[data-test=postalCode]' }
  btnContinue = () => { return '.btn_primary' }
  btnFinish = () => { return '.btn_action' }
  msgCompraConcluida = () => { return '.complete-header' }
}

export default EfetuarCompraElements;

