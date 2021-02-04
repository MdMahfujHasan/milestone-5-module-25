var myName = 'Mahfuj'; // global variable
function add(num1, num2){
    // result can only be accessed inside the function
    var result = num1 + num2; // window.result --> global
    var result = num1 + num2;
    console.log('result inside:', result);
    console.log('my name:', myName);
    // return result;
    function double(num){
        return num*num;
    }
    var total = double(result);
    return total;
}
//console.log('result outside:', result); *error*
var sum = add(4, 5);
console.log(sum);
//console.log('result outside:', result); *not error because of --> var sum = add(4, 5);*
console.log('my name:', myName);