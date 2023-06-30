describe('Корректность работы корзины', () => {
  before(() => {
    cy.visit('https://window-service.ru');
  });

  it('Корректность добавления сетки в корзину', () => {
    cy.get('form[id=calcForm]').as('calcForm');

    cy.get('@calcForm').get('button[data-title="Добавление в корзину"]').click();
    cy.wait(1000);

    cy.get('div[id=calc-basket]').should('have.css','display','block');
    cy.get('div[id=calc-basket]').get('button').contains('Продолжить покупки')
      .click();
    
    cy.wait(1000);

    cy.get('span[class^=basket__amount]')
      .should('have.class', 'basket__amount--visible');
    cy.get('span[class^=basket__amount]').should('have.text', '1');
  });
});