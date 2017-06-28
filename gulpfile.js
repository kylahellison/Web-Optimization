'use strict';

const gulp = require('gulp');
const image = require('gulp-image');

gulp.task('image', function () {
	gulp.src('./src/images/*')
		.pipe(image({
			pngquant: true,
			optipng: false,
			zopflipng: true,
			jpegRecompress: true,
			jpegoptim: false,
			mozjpeg: false,
			gifsicle: true,
			svgo: true
		}))
		.pipe(gulp.dest('./dist/images'));
});