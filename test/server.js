const fs = require('fs')
const http = require('http')
const path = require('path')

const filename = path.join(__dirname, 'index.html')
const server = http.createServer()

server.on('request', (req, res) => {
  res.writeHead(200, 'text/html')
  fs.createReadStream(filename).pipe(res)
})

module.exports = {
  start: (done) => server.listen(done),
  stop: (done) => server.close(done),
  port: () => server.address().port
}
