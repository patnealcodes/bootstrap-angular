module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		connect: {
			server: {
				options: {
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
				'js/app/*.js',
				'js/app/**/*.js',

				// ignore
				'!js/app/*.test.js',
				'!js/app/**/*.test.js'
			]
		},

		sass: {
			all: {
				options: {
					style: 'compressed',
					sourcemap: 'none'
				},
				files: [
					{ 'css/main.css': 'scss/main.scss' }
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
				files: ['scss/*.scss'],
				tasks: ['sass'],
				options: {
					livereload: true
				}
			},
			js: {
				files: [
					// include
					'js/app/*.js',
					'js/app/**/*.js',

					// ignore
					'!js/app/*.test.js',
					'!js/app/**/*.test.js'
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