import { baseUrl } from "./constants"


export const login = (userName, password) => {
    cy.visit(baseUrl + 'ghost/')
    cy.wait(5000)
    cy.get('form').within(() => {
        cy.get('input[name="identification"]').type(userName)
        cy.get('input[name="password"]').type(password)
        cy.screenshot('Before loging')
        cy.get('button[type="submit"]').click()
    })
    cy.wait(1000)
    cy.url().should('eq', baseUrl + 'ghost/#/dashboard')
}


export const createAPost = (title, content) => {
    cy.visit(baseUrl + 'ghost/#/editor/post/')
    cy.wait(1000)
    cy.screenshot('post creation page')
    cy.get('textarea[placeholder="Post title"]').type(title).screenshot("post title")
    cy.get('div[data-placeholder="Begin writing your post..."]').type(content).screenshot("post body")
    cy.wait(700)
    cy.screenshot('filled post creation form')
    cy.get('div').contains('Publish').click()
    cy.wait(700)
    cy.screenshot('filled post creation form 2')
    cy.get('button').contains('Publish').click()
    cy.get('.modal-content').within(() => {
        cy.get('button').contains('Publish').click()
    })
    cy.wait(700)
    cy.screenshot('Publishing')
    cy.get('.gh-notification-title').should("have.text", "Published")
    cy.get('a').contains('View Post').invoke('attr', 'href').then((attr) => {+attr}).as('postUrl');
    cy.screenshot('Published')
    cy.get('button[class="gh-notification-close"]').click()
}

export const getFirstPost = () => {
    cy.visit(baseUrl + 'ghost/#/posts')
    cy.wait(3000)
    cy.screenshot('posts list')
    cy.get('span[class="gh-content-status-published nowrap"]').first().click()
    cy.screenshot('post to delete or update')
}

export const updateAPost = () => {
    getFirstPost()
    cy.get('div[data-placeholder="Begin writing your post..."]').type('Changing the post description')
    cy.screenshot('post ready to update')
    cy.get('span').contains('Update').click()
    cy.screenshot('update step 1')
    cy.wait(1000)
    cy.get('span').contains('Update').click()
    cy.screenshot('post updated')
    cy.get('.gh-notification-title').should("have.text", "Updated")
    cy.get('button[class="gh-notification-close"]').click()
}

export const deleteAPost = () => {
    getFirstPost()
    cy.get('button[title="Settings"]').click()
    cy.screenshot('Before deletion')
    cy.get('span').contains(' Delete ').click()
    cy.wait(500)
    cy.screenshot('Deletion process')
    cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click()
    cy.url().should('eq', baseUrl + 'ghost/#/posts')
}

export const logout = () => {
    cy.visit(baseUrl + 'ghost/#/dashboard')
    cy.screenshot('Logout view')
    cy.wait(1000)
    cy.get('div[class="gh-user-avatar relative"]').click()
    cy.screenshot('Logout button')
    cy.get('a[href="#/signout/"]').click()
    cy.url().should('eq', baseUrl + 'ghost/#/signin')
}

export const checkIfPostDoesNotExist = (postUrl) => {
    cy.visit(postUrl, {failOnStatusCode: false}).screenshot('post does not exist')
    cy.request({url: postUrl, failOnStatusCode: false}).its('status').should('equal', 404)
}

export const checkIfPostExists = (postUrl) => {
    cy.visit(postUrl).screenshot('post exist')
    cy.request({url: postUrl}).its('status').should('equal', 200)
}
