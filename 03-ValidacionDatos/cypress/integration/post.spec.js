import { baseUrl, password, userName, randomMail, randomPassword} from "../support/constants";
let postName = 'Coming soon';
const data = require('../support/data.json')

describe('Post', () => {

    const login = require('../pageObjects/login');
    const paginaPrincipal = require('../pageObjects/pagePaginaPrincipal');
    const pagePost = require('../pageObjects/pagePost');
    const pageMenuPlus = require('../pageObjects/pageMenuPlus');

    beforeEach(()=> {
      cy.clearCookies();
      cy.visit(baseUrl + 'ghost/');
      cy.wait(2000);
    });
    
    it('1. Post titulo y descripcion correcta [Aleatorio]', () => {
        let numberDataTitle = 0;
        let numberDataDescription = 0;
        login.inputNombreUsuario(cy,userName);
        login.inputPassword(cy,password);
        login.clickBoton(cy);
        paginaPrincipal.viewPosts(cy);
        paginaPrincipal.createdNewPost(cy,baseUrl);
        pagePost.postTitle(cy, data[numberDataTitle].titePost);
        pagePost.beginWriteYourPost(cy, data[numberDataDescription].descriptionParag);
        pagePost.clickPublish(cy);
        pagePost.clickPublishEnd(cy);
        pagePost.clickPublishFinish(cy);
        pagePost.clickViewPost(cy);
        paginaPrincipal.viewTitlePost(cy,data[numberDataTitle].titePost);

    });

    it('2. Post titulo correcto con descripcion en blanco [Aleatorio]', () => {
        let numberDataTitle = 2;
        let numberDataDescription = 1;
        let numberDataDescriptionAgain = 2;
        login.inputNombreUsuario(cy,userName);
        login.inputPassword(cy,password);
        login.clickBoton(cy);
        paginaPrincipal.viewPosts(cy);
        paginaPrincipal.createdNewPost(cy,baseUrl);
        pagePost.postTitle(cy, data[numberDataTitle].titePost);
        pagePost.beginWriteYourPost(cy, data[numberDataDescription].descriptionParag);
        pagePost.clearDescriptionSeeButtonPlus(cy);
        pageMenuPlus.botonPlus(cy)
        pagePost.clickPublish(cy);
        pagePost.clickPublishEnd(cy);
        pagePost.clickPublishFinish(cy);
        pagePost.clickViewPost(cy);
        paginaPrincipal.viewTitlePost(cy,data[numberDataTitle].titePost); 
    });
    
    it('3. Post titulo correcto y descripcion con caracteres especiales [Aleatorio]', () => {
        let numberDataTitle = 2;
        let numberDataDescription = 2;
        login.inputNombreUsuario(cy,userName);
        login.inputPassword(cy,password);
        login.clickBoton(cy);
        paginaPrincipal.viewPosts(cy);
        paginaPrincipal.createdNewPost(cy,baseUrl);
        pagePost.postTitle(cy, data[numberDataTitle].titePost);
        pagePost.beginWriteYourPost(cy, data[numberDataDescription].descriptionPostcharSeq);
        pagePost.clickPublish(cy);
        pagePost.clickPublishEnd(cy);
        pagePost.clickPublishFinish(cy);
        pagePost.clickViewPost(cy);
        paginaPrincipal.viewTitlePost(cy,data[numberDataTitle].titePost);
    });
    
    
    it('4. Post titulo correcto y descripcion se reescribe [Aleatorio]', () => {
        let numberDataTitle = 4;
        let numberDataDescription = 3;
        let numberDataDescriptionAgain = 4;
        login.inputNombreUsuario(cy,userName);
        login.inputPassword(cy,password);
        login.clickBoton(cy);
        paginaPrincipal.viewPosts(cy);
        paginaPrincipal.createdNewPost(cy,baseUrl);
        pagePost.postTitle(cy, data[numberDataTitle].titePost);
        pagePost.beginWriteYourPost(cy, data[numberDataDescription].descriptionParag);
        pagePost.clearDescription(cy,data[numberDataDescriptionAgain].descriptionParag);
        pagePost.clickPublish(cy);
        pagePost.clickPublishEnd(cy);
        pagePost.clickPublishFinish(cy);
        pagePost.clickViewPost(cy);
        paginaPrincipal.viewTitlePost(cy,data[numberDataTitle].titePost);
    });

    
    it('5. Post titulo con caracteres especiales y descripcion correcta [Aleatorio]', () => {
        let numberDataTitle = 7;
        let numberDataDescription = 9;
        login.inputNombreUsuario(cy,userName);
        login.inputPassword(cy,password);
        login.clickBoton(cy);
        paginaPrincipal.viewPosts(cy);
        paginaPrincipal.createdNewPost(cy,baseUrl);
        pagePost.postTitle(cy, data[numberDataTitle].titePostCharSeq);
        pagePost.beginWriteYourPost(cy, data[numberDataDescription].descriptionParag);
        pagePost.clickPublish(cy);
        pagePost.clickPublishEnd(cy);
        pagePost.clickPublishFinish(cy);
        pagePost.clickViewPost(cy);
        paginaPrincipal.viewTitlePost(cy,data[numberDataTitle].titePostCharSeq);
    });
    
    it('6. Post titulo con caracteres especiales y descripcion en blanco [Aleatorio]', () => {
        let numberDataTitle = 8;
        let numberDataDescription = 10;
        login.inputNombreUsuario(cy,userName);
        login.inputPassword(cy,password);
        login.clickBoton(cy);
        paginaPrincipal.viewPosts(cy);
        paginaPrincipal.createdNewPost(cy,baseUrl);
        pagePost.postTitle(cy, data[numberDataTitle].titePostCharSeq);
        pagePost.beginWriteYourPost(cy, data[numberDataDescription].descriptionParag);
        pagePost.clearDescriptionSeeButtonPlus(cy);
        pagePost.clickPublish(cy);
        pagePost.clickPublishEnd(cy);
        pagePost.clickPublishFinish(cy);
        pagePost.clickViewPost(cy);
        paginaPrincipal.viewTitlePost(cy,data[numberDataTitle].titePostCharSeq);
    });

    
    it('7. Post titulo y descripcion con caracteres especiales [Aleatorio]', () => {
        let numberDataTitle = 9;
        let numberDataDescription = 11;
        login.inputNombreUsuario(cy,userName);
        login.inputPassword(cy,password);
        login.clickBoton(cy);
        paginaPrincipal.viewPosts(cy);
        paginaPrincipal.createdNewPost(cy,baseUrl);
        pagePost.postTitle(cy, data[numberDataTitle].titePostCharSeq);
        pagePost.beginWriteYourPost(cy, data[numberDataDescription].titePostCharSeq);
        pagePost.clickPublish(cy);
        pagePost.clickPublishEnd(cy);
        pagePost.clickPublishFinish(cy);
        pagePost.clickViewPost(cy);
        paginaPrincipal.viewTitlePost(cy,data[numberDataTitle].titePostCharSeq);
    });

    it('8. Post titulo con caracteres especiales y descripcion se reescribe [Aleatorio]', () => {
        let numberDataTitle = 10;
        let numberDataDescription = 12;
        let numberDataDescriptionAgain = 13;
        login.inputNombreUsuario(cy,userName);
        login.inputPassword(cy,password);
        login.clickBoton(cy);
        paginaPrincipal.viewPosts(cy);
        paginaPrincipal.createdNewPost(cy,baseUrl);
        pagePost.postTitle(cy, data[numberDataTitle].titePostCharSeq);
        pagePost.beginWriteYourPost(cy, data[numberDataDescription].descriptionParag);
        pagePost.clearDescription(cy,data[numberDataDescriptionAgain].descriptionParag);
        pagePost.clickPublish(cy);
        pagePost.clickPublishEnd(cy);
        pagePost.clickPublishFinish(cy);
        pagePost.clickViewPost(cy);
        paginaPrincipal.viewTitlePost(cy,data[numberDataTitle].titePostCharSeq); 
    });

    
    it('9. Post reescribir titulo y descripcion correcta [Aleatorio]', () => {
        let numberDataTitle = 11;
        let numberDataTitleAgain = 29;
        let numberDataDescription = 14;
        login.inputNombreUsuario(cy,userName);
        login.inputPassword(cy,password);
        login.clickBoton(cy);
        paginaPrincipal.viewPosts(cy);
        paginaPrincipal.createdNewPost(cy,baseUrl);
        pagePost.postTitle(cy, data[numberDataTitle].titePost);
        pagePost.beginWriteYourPost(cy, data[numberDataDescription].descriptionParag);
        pagePost.clearTitulo(cy, data[numberDataTitleAgain].titePost);
        pagePost.clickPublish(cy);
        pagePost.clickPublishEnd(cy);
        pagePost.clickPublishFinish(cy);
        pagePost.clickViewPost(cy);
        paginaPrincipal.viewTitlePost(cy,data[numberDataTitleAgain].titePost);
    });

    it('10. Post reescribir titulo y descripcion en blanco [Aleatorio]', () => {
        let numberDataTitle = 12;
        let numberDataTitleAgain = 29;
        let numberDataDescription = 15;
        login.inputNombreUsuario(cy,userName);
        login.inputPassword(cy,password);
        login.clickBoton(cy);
        paginaPrincipal.viewPosts(cy);
        paginaPrincipal.createdNewPost(cy,baseUrl);
        pagePost.postTitle(cy, data[numberDataTitle].titePost);
        pagePost.beginWriteYourPost(cy, data[numberDataDescription].descriptionParag);
        pagePost.clearTitulo(cy, data[numberDataTitleAgain].titePost);
        pagePost.clearDescriptionSeeButtonPlus(cy);
        pagePost.clickPublish(cy);
        pagePost.clickPublishEnd(cy);
        pagePost.clickPublishFinish(cy);
        pagePost.clickViewPost(cy);
        paginaPrincipal.viewTitlePost(cy,data[numberDataTitleAgain].titePost);
    });

    it('11. Post reescribir titulo y descripcion con caracteres especiales [Aleatorio]', () => {
        let numberDataTitle = 13;
        let numberDataTitleAgain = 30;
        let numberDataDescription = 16;
        login.inputNombreUsuario(cy,userName);
        login.inputPassword(cy,password);
        login.clickBoton(cy);
        paginaPrincipal.viewPosts(cy);
        paginaPrincipal.createdNewPost(cy,baseUrl);
        pagePost.postTitle(cy, data[numberDataTitle].titePost);
        pagePost.beginWriteYourPost(cy, data[numberDataDescription].descriptionPostcharSeq);
        pagePost.clearTitulo(cy, data[numberDataTitleAgain].titePost);
        pagePost.clickPublish(cy);
        pagePost.clickPublishEnd(cy);
        pagePost.clickPublishFinish(cy);
        pagePost.clickViewPost(cy);
        paginaPrincipal.viewTitlePost(cy,data[numberDataTitleAgain].titePost);
    });
    
  
    
    it('12. Post reescribir titulo y reescribir descripcion [Aleatorio]', () => {
        let numberDataTitle = 14;
        let numberDataTitleAgain = 15;
        let numberDataDescription = 18;
        let numberDataDescriptionAgain = 19;
        login.inputNombreUsuario(cy,userName);
        login.inputPassword(cy,password);
        login.clickBoton(cy);
        paginaPrincipal.viewPosts(cy);
        paginaPrincipal.createdNewPost(cy,baseUrl);
        pagePost.postTitle(cy, data[numberDataTitle].titePost);
        pagePost.beginWriteYourPost(cy, data[numberDataDescription].descriptionParag);
        pagePost.clearTitulo(cy, data[numberDataTitleAgain].titePost);
        pagePost.clearDescription(cy, data[numberDataDescriptionAgain].descriptionParag);
        pagePost.clickPublish(cy);
        pagePost.clickPublishEnd(cy);
        pagePost.clickPublishFinish(cy); 
        pagePost.clickViewPost(cy);
        paginaPrincipal.viewTitlePost(cy,data[numberDataTitleAgain].titePost);
    }); 



    it('13. Post titulo correcto, se borra descripcion y se crea bookmark [Aleatorio]', () => {
        let numberDataTitle = 19;
        let numberDataDescription = 25;
        let numberDataDescriptionAgain = 26;
        login.inputNombreUsuario(cy,userName);
        login.inputPassword(cy,password);
        login.clickBoton(cy);
        paginaPrincipal.viewPosts(cy);
        paginaPrincipal.createdNewPost(cy,baseUrl);
        pagePost.postTitle(cy, data[numberDataTitle].titePost);
        pagePost.beginWriteYourPost(cy, data[numberDataDescription].descriptionParag);
        pagePost.clearDescriptionSeeButtonPlus(cy);
        pageMenuPlus.botonPlus(cy);
        pageMenuPlus.clickBookMark(cy);
        pageMenuPlus.urlBookMark(cy, data[0].url);
        pagePost.clickTitle(cy);
        pagePost.clickPublish(cy);
        pagePost.clickPublishEnd(cy);
        pagePost.clickPublishFinish(cy);
        pagePost.clickViewPost(cy);
        paginaPrincipal.viewTitlePost(cy,data[numberDataTitle].titePost); 


    });

    it('14. Post titulo con caracteres especiales, se borra descripcion y se crea bookmark [Aleatorio]', () => {
        let numberDataTitle = 20;
        let numberDataDescription = 27;
        let numberDataDescriptionAgain = 28;
        login.inputNombreUsuario(cy,userName);
        login.inputPassword(cy,password);
        login.clickBoton(cy);
        paginaPrincipal.viewPosts(cy);
        paginaPrincipal.createdNewPost(cy,baseUrl);
        pagePost.postTitle(cy, data[numberDataTitle].titePostCharSeq);
        pagePost.beginWriteYourPost(cy, data[numberDataDescription].descriptionParag);
        pagePost.clearDescriptionSeeButtonPlus(cy);
        pageMenuPlus.botonPlus(cy);
        pageMenuPlus.clickBookMark(cy);
        pageMenuPlus.urlBookMark(cy, data[0].url);
        //pagePost.clickTitle(cy);
        //pageMenuPlus.clickPasteUrl(cy);
        pagePost.clickTitle(cy);
        pagePost.clickPublish(cy);
        pagePost.clickPublishEnd(cy);
        pagePost.clickPublishFinish(cy);
        pagePost.clickViewPost(cy);
        paginaPrincipal.viewTitlePost(cy,data[numberDataTitle].titePost); 

        //paginaPrincipal.selectPost(cy, data[numberDataTitle].titePost);
        //pagePost.viewUrlBookmark(cy, data[0].titePostCharDomanin);

    });

    

    it('15. Post titulo se reescribe, se borra descripcion y se crea bookmark [Aleatorio]', () => {
        let numberDataTitle = 22;
        let numberDataTitleAgain = 23;
        let numberDataDescription = 31;
        let numberDataDescriptionAgain = 32;
        login.inputNombreUsuario(cy,userName);
        login.inputPassword(cy,password);
        login.clickBoton(cy);
        paginaPrincipal.viewPosts(cy);
        paginaPrincipal.createdNewPost(cy,baseUrl);
        pagePost.postTitle(cy, data[numberDataTitle].titePost);
        pagePost.beginWriteYourPost(cy, data[numberDataDescription].descriptionParag);
        pagePost.clearDescriptionSeeButtonPlus(cy);
        pageMenuPlus.botonPlus(cy);
        pageMenuPlus.clickBookMark(cy);
        pageMenuPlus.urlBookMark(cy, data[0].url);
        pagePost.clickTitle(cy);
        pagePost.clearDescription(cy, data[numberDataTitleAgain].titePost)
        pagePost.clickPublish(cy);
        pagePost.clickPublishEnd(cy);
        pagePost.clickPublishFinish(cy);
        pagePost.clickViewPost(cy);
        paginaPrincipal.viewTitlePost(cy,data[numberDataTitle].titePost); 

    });

    it('16. Post titulo correcto, descripcion se reescribe se crea un falso bookmark [Aleatorio]', () => {
        let numberDataTitle = 24;
        let numberDataDescription = 33;
        let numberDataDescriptionAgain = 34;
        let numberDataUrl = 3
        login.inputNombreUsuario(cy,userName);
        login.inputPassword(cy,password);
        login.clickBoton(cy);
        paginaPrincipal.viewPosts(cy);
        paginaPrincipal.createdNewPost(cy,baseUrl);
        pagePost.postTitle(cy, data[numberDataTitle].titePost);
        pagePost.beginWriteYourPost(cy, data[numberDataDescription].descriptionParag);
        pagePost.clearDescriptionSeeButtonPlus(cy);
        pageMenuPlus.botonPlus(cy);
        pageMenuPlus.clickBookMark(cy);
        pageMenuPlus.urlBookMark(cy, data[numberDataUrl].titePostCharDomanin);
        pagePost.clickTitle(cy);
        pageMenuPlus.clickPasteUrl(cy);
        pagePost.clickPublish(cy);
        pagePost.clickPublishEnd(cy);
        pagePost.clickPublishFinish(cy);
        pagePost.clickViewPost(cy);
        paginaPrincipal.selectPost(cy, data[numberDataTitle].titePost);
        pagePost.viewUrlBookmark(cy, data[numberDataUrl].titePostCharDomanin);
    });

    it('17. Post titulo con caracteres especiales, descripcion se reescribe se crea un falso bookmark [Aleatorio]', () => {
        let numberDataTitle = 25;
        let numberDataDescription = 35;
        let numberDataDescriptionAgain = 36;
        let numberDataUrl = 4
        login.inputNombreUsuario(cy,userName);
        login.inputPassword(cy,password);
        login.clickBoton(cy);
        paginaPrincipal.viewPosts(cy);
        paginaPrincipal.createdNewPost(cy,baseUrl);
        pagePost.postTitle(cy, data[numberDataTitle].titePostCharSeq);
        pagePost.beginWriteYourPost(cy, data[numberDataDescription].descriptionParag);
        pagePost.clearDescriptionSeeButtonPlus(cy);
        pageMenuPlus.botonPlus(cy);
        pageMenuPlus.clickBookMark(cy);
        pageMenuPlus.urlBookMark(cy, data[numberDataUrl].titePostCharDomanin);
        pagePost.clickTitle(cy);
        pageMenuPlus.clickPasteUrl(cy);
        pagePost.clickPublish(cy);
        pagePost.clickPublishEnd(cy);
        pagePost.clickPublishFinish(cy);
        pagePost.clickViewPost(cy);
        paginaPrincipal.selectPost(cy, data[numberDataTitle].titePostCharSeq);
        pagePost.viewUrlBookmark(cy, data[numberDataUrl].titePostCharDomanin);
    });

    it('18. Post titulo en blanco, descripcion se reescribe se crea un falso bookmark [Aleatorio]', () => {
        let numberDataTitle = 26;
        let numberDataDescription = 37;
        let numberDataDescriptionAgain = 38;
        let numberDataUrl = 5
        login.inputNombreUsuario(cy,userName);
        login.inputPassword(cy,password);
        login.clickBoton(cy);
        paginaPrincipal.viewPosts(cy);
        paginaPrincipal.createdNewPost(cy,baseUrl);
        pagePost.postTitle(cy, data[numberDataTitle].titePost);
        pagePost.beginWriteYourPost(cy, data[numberDataDescription].descriptionParag);
        pagePost.clearDescriptionSeeButtonPlus(cy);
        pageMenuPlus.botonPlus(cy);
        pageMenuPlus.clickBookMark(cy);
        pageMenuPlus.urlBookMark(cy, data[numberDataUrl].titePostCharDomanin);
        pagePost.clickTitle(cy);
        pageMenuPlus.clickPasteUrl(cy);
        pagePost.clearTitleSeeButtonPlus(cy);
        pagePost.clickPublish(cy);
        pagePost.clickPublishEnd(cy);
        pagePost.clickPublishFinish(cy);
        pagePost.clickViewPost(cy);
        paginaPrincipal.selectPost(cy, data[numberDataTitle].titePost);
        pagePost.viewUrlBookmark(cy, data[numberDataUrl].titePostCharDomanin);
    });

    it('19. Post titulo se reescribe, descripcion se reescribe se crea un falso bookmark [Aleatorio]', () => {
        let numberDataTitle = 27;
        let numberDataTitleAgain = 28;
        let numberDataDescription = 40;
        let numberDataDescriptionAgain = 41
        let numberDataUrl = 6
        login.inputNombreUsuario(cy,userName);
        login.inputPassword(cy,password);
        login.clickBoton(cy);
        paginaPrincipal.viewPosts(cy);
        paginaPrincipal.createdNewPost(cy,baseUrl);
        pagePost.postTitle(cy, data[numberDataTitle].titePost);
        pagePost.beginWriteYourPost(cy, data[numberDataDescription].descriptionParag);
        pagePost.clearDescriptionSeeButtonPlus(cy);
        pageMenuPlus.botonPlus(cy);
        pageMenuPlus.clickBookMark(cy);
        pageMenuPlus.urlBookMark(cy, data[numberDataUrl].titePostCharDomanin);
        pagePost.clickTitle(cy);
        pageMenuPlus.clickPasteUrl(cy);
        pagePost.clearTitulo(cy, data[numberDataTitleAgain].titePost);
        pagePost.clickPublish(cy);
        pagePost.clickPublishEnd(cy);
        pagePost.clickPublishFinish(cy); 
        pagePost.clickViewPost(cy);
        paginaPrincipal.selectPost(cy, data[numberDataTitleAgain].titePost);
        pagePost.viewUrlBookmark(cy, data[numberDataUrl].titePostCharDomanin);
    });

    it('20. Post titulo en blanco con descripcion correcta [Aleatorio]', () => {
        let numberDataTitle = 5;
        let numberDataDescription = 5;
        let numberDataDescriptionAgain = 6;
        login.inputNombreUsuario(cy,userName);
        login.inputPassword(cy,password);
        login.clickBoton(cy);
        paginaPrincipal.viewPosts(cy);
        paginaPrincipal.createdNewPost(cy,baseUrl);
        pagePost.postTitle(cy, data[numberDataTitle].titePost);
        pagePost.beginWriteYourPost(cy, data[numberDataDescription].descriptionParag);
        pagePost.clearTitleSeeButtonPlus(cy);
        pagePost.clearDescription(cy,data[numberDataDescriptionAgain].descriptionParag);
        pagePost.clickPublish(cy);
        pagePost.clickPublishEnd(cy);
        pagePost.clickPublishFinish(cy);
        pagePost.clickViewPost(cy);
        paginaPrincipal.viewTitlePost(cy,data[numberDataTitle].titePost); 
    });

    it('21. Post titulo en blanco con descripcion caracteres especiales [Aleatorio]', () => {
        let numberDataTitle = 6;
        let numberDataDescription = 7;
        let numberDataDescriptionAgain = 8;
        login.inputNombreUsuario(cy,userName);
        login.inputPassword(cy,password);
        login.clickBoton(cy);
        paginaPrincipal.viewPosts(cy);
        paginaPrincipal.createdNewPost(cy,baseUrl);
        pagePost.postTitle(cy, data[numberDataTitle].titePost);
        pagePost.beginWriteYourPost(cy, data[numberDataDescription].descriptionParag);
        pagePost.clearTitleSeeButtonPlus(cy);
        pagePost.clearDescription(cy,data[numberDataDescriptionAgain].descriptionPostcharSeq);
        pagePost.clickPublish(cy);
        pagePost.clickPublishEnd(cy);
        pagePost.clickPublishFinish(cy);
        pagePost.clickViewPost(cy);
        paginaPrincipal.viewTitlePost(cy,data[numberDataTitle].titePostCharSeq); 
    });

    it('22. Post titulo con exceso de caracteres y descripcion correcta [Aleatorio]', () => {
        let numberDataTitle = 16;
        let numberDataDescription = 20;
        login.inputNombreUsuario(cy,userName);
        login.inputPassword(cy,password);
        login.clickBoton(cy);
        paginaPrincipal.viewPosts(cy);
        paginaPrincipal.createdNewPost(cy,baseUrl);
        pagePost.postTitle(cy, data[numberDataTitle].titePostParagMost);
        pagePost.beginWriteYourPost(cy, data[numberDataDescription].descriptionPostcharSeq);
        pagePost.clickPublish(cy);
        pagePost.clickPublishEnd(cy);
        pagePost.clickPublishFinish(cy);
        pagePost.clickViewPost(cy);
        paginaPrincipal.viewTitlePost(cy,data[numberDataTitle].titePostParagMost); 
    });

    it('23. Post titulo con exceso de caracteres y descripcion en blanco [Aleatorio]', () => {
        let numberDataTitle = 17;
        let numberDataDescription = 21;
        login.inputNombreUsuario(cy,userName);
        login.inputPassword(cy,password);
        login.clickBoton(cy);
        paginaPrincipal.viewPosts(cy);
        paginaPrincipal.createdNewPost(cy,baseUrl);
        pagePost.postTitle(cy, data[numberDataTitle].titePostParagMost);
        pagePost.beginWriteYourPost(cy, data[numberDataDescription].descriptionParag);
        pagePost.clearDescriptionSeeButtonPlus(cy);
        pagePost.clickPublish(cy);
        pagePost.clickPublishEnd(cy);
        pagePost.clickPublishFinish(cy);
        pagePost.clickViewPost(cy);
        paginaPrincipal.viewTitlePost(cy,data[numberDataTitle].titePostParagMost); 
    });

    it('24. Post titulo con exceso de caracteres y descripcion con caracteres especiales [Aleatorio]', () => {
        let numberDataTitle = 18;
        let numberDataDescription = 22;
        login.inputNombreUsuario(cy,userName);
        login.inputPassword(cy,password);
        login.clickBoton(cy);
        paginaPrincipal.viewPosts(cy);
        paginaPrincipal.createdNewPost(cy,baseUrl);
        pagePost.postTitle(cy, data[numberDataTitle].titePostParagMost);
        pagePost.beginWriteYourPost(cy, data[numberDataDescription].descriptionPostcharSeq);
        pagePost.clickPublish(cy);
        pagePost.clickPublishEnd(cy);
        pagePost.clickPublishFinish(cy);
        pagePost.clickViewPost(cy);
        paginaPrincipal.viewTitlePost(cy,data[numberDataTitle].titePostParagMost); 
    });

    it('25. Post se reescribe descripcion y titulo con exceso de caracteres [Aleatorio]', () => {
        let numberDataTitle = 19;
        let numberDataDescription = 23;
        let numberDataDescriptionAgain = 24;
        login.inputNombreUsuario(cy,userName);
        login.inputPassword(cy,password);
        login.clickBoton(cy);
        paginaPrincipal.viewPosts(cy);
        paginaPrincipal.createdNewPost(cy,baseUrl);
        pagePost.beginWriteYourPost(cy, data[numberDataDescription].descriptionParag);
        pagePost.clearDescription(cy, data[numberDataDescriptionAgain].descriptionParag)
        pagePost.postTitle(cy, data[numberDataTitle].titePostParagMost);
        pagePost.clickPublish(cy);
        pagePost.clickPublishEnd(cy);
        pagePost.clickPublishFinish(cy);
        pagePost.clickViewPost(cy);
        paginaPrincipal.viewTitlePost(cy,data[numberDataTitle].titePostParagMost); 
    });

    it('26. Post titulo en blanco, se borra descripcion y se crea bookmark [Aleatorio]', () => {
        let numberDataTitle = 21;
        let numberDataDescription = 29;
        let numberDataDescriptionAgain = 30;
        login.inputNombreUsuario(cy,userName);
        login.inputPassword(cy,password);
        login.clickBoton(cy);
        paginaPrincipal.viewPosts(cy);
        paginaPrincipal.createdNewPost(cy,baseUrl);
        pagePost.postTitle(cy, data[numberDataTitle].titePost);
        pagePost.beginWriteYourPost(cy, data[numberDataDescription].descriptionParag);
        pagePost.clearDescriptionSeeButtonPlus(cy);
        pageMenuPlus.botonPlus(cy);
        pageMenuPlus.clickBookMark(cy);
        pageMenuPlus.urlBookMark(cy, data[0].url);
        pagePost.clickTitle(cy);
        pagePost.clearTitleSeeButtonPlus(cy);
        pagePost.clickPublish(cy);
        pagePost.clickPublishEnd(cy);
        pagePost.clickPublishFinish(cy);
        pagePost.clickViewPost(cy);
        paginaPrincipal.viewTitlePost(cy,data[numberDataTitle].titePost); 

    });
    
}); 