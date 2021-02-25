const withPlugins = require('next-compose-plugins');
const translate = require('next-translate')
const optimizedImages = require('next-optimized-images')
const analyzer = require('@next/bundle-analyzer')

module.exports = withPlugins([optimizedImages, translate, analyzer]);
