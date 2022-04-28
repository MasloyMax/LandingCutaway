// const block = document.querySelector("#block");

// const step = 10;
// let count = 0;

// const animate = function(){
//     block.style.left = count + "px";
//     count += 3;
//    if (count < 500){
//     requestAnimationFrame(animate);
//    }
// };
// requestAnimationFrame(animate);

// let text = ['в этом тексте 3-5 предложений',
// 'привет мир меня кувыркнули',
// 'Это значит ты лох'];
// let answ = '';


// function mainText (index){
//     index.split(' ');

// }
// mainText(1);

// function string(stringMy) {
//     let stringArray = stringMy.split(" ");
//     let firstWords = stringArray[0];

//     for ( i = 0; i < stringArray.length - 1; i++) {
//     if (stringArray[i].indexOf(".") !== -1) {
//     firstWords += ", " + stringArray[i + 1];
//     }
//     }
//     return firstWords;
//     }

//     console.log(string('в этом тексте 3-5 предложений' ));

// var names = 'Гарри Трамп ;Фрэд Барни; Хелен Ригби ; Билл Абель ;Крис Ханд ';

// console.log(names);

// var re = /\s*;\s*/;
// var nameList = names.split(re);

// console.log(nameList);




// window.("#click_about").click(function() { // ID откуда кливаем
//     $('html, body').animate({
//         scrollTop: $(".design").offset().top  // класс объекта к которому приезжаем
//     }, 500); // Скорость прокрутки
// })

// const anchors = document.querySelectorAll('.menu-button-click')

// for (let anchor of anchors) {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault()

//     const blockID = anchor.getAttribute('href')

//     document.querySelector(blockID).scrollIntoView({
//       behavior: 'smooth',
//       block: 'start'
//     })
//   })
// }

let location1 = 3;//корабли
let location2 = 4;
let location3 = 5;
let guess;//номер попытки
let hits = 0; // кол-во попаданий
let guesses = 0;// кол-во попыток
let isSunk = false;// потоплен корабль или нет

// while (isSunk == false){
//     guess = prompt("Введи координаты выстрела, (enter a number 0-6)");
// }