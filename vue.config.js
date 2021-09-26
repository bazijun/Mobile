// const proxyUrl = ''

module.exports = {
  devServer: {
    // proxy: {
    //   '/api': {
    //     target: proxyUrl,
    //     changeOrigin: true,
    //     secure: false,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // }
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '扫码核销'
        return args
      })
  }
  // 生产环境去掉console.log
  // configureWebpack: config => {
  //   if (process.env.NODE_ENV === 'production') {
  //     config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
  //   }
  // }
}
