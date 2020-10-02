module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .windowMaximize()
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'nightwatch')
      .waitForElementVisible('button[name=btnG]', 1000)
      .click('button[name=btnG]')
      .pause(1000)
      .assert.containsText('#main', 'nightwatch')
      .end();
  }
};

// module.exports = {
//   'Demo test ecosia.org' : function(browser) {
//     browser
//       .url('https://www.ecosia.org/')
//       .waitForElementVisible('body')
//       .assert.titleContains('Ecosia')
//       .assert.visible('input[type=search]')
//       .setValue('input[type=search]', 'nightwatch')
//       .assert.visible('button[type=submit]')
//       .click('button[type=submit]')
//       .assert.containsText('.mainline-results', 'Nightwatch.js')
//       .end();
//   }
// };
