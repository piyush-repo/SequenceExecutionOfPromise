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

// using array reduce method approach  
execPromises = secs =>{secs.reduce((IP,sec)=> IP.then(()=> genPromise(sec))
                                    .then((result)=>{
                                        console.log('resultingValue : ',result);
                                        results.push(result);
                                    }),Promise.resolve())
}

execPromises(timeouts);



