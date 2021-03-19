const server = require('./server')

module.exports = {
  abortOnAssertionFailure: false,

  before (done) {
    server.start(() => {
      console.log('✔ servers started')
      done()
    })
  },

  after (done) {
    server.stop(() => {
      console.log('✖ servers stopped')
      done()
    })
  },

  port () {
    return server.port()
  }
}
