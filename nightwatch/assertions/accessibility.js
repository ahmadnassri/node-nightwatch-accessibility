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

  this.value = function(result) {
    return result.value
  };

  this.evaluate = function (result) {
    if (!result.results || result.error) {
      this.api.assert[negate ? 'ok' : 'fail']('aXe failed to execute')
      return false
    }

    if (verbose) {
      for (const pass of result.results.passes) {
        this.api.assert.ok(true, pass.help)
      }
    } else {
      if (result.results.passes.length > 0) {
        this.api.assert.ok(true, `${result.results.passes.length} aXe Tests Passed`)
      }
    }

    for (const violation of result.results.violations) {
      this.api.assert[negate ? 'ok' : 'fail'](`${violation.help} [${violation.nodes[0].html}] ${violation.helpUrl}`)
    }

    // should have no errors
    return result.results.violations.length === 0
  }

  this.command = (done) => this.api
    .timeoutsAsyncScript(timeout || 500)
    .executeAsyncScript(script, [context, options], done)
}
