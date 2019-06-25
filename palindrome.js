
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}
//reverses a string
function reverse(string) {
  return Array.from(string).reverse().join("");
}

//Define a phrase object

function Phrase(content) {
  this.content = content;

  this.processor = function(string) {
    return string.toLowerCase();
  }
  this.processedContent = function processedContent() {
    return this.processor(this.content);

  }
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent.reverse();
  }

}

function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }
}

TranslatedPhrase.prototype = new Phrase();
