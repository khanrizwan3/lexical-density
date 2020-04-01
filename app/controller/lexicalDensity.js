'use strict';

const nonLexicalWordsList = require('../helpers/nonLexicalWordsList');
const getLexicalDensity = require('../helpers/lexicalDensityHelper');


/**
* Calculate lexical density
*/

function calculate(req, res) {
    console.log('🤖 Calculating Lexical Complexity ');
    let userInput = req.body.userInput;
    console.log(req.query);

    if(req.query && req.query.mode === 'verbose'){
        __calculateVerbose(req, res);
    } else {

        if(!userInput) res.status(400).send({ error: 'No user input received.' });
        let overall_ld = getLexicalDensity(userInput, nonLexicalWordsList);

        let lexicalDesityInPercent = overall_ld * 100+ '%';
        
        res.status(200).send({
            data: { overall_ld,lexicalDesityInPercent }
      });
    }
};

function __calculateVerbose(req, res) {
    console.log('🤖 Calculating verbose Lexical Complexity');
    let overall_ld;
    let sentence_ld = [];
    let userInput = req.body.userInput;
    if(!userInput) res.status(400).send({ error: 'No user input received.' });
    let splitInput = userInput.match(/[^\.!\?]+[\.!\?]+/g);
    console.log(splitInput);
      if(splitInput) {
        splitInput.forEach(sentence => {
          sentence_ld.push(getLexicalDensity(sentence, nonLexicalWordsList));
        });
      }
      overall_ld = sentence_ld.reduce((a,b)=> a+b, 0) / sentence_ld.length;
      
      res.status(200).send({
        data: {
          sentence_ld,
          overall_ld
        }
      });
  };

  module.exports = {
      calculate
  }

