// let name = 'bob';
// console.log(`hi ${name}`);

// let sentence=`this is sentencethis is sentencethis is sentence
// this is sentencethis is sentencethis is sentencethis is sentence
// this is sentencethis is sentencethis is sentencethis is sentence
// this is sentencethis is sentencethis is sentencethis is sentence`;

// console.log(sentence)

function getReasonCount(){ return 1;}

let interpolation = `give me ${(getReasonCount()==1)? 'one good reason':'a few reasons'} to try this`
console.log(interpolation);