const botonPlus = function (cy) {
    cy.get('.justify-center').click();
    cy.wait(2000);
}

const clickBookMark = function (cy) {
    cy.get(`[role="menu"]`).scrollIntoView().contains('Bookmark').click();
    cy.wait(2000);
}

const urlBookMark = function (cy, url){
    cy.get(`[placeholder="Paste URL to add bookmark content..."]`).type(url);
    cy.wait(2000);
}

const clickPasteUrl = function (cy) {
    cy.get(`[class="underline"]`).contains('Paste URL as link').click();
    cy.wait(2000);
}

//class="underline"

//placeholder="Paste URL to add bookmark content..."

const clickSpotify = function (cy) {
    cy.get(`[role="menu"]`).scrollIntoView().contains('/spotify [track or playlist url]').click();
    cy.wait(2000);
}



module.exports = {
    botonPlus:botonPlus,
    clickBookMark:clickBookMark,
    clickSpotify:clickSpotify,
    urlBookMark:urlBookMark,
    clickPasteUrl:clickPasteUrl
}