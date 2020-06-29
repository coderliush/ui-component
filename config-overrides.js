/*
 * @Description: 
 * @Author: liushuhao
 * @Date: 2020-06-10 16:45:03
 * @LastEditors: liushuhao
 */ 

const path = require('path')
const { override, addWebpackAlias, addWebpackResolve, addPostcssPlugins } = require('customize-cra')

module.exports = override(
    addWebpackAlias({
        "@common": path.resolve( __dirname, './src/common' ),
    }),
    addWebpackResolve({
        extensions: [ '.tsx', '.ts', '.js' ]
    }),
    addPostcssPlugins([
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
    ])
)