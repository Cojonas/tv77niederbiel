// next.config.js
const withCSS = require('@zeit/next-css')
const debug = process.env.NODE_ENV !== "production";
console.log("debug = " +  debug);

function HACK_removeMinimizeOptionFromCssLoaders(config) {
  console.warn(
    'HACK: Removing `minimize` option from `css-loader` entries in Webpack config',
  );
  config.module.rules.forEach(rule => {
    if (Array.isArray(rule.use)) {
      rule.use.forEach(u => {
        if (u.loader === 'css-loader' && u.options) {
          delete u.options.minimize;
        }
      });
    }
  });
}



module.exports = withCSS({
  exportPathMap :function () {
    return {
      "/": { page: "/index" },
      "/about": { page: "/about" },
    }
  },
  assetPrefix : !debug ? '/tv77niederbiel/' : '',
  env : {
    assetPrefix : !debug ? '/tv77niederbiel/' : ''
  },
    

  webpack(config) {
    HACK_removeMinimizeOptionFromCssLoaders(config);
    return config
  },
});


