import { baseUrl, password, userName } from "../support/constants";
import { randomMail, randomPassword } from "../support/ramdomConstants";

describe('Login', () => {
    const login = require('../pageObjects/login')

    beforeEach(()=> {
      cy.clearCookies();
      cy.visit(baseUrl + 'ghost/');
      cy.wait(3000);
    });
  
    it('1. Login correcto, login valido, [a_priori]', () => {
        login.inputNombreUsuario(cy,userName)
        login.inputPassword(cy,password)
        login.clickBoton(cy)
        login.checkValidLogin(cy, baseUrl)
    });

    it('2. Login con usuario vacío, login invalido, [a_priori]', () => {
      login.inputPassword(cy,password)
      login.clickBoton(cy)
      login.checkInvalidLogin(cy, baseUrl)
    });

    it('3. Login con usuario inexistente, login invalido, [aleatorio]', () => {
      login.inputNombreUsuario(cy,randomMail)
      login.inputPassword(cy,password)
      login.clickBoton(cy)
      login.checkInvalidLogin(cy, baseUrl)
    });

    it('4. Login con password vacío, login invalido, [a_priori]', () => {
      login.inputNombreUsuario(cy,userName)
      login.clickBoton(cy)
      login.checkInvalidLogin(cy, baseUrl)
    });

    it('5. Login con password equivocado, login invalido, [aleatorio]', () => {
      login.inputNombreUsuario(cy,userName)
      login.inputPassword(cy,randomPassword)
      login.clickBoton(cy)
      login.checkInvalidLogin(cy, baseUrl)
    });




});
  