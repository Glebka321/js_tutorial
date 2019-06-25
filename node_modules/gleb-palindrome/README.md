# js_tutorial

$ npm install --global gleb-palindrome
$ vim test.js
let Phrase = require("gleb-palindrome");
let napoleonsLament = new Phrase("Able was I, ere I saw Elba.");
console.log(napoleonsLament.palindrome());
$ node test.js
true
