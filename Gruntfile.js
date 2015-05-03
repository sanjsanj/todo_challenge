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
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-istanbul-coverage');
  grunt.registerTask('default', ['jshint', 'coverage']);
};
