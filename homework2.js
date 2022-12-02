// // 1. Given two objects. Write a function that performs shallow compare.

var a = {a: '1'};
var b = {a: '1'};
function shallowCompare(a, b) {
    for(var key in a) {
        if(!(key in b) || a[key] !== b[key]) {
            return false;
        }else{
            return true;
        }
    }

    for(var key in b) {
        if(!(key in a) || a[key] !== b[key]) {
            return false;
        }else{
            return true;
        }
    }
}

shallowCompare(a,b);


// // 2. Determine if a word or phrase is an isogram. An isogram (also known as a &quot;non pattern
// //     word&quot;) is a word or phrase without a repeating letter.

function isIsogram(str){
    str = str.toLowerCase();
    let arr = str.split('');

    for (let i = 0; i < str.length; i++) {
        if (arr[i] == arr[i + 1]){
            return false;
        }
    }
    return true;
}

isIsogram('asd');

// // 3. Given a number n ( n&gt;= 0 ). Print nth Fibonacci number.  (Fibonacci series: 0, 1, 1, 2, 3,
// //     5, 8 …, ak = ak-1 + ak-2)

let fibonacci = (num) => {
    let a = 0;
    let b = 1;
    let c = 0;
    
    for(let i = 2; i <= num; i++){
       c = a + b; 
       a = b; 
       b = c; 
    }
    
    return b;
}
fibonacci(20);

// 4. Insert a number. Calculate product and sum of the digits of the number. If product is
// divisible by the sum, print the quotient, otherwise print the remainder.

function digitSum(x){
    if(x == 0){
       return 'Cannot calculate.';
    }

    x = String(x).split('');
    let multiply = 1;
    let addition = 0;
    
    for(let i = 0; i < x.length ; i++){
        multiply = multiply * Number(x[i]);
        addition = addition + Number(x[i]);
    }
    let rem = multiply % addition;
    let sum = ( multiply - rem ) / addition; 
   
    if(rem > 0){
        return 'Remainder is ' + rem;
    }else{
        return 'Quotient is ' + sum;
    }
}

digitSum(455);

// 5. Write a program to print X star pattern series.
function printMatrix(x){
   let result = '';
   let number = 0; 
   for(let i = 0; i < x; i++){
        let row = '';
        for(let l = 0; l<x; l++){
            if(l === number || l === x - (number + 1)){
                row += '*';
            }else{
                row += ' ';
            }
        }
        number++;
        result += row + '\n';
   }
   console.log(result);
}

printMatrix(3);