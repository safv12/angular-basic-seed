
module.exports = function (grunt) {
  'use strict';

  // Load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    connect: {
      server: {
        options: {
          port: 8000,
          hostname: 'localhost',
          base: './app',
          keepalive: true
        }
      }
    },

    karma: {
      unit: { configFile: './karma.conf.js' }
    },

    jshint: {
      jshintrc: '.jshintrc',
      all: [
        'Gruntfile.js',
        'app/view-*/**/*.js',
        'app/components/**/*.js'
      ]
    }

  });

  // Grunt tasks
  grunt.registerTask('serve', ['jshint', 'connect']);
  grunt.registerTask('test', ['karma']);

};
