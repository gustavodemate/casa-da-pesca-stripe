describe("User Journey", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  })

  it("user viewing product details and returning to home page", () => {
    cy.get('a').eq(2).click()
    cy.url().should('include', '/product/')
    cy.get('p').contains('à vista')

    cy.get('a').eq(0).click()
    cy.get('h3').contains('Produtos')
  })

  it('a user can find a product on the home page and complete the shop', () => {
    cy.get('button').eq(0).contains("Adicionar ao carrinho").click()
    cy.get('button').eq(1).contains("Adicionar ao carrinho").click()
    cy.get('button').eq(2).contains("Adicionar ao carrinho").click()
    cy.get('button').eq(3).contains("Adicionar ao carrinho").click()

    cy.get('a[href*="cart"]').click()
    cy.url().should('include', '/cart')
    cy.get('h1').contains('Meu carrinho')

    cy.get('button').eq(4).contains("Realizar Pagamento").click()

    cy.origin('https://checkout.stripe.com/', () => {
      cy.get('h1').should('equal', 'Example Domain')
    })

    
  })
})