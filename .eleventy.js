module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./src/staticwebapp.config.json");
    return {
      dir: {
        input: "src",
        output: "dist",
      },
    };
  };