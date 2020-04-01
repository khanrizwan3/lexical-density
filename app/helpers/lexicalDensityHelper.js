'use strict';

/**
 * Get lexical density
 * @param  {string} str
 * @param  {[]} nonLexicalArr
 */
const getLexicalDensity = (str, nonLexicalArr) => {
  if (
    str.length > 1000 ||
    typeof str !== "string" ||
    !nonLexicalArr ||
    str.length < 1
  ) return false;

  let processInput = str
      .trim()                                            // trim spaces
      .toLowerCase()                                     // convert to lowercase
      .replace(/[~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g) // replace regex 
      .split(" ")                                        // split on spaces
      .filter(item => item !== "")                       // filter words

  if(processInput.length > 100 ) {
    return false
  } else {
    const wordCount = processInput.length;
    let result = processInput.filter(word => !nonLexicalArr.includes(word));
    let overall_ld = Number((result.length / wordCount).toFixed(2));
    return overall_ld;  
  }
};
 
module.exports = getLexicalDensity;