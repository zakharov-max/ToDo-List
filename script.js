// Вопросы к этому заданию
// 1. Стандарт ECMAScript определяет 8 типов данных:


// 7 типов данных являются примитивами:
// Boolean (Булев, Логический тип)
// Null (Null тип )
// Undefined (Неопределенный тип)
// Number (Число)
// String (Строка)
// BigInt 
// Symbol (в ECMAScript 6)
// и Object (Объект)

// 2.Как вывести информацию в консоль?
// cansole.log();

// 3.Какая функция операторов || и &&?
// Оператор ИЛИ - ||
// Оператор И - && 
// Логические операторы




// if (2*4 == 3) {
// console.log('Верно!!');
// } else {
//     console.log('no!');
// }

// let num = 50;
// if (num < 49) {
//     console.log('no variant!')
// } else if (num > 100) {
//     console.log('mnogo!')
// } else {
//     console.log('verno')
// };

// (num == 50) ? console.log('verno') : console.log('no variant!');

// switch (num) {
//     case num < 49:
//         console.log('no variant!')
//         break;
//     case num > 100:
//         console.log('mnogo');
//         break;
//     case 50:
//         console.log('Good!');
//         break;
//     default:
//         console.log('Что-то не то!')
//         break;
// }

// let num = 50;

// // while (num < 55) {
// //     console.log(num);
// //     num++;
// // }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 8; i++) {
//     if (i == 6) {
//        continue
//     }
//     console.log(i)
// }


// let num = 20;
//  function showFirstMessage(text) {
//      alert(text);
//      let num = 10;
//      console.log(num);
//  }

//  showFirstMessage('Hello World!');
// console.log(num);

// console.log(calc(3,4));

// console.log(calc(2,1));


// function calc(a,b) {
//     return (a + b);
// }

// console.log(calc(3,4));

// console.log(calc(2,1));

// function retVar() {
//     let num = 50;
//     return num;
// }

// let anotherNum = retVar();
// console.log(anotherNum);

// let calc = (a,b) => a+b

// console.log(calc(3,4));

// console.log(calc(2,1));

// let str = 'test';
// console.log(str.length);

// console.log(str.toUpperCase());
// console.log(str.toLocaleLowerCase());



// let twelve = '12.2px';
// // console.log(Math.round(twelve));
// console.log(parseInt(twelve));
// console.log(parseFloat(twelve));

// function learnJS(lang, callback) {
//         console.log('Я учу ' + lang)
//         callback();
// }

// learnJS('JavaScript', function() {
//         console.log('Я прошёл 3й урок!')
// })

// let obj = new Object();

// let options = {
//     width: 1024,
//     height: 1024,
//     name: 'test'
// }
// console.log(options.name);
// options.bool = false;
// options.colors = {
//     border: 'black',
//     bg: 'red'
// }

// delete options.bool;

// console.log(options);

// for (let key in options) {
//     console.log('Свойство ' + key + ' имеет значение ' + options[key])
// }
// console.log(Object.keys(options).length)


// let arr = [1, 'dwwd', 3, 'dddd', 5];


// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// arr.forEach(function(item, i, mass) {
//     console.log(i + ": " + item + ' (массив: ' + mass + ')');
// });

// console.log(arr);


// let soldier = {
//     health: 400,
//     armor: 100
// };

// let john = {
//     health: 100
// };

 // john.__proto__ = soldier
 // console.log(john);
 // console.log(john.armor);

// - to String
 // 1)

// console.log(typeof(String(4)));

 // 2)

// console.log('ww' + 'ff')
// console.log(typeof('' + false));

 // - to Number


// console.log(typeof(Number('5')));
// 2)

// console.log(typeof)

// let timerId = setTimeout(sayHello, 3000);
// clearTimeout(timerId);

// let timerId = setInterval(sayHello, 3000);
// clearTimeout(timerId);

// function sayHello() {
// console.log('Hello World');
// }
//  `use strict`;
// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());

// }
// showThis(5, 4);
// showThis(7, 7);

// let name ='ivan',
//     age = 30,
//     mail = 'ex@mail.ru';

//     document.write(`Пользователь ${name} ${age} лет. Его почтовый адрес ${mail}`);

// function makeArray() {
//     var items = [];

//     for (let i = 0 ; i < 10; i++) {
//         var item = function() {
//             console.log(i);
//         };
//         items.push(item);
//     }
//     return items;
// }

// var arr = makeArray();

// arr[1]();
// arr[3]();
// arr[7]();

// let fun = () => {
//     console.log(this);
// };

// // fun();

// let obj = {
//     number: 3,
//     sayNumber: function() {
//         let say = () => {
//             console.log(this);
//         };
//         say();
//     }
// };

// obj.sayNumber();

// let btn = document.querySelector('button');

// btn.addEventListener('click', function() {
//     let show = () => {
//         console.log(this);
//     }
//     show();
// })

let options = {
    width: 1366,
    height: 768,
    background: 'red',
    font: {
        size: '16px',
        color: '#fff' 
    }
};

console.log(JSON.parse(JSON.stringify(options)));
