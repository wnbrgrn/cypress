import * as data from "../helpers/default_data.json";
import * as main_page_pokemons from "../locators/main_page_pokemons.json";
import * as pokemons_list_page from "../locators/pokemons_list_page.json";
import * as account_page_pokemons from "../locators/account_page_pokemons.json";
import * as avatar_payment_page_pokemons from "../locators/avatar_payment_page_pokemons.json";
import * as payment_confirmation_page from "../locators/payment_confirmation_page.json";
import * as payment_result_page from "../locators/payment_result_page_pokemons.json";

describe('Покупка нового аватара тренера', function () {

    it('Покупка аватара', function () {
         cy.visit('https://pokemonbattle.ru');
         cy.get(main_page_pokemons.login).type(data.login_pokemons);
         cy.get(main_page_pokemons.password).type(data.password_pokemons);
         cy.get(main_page_pokemons.login_button).click();
         cy.get(pokemons_list_page.link_to_account_button).click();
         cy.get(account_page_pokemons.link_to_avatar_shop).click();
         cy.get('.available > button').first().click({ force: true });
         cy.get(avatar_payment_page_pokemons.enter_card_number_button).type('4627100101654724');
         cy.get(avatar_payment_page_pokemons.enter_expiration_date_button).type('0227');
         cy.get(avatar_payment_page_pokemons.enter_cvc_button).type('125');
         cy.get(avatar_payment_page_pokemons.enter_cardholder_name_button).type('ana chapaikina');
         cy.wait(2000);
         cy.get(avatar_payment_page_pokemons.payment_button).click();
         cy.get(payment_confirmation_page.enter_verification_code_button).type('56456');
         cy.get(payment_confirmation_page.confirm_payment_button).click();
         cy.get(payment_result_page.message).contains('Покупка прошла успешно');
     })
 }) 