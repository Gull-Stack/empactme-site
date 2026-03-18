module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("roadmap.json");
  eleventyConfig.addPassthroughCopy("assets");
  
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};
