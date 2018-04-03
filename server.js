var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
// const ip = "192.168.2.104
const ip = "localhost";

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: false,
  historyApiFallback: true,
  // proxy: {
  //     '/api': {
  //         target: `http://127.0.0.1:7000`,
  //         pathRewrite: {"^/api" : "/promotion/coupon/image"},
  //         secure: false,
  //         bypass: function(req, res, proxyOptions) {
  //           // if (req.headers.accept.indexOf("html") !== -1) {
  //           //   console.log("Skipping proxy for browser request.");
  //           //   return "/index.html";
  //           // }
  //           //console.log("req is", JSON.stringify(req && req.request));
  //         }
  //     }
  // }
}).listen(7777, ip, function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log(`Listening at ${ip}:7777`);
});
