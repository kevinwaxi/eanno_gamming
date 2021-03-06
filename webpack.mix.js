const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.webpackConfig({
    resolve: {
        extensions: [".js", ".vue", ".json"],
        alias: {
            "@": __dirname + "/resources/js",
            "@pages": __dirname + "/resources/js/pages",
            "@components": __dirname + "/resources/js/components",
        },
    },
});

mix.js("resources/js/app.js", "public/js").vue().version();
