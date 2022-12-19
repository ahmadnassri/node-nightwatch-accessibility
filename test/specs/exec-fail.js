module.exports = {
  '@tags': ['accessibility'],
  'Fail Demo': function (browser) {
    browser
      .url('https://www.w3.org/WAI/demos/bad/before/home.html')

      .assert.not.accessibility('html', { verbose: true })
  }
}
