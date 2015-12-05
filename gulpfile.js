var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("gulp-webpack");
var webpackConfig = require("./webpack.config.js");

gulp.task('build', function() {
  return gulp.src('./src/js/app.js')
    .pipe(webpack(webpackConfig, null, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);

        gutil.log("webpack", stats.toString({
            colors: true
        }))
    })) 
    .pipe(gulp.dest('./static/js/'))
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.js', ['build']);
});



gulp.task('default', ['watch', 'build']);