// 1. Given an array of integers, find the pair of adjacent elements that has the largest product and
// return that product.

function adjacentElement(el) {
    let largestProduct = 1;
    for (let i = 0; i < el.length; i++) {
        let product = el[i] * el[i + 1];
        if (product > largestProduct) {
            largestProduct = product;
        }
    }
    return largestProduct;
}
adjacentElement([2, 4, 8, 6,10]);

// 2. Given an array of integers. All numbers are unique. Find the count of missing numbers between
// minimum and maximum elements to make integers sequence.
function countMissingEl(numArr){
    const missing = [];

    for (let i in numArr) {
        let x = numArr[i] - numArr[i - 1];
        let diff = 1;
        while (diff < x) {
            missing.push(numArr[i - 1] + diff);
            diff++;
        }
    }

    console.log(missing);
}

countMissingEl([3, 4, 7, 8]);

// 3. Implement built in array sort method using bubble sort algorithm.

function bubleSorting(arg){
    for( let i = 0; i < this.length; i++){
        for(let j = 0; j < this.length; j++){
              if(this[j] > this[j + 1]){
                 let tmp = this[j];
                 this[j] = this[j + 1];
                 this[j + 1] = tmp;
              }
        }
    }
    return arg;
}


// 4. Insert a n positive number. Print the n-st prime number.
function isPrime(num){
    for(let i = 2; i <= num; i++){
        flag = true;
        for(let j = 2; j <= i - 1; j++){
            if(i % j == 0){
               flag = false;
               break;
            }
        }
        if(flag){
          console.log(i)
        }
    }
}

isPrime(5);