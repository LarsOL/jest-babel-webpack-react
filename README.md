# jest-babel-webpack-react
A Jest plugin for optimized integration with Webpack, Babel and React

This plugin assumes you already have a valid babel instance installed, and unlike babel-jest will use the projects .babelrc file.

It will skip files that babel can not compile, such as .less, .css, .png etc..

It will skip transforming /node_module/ files, under the assumption that they are already valid es5.

It will skip including the jsx transformer (react) on jsx files for a significant performance advantage.

Files not meeting any of this criteria will be transformed as per .babelrc file. 