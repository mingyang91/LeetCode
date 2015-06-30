

module.exports = function(grunt) {
  'use strict';
// Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['gruntfile.js', 'solution/**/*.js', 'test/**/*.js'],
      // configure JSHint (documented at http://www.jshint.com/docs/)
      options: {
        // more options here if you want to override JSHint defaults
        globals: {
          console: true,
          module: true
        }
      }
    },
    mochaTest: {
      test: {
        options: {
          timeout: 10000,
          reporter: 'spec'
        },
        src: [
          'test/*.js'
        ],
        dest: './test/output/spec.out'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.registerTask('test', ['mochaTest']);
  grunt.registerTask('default', ['jshint', 'mochaTest']);
};