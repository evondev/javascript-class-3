const title = " JavascriptJ ";
// # Methods
console.log(title.length); // 10
console.log(title.toUpperCase()); // JAVASCRIPT
console.log(title.toLowerCase()); // javascript
console.log(title.includes("Java")); // true
console.log(title.includes("evondev")); // false
console.log(title.indexOf("J")); // 0
console.log(title.lastIndexOf("J")); // 10
// const titleReplace = title.replaceAll("J", "j");
// Regular expression
const titleReplaceRegex = title.replace(/J/g, "j");
console.log("titleReplace:", titleReplaceRegex);
const titleSplit = title.split("s"); // ["Java", "criptJ"]
console.log("titleSplit:", titleSplit);
console.log(title.startsWith("Java")); // true
console.log(title.endsWith("Java")); // false
const concatTitle = title.concat([" is awesome", " and super"]); // JavascriptJ is awesome and super
console.log("concatTitle:", concatTitle);
console.log(title.trim());
console.log(title.trimStart());
console.log(title.trimEnd());
const blogURL = "https://evondev.com/blog";
console.log(blogURL.charAt(0)); // h
// ## slice
const blogAll = blogURL.slice(); // https://evondev.com/blog
const blogName = blogURL.slice(8, 19); // evondev.com
const blogName2 = blogURL.slice(0, -4); // https://evondev.com/
const blogEmpty = blogURL.slice(0, 0); // ""
console.log("blogName2:", blogName2);
// ## substring
const twitterURL = "https://twitter.com/evondev";
const twitterName = twitterURL.substring(19, 8); // twitter.com
console.log("twitterName:", twitterName);
const twitterName2 = twitterURL.substring(0, -4); //
console.log("twitterName2:", twitterName2);
// # Methods chaining
const newTitle = title.toLowerCase().trim().replace("JS", "js");
console.log("newTitle:", newTitle);
