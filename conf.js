
//this configurations tells protractor where your test files (specs) are
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    // multiCapabilities: [{
    //     browserName: 'chrome'
    // }, {
    //     browserName: 'internet explorer'
    // }]
    capabilities: {
        browserName: 'chrome'
    }
  }

  //run test with protractor conf.js