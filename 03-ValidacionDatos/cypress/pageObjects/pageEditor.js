const inputTitle = function (cy,title){
    cy.wait(2000)
    cy.get("textarea[placeholder='Page title']").type(title);
    cy.wait(2000)
  };
  
  const inputText = function (cy,text){
    cy.get("div[class ='koenig-editor__editor __mobiledoc-editor __has-no-content']").type(text);
    cy.wait(3000)
  };
  
  const clickPublish = function (cy){
    cy.get("div[class = 'gh-publishmenu ember-view']").click();
    cy.wait(3000)
  };

  const clickConfirmPublish = function (cy){
    cy.get("button[class = 'gh-btn gh-btn-black gh-publishmenu-button gh-btn-icon ember-view']").click();
    cy.wait(1000)
  };

  const clickPlus = function (cy){
    cy.wait(2000)
    cy.get('div[class="gh-koenig-editor-pane flex flex-column mih-100"]') .trigger('mousedown', { which: 1, pageX: 600, pageY: 100 })
                                                                          .trigger('mousemove', { which: 1, pageX: 600, pageY: 600 })
                                                                          .trigger('mouseup')
    cy.wait(2000)
  
    cy.get("textarea[placeholder='Page title']").trigger('mousedown')
    //cy.xpath('/html/body/div[2]/div/main/div/section/div[1]/div[1]/article/div[4]/button')
    cy.wait(2000);
    cy.get('button[aria-label="Add a card"]').click();
    cy.wait(1000)
  };

  const clickPlusAgain = function (cy){
    cy.get('button[aria-label="Add a card"]').click();
    cy.wait(1000)
  };

  const otherUrl = function (cy,Url){
    cy.get("div[title = 'Other...']").click();
    cy.wait(1000)
    cy.get("input[name='url']").type(Url);
    cy.wait(2000)
  };

  const spotify = function (cy,Url){
    cy.get("div[title = 'Spotify']").click();
    cy.wait(1000)
    cy.get("input[name='url']").type(Url);
    cy.wait(2000)
  };

  const twitter = function (cy, twitterUrl){
    cy.get("div[title = 'Twitter']").click();
    cy.wait(1000)
    cy.get("input[name='url']").type(twitterUrl);
    cy.wait(2000)
  };

  const videoYouTube = function (cy,videoUrl){
    cy.get("div[title = 'YouTube']").click();
    cy.wait(1000)
    cy.get("input[name='url']").type(videoUrl);
    cy.wait(2000)
  };

  const vimeo = function (cy, vimeoUrl){
    cy.get("div[title = 'Vimeo']").click();
    cy.wait(1000)
    cy.get("input[name='url']").type(vimeoUrl);
    cy.wait(4000)
  };

  const bookMark = function (cy, Url){
    cy.get("div[title = 'Bookmark']").click();
    cy.wait(1000)
    cy.get("input[name='url']").type(Url);
    cy.wait(1000)
    cy.get("input[name='url']").type('{enter}')
    cy.wait(1000)
  };

  const callOut = function (cy, text){
    cy.get("div[title = 'Callout']").click();
    cy.wait(1000)
    cy.get("div[data-placeholder='Callout text...']").type(text);
    cy.wait(1000)
  };

  const toggle = function (cy, text){
    cy.get("div[title = 'Toggle']").click();
    cy.wait(1000)
    cy.xpath('/html/body/div[2]/div/main/div/section/div[1]/div[1]/article/div[1]/div/div/div/div/div/div/div[1]/div[1]/div[1]/div').type(text);
    cy.wait(1000)
  };

  const clickProduct = function (cy){
    cy.get("div[title = 'Product']").click();
    cy.wait(1000)
  };

  const titleProduct = function (cy, text){
    cy.xpath('/html/body/div[2]/div/main/div/section/div[1]/div[1]/article/div[1]/div/div/div/div/div/div/div[3]/div[1]/div/div[1]/div').type(text);
    cy.wait(1000)
  };

  const descProduct = function (cy, text){
    cy.xpath('/html/body/div[2]/div/main/div/section/div[1]/div[1]/article/div[1]/div/div/div/div/div/div/div[3]/div[2]/div[1]/div').type(text);
    cy.wait(1000)
  };

  const ratingProduct = function (cy){
    cy.xpath('/html/body/div[2]/div/main/div/section/div[1]/div[1]/article/div[1]/div/div/div/div/div/section/div[1]/div[2]/div').click();
    cy.wait(3000)
  };

  const addButtonProduct = function (cy){
    cy.xpath('/html/body/div[2]/div/main/div/section/div[1]/div[1]/article/div[1]/div/div/div/div/div/section/div[2]/div[2]/div').click();
    cy.wait(1000)
  };

  const textButtonProduct = function (cy,buttonText){
    cy.get('input[placeholder="Add button text"]').type(buttonText)
    cy.wait(1000)
  };

  const urlButtonProduct = function (cy,buttonUrl){
    cy.get('input[placeholder="Add URL"]').type(buttonUrl, {force: true})
    cy.wait(1000)
  };
  
  const checkConfirmation = function (cy){
    cy.get("span[class ='gh-notification-actions']").should('be.visible');
    cy.wait(1000)
  };

  const checkSavingFail = function (cy){
    cy.get('button[class = "gh-alert-close"]').click();
    cy.wait(1000)
  };

  const checkBookmarkFail = function (cy){
    cy.xpath('/html/body/div[2]/div/main/div/section/div[1]/div[1]/article/div[1]/div/div/div/div/div/div/div/span').click();
    cy.wait(1000)
  };

  const scrollUp = function (cy){
    cy.wait(2000)
    cy.get('div[class="gh-koenig-editor-pane flex flex-column mih-100"]').scrollTo('top')
    cy.wait(2000)
  };

  const clickSettings = function (cy){
    cy.get('button[title="Settings"]').click();
    cy.wait(2000)
  };

  const typePageUrl = function (cy,Url){
    cy.get('input[name="post-setting-slug"]').type(Url);
    cy.wait(2000)
  };

  const typeExcerpt = function (cy,text){
    cy.get('textarea[name="post-setting-custom-excerpt"]').type(text);
    cy.wait(2000)
    cy.get('input[name="post-setting-slug"]').click();
    cy.wait(2000)
  };

  const checkExcerptFail = function (cy){
    cy.xpath('/html/body/div[2]/div/main/div/div/div/div/div[2]/form/div[5]/p').click();
    cy.wait(2000)
  }

  module.exports ={
    inputTitle:inputTitle,
    inputText:inputText,
    clickPublish:clickPublish,
    clickConfirmPublish:clickConfirmPublish,
    clickPlus:clickPlus,
    videoYouTube:videoYouTube,
    vimeo:vimeo,
    bookMark:bookMark,
    callOut:callOut,
    toggle:toggle,
    clickProduct:clickProduct,
    titleProduct:titleProduct,
    descProduct:descProduct,
    ratingProduct:ratingProduct,
    addButtonProduct:addButtonProduct,
    textButtonProduct:textButtonProduct,
    urlButtonProduct:urlButtonProduct,
    typePageUrl:typePageUrl,
    scrollUp:scrollUp,
    clickSettings:clickSettings,
    twitter:twitter,
    spotify:spotify,
    otherUrl:otherUrl,
    checkConfirmation:checkConfirmation,
    checkSavingFail:checkSavingFail,
    checkBookmarkFail:checkBookmarkFail,
    clickPlusAgain:clickPlusAgain,
    typeExcerpt:typeExcerpt,
    checkExcerptFail:checkExcerptFail
  }
  