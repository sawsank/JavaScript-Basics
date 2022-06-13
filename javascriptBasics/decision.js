var count = 3
if(count === 4){
    console.log('count is 4')
} else{
    console.log('count is not 4')
}

if(count === 4){
    console.log('count is 4')
} else if(count>=4) {
    console.log('count is not 4');
} else {
    console.log('the count is interrupted');
}

let hero = 'Batman';
switch (hero.toLowerCase()) {
    case 'superman':
        console.log('super strength')
        console.log('x-ray vision')
    break;
    case 'batman' :
        console.log('intelligence')
        console.log('x-ray vision')
    break;
    default:
        console.log('member of jla')
}

//ternary operator
let a = 1, b = 1;
let result =(a==b)?'equal':'inequal';
console.log(result);

