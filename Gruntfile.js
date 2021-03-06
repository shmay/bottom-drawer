module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    sass: {
      dist: {
        options: {
          sourcemap: 'none'
        },
        files: [{
          expand: true,
          src: ['lib/**/*.scss'],
          ext: '.css'
        }]
      }
    },

    coffee: {
      dist: {
        files: [{
          expand: true,
          cwd: 'lib',
          src: '**/*.{coffee,litcoffee,coffee.md}',
          dest: 'lib',
          ext: '.js'
        }]
      }
    },

    watch: {
      sass: {
        files: ['lib/**/*.scss'],
        tasks: ['sass']
      },
      coffee: {
        files: ['lib/**/*.{coffee,litcoffee,coffee.md}'],
        tasks: ['coffee:dist']
      }
    },

    vulcanize: {
      default: {

        options: {
          csp: true,
          inline: true,
          strip: true
        },
        files: {
          'dist/index.html': 'index.html'
        }
      }
    }

  });

};
