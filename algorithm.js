import { print_desc } from "./module.js";
import { print_ln } from "./module.js";

/* 
Parens Valid
Given an str that has parenthesis in it
return whether the parenthesis are valid
*/

const str1 = "Y(3(p)p(3)r)s";
const expected1 = true;

const str2 = "N(0(p)3";
const expected2 = false;
// Explanation: not every parenthesis is closed.

const str3 = "N(0)t ) 0(k";
const expected3 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.

const str4 = "a(b))(c";
const expected4 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing.

/**
 * Determines whether the parenthesis in the given string are valid.
 * Each opening parenthesis must have exactly one closing parenthesis.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the parenthesis are valid.
 */
function parensValid(str) {

  var open = 0;
  var closes = 0;
  var is_valid = true;

  for (let x=0; x<str.length; x++) {
    if (str[x] === "(") {               // find opening
      open++;                         
    }
    if (str[x] === ")") {               // find closing
      closes++;
    }

    // if closes is greater than open, it's false
    if (closes > open) {
      is_valid = false;
      return is_valid;
    }
  }

  if (open != closes) {                 // if the counts aren't equal, its false
    return false;
  } else {                              // if the counts are equal, its true
    return is_valid;
  }
}

print_desc("doing str1");
console.log(parensValid(str1));

print_desc("doing str2");
console.log(parensValid(str2));

print_desc("doing str3");
console.log(parensValid(str3));

print_desc("doing str4");
console.log(parensValid(str4));

// *****************************************************************


/* 
Braces Valid
Given a string sequence of parentheses, braces and brackets, determine whether it is valid. 
*/

// const str1a = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
// const expected1a = true;

// const str2a = "D(i{a}l[ t]o)n{e";
// const expected2a = false;

// const str3a = "A(1)s[O (n]0{t) 0}k";
// const expected3a = false;
// const expected2a = false;

// const str3a = "";
// const expected3a = true;

/**
 * Determines whether the string's braces, brackets, and parenthesis are valid
 * based on the order and amount of opening and closing pairs.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given strings braces are valid.
 */
function bracesValid(str) {}