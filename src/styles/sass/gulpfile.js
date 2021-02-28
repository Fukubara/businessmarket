const gulp = require('gulp')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const watch = require('gulp-watch')
const concat = require('gulp-concat')

function scss() {
    return gulp.src('./index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({ "uglyComments": true }))
        .pipe(concat('global.min.css'))
        .pipe(gulp.dest('../css'))
}

gulp.task('css', scss)

function watchscss(cb) {
    watch('./*.scss', () => gulp.series('css')())
    return cb
}

module.exports.default = gulp.series(scss, watchscss)