# SequenceExecutionOfPromise
Sequential execution of dynamic no of promises

Sometimes we need a execution plan where we have to run async jobs in sequence one after another and the no of async jobs is dynamic .

For Example if we have 20 async jobs and all need to be processed in sequence but if we follow below approach 
promiseArr =['promise1','promise2','promise3','promise4','promise5','promise6','promise7','promise8']
promise1
.then(promise2)
.then(promise3)
.then(promise4)
.then(promise5)
.then(promise6)
.then(promise7)
.then(promise8)
.then(()=>{
    do some operation
})

but above approach is fine if we have small number of promises to be executed but if we dont know the size of the promiseArr then we can't follow above approach and through async npm module we can achieve this and it's an external module but we can achieve sequential execution through native approach without any third party dependency.

In the code i have followed two approach 
   1. Using Array.reduce method
   2. Using callback method
