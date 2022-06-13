function sayHello(){
    console.log('----------');
    console.log('hello');
    console.log('-----------');
}

sayHello();

let a = sayHello;
a()

function sayHello(name){
    console.log('hello '+ name+ '!')
}
sayHello('bob')


function calculateTax(amount){
    let result = amount * 0.0825;
    return result
}
let tax = calculateTax(100);
console.log(tax)


//expression

setTimeout(function (){
    console.log('I waited 2 seconds');
}, 2000);

let counter = 0;
function timeOut(){
    setTimeout(function(){
        console.log('hi '+ counter++);
        timeOut();
    },2000)
}
//timeOut();

(function(){
    console.log('hi');//immediately invoked functions expression (iife)
})();