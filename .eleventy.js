module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/audio");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/ico");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/videos");

  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("public/uploads");

  eleventyConfig.addCollection("blogs", function(collectionApi) {
     return collectionApi.getFilteredByTag("blogs");
  });

  return {
    dir: {
      input: "src",
      output: "public"
    },
    passthroughFileCopy: true,
  };
};
