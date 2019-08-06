// next.config.js
const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  /* config options here */

  webpack(config, options) {
    return config
  }
 
})
