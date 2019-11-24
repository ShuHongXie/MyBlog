const withSass = require('@zeit/next-sass')
const withTypescript = require('@zeit/next-typescript')
// 配置sass
module.exports = withTypescript(withSass({
  
  // cssLoaderOptions: {
  //   // importLoaders: 1,
  //   // localIdentName: "[local]___[hash:base64:5]",
  // },
  sassLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  postcssLoaderOptions: {
    parser: true
  },
  webpack: (config, {}) => {
    config.module.rules.push({
      test: /.mdx/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: pluginOptions.options
        }
      ]
    })

    return config
  }
}))


  // postcssLoaderOptions: {
  //   parser: true,
  //   config: {
  //     ctx: {
  //       theme: JSON.stringify(process.env.REACT_APP_THEME)
  //     }
  //   }
  // },
  // webpack(config, options) {
  //   config.module.rules.push(
  //     {
  //       loader: 'sass-loader',
  //       options: {
  //       modifyVars: {
  //           'primary-color': 'red',
  //           'link-color': '#1DA57A',
  //           'border-radius-base': '2px',
  //         },
  //         javascriptEnabled: true,
  //       },
  //     }
  //   )
  //   return config
  // }