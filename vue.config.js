module.exports = {
    devServer: {
        port: 8090
    },
    lintOnSave: false,
    css: {
        loaderOptions: {
          less: {
            modifyVars: {
                // 直接覆盖变量
                // 'text-color': '#111',
                // 'border-color': '#eee',
                // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
                hack: `true; @import "~@/style/variable.less";`,
              },
          },
        },
      },
}