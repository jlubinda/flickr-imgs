// https://docs.cypress.io/api/introduction/api.html

describe('Display Text Test', () => {
  it('Homepage Header Text', () => {
    cy.visit('/')
    cy.contains('.brand-logo', 'Flickr IMGs')
  })

  it('Homepage Header Text', () => {
    cy.visit('/')
    cy.contains('h3', 'Welcome to Flickr IMGs')
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