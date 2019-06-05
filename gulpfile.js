var gulp       = require('gulp'),
    sass       = require('gulp-sass'),   
    livereload = require('gulp-livereload'),
    sourcemaps = require('gulp-sourcemaps'),
    notify     = require('gulp-notify');

//*********my 7h task
gulp.task('sasstocss',function() {

//require('./server.js');
return gulp.src('sass/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('css'))  //destribution
        .pipe(notify("SASS task is done!"))
        .pipe(livereload());
});

gulp.task('watch', function(){
      require('./server.js');
      livereload.listen();
      gulp.watch('sass/*.scss', gulp.series('sasstocss'));
});
//Default task
gulp.task('default', gulp.series('watch'));