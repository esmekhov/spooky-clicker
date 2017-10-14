process.env.CHROME_BIN = require('puppeteer').executablePath();
const webpackConf = require('./webpack.config');

module.exports = function(config) {
  config.set({
    basePath: './',
    autoWatch: true,
    frameworks: ['mocha', 'chai'],
    browserNoActivityTimeout: 120000,
    concurrency: 2,
    files: [
      'node_modules/sinon/pkg/sinon.js',
      'node_modules/sinon-chai/lib/sinon-chai.js',
      'test/specs/*.js'
    ],
    browsers: ['ChromeHeadless'],
    reporters: ['progress', 'coverage'],
    preprocessors: {
      'src/js/*': ['coverage'],
      'test/**/*.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConf,
    coverageReporter: {
      dir: './coverage/'
    },
    singleRun: true
  });
};
