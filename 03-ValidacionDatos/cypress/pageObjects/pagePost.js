const postTitle = function (cy, postTitle){
    cy.get(`[placeholder="Post title"]`).type(postTitle);
    cy.wait(1000);
}

const beginWriteYourPost = function (cy, beginWriteYourPost){
    cy.get(`[data-placeholder="Begin writing your post..."]`).type(beginWriteYourPost);
    cy.wait(1000);
}

const clickPublish = function (cy) {
    cy.get('.gh-btn-editor').contains('Publish').click();
}

const clickPublishEnd = function (cy) {
    cy.get('.gh-publishmenu-button').contains('Publish').click();
}

const clickPublishFinish = function (cy) {
    cy.get(`[class="gh-btn gh-btn-black gh-btn-icon ember-view"]`).contains('Publish').click();
    cy.wait(2000);
}

const clickViewPost = function (cy) {
    cy.get(`[class="ember-view gh-editor-back-button"]`).contains('Posts').click();
}

const clearDescription = function (cy, beginWriteYourPost){ 
    cy.get('.koenig-editor__editor').clear().wait(2000).type(beginWriteYourPost);
};

const clearTitulo = function (cy, postTitle){ 
    cy.get('.gh-editor-title').clear().wait(2000).type(postTitle);
};

const clearDescriptionSeeButtonPlus = function (cy){ 
    cy.get('.koenig-editor__editor').clear().wait(2000);
};

const clearTitleSeeButtonPlus = function (cy){ 
    cy.get('.gh-editor-title').clear().wait(2000);
};

const clickTitle = function (cy){
    cy.get(`[placeholder="Post title"]`).click();
    cy.wait(1000);
}

const viewUrlBookmark = function (cy, url) {
    cy.get(`[href="${url}"]`).contains(url).should('be.visible');
}

const vacumSpace = function (cy){
    cy.get(`[data-koenig-dnd-droppable="true"]`).click();
    cy.wait(1000);
}

//data-koenig-dnd-droppable="true"






//class="f8 lh-heading darkgrey tracked-1 fw4 ma0 ml4 flex-grow-1 truncate"
///spotify [track or playlist url]

 


module.exports = {
    postTitle:postTitle,
    beginWriteYourPost:beginWriteYourPost,
    clickPublish:clickPublish,
    clickPublishEnd:clickPublishEnd,
    clickPublishFinish:clickPublishFinish,
    clearDescription:clearDescription,
    clearTitulo:clearTitulo,
    clickViewPost:clickViewPost,
    clearDescriptionSeeButtonPlus:clearDescriptionSeeButtonPlus,
    clearTitleSeeButtonPlus:clearTitleSeeButtonPlus,
    clickTitle:clickTitle,
    viewUrlBookmark:viewUrlBookmark,
    vacumSpace:vacumSpace
}