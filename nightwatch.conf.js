module.exports = {
  src_folders: [
    './tests',
  ],

  test_settings: {
    default: {
      launch_url: 'https://nightwatchjs.org'
    },

    selenium: {
      // Selenium Server is running locally and is managed by Nightwatch
      selenium: {
        start_process: false,
        port: 4444,
        cli_args: {
          'webdriver.chrome.driver': require('chromedriver').path,
        }
      },
      webdriver: {
        start_process: false
      }
    },

    'selenium.chrome': {
      extends: 'selenium',
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions : {
          w3c: false
        }
      }
    },
  }
}
