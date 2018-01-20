const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const wait = require('gulp-wait');
const watch = require('gulp-watch-sass');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');

gulp.task('sass', () => {
	return gulp.src('./src/*.scss')
		.pipe(sass())
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: true
		}))
		.pipe(gulp.dest('./dist'))
})

gulp.task('watch', () => watch(["./src/**/*.{scss,css}"])
	.pipe(wait(200))
	.pipe(sass())
	.pipe(gulp.dest("./dist")));


gulp.task('deploy', () => {
	return gulp.src('./dist/flow.css')
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./dist'))
})
