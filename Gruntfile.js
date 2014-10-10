
var fs        = require('fs');
var commonjs  = require('common.js');

var srcPath   = './src';
var buildPath = './build';

module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-mkdir');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.loadNpmTasks('grunt-myth');
	grunt.loadNpmTasks('grunt-git');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		clean: [ buildPath ],
		
		jshint: {
			files: [
				srcPath + '/common/**/*.js',
				srcPath + '/models/**/*.js',
				srcPath + '/routers/**/*.js',
				srcPath + '/views/**/*.js',
				srcPath + '/*.js'
			],
			options: {
				sub: true,
				browser: true,
				bitwise: false,
				camelcase: false,
				eqnull: true,
				latedef: false,
				plusplus: false,
				shadow: true,
				smarttabs: true,
				loopfunc: true,
				boss: true,
				globals: {
					console: true,
					module: true,
					exports: true,
					require: true
				}
			}
		},

		mkdir: {
			build: {
				options: {
					mode: 0777,
					create: [ buildPath ]
				}
			}
		},
		
		commonjs: {
			all: {
				src: srcPath,
				dest: buildPath + '/js',
				keepFiles: ['templates.js']
			}
		},
		
		concat: {
			js: {
				src: [
					buildPath + '/js/common.js',
					buildPath + '/js/**/*.js'
				],
				dest: buildPath + '/build.js'
			},
			baseCss: {
				src: [
					'./css/reset.css',
					'./css/foundation.css',
					'./css/base.css',
					'./css/components/**/*.css'
				],
				dest: buildPath + '/css/base.css'
			},
			css: {
				src: [
					buildPath + '/css/base.css',
					srcPath + '/**/*.css'
				],
				dest: buildPath + '/css/app.css3'
			}
		},
		
		uglify: {
			commonjs: {
				src: buildPath + '/js/common.js',
				dest: buildPath + '/js/common.min.js'
			},
			src: {
				src: buildPath + '/build.js',
				dest: buildPath + '/build.min.js'
			}
		},

		myth: {
			all: {
				src: buildPath + '/css/app.css3',
				dest: buildPath + '/css/app.css'
			}
		},

		cssmin: {
			all: {
				src: buildPath + '/css/app.css',
				dest: buildPath + '/css/app.min.css'
			}
		},

		handlebars: {
			all: {
				src: srcPath + '/**/*.hbs',
				dest: buildPath + '/js/templates.js',
				options: {
					node: true,
					namespace: 'exports',
					processName: function(filename) {
						return filename.split('/').slice(2).join('/');
					}
				}
			}
		},

		gitpush: {
			github: {
				options: {
					remote: 'origin',
					branch: 'master'
				}
			},
			heroku: {
				options: {
					remote: 'heroku',
					branch: 'master'
				}
			}
		},

		gitcommit: {
			deploy_build: {
				options: {
					ignoreEmpty: true,
					message: 'deploy build'
				},
				files: {
					src: [ buildPath ]
				}
			}
		}

	});

// --------------------------------------------------------

	grunt.registerMultiTask('commonjs', 'Compiles the JavaScript in CommonJS format', function() {
		var data = this.data;
		var done = this.async();
		var opts = {
			output: 2,
			src: data.src,
			dest: data.dest,
			keepFiles: data.keepFiles
		};
		commonjs.build(opts, function() {
			commonjs.outputClientTo(data.dest + '/common.js', done);
		});
	});

// --------------------------------------------------------

	grunt.registerTask('js', ['jshint', 'templates', 'commonjs', 'concat:js']);
	grunt.registerTask('css', ['concat:baseCss', 'concat:css', 'myth', 'cssmin']);
	grunt.registerTask('templates', ['handlebars']);
	grunt.registerTask('default', ['clean', 'mkdir:build', 'js', 'css']);
	grunt.registerTask('deploy', ['default', 'uglify:commonjs', 'uglify:src',
		'gitcommit:deploy_build', 'gitpush:github', 'gitpush:heroku']);

};