import celular_page from '../e2e/pages/celular_page';
import productos_page from '../e2e/pages/productos_page';
import index_page from '../e2e/pages/index_page';



describe('CP001',function(){
  
  before(function(){
    cy.visit("https://tienda.movistar.com.ar")
    cy.url().should('include', "https://tienda.movistar.com.ar")
    cy.viewport(1280,800)

  })

  it('Que el equipo seleccionado sea el A52',function(){
    index_page.search('A52')
    cy.screenshot()
  })

  it('Seleccionar A52',function(){
    productos_page.click_en_celular()
  })
  
  it('Validar 12 cuotas',function(){
    celular_page.chequear_cuotas()
  })
  

})

describe('CP002',function(){

  before(function(){
    cy.visit("https://tienda.movistar.com.ar")
    cy.url().should('include', "https://tienda.movistar.com.ar")
    cy.viewport(1280,800)


  })

  it('Que se pueda aplicar los filtros , precio',function(){
    productos_page.click_precio_filtro()
  })

  it('Que se pueda aplicar los filtros , almacenamiento',function(){
    productos_page.click_almacenamientro_filtro()
  })
  
  it('Cantidad de articulos encontrados',function(){
    productos_page.articulos_encontrados()
    cy.screenshot()
  })
  
})

describe('CP003',function(){

  before(function(){
    cy.visit("https://tienda.movistar.com.ar")
    cy.url().should('include', "https://tienda.movistar.com.ar")
    cy.viewport(1280,800)

  })

  it('Que el equipo seleccionado sea el tercero de la lista',function(){
    productos_page.tercer_equipo()
  })

  it('Abrir info de financiacion',function(){
    celular_page.chequear_info_financiacion()
  })

  it('Seleccionar Credicoop y Visa',function(){
    celular_page.seleccionar_banco_tarjeta()
  })

  it('Verificar 60 cuotas',function(){
    celular_page.exitencia_60_cuotas()
  })
  
})


describe('CP004',function(){

  before(function(){
    cy.visit("https://tienda.movistar.com.ar")
    cy.url().should('include', "https://tienda.movistar.com.ar")
    cy.viewport(1280,800)


  })

  it('Que el equipo seleccionado sea el Z Flip',function(){
    index_page.search('Z Flip')
    cy.screenshot()
  })

  it('Seleccionar Z Flip',function(){
    productos_page.click_en_celular()
  })

  it('Seleccionar las caracteristicas generales',function(){
    celular_page.seleccionar_caracteristicas()
  })

  it('Es ecologico',function(){
    celular_page.es_ecologico()
  })

}) 

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});   