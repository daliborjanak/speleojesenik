
module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("dateFilter", (dateObj) => {
    if (!dateObj) return "";
    const d = new Date(dateObj);
    return `${d.getDate()}. ${d.getMonth() + 1}. ${d.getFullYear()}`;
  });

  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/robots.txt");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};
