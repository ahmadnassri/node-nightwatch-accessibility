const script = function (context, options, done) {
  if (!window.axe) done({ error: 'aXe not found. Make sure it has been injected' })

  window.axe.run(context, options, function (err, results) {
    done(err ? { error: err.toString() } : { results: results })
  })
}

module.exports.assertion = function (context, options, callback) {
  this.message = `${context} passes accessibility scan`
  this.value = (result) => result
  this.expected = true
  this.pass = (result) => result

  this.command = (done) => this.api.executeAsync(script, [context, options], function (response) {
    const result = response.value.results

    if (!result) {
      const error = 'aXe failed to execute'

      callback ? callback(error) && done(true) : this.assert.fail(error) && done(false)

      return
    }

    if (options.verbose) {
      for (const pass of result.passes) {
        this.assert.ok(true, pass.help)
      }
    } else {
      if (result.passes.length > 0) {
        this.assert.ok(true, `${result.passes.length} aXe Tests Passed`)
      }
    }

    for (const violation of result.violations) {
      this.assert.fail(`${violation.help}`)
    }

    const success = result.violations.length === 0

    callback ? callback(success) && done(true) : done(success)
  })
}
