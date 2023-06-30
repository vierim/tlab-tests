describe('Корректность работы калькулятора', () => {
  before(() => {
    cy.visit('https://window-service.ru');
  });

  it('Корректность расчет цен для рамочных сеток', () => {
    cy.get('form[id=calcForm]').as('calcForm');

    cy.get('@calcForm').get('input[id=net_width]').click();
    cy.get('@calcForm').get('input[id=net_width]').clear().then((el) => {
      cy.wrap(el).type('1000');
    });

    cy.wait(1000);

    cy.get('@calcForm').get('input[id=net_height]').click();
    cy.get('@calcForm').get('input[id=net_height]').clear().then((el) => {
      cy.wrap(el).type('2000');
    });
    cy.get('@calcForm').get('input[id=net_height]').blur();

    cy.wait(1000);

    cy.get('@calcForm').get('[class*=calculator-price]').should('have.text', '3000');
  });
});