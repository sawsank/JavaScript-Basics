// dont do this
// var myVariable = 'I am at global scope'

// var myFunction = function(){
//     console.log('me too!')
// }

function one(){
    return 'one';
}
let result = one();
console.log(result)

function ones(){
    return function(){
        return 'two';
    }
}
console.log(ones()());