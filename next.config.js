// next.config.js
const withCSS = require('@zeit/next-css')
const debug = process.env.NODE_ENV !== "production";
console.log("debug = " +  debug)
module.exports = withCSS({

    exportPathMap: function () {
      return {
        "/": { page: "/index" },
        "/about": { page: "/about" },
      }
    },
    //assetPrefix: '',
    assetPrefix: !debug ? '/tv77niederbiel/' : '',
  
})


