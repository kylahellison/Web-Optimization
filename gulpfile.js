'use strict';

const gulp = require('gulp'); //include gulp
const concat = require('gulp-concat'); //include gulp-concat plugin
const uglify = require('gulp-uglify'); //include gulp-uglify plugin
const rename = require('gulp-rename'); //include gulp-rename plugin
const concatCSS = require('gulp-concat-css'); //include gulp-concat-css plugin
const cleanCSS = require('gulp-clean-css'); //include gulp-clean-css plugin
const spritesmith = require('gulp.spritesmith'); //include gulp-spritesmith plugin
const htmlmin = require('gulp-htmlmin'); //include gulp-htmlmin plugin
const gzip = require('gulp-gzip'); //include gulp-gzip plugin

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
		'css/footer.css',
		'css/avatarsprite.css',
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

// gulp.task('minify-html', function() {
//   return gulp.src('*.html')
//     .pipe(htmlmin({collapseWhitespace: true}))
//     .pipe(gulp.dest('dist'));
// });


//		.pipe(gzip())

//build task
gulp.task('build', ['minifyScripts', 'minify-css']);


//Default task
gulp.task('default', ['build']);



//IMAGES - not part of default or build task

gulp.task('sprite', function () {
  var spriteData = gulp.src('img/avatars/*.jpg').pipe(spritesmith({
    imgName: 'avatarsprite.jpg',
    cssName: 'avatarsprite.css'
  }));
  return spriteData.pipe(gulp.dest('dist'));
});

gulp.task('spritephotos', function () {
  var spritePhotoData = gulp.src('img/photos/*.jpg').pipe(spritesmith({
    imgName: 'photosprite.jpg',
    cssName: 'photosprite.css'
  }));
  return spritePhotoData.pipe(gulp.dest('dist'));
});

