class productos_page{

    click_en_celular = () => {
        cy.fixture('ejercicio.json').then((selectors) => {
            cy.get(selectors.celular).click()
        })
    }

    click_precio_filtro = () => {
        cy.fixture('ejercicio.json').then((selectors) => {
            cy.get(selectors.filtro_boton).click()
            cy.get(selectors.precio_filtro).click()
        })
    }

    click_almacenamientro_filtro = () => {
        cy.fixture('ejercicio.json').then((selectors) => {
            cy.get(selectors.filtro_boton).click()
            cy.get(selectors.memoria_filtro).click({force:true})
        })
    }
    
    articulos_encontrados = () => {
        cy.fixture('ejercicio.json').then((selectors) => {
            cy.get(selectors.cantidad_equipos).invoke('text').then(cy.log)

        })
    }

    tercer_equipo = () => {
        cy.fixture('ejercicio.json').then((selectors) => {
            cy.get(selectors.tercer_producto).click()
        })
    }



}
export default new productos_page();