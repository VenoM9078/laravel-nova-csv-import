let mix = require("laravel-mix");

require("./mix");

mix
  .setPublicPath("dist")
  .js("resources/js/tool.js", "js")
  .vue({ version: 3 })
  .css("resources/css/tool.css", "css")
  .nova("hmrreferrals/search-pharmacist");

mix.webpackConfig({
  resolve: {
    fallback: {
      buffer: require.resolve("buffer/"),
    },
  },
});

mix.webpackConfig({
  resolve: {
    extensions: ["*", ".wasm", ".mjs", ".js", ".jsx", ".json", ".vue"],
  },
});
