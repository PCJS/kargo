module.exports = function(){
  var config = require('config');

    this.Given(/^I have visited "([^"]*)"$/, function (urladdress) {      // Write code here that turns the phrase above into concrete actions
       console.log(urladdress);
       browser.url(urladdress);
    });

    this.Then(/^I see the title of "([^"]*)"$/, function (title) {
      // Write code here that turns the phrase above into concrete actions
      console.log(title);
      expect(browser.getTitle()).toEqual(title);

    });

    this.When(/^I search for "([^"]*)"$/, function (keyword) {
      // Write code here that turns the phrase above into concrete actions
      console.log(keyword);
      var value = config.get('textbox');
      browser.setValue('input[name = "q"]', keyword);
      browser.keys(['Enter']);
    });

    this.Then(/^I see the results page about "([^"]*)"$/, function (link) {
      // Write code here that turns the phrase above into concrete actions
      console.log(link);
      browser.waitForExist('a*=' + link, 2000);
      var text = browser.getText('a*=' + link);
      console.log(text);
    });

    this.Then(/^I visit kargo website$/, function () {
      // Write code here that turns the phrase above into concrete actions
      browser.click('._ldf a');
    });

    this.Then(/^I go to its About page$/, function () {
      // Write code here that turns the phrase above into concrete actions
      browser.click('#menu-item-5826');
    });

    this.When(/^I search for a keyword from "([^"]*)"$/, function (file) {
      // Write code here that turns the phrase above into concrete actions
      console.log(file);
      var textReader = require('readline').createInterface({
        input: require('fs').createReadStream(file)
      });

      textReader.on('line', function(line){
        browser.setValue("input[name = 'q']", line);
        browser.keys('Return');
        console.log('line from file', line);
      });
    });
};
