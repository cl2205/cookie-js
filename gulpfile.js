var gulp = require('gulp'),
	browserify = require('browserify'),
	reactify = require('reactify'), // convert jsx to JS
	source = require('vinyl-source-stream'); // convert browserify string to a stream for gulp input

	// uglify = require('gulp-uglify'), // minify
	// plumber = require('gulp-plumber'),
	// imagemin = require('gulp-imagemin');


// Scripts Task

gulp.task('browserify', function() {
	browserify('./app/js/main.js')	// call browserify, give it our entry point to our app, which is main.js
		.transform('reactify')	// covert jsx to js
		.bundle()	// output
		.pipe(source('main.js'))	// pipe to our source (vinyl stream source) to main.js
		.pipe(gulp.dest('dist/js'));	// pipe to our gulp destination
})


gulp.task('copy', function() {
	gulp.src('app/index.html')
		.pipe(gulp.dest('dist'));
	gulp.src('app/index.html')
		.pipe(gulp.dest('dist/assets'));
})

gulp.task('default', ['browserify', 'copy'], function() {
	return gulp.watch('app/**/*.*', ['browserify', 'copy']);
});

// gulp.task('scripts', function() {
// 	gulp.src('js/*.js') // load the files - run command on any js file in this directory
// 		.pipe(plumber())
// 		.pipe(uglify())	// uglify them
// 		.pipe(gulp.dest('build/js')); // save in min.js 
// });

// Image Task - Compress
// gulp.task('image', function() {
// 	gulp.src('img/*')
// 		.pipe(imagemin())
// 		.pipe(gulp.dest('img'));
// });

// gulp.task('default', function() {
// 	gulp.src('js/*.js') // load the files - run command on any js file in this directory
// 		.pipe(uglify())	// uglify them
// 		.pipe(gulp.dest('build/js')); // save in min.js 
// });



