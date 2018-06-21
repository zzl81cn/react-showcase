# Modify

## because
> Babel 把用最新标准编写的 JavaScript 代码向下编译成可以在今天随处可用的版本。 这一过程叫做“源码到源码”编译， 也被称为转换编译。

通俗的说，就是我们可以用ES6, ES7等来编写代码，Babel会把他们统统转为ES5。

babel-core 调用Babel的API进行转码
babel-loader
babel-preset-es2015 用于解析 ES6
babel-preset-react 用于解析 JSX
babel-preset-stage-0 用于解析 ES7 提案

## 20180621
- npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-0