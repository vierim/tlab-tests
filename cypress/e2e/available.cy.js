describe('Базовые тесты', () => {
  it('Сайт доступен', () => {
    cy.visit('https://window-service.ru');

    cy.get('header').should('have.class', 'page-header');
    cy.get('div').should('have.class', 'page-content');
    cy.get('footer').should('have.class', 'page-footer');
  });
});

describe('Доступность основных страниц каталога', () => {
  it('Тип сетки - рамочные', () => {
    cy.visit('https://window-service.ru/moskitnye-setki/ramochnye-setki/');

    cy.get('header').should('have.class', 'page-header');
    cy.get('div').should('have.class', 'page-content');
    cy.get('footer').should('have.class', 'page-footer');

    cy.get('h1').should('have.text', 'Рамочные москитные сетки');
  });

  it('Тип сетки - раздвижные', () => {
    cy.visit('https://window-service.ru/moskitnye-setki/razdvizhnye-setki/');

    cy.get('header').should('have.class', 'page-header');
    cy.get('div').should('have.class', 'page-content');
    cy.get('footer').should('have.class', 'page-footer');

    cy.get('h1').should('have.text', 'Раздвижные москитные сетки');
  });

  it('Тип сетки - плиссе', () => {
    cy.visit('https://window-service.ru/moskitnye-setki/setki-plisse/');

    cy.get('header').should('have.class', 'page-header');
    cy.get('div').should('have.class', 'page-content');
    cy.get('footer').should('have.class', 'page-footer');

    cy.get('h1').should('have.text', 'Москитные сетки Плиссе');
  });

  it('Тип сетки - дверные', () => {
    cy.visit('https://window-service.ru/moskitnye-setki/dvernye-setki/');

    cy.get('header').should('have.class', 'page-header');
    cy.get('div').should('have.class', 'page-content');
    cy.get('footer').should('have.class', 'page-footer');

    cy.get('h1').should('have.text', 'Дверные москитные сетки');
  });

  it('Полотно - стандартное', () => {
    cy.visit('https://window-service.ru/polotna/moskitnye-setki-fiberglass/');

    cy.get('header').should('have.class', 'page-header');
    cy.get('div').should('have.class', 'page-content');
    cy.get('footer').should('have.class', 'page-footer');

    cy.get('h1').should('have.text', 'Москитные сетки «Фибергласс»');
  });

  it('Полотно - антикошка', () => {
    cy.visit('https://window-service.ru/polotna/moskitnye-setki-antikoshka/');

    cy.get('header').should('have.class', 'page-header');
    cy.get('div').should('have.class', 'page-content');
    cy.get('footer').should('have.class', 'page-footer');

    cy.get('h1').should('have.text', 'Москитные сетки Антикошка');
  });

  it('Полотно - антипыль', () => {
    cy.visit('https://window-service.ru/polotna/moskitnye-setki-antipyl/');

    cy.get('header').should('have.class', 'page-header');
    cy.get('div').should('have.class', 'page-content');
    cy.get('footer').should('have.class', 'page-footer');

    cy.get('h1').should('have.text', 'Москитная сетка «Антипыль»');
  });

  it('Полотно - антипыльца', () => {
    cy.visit('https://window-service.ru/polotna/moskitnye-setki-antipyltsa/');

    cy.get('header').should('have.class', 'page-header');
    cy.get('div').should('have.class', 'page-content');
    cy.get('footer').should('have.class', 'page-footer');

    cy.get('h1').should('have.text', 'Москитные сетки «Антипыльца»');
  });

  it('Полотно - ультравью', () => {
    cy.visit('https://window-service.ru/polotna/moskitnye-setki-ultravue/');

    cy.get('header').should('have.class', 'page-header');
    cy.get('div').should('have.class', 'page-content');
    cy.get('footer').should('have.class', 'page-footer');

    cy.get('h1').should('have.text', 'Москитные сетки «Ультравью»');
  });
});
