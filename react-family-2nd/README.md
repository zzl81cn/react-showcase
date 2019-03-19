# 此步骤其实还与react无关，算是webpack的一个起步示例

## install
- npm i babel-core babel-loader@7 babel-preset-es2015 babel-preset-react babel-preset-stage-0 -D,这一步如果用的是：Babel 6.x ('babel-core')，那就应该安装“babel-loader@7”
- npm i react react-dom --save

## run
> 由于没有全局安装webpack，需要执行npm start 在当前项目文件夹运行
``` bash
webpack --config webpack.dev.config.js 或者写在package.json的scripts里
```

## view
> copy index.html到dist文件夹即可预览结果