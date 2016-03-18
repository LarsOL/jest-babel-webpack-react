# jest-babel-webpack-react
A Jest plugin for optimized integration with Webpack, Babel and React

This plugin assumes you already have a valid babel instance installed, and unlike babel-jest will use the projects .babelrc file.

It will skip files that babel can not compile, such as .less, .css, .png etc..

It will skip transforming /node_module/ files, under the assumption that they are already valid es5.

It will skip including the jsx transformer (react) on js files for a significant performance advantage.

Files not meeting any of this criteria will be transformed as per .babelrc file. 

## Installation

```sh
$ npm install jest-babel-webpack-react --save-dev
```

## Usage

Insert `jest.scriptPreprocessor` in `package.json`:

```json
{
  "jest": {
    "scriptPreprocessor": "<rootDir>/node_modules/jest-babel-webpack-react"
  }
}
```

For convenience you may want to add in `package.json`: 

```json
"scripts": {
    "test": "jest"
  }
```

Then run the tests with `npm test`