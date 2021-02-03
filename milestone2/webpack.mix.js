// webpack.mix.js

let mix = require('laravel-mix');

mix
.js('src/app.js', 'js').vue()
.sass('src/app.scss', 'css')
.setPublicPath('dist');