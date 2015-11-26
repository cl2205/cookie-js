module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'browserify'],

    files: [ 'app/**/*-test.js' ],

    preprocessors: {
      'app/**/*.js': [ 'browserify' ]
    },

    browserify: {
      debug: true,
      files: [
        'app/**/*-test.js'
      ],
      transform: [
        ['babelify', { sourceMapRelative: './app' }]
      ]
    },

    browsers: [ 'Chrome' ],

    singleRun: true
  });
};