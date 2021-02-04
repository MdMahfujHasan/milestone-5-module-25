function doSomething(){
    console.log(222);
}
console.log(111);

doSomething();

setTimeout(doSomething);

setTimeout(function(){
   console.log('waiting');
}, 4000)

setTimeout(() => {
    console.log('arrow function');
}, 3000) // will do the task after 3s or later after finishing the previous tasks

setInterval(function(){
    console.log('will keep on doing...');
}, 2000);

console.log(333);