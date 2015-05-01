module.exports = function(grunt){

 grunt.initConfig({
   jshint: {
     all: ['Gruntfile.js', 'src/**/*.js', 'spec/**/*.js']
   },
   jasmine : {
     src : 'src/**/*.js',
     specs : 'specs/**/*Spec.js',
     helpers : 'specs/helpers/*.js',
     timeout : 10000,
     junit : {
       output : 'junit/'
     },
     phantomjs : {
       'ignore-ssl-errors' : true
     }
   },
   watch: {
     scripts: {
       files: ['**/*.js'],
       tasks: ['jshint'],
       options: {
         spawn: false,
       }
     }
   }
 });

 grunt.loadNpmTasks('grunt-contrib-jshint');
 grunt.loadNpmTasks('grunt-contrib-jasmine');
 grunt.loadNpmTasks('grunt-contrib-watch');

 grunt.registerTask('default', ['jshint', 'jasmine']);

};
