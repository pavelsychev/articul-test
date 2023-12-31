import *as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';

import cleanCss from 'gulp-clean-css'; //Сжатие СSS файла
import webpcss from 'gulp-webpcss'; // Вывод WEBP изображений
import autoprefixer from 'gulp-autoprefixer'; //Добавление вендорных префиксов 
import groupCssMediaQueries from 'gulp-group-css-media-queries'; //Группировка медиа запросов
import autoPrefixer from 'gulp-autoprefixer';

const sass = gulpSass(dartSass);

export const scss = () => {
  return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev })
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "SCSS",
        message: "Error: <%= error.message %>"
      })))
    .pipe(app.plugins.replace(/@img\//g, '../img/'))
    .pipe(sass({
       outputStyle: 'expanded'
    }))
    .pipe(
        app.plugins.if(
        app.isBuild,
      groupCssMediaQueries()
      )
    )
      .pipe(
          app.plugins.if(
          app.isBuild,
          webpcss(
      {
        webpClass: "webp",
        noWebpClass: ".no-webp"
      }
     )
     )
    )
    .pipe(
        app.plugins.if(
        app.isBuild,
      autoprefixer({
      grid: true,
      overrideBrowserlist: ["last 3 versions"],
      cascade: true
    })
    )
    )
    
    //Если нужен не сжатый дубль файла стилей
    .pipe(app.gulp.dest(app.path.build.css)) 
    
    //Eсли нужен сжатый дубль файла стиле
    // .pipe(cleanCss())
    // .pipe(rename({
    //   extname: ".min.css"
    // }))

    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream());
}