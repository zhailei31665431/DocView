var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('serve',function(){
  browserSync({
    notify: false,
    server: {
      baseDir: ['.'],
      routes:{
        "/bower_components":"bower_components",
      }
    }
  });
  // gulp.watch(['src/styles/**/*.scss'], ['styles:components', 'styles:scss']);
  // gulp.watch(['src/styles/**/*.scss'], ['styles:sass']);
});