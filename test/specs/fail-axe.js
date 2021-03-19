module.exports = {
  '@tags': ['accessibility'],
  'Success Demo': function (browser) {
    const port = browser.globals.port()

    browser
      .url(`http://localhost:${port}`)

      .initAccessibility()

      // make the page fail
      .execute(function () {
        const h1 = document.createElement('h1')
        document.body.appendChild(h1)
      })

      .assert.not.accessibility('html')

      .end()
  }
}
