const promise = new Promise(function (resolve,reject){
    resolve('Todo es correcto')
});

const cow = 5;

const countCows = new Promise(function(resolve,reject){
    if(cow > 10){
        resolve(`We have ${cow} cows on the farm`);
    } else{
        reject('There is no cows on the farm');
    }
})

countCows.then(result => console.log(result))
.catch(error => console.log(error))
.finally(() => console.log('Finally'))