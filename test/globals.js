const driver = require('chromedriver')
const server = require('./server')

module.exports = {
  abortOnAssertionFailure: false,

  before (done) {
    server.start(() => {
      driver.start(['--port=8001'])

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
