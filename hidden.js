
//*найди самое длинное слово в массиве
// function slogSum(arr){
//     const ziroMass = [];
//     let maxLenWord = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length > maxLenWord) {
//             maxLenWord = arr[i].length;
//             ziroMass[0] = arr[i];
//         }
//     }
//     console.log(ziroMass[0])
// }

// slogSum(['велосипед', 'грушаffffffsdasda', 'яблокоыфывффывфывфыв']);


//*сложенгие всех чисел массива
// function sum (x){
//     var s = 0;
//     for (i = 0; i < x.length; i++){
//        s += x[i]
//     }
//     return s
//  }

//  console.log(sum([-23,4,7]));

//*сложение положительных чисел

// function sumPositive(array){
//     let sum = 0;
//     for(let i =0; i < array.length; i++){
//         if(array[i] > 0){
//             sum += array[i];
//         }
//     }
//     console.log(sum);
// }
// sumPositive([-1, 2, 4, 5,6,-3,44,-55]);

//* ищем все простые числа от 1 до 100 и выводим их сумму

// //заполняем массив
// const resultArray = [];
// const resultArrayTwo = [];
// function completion(maxNumber){
//     let start = 0;
//     while(start <= maxNumber){
//         resultArray.push(start++);
//     }
//     return resultArray;
// }
// console.log(completion(99));

// //ищем простые числа
// for(let i = 2; i<= resultArray.length; i++){
//     for(let j = 2; j < i; j++){
//         if(i % j == 0 ){
//             resultArrayTwo.push(resultArray[i]);
//             i += 1;
//         }
//     }
// }
// console.log(resultArrayTwo);

// //складываем все простые числа
// function arraySum(arr) {
//     let sum = 0;
//     if (arr.length) {
//         sum = arr.reduce((a, b) => {
//             return (parseFloat(a) || 0) + (parseFloat(b) || 0);
//         });
//     } else {
//         sum = 0;
//     }
//     return sum;
// }

// console.log(arraySum(resultArrayTwo));

//заполняем массив
// const resultArray = [];
// const resultArrayTwo = [];
// function completion(maxNumber){
//     let start = 0;
//     while(start <= maxNumber){
//         resultArray.push(start++);
//     }
//     for(let i = 2; i<= resultArray.length; i++){
//         for(let j = 2; j < i; j++){
//             if(i % j == 0 ){
//                 resultArrayTwo.push(resultArray[i]);
//                 i += 1;
//             }
//         }
//     }
//     let sum = 0;
//     if (arr.length) {
//         sum = arr.reduce((a, b) => {
//             return (parseFloat(a) || 0) + (parseFloat(b) || 0);
//         });
//     } else {
//         sum = 0;
//     }
// }
// console.log(completion(99));

// //ищем простые числа

// console.log(resultArrayTwo);

// //складываем все простые числа
// function arraySum(arr) {
//     let sum = 0;
//     if (arr.length) {
//         sum = arr.reduce((a, b) => {
//             return (parseFloat(a) || 0) + (parseFloat(b) || 0);
//         });
//     } else {
//         sum = 0;
//     }
//     return sum;
// }

// console.log(arraySum(resultArrayTwo));


// function oddOrEven(arr) {
//     return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
//   }

//   function disemvowel(str) {
//     return str.replace(/[aeiou]/gi, '');
//   }

//   function isIsogram(str){
//     return new Set(str.toUpperCase()).size == str.length;
//   }

//   var number = function(array) {
//     return array.map(function (line, index) {
//       return (index + 1) + ": " + line;
//     });
//   }

// const list = [2,3,5,8,22,3];

// function count(arrCount){
//     let arrayResul = [];
//     for(let i = 0; i < arrCount.length; i++){
//         if(arrCount[i] % 2 == 0){
//             arrayResul.push(arrCount[i]);
//         }else{
//             i++;
//         }
//     }
//  return arrayResul;
// }

// console.log(count(list));