module.exports = function () {
  $.gulp.task('svg_custom', function () {
    return $.gulp.src('img/**/*.svg')
        .pipe($.gp.svgmin({
          js2svg: {
            pretty: true
          }
        }))
        .pipe($.gp.cheerio({
          parserOptions: {xmlMode: true}
        }))
        .pipe($.gp.replace('&gt;', '>'))
        // build svg sprite
        .pipe($.gp.svgSprite({
          mode: {
            symbol: {
              sprite: 'sprite_custom.svg'
            }
          }
        }))
        .pipe($.gulp.dest('build/img'));
  });
};