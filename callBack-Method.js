var promiseArr = [];
var timeouts=[10000,4000,3000,1000,500,2,6000,12000,25000,30000];
var results = [];

// Function to return  a promise Object on each input 
function genPromise(i){
   return new Promise((resolve,reject)=>{
       setTimeout(()=> {
           console.log('seconds : ',new Date().getSeconds());
           console.log('executing : ',i);
            resolve(i+i);
        },i);
   })
}

// using call back approach  
function execute(){
    // passing input from the array for promise execution and removing it from the array.
    var timeout = timeouts.shift();
    console.log(timeouts.length,'  '+ timeouts);
    execPromise(timeout,execute);
}

function execPromise(timeout, execute){
    // stop calling execute() once array gets empty
    if(timeouts.length === 0){
        // calling to execute the last input from the array
        genPromise(timeout).then((result)=>{
            console.log("result : ", result);
            results.push(result);
            console.log(results);
            return undefined;
        })
        
    }
    else{
        // calling execute function for getting results from the input of the array.
        genPromise(timeout).then((result)=>{
            console.log("result : ", result);
            results.push(result);
            execute();
        })
    }
    
}
execute();

