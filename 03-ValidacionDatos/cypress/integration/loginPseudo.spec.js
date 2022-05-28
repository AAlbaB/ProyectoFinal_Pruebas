import { baseUrl } from "../support/constants";

describe(`login`, function () {
    const arrayEmails = require('../support/emails.json')
    const login = require('../pageObjects/login')

    function random() {
        let number = Math.floor(Math.random()*1000);
        console.log(number)
        return number
       }


    let posicion = random()
    let valor = arrayEmails[posicion].email

    it(`1. Login con solo un usuario que tiene un email, login invalido, [pseudo aleatorio]`, function () {

        cy.visit('http://localhost:3002/ghost/#/signin')
        cy.get("input[name='identification']").scrollIntoView().focus().type(valor)
        login.clickBoton(cy)
        login.checkInvalidLogin(cy, baseUrl)
    })
})