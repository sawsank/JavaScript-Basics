var counter = (function () {
    //private stuff
    let count = 0;

    function print(message){
        console.log(message + ' ' + count)
    }
    //return an object
    return{
        //value: count,
        get: function(){return count},

        set: function(value){count=value},
        
        increment: function(){
           count += 1
           print("after increment: ") 
        },

        reset: function(){
            print('before reset: ')
            count = 0
            print('after reset: ')
        }
    }
})();
//console.log(counter.count)
counter.increment();
counter.increment();
counter.increment();

//accidently created closure
//console.log(counter.value)

counter.set(7)
console.log(counter.get())
counter.reset()