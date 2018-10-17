const gulp = require('gulp'),
    babel = require('gulp-babel'), // es6 转es5
    connect = require('gulp-connect'), // 开启服务器
    uglify = require('gulp-uglify'), // 压缩js
    htmlminify = require('gulp-html-minify'), // 压缩html
    imagemin = require('gulp-imagemin'), // 压缩图片
    minifycss = require('gulp-minify-css'); //压缩css
// autoprefixer = require('gulp-autoprefixer'); // 添加css前缀

gulp.task('all', function () {
    gulp.src('mei_zu/**/*.*')
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload());
});
gulp.task('html', function () {
    gulp.src('mei_zu/**/*.html')
        .pipe(htmlminify())
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload());
});
gulp.task('js', function () {
    gulp.src('mei_zu/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload());
});
gulp.task('css', function () {
    gulp.src('mei_zu/**/*.css')
        .pipe(minifycss())
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload());
});


gulp.task('watch', () => {
    // 监听app下面所有的html文件, 如果文件改变, 就执行后面的任务
    gulp.watch('mei_zu/**/*.html', ['html']);
    gulp.watch('mei_zu/**/*.js', ['js']);
    gulp.watch('mei_zu/**/*.css', ['css']);
})
//服务器
gulp.task('connect', function () {
    connect.server({
        root: 'dist',
        // port:8080,
        livereload: true
    });
});

// //ES6-5 js压缩 
// gulp.task('ysjs', function (cb) {
//     gulp.src('meizu/**/*.js')
//         .pipe(babel({
//             presets: ['@babel/env']
//         }))
//         .pipe(uglify())
//         .pipe(gulp.dest('dist'))
// });

// //压缩CSS
// gulp.task('yscss', function (cb) {
//     gulp.src('meizu/**/*.css')
//         .pipe(minifycss())
//         .pipe(gulp.dest('dist'))
// });

// //压缩HTML
// gulp.task('yshtml', function (cb) {
//     gulp.src('meizu/**/*.html')
//         .pipe(htmlminify())
//         .pipe(gulp.dest('dist'))
// });

//压缩图片
gulp.task('image', function (cb) {
    gulp.src('mei_zu/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
});

gulp.task('build', ['all', 'html', 'js', 'css', 'image']);
gulp.task('default', ['build', 'connect']);


// gulp +  任务名称, 如果不写, 默认执行default任务
// gulp 一共有4个api
//  src: 超找文件
//  dest: 输出文件
//  watch: 监听文件
//  task: 创建一个任务