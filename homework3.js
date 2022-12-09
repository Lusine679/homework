// 1. Given an array of numbers which is almost sorted in ascending order.  Find the index
// where sorting order is violated.

function sortNumbers(arr){
    let sortedNumber = arr[0];
    for(let i = 0; i <= arr.length; i++){
        if(sortedNumber <= arr[i]){
            sortedNumber = arr[i];
        }else{
            return arr.indexOf(arr[i]);
        }
    }
}

sortNumbers([-9, -4, -4, 3, 12, 4, 5]);

// 2 Given an array consisting from the arrays of numbers (like a two-dimensional array).
// Find sum of each row and print them as an array

function sumRow(arr) {
    let sum = 0;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            sum += arr[i][j];
        }
        result.push(sum);
        sum = 0;
    }
    return result;
}

sumRow([[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]]);

// 3 Given an array of integers. Write a function that return new array from first array,
// where removed even numbers, and odd numbers was multiplied with new array length

function oddNumsSort(arr) {
    let oddNum = [];
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            oddNum.push(arr[i]);
        }
    }

    for(let j = 0; j < oddNum.length; j++){
        newArr.push(oddNum[j] * oddNum.length);
    }

    return newArr;
}

oddNumsSort([5, 4, 78, 0, -3, 7]);

// 4 Given three numbers a, b (a ≤ b) and step. Create an array of evenly spaced
// elements starting from a to b spaced by step.

function evenlySpace(a, b, step) {
    let arr = [];
    for (let i = a; i <= b; i += step) {
      arr.push(i);
    }
    return arr;
  }
  
evenlySpace(1, 5, 1);

// 5. Given an array of numbers. Print frequency of each unique number. (Frequency is the
//     count of particular element divided by the count of all elements)

function frequencyUniqueNumber(arr){
    const count = {};
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
    
        if (count[element]) {
            count[element] = (count[element] + 1)
        } else {
            count[element] = 1;
        }
    }
    console.log(count);
}

frequencyUniqueNumber([1, 1, 2, 2, 3]);