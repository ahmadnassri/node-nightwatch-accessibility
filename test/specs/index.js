module.exports = {
  '@tags': ['accessibility'],
  'Demo': function (browser) {
    browser
      .url('http://localhost:8080')

      .initAccessibility()
      .assert.accessibility('html', { verbose: true })

      .end()
  }
}
