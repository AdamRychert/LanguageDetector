const franc = require('franc');
const langs = require('langs');

//get the argument
const args = process.argv.slice(2);

//console.log text and then what lang is it
// console.log(args[0]);

const code = franc(args[0]);
const detectedLang = langs.where("3", code);
//code is 'und' when it can't decide what language it is, and detectedLang is undefined if langs can't find the right language
if (code === 'und' || detectedLang == undefined) {
    console.log("There is something wrong with your text!!! It might be to short.");
    return 0;
}
console.log(detectedLang.name);