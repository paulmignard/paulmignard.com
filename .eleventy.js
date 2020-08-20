module.exports = function(eleventyConfig) {

    eleventyConfig.setTemplateFormats([
        "css",
        "html",
        "liquid",
        "md"
    ]);

    // Pass through!
    eleventyConfig.addPassthroughCopy("images");

};