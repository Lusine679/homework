// 1. Given an array. Write a recursive function that removes the first
// element and returns the given array. (without using
// arr.unshift(),assign second element to first, third element to second...)

function removeElement(arr) {
    if (arr.length === 0) {
        return [];
      }
    return arr.slice(1);
}

removeElement([6, 78, 'n', 0, 1]);

// 2. Given an array of nested arrays. Write a recursive function that
// flattens it. (Hint create function that concats arrays).

function flattenArr(arr){
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        result = result.concat(flattenArr(arr[i]));
      } else {
        result.push(arr[i]);
      }
    }
    return result;
}

flattenArr([1, [3, 4, [1, 2]], 10]);


// 3.Given a number. Write a function that calculates its sum of the digits
// and if that sum has more than 1 digit find the sum of digits of that number.
// Repeat that process if needed and return the result.

function calculateSumDigits(num) {
    let sum = 0;
    let numToStr = num.toString();

    for (let i = 0; i < numToStr.length; i++) {
        sum += Number(numToStr[i]);
    }

    if (sum.toString().length > 1) {
        return calculateSumDigits(sum);
    } else {
        return sum;
    }
  }
  
  calculateSumDigits(14);

// 4. Given the list of the following readers:
// Output the books sorted by the percent in descending order which
// readStatus is true and add ‘%’ char in the end for percent value.


let listReaders = [
    { book: "Catcher in the Rye", readStatus: true, percent: 40 },
    { book: "Animal Farm", readStatus: true, percent: 20 },
    { book: "Solaris", readStatus: false, percent: 90 },
    { book: "The Fall", readStatus: true, percent: 50 },
    { book: "White Nights", readStatus: false, percent: 60 },
    { book: "After Dark", readStatus: true, percent: 70 }
];

function sortReaders(listReaders){
    listReaders = listReaders.filter(function(el){
       return el.readStatus;
    }).sort(function (x, y) {
        return y.percent - x.percent;
    });

    listReaders.forEach(function(el){
        el.percent = el.percent + '%';
    });

    return listReaders;
}

sortReaders(listReaders);