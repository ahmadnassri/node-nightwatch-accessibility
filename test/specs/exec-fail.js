module.exports = {
  '@tags': ['accessibility'],
  'Fail Demo': function (browser) {
    const port = browser.globals.port()

    browser
      .url(`http://localhost:${port}`)

      .assert.not.accessibility('html', { verbose: true })

      .end()
  }
}
