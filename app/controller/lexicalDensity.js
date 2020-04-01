'use strict';

const nonLexicalWordsList = require('../helpers/nonLexicalWordsList');
const getLexicalDensity = require('../helpers/lexicalDensityHelper');


/**
* Calculate lexical density
*/
 function calculate(req, res) {
    console.log('🤖 Calculating Lexical Complexity ');
    let userInput = req.body.userInput;
    console.log(userInput);

    if(!userInput) res.status(400).send({ error: 'No user input received.' });
      let overall_ld = getLexicalDensity(userInput, nonLexicalWordsList);

      let lexicalDesityInPercent = overall_ld * 100+ '%';
      
      res.status(200).send({
        data: { overall_ld,lexicalDesityInPercent }
      });
  };


  module.exports = {
      calculate
  }

