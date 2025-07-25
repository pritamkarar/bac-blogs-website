const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/audio");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/ico");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/videos");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("_site/uploads");

  eleventyConfig.addCollection("blogs", function(collectionApi) {
    return collectionApi.getFilteredByTag("blogs");
  });

  const md = new markdownIt({
    html: true,
    breaks: true,
    linkify: true
  });

  eleventyConfig.addFilter("markdownify", (value) => {
    return md.render(value || "");
  });
  
  return {
    dir: {
      input: "src",
      output: "_site"
    },
    passthroughFileCopy: true,
  };
};
