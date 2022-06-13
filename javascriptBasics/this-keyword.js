// var car = {
//     make: 'bmw',
//     model: '745li',
//     year: 2010,
//     getPrice: function(){
//         return 5000;
//     },
//     printDescription: function(){
//         console.log(this.make + ' '+ this.model);
//     }
// }

// function first(){
//     return this;
// }
// console.log(first()=== global);

// function second(){
//     'use strict';

//     return this;
// }
// console.log(second()=== global);
// console.log(second()=== undefined);

let myObject = { value: 'my object'};

globalThis.value = 'Global object'

function third(){
    return this.value;
}

console.log(third());

console.log(third.call(myObject));
console.log(third.apply(myObject));

let customer1 = {
    firstname: 'bob',
    lastname: 'boughten',
    print: fifth
}
let customer2 = {
    firstname: 'richard',
    lastname: 'boughten',
    print: fifth
}

customer2.print();
customer1.print();
