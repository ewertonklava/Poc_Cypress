/// <reference types="Cypress" />

import { expect } from 'chai'
import EfetuarCompraElements from '../elements/EfetuarCompraElements'
const efetuarCompraElements = new EfetuarCompraElements

class EfetuarCompraPage {
  adicionatItem() {
    cy.get(efetuarCompraElements.botaoAddItem()).click()
  }

  efetuarCheckout() {
    cy.get(efetuarCompraElements.btnCarrinho()).click()
    cy.get(efetuarCompraElements.btnCheckuout()).click()
    cy.get(efetuarCompraElements.campoPrimeroNome()).type('Ewerton')
    cy.get(efetuarCompraElements.campoUltimoNome()).type('Klava')
    cy.get(efetuarCompraElements.campoZipCode()).type('13600')
    cy.get(efetuarCompraElements.btnContinue()).click()
    cy.get(efetuarCompraElements.btnFinish()).click()
  }
  compraConcluida(){
    expect(efetuarCompraElements.msgCompraConcluida).to.be.exist
  }
}

export default EfetuarCompraPage;