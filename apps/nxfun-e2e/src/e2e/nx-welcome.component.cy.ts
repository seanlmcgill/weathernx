describe('nxfun', () => {
  beforeEach(() => cy.visit('/iframe.html?id=nxwelcomecomponent--primary'));
  it('should render the component', () => {
    cy.get('nxfun-nx-welcome').should('exist');
  });
});
