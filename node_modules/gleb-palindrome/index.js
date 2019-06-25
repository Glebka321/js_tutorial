module.exports = Phrase;

//reverses a string
function reverse(string) {
  return Array.from(string).reverse().join("");
}

//Define a phrase object

function Phrase(content) {
  this.content = content;

  /*this.processor = function(string) {
    return string.letters().toLowerCase();
  }*/
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();

  }

  this.letters = function letters() {
    /*let theLetters = [];
    const letterRegex = /[a-z]/i;
    Array.from(this.content).forEach(function(character) {
      if (character.match(letterRegex)) {
        theLetters.push(character);
      }
    });
    return theLetters.join("");*/
    return (this.content.match(/[a-z]/gi) || []).join("");
  }

  this.palindrome = function palindrome() {
    return this.processedContent() === reverse(this.processedContent());
  }



}
