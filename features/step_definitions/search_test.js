module.exports = function(){
  var config = require('config');

    this.Given(/^I have visited "([^"]*)"$/, function (urladdress) {      // Write code here that turns the phrase above into concrete actions
       console.log(urladdress);
       browser.url(urladdress);
    });

    this.Then(/^I see the title of "([^"]*)"$/, function (title) {
      console.log(title);
      expect(browser.getTitle()).toEqual(title);

    });

    this.When(/^I search for "([^"]*)"$/, function (keyword) {
        searchForKeyword(keyword);
    });

    this.Then(/^I see the results page about "([^"]*)"$/, function (link) {
      console.log(link);
      browser.waitForExist('a*=' + link, 2000);
      var text = browser.getText('a*=' + link);
      console.log(text);
    });

    this.Then(/^I visit kargo website$/, function () {
      browser.click('._ldf a');
    });

    this.Then(/^I go to its About page$/, function () {
      browser.click('#menu-item-5826');
    });

    this.When(/^I search for a keyword from "([^"]*)"$/, function (file) {
      console.log(file);
      var textReader = require('readline').createInterface({
        input: require('fs').createReadStream(file)
      });

      textReader.on('line', function(line){
        searchForKeyword(line);
      });
    });

    function searchForKeyword (word){
      browser.setValue("input[name = 'q']", word);
      browser.keys('Return');
      console.log('line from file', word);
    }
};
