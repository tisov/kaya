const gulp = require('gulp'),
   sass = require('gulp-sass'),
   plumber = require('gulp-plumber'),
   autoprefixer = require('gulp-autoprefixer'),
   gcmq = require('gulp-group-css-media-queries'),
   babel = require('gulp-babel'),
   browserSync = require('browser-sync').create();

sass.compiler = require('node-sass');

// main style
function style() {
   return gulp.src('src/sass/style.sass')
      .pipe(plumber())
      .pipe(sass())
      .pipe(gcmq())
      .pipe(autoprefixer({
         browsers: ['last 4 versions']
      }))
      .pipe(gulp.dest('build/assets/css'))
      .pipe(browserSync.stream());
}

// responsive style
function responsive() {
   return gulp.src('src/sass/responsive.sass')
      .pipe(plumber())
      .pipe(sass())
      .pipe(autoprefixer({
         browsers: ['last 4 versions']
      }))
      .pipe(gulp.dest('build/assets/css'))
      .pipe(browserSync.stream());
}

// babel
function mainJs() {
   return gulp.src('src/js/main.js')
      .pipe(babel({
         presets: ['@babel/env'],
         sourceMap: true
      }))
      .pipe(gulp.dest('build/assets/js'));
}

// browser sync
function browser_sync() {
   browserSync.init({
      server: {
         baseDir: "./build"
      },
      notify: false,
      open: false,
      port: 3000
   });
}

// watch files
function watchFiles() {
   gulp.watch(['src/sass/**/*.sass', '!src/sass/responsive.sass'], style);
   gulp.watch('src/sass/responsive.sass', responsive);
   gulp.watch('build/*.html').on('change', browserSync.reload);
   gulp.watch(['src/js/main.js'], mainJs).on('change', browserSync.reload);
}

// build
exports.build = gulp.series(
   style,
   mainJs
);

// watch
exports.watch = gulp.parallel(
   browser_sync,
   watchFiles
);
