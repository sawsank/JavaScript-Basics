//testTruthyFalsy Fuction
function testTruthyFalsy (val) 
{ 
    return val ? console.log('truthy') : console.log('falsy'); 
} 
 
testTruthyFalsy(true);           // truthy 
testTruthyFalsy(false);          // falsy 
testTruthyFalsy(new Boolean(false));   // truthy (object is always true) 
  
testTruthyFalsy('');           // falsy 
testTruthyFalsy('Packt');        // truthy 
testTruthyFalsy(new String(''));     // true (object is always true) 
  
testTruthyFalsy(1);            // truthy 
testTruthyFalsy(-1);           // truthy 
testTruthyFalsy(NaN);          // falsy 
testTruthyFalsy(new Number(NaN));    // truthy (object is always true) 
  
testTruthyFalsy({});           // truthy (object is always true) 
  
var obj = { name: 'John' }; 
testTruthyFalsy(obj);          // truthy 
testTruthyFalsy(obj.name);         // truthy 