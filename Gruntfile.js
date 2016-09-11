module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-connect');

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
    }

  });

  grunt.registerTask('serve', ['connect']);

};
