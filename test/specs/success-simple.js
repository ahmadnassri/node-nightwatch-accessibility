module.exports = {
  '@tags': ['accessibility'],
  'Success Demo': function (browser) {
    const port = browser.globals.port()

    browser
      .url(`http://localhost:${port}`)

      .initAccessibility()
      .assert.accessibility('html')

      .end()
  }
}
