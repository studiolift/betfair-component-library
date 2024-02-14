const eleventySass = require("@11tyrocks/eleventy-plugin-sass-lightningcss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventySass);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPassthroughCopy("src/scripts");
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};