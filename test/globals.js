const driver = require('chromedriver')
const server = require('./server')

module.exports = {
  before: (done) => {
    server.start(driver.start)

    console.log('servers started')

    done()
  },

  after: (done) => {
    server.stop(driver.stop)

    console.log('servers stopped')

    done()
  }
}
