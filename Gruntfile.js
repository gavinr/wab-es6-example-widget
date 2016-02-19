module.exports = function(grunt) {
  'use strict';
  require('load-grunt-tasks')(grunt);

  var appDir = 'C:/code/arcgis-web-appbuilder-1.3/server/apps/3';
  var stemappDir = 'C:/code/arcgis-web-appbuilder-1.3/client/stemapp';
  grunt.initConfig({
    babel: {
      dev: {
        files: [{
          expand: true,
          cwd: 'widgets/',
          src: [
            '*.js', '**/*.js', '**/**/*.js',
            '!**/**/nls/*.js',
          ],
          dest: 'dist/widgets/'
        }]
      }
    },
    watch: {
      'main': {
        'files': ['widgets/**'],
        'tasks': ['clean', 'babel', 'copy', 'sync'],
        'options': {
          'spawn': false,
          'atBegin': true
        }
      }
    },
    copy: {
      dev: {
        cwd: 'widgets/',
        src: [
          '**/**.html',
          '**/**.json',
          '**/**.css',
          '**/images/**',
          '**/nls/**'
        ],
        dest: 'dist/widgets/',
        expand: true
      }
    },
    clean: {
      dist: {
        src: 'dist/**'
      }
    },
    sync: {
      main: {
        verbose: true,
        files: [{
          cwd: 'dist/',
          src: '**',
          dest: stemappDir
        }, {
          cwd: 'dist/',
          src: '**',
          dest: appDir
        }]
      }
    }
  });
  grunt.registerTask('default', [
    'watch'
  ]);
};
