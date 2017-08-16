
module.exports = {
  '@tags': ['accessibility'],
  'Demo': function (browser) {
    browser
      .url('http://localhost:8080')

      .assert.accessibility('html', { verbose: true }, (error) => browser.assert.equal(error, 'aXe failed to execute'))

      .end()
  }
}
