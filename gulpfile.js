var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var minify = require('gulp-minify');
var rename = require('gulp-rename');
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('default', function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  gulp.watch('./**/*').on('change', browserSync.reload);
  //gulp.watch('./**/*.js',['compress']);
});

gulp.task('compress', function() {
  gulp.src('app/**/*.js')
    .pipe(ngAnnotate({
        remove: true,
        add: true,
        single_quotes: true
    }))
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('dist'));
});