const fs = require('fs')
const path = require('path')

const source = fs.readFileSync(path.resolve(path.join(path.dirname(require.resolve('axe-core')), 'axe.min.js')), 'utf8')

exports.command = function () {
  this.execute(function (src) {
    // ensure to inject only once!
    if (!document.querySelector('#nightwatch-accessibility')) {
      var script = document.createElement('script')
      script.id = 'nightwatch-accessibility'
      script.text = src
      document.head.appendChild(script)
    }
  }, [source])

  return this
}
