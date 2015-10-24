module.exports = function(grunt) {
  grunt.initConfig({
    jshint: ['Gruntfile.js', 'mastermind.js'],
    sprite: {
      all: {
        src: 'images/*.png',
        dest: 'build/images/icons.png',
        destCss: 'build/css/icons.css'
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-spritesmith');
  grunt.registerTask('default', ['jshint']);
};
