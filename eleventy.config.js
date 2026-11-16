export default async function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ "src/assets": "/" });
    eleventyConfig.setInputDirectory("src");
}
