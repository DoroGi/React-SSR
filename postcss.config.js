var postCSSConfig = [
    // autoprefix for different browser vendors
    require('autoprefixer'),
    // enable nested css selectors
    require('postcss-nested'),
    // reset only inherited rules
    require('postcss-initial')
]
    
// Export the PostCSS Config for usage in webpack
module.exports = postCSSConfig