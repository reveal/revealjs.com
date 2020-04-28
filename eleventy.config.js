const htmlmin = require("html-minifier")

module.exports = eleventyConfig => {

    // Minify our HTML
    eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
        if ( outputPath.endsWith(".html") )
        {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true
            })
            return minified
        }
        return content
    })

    // Layout aliases
    eleventyConfig.addLayoutAlias('default', 'layouts/default.njk')
    eleventyConfig.addLayoutAlias('landing', 'layouts/landing.njk')

    // Include our static assets
    // eleventyConfig.addPassthroughCopy('css')
    // eleventyConfig.addPassthroughCopy('js')
    eleventyConfig.addPassthroughCopy('images')

    return {
        templateFormats: ["md", "njk"],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        passthroughFileCopy: true,

        dir: {
            input: 'site',
            output: 'dist',
            includes: 'includes',
            data: 'globals'
        }
    }

}
