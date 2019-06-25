(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let Phrase = require("gleb-palindrome");

function palindromeTester(event) {
  event.preventDefault();
  let phrase = new Phrase(event.target.phrase.value);
  let palindromeResult = document.querySelector("#palindromeResult");

  if (phrase.palindrome()) {
    palindromeResult.innerHTML = `"${phrase.content}" is a palindrome`;
  } else {
    palindromeResult.innerHTML = `"${phrase.content}" is not a palindrome`;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  let button = document.querySelector("#palindromeTester");
  button.addEventListener("submit", function(event) {
    palindromeTester(event);
  });
});

},{"gleb-palindrome":2}],2:[function(require,module,exports){
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

},{}]},{},[1]);
