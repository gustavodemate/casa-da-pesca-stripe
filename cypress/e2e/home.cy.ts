import { contains } from "cypress/types/jquery"

describe('Navigation', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  })

  it('should navigate to the cart page', () => {
    cy.get('a[href*="cart"]').click()
    cy.url().should('include', '/cart')

    cy.get('h1').contains('Meu carrinho')
  })

  it('should navigate to the home page', () => {
    cy.get('a').eq(0)
    cy.url().should('include', '/')

    cy.get('h3').contains('Produtos')
  })
})

export {}