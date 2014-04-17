'use strict';

module.exports = function (grunt) { 

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

        // Define the configuration for all the tasks
    grunt.initConfig({
      watch: {
            
            gruntfile: {
                files: ['Gruntfile.js']
            },
            styles: {
                files: ['styles/{,*/}*.css'],
                tasks: ['newer:copy:styles', 'autoprefixer']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '{,*/}*.html',
                    'images/{,*/}*'
                ]
            }
        },

        // The actual grunt server settings
        connect: {
            options: {
                port: 9001,
                livereload: 35739,
                // Change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        '.'
                    ]
                }
            }
        },
    });

    grunt.registerTask('serve', function (target) {
        grunt.task.run([
            'connect:livereload',
            'watch'
        ]);
    });


};