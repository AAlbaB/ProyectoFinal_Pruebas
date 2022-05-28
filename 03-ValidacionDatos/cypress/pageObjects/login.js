const inputNombreUsuario = function (cy,userName){
  cy.get("input[name='identification']").type(userName);
  cy.wait(1000)
};

const inputPassword = function (cy,password){
  cy.get("input[name='password']").type(password);
  cy.wait(1000)
};

const clickBoton = function (cy){
  cy.get('button[type="submit"]').click();
  cy.wait(3000)
};

const checkValidLogin = function (cy, baseUrl){
  cy.url().should('eq', baseUrl + 'ghost/#/dashboard')
};

const checkInvalidLogin = function (cy, baseUrl){
  cy.url().should('eq', baseUrl + 'ghost/#/signin')
};


module.exports ={
  inputNombreUsuario:inputNombreUsuario,
  inputPassword:inputPassword,
  clickBoton:clickBoton,
  checkValidLogin:checkValidLogin,
  checkInvalidLogin:checkInvalidLogin
}
