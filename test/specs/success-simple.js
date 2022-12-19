module.exports = {
  '@tags': ['accessibility'],
  'Fail Demo': function (browser) {
    browser
      .url('https://www.w3.org/WAI/demos/bad/after/home.html')

      .initAccessibility()
      .assert.accessibility('html', {
        rules: {
          'region': { enabled: false },
          'landmark-one-main': { enabled: false }
        }
      })

  }
}
