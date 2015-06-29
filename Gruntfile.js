

module.exports = function(grunt) {
  'use strict';
// Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: [
        '**/*.js'
      ]
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