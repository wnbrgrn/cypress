import * as data from "../helpers/default_data.json";
import * as main_page from "../locators/main_page.json";
import * as recovery_password_page from "../locators/recovery_password_page.json";
import * as result_page from "../locators/result_page.json";

describe('Страница авторизации', function () {

    beforeEach('Начало теста', function () {
        cy.visit('/');
    })
    

    it('Ввод верного логина и пароля', function () {
        cy.get(main_page.email).type(data.login);
        cy.get(main_page.password).type(data.password);
        cy.get(main_page.login_button).click();
        cy.get(result_page.title).should('be.visible');
        cy.get(result_page.title).contains('Авторизация прошла успешно');
        cy.get(result_page.close).should('be.visible');
     })

     it('Восстановление пароля', function () {
        cy.get(main_page.forgot_pass_btn).click();
        cy.get(recovery_password_page.email).type('aaaaa@mail.ru')
        cy.get(recovery_password_page.send_button).click();
        cy.get(result_page.title).contains('Успешно отправили пароль на e-mail');
        cy.get(result_page.close).should('be.visible');
     })

     it('Ввод верного логина и неверного пароля', function () {
        cy.get(main_page.email).type(data.login);
        cy.get(main_page.password).type('iLovemycat2');
        cy.get(main_page.login_button).click();
        cy.get(result_page.title).should('be.visible');
        cy.get(result_page.close).should('be.visible');
        cy.get(result_page.title).contains('Такого логина или пароля нет');
     })

     it('Ввод неверного логина и верного пароля', function () {
        cy.get(main_page.email).type('ana@chapaikina.ru');
        cy.get(main_page.password).type(data.password);
        cy.get(main_page.login_button).click();
        cy.get(result_page.title).should('be.visible');
        cy.get(result_page.close).should('be.visible');
        cy.get(result_page.title).contains('Такого логина или пароля нет');
     })

     it('Неверный формат логина', function () {
        cy.get(main_page.email).type('germandolnikov.ru');
        cy.get(main_page.password).type(data.password);
        cy.get(main_page.login_button).click();
        cy.get(result_page.title).should('be.visible');
        cy.get(result_page.close).should('be.visible');
        cy.get(result_page.title).contains('Нужно исправить проблему валидации');
     })

     it('Ввод верного логина с содержанием заглавных букв и верного пароля', function () {
        cy.get(main_page.email).type('GerMan@Dolnikov.ru');
        cy.get(main_page.password).type(data.password);
        cy.get(main_page.login_button).click();
        cy.get(result_page.title).should('be.visible');
        cy.get(result_page.title).contains('Авторизация прошла успешно')
        cy.get(result_page.close).should('be.visible');
     })
 }) 