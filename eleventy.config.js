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
    md.use( require('markdown-it-anchor') );

    eleventyConfig.setLibrary('md', md);

    eleventyConfig.setQuietMode(true);

    // Collection of pages that can appear in search results
    eleventyConfig.addCollection('searchPages', collection => {
        return collection.getFilteredByGlob('src/*.md').sort((a,b) => {
            if(a.data.title < b.data.title) return -1;
            if(a.data.title > b.date.title) return 1;
            return 0;
        });
    });

    // Helper for extracting the searchable content in a page
    eleventyConfig.addShortcode('searchContent', page => {
        if( !page.hasOwnProperty('templateContent') ) {
            console.warn('Failed to extract excerpt: Document has no property "templateContent".');
            return null;
        }

        return JSON.stringify( page.templateContent ).slice( 1,-1 );
    });

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
