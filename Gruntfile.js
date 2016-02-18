module.exports = function(grunt) {
  'use strict';
  require('load-grunt-tasks')(grunt);

  var appDir = 'C:/code/arcgis-web-appbuilder-1.3/server/apps/3';
  var stemappDir = 'C:/code/arcgis-web-appbuilder-1.3/client/stemapp';
  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true,
        presets: ['es2015-without-strict', 'stage-0'] // blacklisting 'strict' until dojo2 fixes class declarations. see http://dojo-toolkit.33424.n3.nabble.com/A-line-to-use-instead-of-quot-this-inherited-arguments-quot-in-strict-mode-td3999709.html
        // plugins: ['transform-es2015-modules-amd']
      },
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
