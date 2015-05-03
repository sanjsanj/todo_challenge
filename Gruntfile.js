module.exports = function(grunt){

  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', 'js/**/*.js', 'test/**/*.js']
    },
    coverage: {
      default: {
        options: {
          thresholds: {
            'statements': 90,
            'branches': 90,
            'lines': 90,
            'functions': 90
          },
          dir: 'coverage',
          root: '.'
        }
      }
    },
    coveralls: {
        options: {
            debug: true,
            coverageDir: 'coverage/',
            dryRun: true,
            force: true,
            recursive: true
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-istanbul-coverage');
  grunt.loadNpmTasks('grunt-karma-coveralls');
  grunt.registerTask('default', ['jshint', 'coverage', 'coveralls']);
};
