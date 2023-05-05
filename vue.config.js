const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  publicPath: './',
  transpileDependencies: true,
  pages: {
    index: {
      // page 的入口
      entry: './src/main.js',
      title: 'Bless | 结婚祝福'
    }
  }
});
