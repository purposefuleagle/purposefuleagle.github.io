const svgSprite = require('gulp-svg-sprite'),
  svgmin = require('gulp-svgmin'),
  svgPath = {
    input: './dev/static/images/svg/*.svg',
    output: './build/static/images/svg/'
  };

module.exports = function() {
  $.gulp.task('svg_custom', () => {
    return $.gulp
      .src(svgPath.input)
      .pipe(
        svgmin({
          js2svg: {
            pretty: true
          }
        })
      )
      .pipe(
        svgSprite({
          mode: {
            symbol: {
              sprite: 'sprite_custom.svg'
            }
          }
        })
      )
      .pipe($.gulp.dest(svgPath.output));
  });
};
