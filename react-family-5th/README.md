
## install
- webpack-dev-server, "contentBase" -- URL的根目录。如果不设定的话，默认指向项目根目录。
- 为了在react模块更新的同时，能保留state等页面中其他状态，我们需要引入react-hot-loader~

## run
> 命令改为npm run dev-build
``` bash
webpack --config webpack.dev.config.js 或者写在package.json的scripts里
```

## view
> copy index.html到dist文件夹即可预览结果