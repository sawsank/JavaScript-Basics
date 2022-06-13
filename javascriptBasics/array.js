let a = [4, 8, 7, 6, 15, 16, 23, 42]
let b =['ram', 'shyam', 'hari']
console.log(a);
console.log(a[-0])

a[0]=7
console.log(a)

console.log(typeof a);

let c = [4, ' alex', true]
console.log(c)

console.log(b[4])

console.log(a.length)
console.log(b.length)

/*
a[10] = 77

console.log(a)
console.log(a.length)
*/
a.push(77)
console.log(a)
console.log(a.length)

a.pop();
a.pop()