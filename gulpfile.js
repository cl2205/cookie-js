var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	plumber = require('gulp-plumber'),
	imagemin = require('gulp-imagemin');


// Scripts Task
gulp.task('scripts', function() {
	gulp.src('js/*.js') // load the files - run command on any js file in this directory
		.pipe(plumber())
		.pipe(uglify())	// uglify them
		.pipe(gulp.dest('build/js')); // save in min.js 
});

// Image Task - Compress
gulp.task('image', function() {
	gulp.src('img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('img'));
});

gulp.task('default', function() {
	gulp.src('js/*.js') // load the files - run command on any js file in this directory
		.pipe(uglify())	// uglify them
		.pipe(gulp.dest('build/js')); // save in min.js 
});



