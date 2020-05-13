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
    eleventyConfig.addLayoutAlias('home', 'home.njk')

    // Include our static assets
    eleventyConfig.addPassthroughCopy('images')

    eleventyConfig.addPlugin(syntaxHighlight, {
        alwaysWrapLineHighlights: false
    });

    let md = require('markdown-it')({
        html: true,
        breaks: true,
        linkify: true
    });

    md.use( require('markdown-it-attrs') );

    eleventyConfig.setLibrary('md', md);

    eleventyConfig.setQuietMode(true);

    // eleventyConfig.addCollection("myCollectionName", function(collection) {
    //     console.log(collection.getAll()[4].template.frontMatter.content)
    //     return collection.getAll();
    // });

    // eleventyConfig.addWatchTarget("js/");
    // eleventyConfig.addWatchTarget("css/");

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
