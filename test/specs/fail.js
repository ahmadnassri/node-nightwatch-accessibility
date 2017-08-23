module.exports = {
  '@tags': ['accessibility'],
  'Fail Demo': function (browser) {
    const port = browser.globals.port()

    browser
      .url(`http://localhost:${port}`)

      .assert.accessibility('html', { verbose: true }, (error) => browser.assert.equal(error, 'aXe failed to execute'))

      .end()
  }
}
