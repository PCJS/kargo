(function(){
  "use strict";

  require('./package.json');

  desc('Default Build');
  task("default",['version','jshint', "chimp"], function(){
    console.log("Kargo Default Build OK!");
  });

  desc("Check Node Version");
  task("version", function(){
    console.log("Checking Node version");
    var jsonPackage = require('./package.json');
    var expectedVersion = "v" + jsonPackage.engines.node;
    var actualVersion = process.version;

    if(actualVersion !== expectedVersion){
      fail("Incorrect Node version found: " + actualVersion + ", but expected: " + expectedVersion);
    }
  });

  desc('Run Chimp');
  task("chimp", function(){
    console.log('Staring Chimp');
    jake.exec("node_modules/.bin/chimp", { interactive: true }, complete);
  }, {async: true});

  desc("starting static code analysis");
  task("jshint", function(){
    console.log("starting static code analysis");
    //detect coding errors from jakefile.js and search_test.js
    jake.exec("node_modules/.bin/jshint jakefile.js features/step_definitions/search_test.js", { interactive: true }, complete);
  }, {async: true} );
})();
