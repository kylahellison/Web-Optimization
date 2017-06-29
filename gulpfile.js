'use strict';

const gulp = require('gulp'); //include gulp
const concat = require('gulp-concat'); //include gulp-concat plugin
const uglify = require('gulp-uglify'); //include gulp-uglify plugin
const rename = require('gulp-rename'); //include gulp-rename plugin
const concatCSS = require('gulp-concat-css'); //include gulp-concat-css plugin
const cleanCSS = require('gulp-clean-css'); //include gulp-clean-css plugin

//concatenate JS files
gulp.task('concatScripts', function() {
	return gulp.src([
		'js/jquery.js',
		'js/fastclick.js',
		'js/foundation.js',
		'js/foundation.equalizer.js',
		'js/foundation.reveal.js'
	])
		.pipe(concat('main.js'))
		.pipe(gulp.dest('js'));
});

gulp.task('minifyScripts', ['concatScripts'], function() {
	return gulp.src('js/main.js')
		.pipe(uglify())
		.pipe(rename('main.min.js'))
		.pipe(gulp.dest('./dist'))
});


gulp.task('concatCSS', function() {
	return gulp.src([
		'css/normalize.css',
		'css/foundation.css',
		'css/basics.css',
		'css/menu.css',
		'css/hero.css',
		'css/photo-grid.css',
		'css/modals.css',
		'css/footer.css'
	])
		.pipe(concatCSS('application.css'))
		.pipe(gulp.dest('css'));
});

gulp.task('minify-css', ['concatCSS'], function() {
	return gulp.src('css/application.css')
		.pipe(cleanCSS())
		.pipe(rename('application.min.css'))
		.pipe(gulp.dest('./dist'))
});



//build task
gulp.task('build', ['minifyScripts', 'minify-css']);


//Default task
gulp.task('default', ['build']);

// gulp.task('image', function () {
// 	gulp.src('./src/images/*')
// 		.pipe(image({
// 			pngquant: true,
// 			optipng: false,
// 			zopflipng: true,
// 			jpegRecompress: true,
// 			jpegoptim: false,
// 			mozjpeg: false,
// 			gifsicle: true,
// 			svgo: true
// 		}))
// 		.pipe(gulp.dest('./dist/images'));
// });

