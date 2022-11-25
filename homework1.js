// 1. Given a positive integer. Bring the last digit of the number to the beginning. Print the new
// number. If the last digit of the inserted number is 0, number remains the same.

function newNumber(num){
   let lastDigit = String(num).slice(-1);
   if(lastDigit == 0){
      console.log(num);
   }else{
      let splitNumber = String(num).slice(0,-1)
      let newNumber = lastDigit + splitNumber;
      newNumber = Number(newNumber);
      console.log(newNumber);
   }
}

newNumber(367);

// 2. Given three numbers. Sort them by the ascending order.

function sortNumbers(x, y, z){
   if (x < y && x < z) {
      console.log(x);
      if (y < z) {
         console.log(y);
         console.log(z);
      } else {           
         console.log(z);
         console.log(y);
      }
   } else if (y < z && y < x) {
      console.log(y);
      if (z < x) {
         console.log(z);
         console.log(x);
      } else {                  
         console.log(x);
         console.log(z);
      }
   } else {                     
      console.log(z);        
      if (x < y) {
         console.log(x);
         console.log(y);
      } else {                  
         console.log(y);
         console.log(x);
      }
   }
}

sortNumbers(45, 26, 78);

// 3. Given the following code rewrite it using only two if operators. (Hint: use logical
//    operators).
var n = +prompt();
var i = 0;
var j = 0;

if(n%2 === 0 && !Math.floor(n/10)){
   i++;
   console.log(i);
}

if(n%3 === 0  && n%10 === 0){
   j++;
   console.log(j);
}

// 4. Write a program which will compute the area of a rectangular or a triangle after
// prompting the user to type the name of the figure name. Also check that entered
// numbers are positive.
// For the triangle entered numbers are height and and base.

function computeArea(shape, height, base){
   if(height > 0 && base > 0){
      if(shape == 'triangle'){
         let areaTriangle = (height * base) / 2;
         console.log('Square of the triangle is ' + areaTriangle);
      }else if(shape == 'rectangle'){
         let areaRectangle = height * base;
         console.log('Square of the rectangle is ' + areaRectangle);
      }else{
         console.log('This shape is not defined');
      }
   }else{
      console.log('Please enter only positives');
   }
}

computeArea("triangle", 6, 7);

// 5. Given an object. Invert it (keys become values and values become keys). If there is
// more than key for that given value create an array.

let data = { a: '1', b: '2', c: '2', d: '2'}
let dataKeys = Object.keys(data);
let dataValues = Object.values(data);
let invertedObj = {};
function invertKeyValue(dataKeys, dataValues) {
   for (let val in dataValues) {
      invertedObj[dataValues[val]] = []
   }
   for (let val in dataValues) { 
      if (invertedObj[dataValues[val]]) {
         invertedObj[dataValues[val]].push(dataKeys[val]);
      } else {
         invertedObj[dataValues[val]] = dataKeys[val];
      }
   }
   return invertedObj;
}
invertKeyValue(dataKeys, dataValues);
