// https://docs.cypress.io/api/introduction/api.html

describe('Display Text Test', () => {
  it('Homepage Header Text', () => {
    cy.visit('/')
    cy.contains('.brand-logo', 'Flickr IMGs')
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

/*
describe('Image Text', () => {
  it('Image Title', () => {
    cy.visit('/')
    cy.contains('label', 'Your Search Text Here')
  })
})
*/