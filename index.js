'use strict';

const babel = require('babel-core');
const fs = require('fs');
const babelConfig = JSON.parse(fs.readFileSync('./.babelrc'));

function isNotReact(value) {
    return value !== 'react';
}

function stripReact() {
    return babelConfig.presets.filter(isNotReact);
}

module.exports = {
    process(src, filename) {
        // Ignore files that babel can't process
        if (!babel.util.canCompile(filename)) {
            return '';
        }

        // Ignore all files within node_modules, assume they are valid es5
        if (filename.includes('node_modules')) {
            return src;
        }

        // Transform  .js, .es,.es6 files without react transformer
        if (filename.match(/\.(es|js|es6)$/)) {
            return babel.transform(src, {filename: filename, presets: stripReact()}).code;
        }

        //Transform other files normally
        return babel.transform(src, {filename: filename}).code;
    }
};