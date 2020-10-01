module.exports = {
  src_folders: [
    './tests',
  ],

  test_settings: {
    default: {
      selenium: {
        "start_process" : false,
        host: "0.0.0.0",
        port: 4444,
        cli_args: {
          'webdriver.chrome.driver': require('chromedriver').path,
        },
        "silent": true,
      },
      desiredCapabilities : {
        "browserName" : "chrome",
        "chromeOptions": {
          "args" : ["--no-sandbox"]
        },
        "marionette": true,
      },
    },
  }
}
