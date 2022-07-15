class index_page{

    search = (element) => {
        cy.fixture('ejercicio.json').then((selectors) => {
            cy.get(selectors.boton_busqueda).click({force: true});
            cy.get(selectors.busqueda).type(element);
            cy.get(selectors.boton_busqueda).click();
        })
    }

}
export default new index_page();