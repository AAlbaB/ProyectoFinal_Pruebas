const goCreatePost = function (cy) {
    cy.contains('Write your first post').click();
    cy.wait(1000);
}

const viewPosts = function (cy){
    cy.get('.ember-view').contains('Posts').click({force: true});
    cy.wait(2000);
}

const createdNewPost = function (cy){
    cy.get('.gh-btn-primary').contains('New post').click();

    //class="ember-view gh-btn gh-btn-primary view-actions-top-row"
    //cy.contains('New post').click({force: true});
}

const selectPost = function (cy, postName) {
    cy.get('.gh-content-entry-title').contains(postName).click();
}

const viewTitlePost = function (cy,titePost){
    //cy.get('.content-list').scrollIntoView().contains(titePost).should('be.visible');
    cy.get('.gh-content-entry-title').contains(titePost).should('be.visible'); 
}
//class="view-container content-list"

module.exports = {
    goCreatePost:goCreatePost,
    viewPosts:viewPosts,
    createdNewPost:createdNewPost,
    selectPost:selectPost,
    viewTitlePost:viewTitlePost
}