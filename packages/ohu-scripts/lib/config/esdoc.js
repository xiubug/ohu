"use strict";
var base = require('./base');
module.exports = {
    source: base.esTemp,
    index: './README.md',
    destination: 'docs',
    plugins: [
        {
            name: 'esdoc-coverage-plugin',
            option: {
                enable: true,
                kind: ['class', 'method', 'member', 'get', 'set', 'constructor', 'function', 'variable'],
            },
        },
        {
            name: 'esdoc-importpath-plugin',
            option: {
                replaces: [{ from: '.temp/', to: '' }],
            },
        },
        {
            name: 'esdoc-publish-html-plugin',
            option: {
                template: base.template,
            },
        },
        {
            name: 'esdoc-standard-plugin',
            option: {
                lint: {
                    enable: false
                },
                brand: {
                    title: 'oh 工具函数库',
                    description: 'oh 工具函数库',
                    author: 'sosout@139.com',
                }
            }
        },
    ],
};
