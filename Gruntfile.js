module.exports = function (grunt) {

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
    }

  });

  grunt.registerTask('serve', ['connect']);
  grunt.registerTask('test', ['karma']);

};
