module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-karma');

  grunt.initConfig({

    connect: {
      server: {
        options: {
          port: 8000,
          hostname: '127.0.0.1',
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
