const htmlmin = require('html-minifier')
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = eleventyConfig => {

    // Minify our HTML
    eleventyConfig.addTransform('htmlmin', (content, outputPath) => {
        if ( outputPath.endsWith('.html') )
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
    eleventyConfig.addLayoutAlias('default', 'default.njk')
    eleventyConfig.addLayoutAlias('landing', 'landing.njk')

    // Include our static assets
    eleventyConfig.addPassthroughCopy('images')

    eleventyConfig.addPlugin(syntaxHighlight, {
        alwaysWrapLineHighlights: true
    });

    let md = require('markdown-it')({
        html: true,
        breaks: true,
        linkify: true
    });

    md.use( require('markdown-it-attrs') );

    eleventyConfig.setLibrary('md', md);

    return {
        templateFormats: ['md', 'njk'],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        passthroughFileCopy: true,

        dir: {
            input: 'src',
            output: 'dist',
            layouts: '_layouts',
            includes: '_includes',
            data: '_data'
        }
    }

}
