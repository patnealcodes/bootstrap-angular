module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		connect: {
			server: {
				options: {
					base: 'app',
					hostname: 'localhost',
					open: true,
					port: 1234,
					livereload: true
				}
			}
		},

		jshint: {
			all: [
				// include
				'app/js/*.js',
				'app/js/**/*.js',

				// ignore
				'!app/js/lib/*.js',
				'!app/js/*.test.js',
				'!app/js/**/*.test.js'
			]
		},

		sass: {
			all: {
				options: {
					style: 'compressed',
					sourcemap: 'none'
				},
				files: [
					{ 'app/css/main.css': 'app/scss/main.scss' }
				]
			}
		},

		watch: {
			html: {
				files: 'index.html',
				options: {
					livereload: true
				}
			},
			sass: {
				files: ['app/scss/*.scss'],
				tasks: ['sass'],
				options: {
					livereload: true
				}
			},
			js: {
				files: [
					// include
					'app/js/*.js',
					'app/js/**/*.js',

					// ignore
					'!app/js/lib/*.js',
					'!app/js/*.test.js',
					'!app/js/**/*.test.js'
				],
				tasks: [
					'jshint'
				],
				options: {
					livereload: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.registerTask('default', ['sass', 'connect', 'watch']);
};