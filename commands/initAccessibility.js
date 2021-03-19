const { readFileSync } = require('fs')
const { resolve, join, dirname } = require('path')

const source = readFileSync(resolve(join(dirname(require.resolve('axe-core')), 'axe.min.js')), 'utf8')

exports.command = async function () {
  this.execute(function (src) {
    // ensure to inject only once!
    if (!document.querySelector('#nightwatch-accessibility')) {
      const script = document.createElement('script')
      script.id = 'nightwatch-accessibility'
      script.text = src
      document.head.appendChild(script)
    }
  }, [source])

  return this
}
