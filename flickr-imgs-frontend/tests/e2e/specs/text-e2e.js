// https://docs.cypress.io/api/introduction/api.html

describe('Display Text Test', () => {
  it('Homepage Header Text', () => {
    cy.visit('/')
    cy.contains('.brand-logo', 'flickr-imgs')
    cy.contains('h4', 'Home')
    cy.contains('a', 'Open on Flickr')
  })

  let currentYear = new Date().getFullYear();

  it('Footer Text', () => {
    cy.visit('/')
    cy.contains('.container', '© '+currentYear+' Joseph Lubinda')
  })

  it('Nav Menu Text', () => {
    cy.visit('/')
    cy.contains('li', 'Home')
    cy.contains('li', 'About Us')
    cy.contains('li', 'Contact Us')
  })
})

describe('Search Input Test', () => {
  it('Input Text', () => {
    cy.visit('/')
    cy.get('.search').type('cats,dogs,rats')
    cy.get('.btn').click()
    cy.contains('div', 'cats')
    cy.contains('div', 'dogs')
    cy.contains('div', 'rats')
    //cy.get('.search').should('have.value','')
  })

  it('Search Button Text', () => {
    cy.visit('/')
    cy.contains('button', 'SEARCH')
  })
})


describe('About Us Text', () => {
  it('Image Title', () => {
    cy.visit('/about-us')
    cy.contains('h4', 'About Us')
    cy.contains('p', 'Joseph is a Data Scientist, AI & Software Engineer with over 10 year worth of experience.')
  })
})


describe('Contact Us Text', () => {
  it('Image Title', () => {
    cy.visit('/contact-us')
    cy.contains('h4', 'Contact Us')
    cy.contains('p', 'You can contact Joseph Lubinda directly by sending an email')
    cy.contains('p', 'jlubinda@obtir.com')
  })
})
