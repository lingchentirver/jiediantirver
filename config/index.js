<<<<<<< HEAD
/*
 * @Author: your name
 * @Date: 2019-11-06 19:44:29
 * @LastEditTime: 2019-11-11 21:31:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段d:\jiedianlvxing\config\index.js
 */
=======
>>>>>>> a37c03fbfa01f8b3b226ac633397c5e88f77165e
'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
<<<<<<< HEAD
    proxyTable: {
<<<<<<< HEAD
      '/api': {
        target: '10.35.161.67',
        changeOrigin: true,
        pathRewrite: {
         	 '^/api': ''
        }
      }
    },

    // Various Dev Server settings
    host: '10.35.161.67', // can be overwritten by process.env.HOST
=======
    	'/api': {
				target: '10.35.161.7',
				changeOrigin: true,
				pathRewrite: {
					'^/api': '/api'
				}
			}
    },

    // Various Dev Server settings
    host: '10.35.161.7', // can be overwritten by process.env.HOST
<<<<<<< HEAD
=======
    proxyTable: {},

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
>>>>>>> libai
=======
>>>>>>> a37c03fbfa01f8b3b226ac633397c5e88f77165e
>>>>>>> 545295d91aa9126a592fe8ed632c92e8bb2e9cf1
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

<<<<<<< HEAD
    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: false,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

=======
    
>>>>>>> a37c03fbfa01f8b3b226ac633397c5e88f77165e
    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
