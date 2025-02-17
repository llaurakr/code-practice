describe('DuckDuckGo search engine', () => {
  it('Ookla search', () => {
    cy.visit('https://duckduckgo.com')
    cy.contains('Switch to DuckDuckGo. It’s private and free!')
      .should('be.visible')
    cy.get('#searchbox_input').type('test')
    cy.get('.searchbox_searchButton__F5Bwq').click()
    cy.contains('Speedtest by Ookla').should('be.visible')
    cy.get('.VYRn0PqcTApLnWYi0GKA > .ffON2NH02oMAcqyoh2UU').click()


  })
  it('Microsoft search', () => {
    cy.visit('https://duckduckgo.com')
    cy.contains('Switch to DuckDuckGo. It’s private and free!')
      .should('be.visible')
    cy.get('#searchbox_input').type('microsoft word cheat sheet')
    cy.get('.searchbox_searchButton__F5Bwq').click()
    cy.contains('microsoft word cheat sheet').should('be.visible')
    cy.get('.VYRn0PqcTApLnWYi0GKA > .ffON2NH02oMAcqyoh2UU').click()
    cy.get('.qVcwmKAeI6lHWhM7wALj > [aria-label="Positive feedback"]').click()
    cy.get(':nth-child(14) > .JkHd9XMghWGv6y6RD_Cr').click()
    cy.get('[data-testid="feedback-form-submit"]').click()
    cy.get('.AvAURxrcviI0tNootU1F').click()
    cy.get('.AvAURxrcviI0tNootU1F').type('This is just a test')
    cy.get('[data-testid="feedback-form-submit"]').should('not.be.disabled')
  })

  it.only('About page', () => {
    cy.visit('https://duckduckgo.com')
    cy.contains('Switch to DuckDuckGo. It’s private and free!')
    .should('be.visible')
    cy.get('#searchbox_input').type('shorten duckduckgo.com/about{enter}')
    cy.get('#shorten-url')
      .should('be.visible')
      .and('have.value', 'https://is.gd/OnnE8s')
    cy.contains('duckduckgo.com/about - Shortened Link').should('be.visible')
  })
})