const promise = new Promise((resolve,reject) => {
     setTimeout(()=> {
    //    resolve('This is my resolved data');
    reject('something')
    },`500`)
});

console.log('before')
promise.then((data) => {
    console.log('1',data);
});

promise.then((data) => {
    console.log('2',data);
}).catch((error) => {
    console.log('error:',error)
});

console.log('after')
