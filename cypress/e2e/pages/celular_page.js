class celular_page{

    chequear_cuotas = () => {
        cy.fixture('ejercicio.json').then((selectors) => {
            cy.get(selectors.doce_cuotas).contains('12 cuotas')
        })
    }

    chequear_info_financiacion = () => {
        cy.fixture('ejercicio.json').then((selectors) => {
            cy.get(selectors.info_financiacion).click()
        })
    }

    seleccionar_banco_tarjeta = () => {
        cy.fixture('ejercicio.json').then((selectors) => {
            cy.get(selectors.banco).select('Credicoop')
            cy.get(selectors.tarjeta).select('Visa')

        })
    }


    
}
export default new celular_page();