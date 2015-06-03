module.exports = function(config) {
  var configuration = {

    basePath: '../',

    frameworks: ['jasmine'],

    files: [
      'lib/angular.min.js',
      'lib/angular-route.min.js',
      'lib/angular-resource.min.js',
      'lib/angular-mocks.js',
      'js/**/*.js',
      'test/**/*.spec.js'
    ],

    exclude: [
    ],
    preprocessors: {
      'js/**/*.js': ['coverage']
    },
    reporters: ['progress', 'coverage', 'coveralls'],

    coverageReporter: {
      type : 'lcov',
      dir : 'coverage/',
      includeAllSources: true
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],

    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    singleRun: false
  };

  if(process.env.TRAVIS){
    configuration.browsers = ['Chrome_travis_ci'];
  }

  config.set(configuration);
};
