module.exports = function(grunt) {
  grunt.initConfig({
    jshint: ['Gruntfile.js', 'mastermind.js'],
    sprite: {
      all: {
        src: 'images/*.png',
        dest: 'build/images/icons.png',
        destCss: 'build/css/icons.css'
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'build/mastermind.min.js': ['mastermind.js']
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-spritesmith');
  grunt.registerTask('default', ['jshint', 'uglify']);
};
