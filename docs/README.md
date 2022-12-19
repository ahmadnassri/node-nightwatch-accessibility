
## Install

```bash
npm install nightwatch-accessibility
```

## Usage

### Nightwatch >= 2.x

add `nightwatch-accessibility` to the plugins array

```js
{
  plugins: ['nightwatch-accessibility']
}
```

### Nightwatch <= 1.x

```js
{
  custom_commands_path: ["./node_modules/nightwatch-accessibility/nightwatch/commands"],
  custom_assertions_path: ["./node_modules/nightwatch-accessibility/nightwatch/assertions"]
}
```

Use in your tests:

```js
module.exports = {
  'Test': function (browser) {
    browser
      // initiate aXe
      .initAccessibility() 

      // execute accessibility check
      .assert.accessibility('#app', {
        verbose: true,
        rules: {
          'color-contrast': { enabled: false }
        }
      })
  }
}
```

## API

### `browser.initAccessibility()`

Injects the [`aXe`][axe-core] library into the current test page.

### `browser.assert.accessibility(context, options)`

Analyzes the defined `context` against applied `aXe` rules

| Name          | Type     | Default  | Description                          |
| ------------- | -------- | -------- | ------------------------------------ |
| **`context`** | `String` | `'html'` | [aXe Context][axe-context] Parameter |
| **`options`** | `Object` | `null`   | [aXe Options][axe-options] Parameter |

> In addition to the standard `options`:

- `options.verbose` set to `true` will log all successful `aXe` tests.
- `options.timeout` configures the nightwatch timeout, default value is `500 milliseconds`

[axe-core]: https://www.npmjs.com/package/axe-core
[axe-options]: https://github.com/dequelabs/axe-core/blob/master/doc/API.md#options-parameter
[axe-context]: https://github.com/dequelabs/axe-core/blob/master/doc/API.md#context-parameter
