module.exports = {
  src_folders: ['test'],

  custom_assertions_path: [],

  plugins: ['./index.js'],

  webdriver: {},

  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          w3c: true,
          args: [
            'no-sandbox',
            'ignore-certificate-errors',
            'allow-insecure-localhost',
            'headless'
          ],
        },
      },

      webdriver: {
        start_process: true,
        server_path: '',
      },
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          w3c: true,
          args: [],
        },
      },

      webdriver: {
        start_process: true,
        server_path: '',
        cli_args: [],
      }
    }
  }
}
