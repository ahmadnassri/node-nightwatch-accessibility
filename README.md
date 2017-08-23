# Nightwatch Accessibility [![version][npm-version]][npm-url] [![License][license-image]][license-url]

> Nightwatch.js utility assertion for accessibility testing with [`aXe`][axe-core].

[![Build Status][travis-image]][travis-url]
[![Downloads][npm-downloads]][npm-url]
[![Code Climate][codeclimate-quality]][codeclimate-url]
[![Dependency Status][dependencyci-image]][dependencyci-url]
[![Dependencies][david-image]][david-url]

## Install

```bash
npm install --only=production --save nightwatch-accessibility
```

## Usage

Update your nightwatch config:

```js
{
  custom_commands_path: ["./node_modules/nightwatch-accessibility/commands"],
  custom_assertions_path: ["./node_modules/nightwatch-accessibility/assertions"]
}
```

Use in your tests:

```js
module.exports = {
  'Test': function (browser) {
    browser
      .initAccessibility()
      .assert.accessibility('#app', {
        verbose: true,
        rules: {
          'color-contrast': { enabled: false }
        }
      })
      
      .end()
  }
}
```

## API

### `browser.initAccessibility()`

Injects the [`aXe`][axe-core] library into the current test page.

### `browser.assert.accessibility(context, options)`

Analyzes the defined `context` against applied `aXe` rules

Name          | Type     | Default  | Description                    
------------- | -------- | -------- | -------------------------------
**`context`** | `String` | `'html'` | [aXe Context][axe-context] Parameter
**`options`** | `Object` | `null`   | [aXe Options][axe-options] Parameter     

> Additionally to standard `options`, when `options.verbose` is set to `true` it will log all successful `aXe` tests.

---
> :copyright: [ahmadnassri.com](https://www.ahmadnassri.com/)  · 
> License: [ISC][license-url]  · 
> Github: [@ahmadnassri](https://github.com/ahmadnassri)  · 
> Twitter: [@ahmadnassri](https://twitter.com/ahmadnassri)

[license-url]: http://choosealicense.com/licenses/isc/
[license-image]: https://img.shields.io/github/license/ahmadnassri/nightwatch-accessibility.svg?style=flat-square

[travis-url]: https://travis-ci.org/ahmadnassri/nightwatch-accessibility
[travis-image]: https://img.shields.io/travis/ahmadnassri/nightwatch-accessibility.svg?style=flat-square

[npm-url]: https://www.npmjs.com/package/nightwatch-accessibility
[npm-version]: https://img.shields.io/npm/v/nightwatch-accessibility.svg?style=flat-square
[npm-downloads]: https://img.shields.io/npm/dm/nightwatch-accessibility.svg?style=flat-square

[codeclimate-url]: https://codeclimate.com/github/ahmadnassri/nightwatch-accessibility
[codeclimate-quality]: https://img.shields.io/codeclimate/github/ahmadnassri/nightwatch-accessibility.svg?style=flat-square

[david-url]: https://david-dm.org/ahmadnassri/nightwatch-accessibility
[david-image]: https://img.shields.io/david/ahmadnassri/nightwatch-accessibility.svg?style=flat-square

[dependencyci-url]: https://dependencyci.com/github/ahmadnassri/nightwatch-accessibility
[dependencyci-image]: https://dependencyci.com/github/ahmadnassri/nightwatch-accessibility/badge?style=flat-square

[axe-core]: https://www.npmjs.com/package/axe-core
[axe-options]: https://github.com/dequelabs/axe-core/blob/master/doc/API.md#options-parameter
[axe-context]: https://github.com/dequelabs/axe-core/blob/master/doc/API.md#context-parameter
