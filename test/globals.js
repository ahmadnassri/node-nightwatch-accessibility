const driver = require('chromedriver')
const server = require('./server')

module.exports = {
  abortOnAssertionFailure: false,

  before (done) {
    server.start(() => {
      driver.start(['--port=4444', '--no-sandbox', '--headless', '--disable-gpu'])

      console.log('✔ servers started')

      done()
    })
  },

  after (done) {
    server.stop(() => {
      driver.stop()

      console.log('✖ servers stopped')

      done()
    })
  },

  port () {
    return server.port()
  }
}
