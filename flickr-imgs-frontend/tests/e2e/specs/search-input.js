// https://docs.cypress.io/api/introduction/api.html

describe('Display Text Test', () => {
  it('Homepage Header Text', () => {
    cy.visit('/')
    cy.contains('.brand-logo', 'flickr-imgs')
    cy.contains('h4', 'Home')
  })

  it('Footer Text', () => {
    cy.visit('/')
    cy.contains('.container', '© 2021 Joseph Lubinda')
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
    cy.get('.search').type('cats')
    cy.get('.btn').click()
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
    cy.contains('p', 'Joseph Lubinda is a Data Scientist, AI & Software Engineer with over 10 year worth of experience.')
  })
})


describe('Contact Us Text', () => {
  it('Image Title', () => {
    cy.visit('/about-us')
    cy.contains('h4', 'Contact Us')
    cy.contains('p', 'Feel free to reach me via email')
    cy.contains('p', 'jlubinda@obtir.com')
  })
})
