module.exports = function(grunt) {
  grunt.initConfig({
    jshint: ['Gruntfile.js', 'src/mastermind.js'],
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
        files: { 'build/src/mastermind.min.js': ['src/mastermind.js'] }
      }
    },
    copy: {
      html: {
        files: [
          { src: ['src/index.html'], dest: 'build/' }
        ]
      },
      css: {
        files: [
          { src: ['css/master.css'], dest: 'build/' }
        ]
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-spritesmith');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask('default', ['jshint', 'uglify', 'sprite', 'copy']);
};
