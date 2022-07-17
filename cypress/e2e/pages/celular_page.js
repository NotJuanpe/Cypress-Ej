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

    exitencia_60_cuotas = () => {

        let cuotas_60 = false;

        cy.fixture('ejercicio.json').then((selectors) => {
            cy.get(selectors.tabla).each((cuotas, interes, contratacion) => {
                if(cuotas.text() == '60'){
                    cuotas_60 = true;
                }
            });
        }).then(() => {
            expect(cuotas_60).to.be.false;
            cy.log('Banco Credicop y tarjeta Visa no poseen 60 cuotas')
        });
    }

    seleccionar_caracteristicas = () => {
        cy.fixture('ejercicio.json').then((selectors) => {
            cy.get(selectors.caracteristicas_destacadas).click()
        })
    }

    es_ecologico = () => {

        let ecologico = false;

        cy.fixture('ejercicio.json').then((selectors) => {
            if(selectors.porcetaje_eco <= '55'){
                ecologico = true;
                cy.log('El celular es eco-frienly')
            }else{
                cy.log('El celular no es eco-frienly')
            }

        });
    }

    


    
}
export default new celular_page();