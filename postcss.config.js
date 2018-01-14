var postCSSConfig = [
    /* autoprefix for different browser vendors */
    require('autoprefixer'),
    /* enable nested css selectors */
    require('postcss-nested')
]
    
// Export the PostCSS Config for usage in webpack
module.exports = postCSSConfig