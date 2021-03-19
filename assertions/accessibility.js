const script = function (context, options, done) {
  if (!window.axe) done({ error: 'aXe not found. Make sure it has been injected' })

  window
    .axe
    .run(context, options)
    .then(function (results) {
      done({ results })
    })
    .catch(function (error) {
      done({ error: error.toString() })
    })
}

module.exports.assertion = function (context, options = {}) {
  this.expected = true
  this.message = `${context} passes accessibility scan`

  this.value = (result) => result
  this.evaluate = (result) => result

  const { timeout, verbose } = options

  const negate = this.negate

  this.api.waitForElementVisible(context)

  this.evaluate = function (results) {
    if (!results) {
      this.api.assert[negate ? 'ok' : 'fail']('aXe failed to execute')
      return false
    }

    if (verbose) {
      for (const pass of results.passes) {
        this.api.assert.ok(true, pass.help)
      }
    } else {
      if (results.passes.length > 0) {
        this.api.assert.ok(true, `${results.passes.length} aXe Tests Passed`)
      }
    }

    for (const violation of results.violations) {
      this.api.assert[negate ? 'ok' : 'fail'](`${violation.help} [${violation.nodes[0].html}] ${violation.helpUrl}`)
    }

    // should have no errors
    return results.violations.length === 0
  }

  this.command = (done) => this.api
    .timeoutsAsyncScript(timeout || 500)
    .executeAsync(script, [context, options], function ({ value: { results } }) {
      done(results)
    })
}
