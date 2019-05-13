const gulp = require('gulp');
const sass = require('gulp-sass');
const wait = require('gulp-wait');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const cleancss = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const sourceMaps = require('gulp-sourcemaps');
const imagemin = require("gulp-imagemin");
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const pngquant = require('imagemin-pngquant');
const run = require("run-sequence");
const del = require("del");
const svgSprite = require('gulp-svg-sprite'); // or const svgSprite = require('gulp-svg-sprites');
const svgmin = require('gulp-svgmin');
const cheerio = require('gulp-cheerio');
const replace = require('gulp-replace');

gulp.task('sass', function () {
  return gulp.src('scss/style.scss')
      .pipe(plumber())
      .pipe(sourceMaps.init())
      .pipe(wait(200))
      // .pipe(sass().on("error", notify.onError()))
      .pipe(sass({ outputStyle: 'expanded' }).on("error", notify.onError()))
      .pipe(rename({ suffix: '.min', prefix : '' }))
      .pipe(autoprefixer({
        browsers: ['last 2 version']
      }))
      // .pipe(cleancss( {level: { 1: { sspecialComments: 0 } } })) // Opt., comment out when debugging
      // .pipe(sourceMaps.write())
      .pipe(gulp.dest('build/css'))
      .pipe(browserSync.reload({stream: true}));
});

gulp.task('html', function () {
  return gulp.src('*.html')
      .pipe(gulp.dest('build'))
      .pipe(browserSync.reload({stream: true}));
});

gulp.task('scripts', function () {
  // return gulp.src('js/**/*.js')
  return gulp.src([ 
    'libs/jquery/dist/jquery.min.js',
    // 'libs/slick-1.8.1/slick/slick.min.js',
    'libs/OwlCarousel2-2.3.4/dist/owl.carousel.min.js',
    'libs/plyr-master/dist/plyr.js',
    'js/video-player.js',
		'js/common.js' // Always at the end
		])
  .pipe(concat('scripts.min.js'))
  .pipe(uglify()) // Mifify js (opt.)
	// .pipe(uglify({
  //   toplevel: true
  // })) // Mifify js (opt.)
  .pipe(gulp.dest('build/js'))
  .pipe(browserSync.reload({stream: true}));
});

gulp.task('css', function () {
  return gulp.src('css/**/*.css')
      .pipe(gulp.dest('build/css'))
      .pipe(browserSync.reload({stream: true}));
});
gulp.task('fonts', function() {
  return gulp.src('fonts/**/*')
      .pipe(gulp.dest('build/fonts'));
})
gulp.task('allimg', function () {
  return gulp.src('img/**/*.{png,jpg}')
      .pipe(gulp.dest('build/img'))
      .pipe(browserSync.reload({stream: true}));
});

gulp.task('images', function () {
  return gulp.src('build/img/**/*.{png,jpg}')
      .pipe(imagemin([
        imagemin.jpegtran({progressive: true}),
        imageminJpegRecompress({
          loops: 5,
          min: 65,
          max: 70,
          quality: 'medium'
        }),
        imagemin.optipng({optimizationLevel: 3})
        // pngquant({quality: '65-70', speed: 5})
      ]))
      .pipe(gulp.dest('build/img'));
});

gulp.task('svg', function () {
  return gulp.src('img/**/*.svg')
      .pipe(svgmin({
        js2svg: {
          pretty: true
        }
      }))
      .pipe(cheerio({
        run: function ($) {
          $('[fill]').removeAttr('fill');
          $('[stroke]').removeAttr('stroke');
          $('[style]').removeAttr('style');
        },
        parserOptions: {xmlMode: true}
      }))
      .pipe(replace('&gt;', '>'))
      // build svg sprite
      .pipe(svgSprite({
        mode: {
          symbol: {
            sprite: "sprite.svg"
          }
        }
      }))
      .pipe(gulp.dest('build/img'));
});

gulp.task('serve', function () {
  browserSync.init({
    server: "build"
  });
  gulp.watch("scss/**/*.scss", gulp.parallel("sass"));
  gulp.watch("*.html", gulp.parallel("html"));
  gulp.watch("fonts/**/*", gulp.parallel("fonts"));
  gulp.watch("css/**/*.css", gulp.parallel("css"));
  gulp.watch(['libs/**/*.js', 'js/**/*.js'],gulp.parallel ("scripts"));
  gulp.watch("img/**/*.{png,jpg}", gulp.parallel("allimg"));
  gulp.watch("img/**/*.{svg}", gulp.parallel("svg"));
});

gulp.task('copy', function () {
  return gulp.src([
    'img/**',
    'js/**',
    'css/**',
    '*.html'
  ], {
    base: '.'
  })
      .pipe(gulp.dest('build'));

});

gulp.task('clean', function () {
  return del('build');
});

gulp.task('build', gulp.series('clean', 'copy', 'fonts', 'sass', 'scripts', 'images', 'svg', function (fn) {
  fn();
}));



// gulp.task('serve', function () {
//   browserSync.init({
//     server: "build"
//   });

//   gulp.watch("scss/**/*.scss", ["sass"]);
//   gulp.watch("*.html", ["html"]);
//   gulp.watch("fonts/**/*", ["fonts"]);
//   gulp.watch("css/**/*.css", ["css"]);
//   gulp.watch(['libs/**/*.js', 'js/**/*.js'], ["scripts"]);
//   gulp.watch("img/**/*.{png,jpg}", ["allimg"]);
//   gulp.watch("img/**/*.{svg}", ["svg"]);
// });

// gulp.task('copy', function () {
//   return gulp.src([
//     'img/**',
//     'js/**',
//     'css/**',
//     '*.html'
//   ], {
//     base: '.'
//   })
//       .pipe(gulp.dest('build'));

// });

// gulp.task('clean', function () {
//   return del('build');
// });

// gulp.task('build', function (fn) {
//   run(
//       'clean',
//       'copy',
//       'fonts',
//       'sass',
//       'scripts',
//       'images',
//       'svg',
//       fn
//   );
// });