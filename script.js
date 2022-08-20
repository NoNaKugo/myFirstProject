/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// 'use strict';

// // Код возьмите из предыдущего домашнего задания

// let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?','');

// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actor: {},
//     genres: [],
//     private: false,
// }

// if (personalMovieDB.count < 10){ 
//     console.log('Просмотрено довольно мало фильмов');
// } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('Вы классический зритель');
// } else if(personalMovieDB.count >= 30) {
//     console.log('Вы киноман');
// } else {
//     console.log('ошибка');
// }

// for(let i = 0;i < 2; i++){
//     let a = prompt('Один из последних просмотренных фильмов?',''),
//         b = prompt('На сколько оцените его?','');
    
//     if( a != null && b != null && a != '' && b != '' && a.length < 50){
//       personalMovieDB.movies[a] = b;
//       console.log('Все правильно!');
//     } else  { 
//       i--; 
//       console.log('не верно');
//     }
// }


// console.log(personalMovieDB);

// let name = "Антон";

// function addName (name) {
//     return `Привет ${name}`;
// }


// let num = 5

// function returnNeighboringNumbers(){
//     return [num - 1, num , num + 1];
// }

// function proggres(numOne, times){
//     if (typeof (times) !== 'number' || (times) <= 0){
//         console.log('Второй аргумент не подходит');
//         return numOne;
//     } else if (typeof(numOne) !== 'number' || (numOne) <= 0){
//         console.log("Первой аргумент не походит");
//         return times;
//     } 
//     let rez = '';

//     for (let i = 1; i <= times; i++){
//         if (i === times){
//             rez += `${numOne * i}`;
//         } else {
//             rez += `${numOne * i+'---'}`;
//         }
//     }

//     return rez;

// }

// console.log(proggres(5, 6));

// function calculateVolumeAndArea(num) {
//   if (typeof(num) !== 'number' || num < 0 || !Number.isInteger(num))  {
//     return 'При вычислении произошла ошибка';
// } 

// let   SquareKyb = 0,
//       VolumeKyb = 0;

//     SquareKyb = 6 * (num * num);
//     VolumeKyb = num * num * num; 

//   return `Объем куба:${VolumeKyb},площадь поверхности: ${SquareKyb}`;
// }


// function getCoupeNumber(num) {
//    if(typeof(num) !== "number" || num < 0 || !Number.isInteger(num)){
//       return 'Ошибка.Неверный данные.'
//    }

//    if (num > 36 || num === 0){
//     return 'Такого номера нет'
//    }

//    let numTab = 0;

//    if(num <= 36){
//       numTab = Math.ceil (num / 4);
//       return `Ваше купе - ${numTab}`
//    }
// }


// function getTimeFromMinutes(num) {

//     if(typeof(num) !== 'number' || num < 0 || !Number.isInteger(num)){
//       return 'Ошибка, проверьте данные';
//     }

//     let hours = 0,
//         minut = 0;

//         hours = Math.floor(num / 60);
//         minut = num % 60;

//       let hoursStr = 0;

//         if(hours <= 0){
//           hoursStr = "часов"
//         } else if ( hours <= 1){
//           hoursStr = "час"
//         } else if (hours <= 2 || hourse <= 3 || hours <= 4){
//           hoursStr = "часа"
//         } else {
//           hoursStr = "часов"
//         };

//         return `Это ${hours} ${hoursStr} и ${minut} минут`
// }


// function findMaxNumber(a,b,c,d) {
//     if( typeof(a) !== 'number' || 
//         typeof(b) !== 'number' || 
//         typeof(c) !== 'number' || 
//         typeof(d) !== 'number') { 
//           return 0
//         }else {
//        let num = Math.max(a,b,c,d);
//        return num;
//         }
// }


// function fib(num) {
//     if(typeof(num) !== 0 || num <= 0 || !Number.isInteger(num)){
//       return "";
//     }

//     let reetuResser = '',
//         deeest = 0,
//         faaress = 0;

// } 

// let counter = 0;

// const post = {
//   git: "fuul",
//   name: "Yura",
//   froot: "apple",
//   animal: "cat",
//   hub: {
//     lobbiOne: "popa",
//     lobbiTwo: 2,

//   },
//   makeTest: function(){
//     console.log("Test");
//   }
// }

// for(key in post){
//   counter++;
// };

// post.makeTest();

// console.log(counter);
// console.log(Object.keys(post));
// console.log(post["hub"]["lobbiOne"]);

// const personalPlanPeter = {
//   name: "Peter",
//   age: "29",
//   skills: {
//       languages: ['ru', 'eng'],
//       programmingLangs: {
//           js: '20%',
//           php: '10%'
//                         },
//   exp: '1 month',
//           },
//   showAgeAndLangs:function (plan){
//      let {age} = plan;
//      let {languages} = plan.skills;
//      let strong = `Мне ${age} и я владею языками: `;
      
//       languages.forEach(function(lang){
//           strong +=`${lang.toUpperCase()} `;
//       });
//     return strong;
//     }
//   }


// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

// function showExperience(plan) {
//   const {exp} = plan.skills;
//   return exp;
// }

// console.log (showExperience(personalPlanPeter));

// function showProgrammingLangs(plan) {
//     let strong = "";
//     let {programmingLangs} = plan.skills;
//       for (let key in programmingLangs){
//         strong += `Язык ${key} изучен на ${programmingLangs[key]}\n`
//       }

//     return strong;
// }

// console.log (showProgrammingLangs(personalPlanPeter));


// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {

//   let str = '';

//     if(arr.length === 0){
//       str = "Семья пуста";
//     } else {
//       str = "Cемья состоит из: ";
//     }

//     arr.forEach(toffi => {
//       str += `${toffi} `
//     });

//   return str;  
// }

// console.log(showFamily(family));

// console.log(showFamily(family));

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {

//     arr.forEach(toffi => {
//         console.log(toffi.toLowerCase());
//     })
// }

// standardizeStrings(favoriteCities);

// const someString = 'This is some strange string';

// function reverse(str) {
//   return str.split("").reverse().join("");
// }
// console.log (reverse(someString));

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//   let str = '';

//   arr.length === 0 ? str  = 'Нет доступных валют' : str  = 'Доступные валюты:\n';

//   arr.forEach(function(curr,) {
//       if (curr !== missingCurr) {
//         str += `${curr}\n`;
//       }
//     });

//     return str;
// }

// console.log(availableCurr([...baseCurrencies,...additionalCurrencies], 'USD'));


/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

// 'use strict';

// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actor: {},
//     genres: [],
//     private: false,
//     start: function () {

//       personalMovieDB.count += prompt('Сколько фильмов вы уже посмотрели?','');

//       while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
//           numberOfFilms += prompt('Сколько фильмов вы уже посмотрели?','');
//      }
//    }
// };

// if (personalMovieDB.count < 10){ 
//     console.log('Просмотрено довольно мало фильмов');
// } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('Вы классический зритель');
// } else if(personalMovieDB.count >= 30) {
//     console.log('Вы киноман');
// } else {
//     console.log('ошибка');
// }

// for(let i = 0;i < 2; i++){
//     let a = prompt('Один из последних просмотренных фильмов?',''),
//         b = prompt('На сколько оцените его?','');
    
//     if( a != null && b != null && a != '' && b != '' && a.length < 50){
//       personalMovieDB.movies[a] = b;
//       console.log('Все правильно!');
//     } else  { 
//       i--; 
//       console.log('не верно');
//     }
// }

// У вас есть небольшой кусочек данных о торговом центре, которые записаны в объекте shoppingMallData. Они содержат массив с данными о магазинах, где указана длина и ширина помещения; высоту помещения; стоимость отопления за 1 кубический метр и бюджет на оплату отопления за месяц.

// Основная задача - это написать функцию isBudgetEnough, которая буде возвращать строку. Если бюджета хватает для отопления всего объема торгового центра - выводится 'Бюджета достаточно', если нет - 'Бюджета недостаточно'. И все 🙂

// Но эта задача содержит несколько подзадач внутри:

// - вычисление общей площади всех магазинов, которая вычисляется как длина магазина, умноженная на его ширину;

// - вычисление общего объема торгового центра, так как цена отопления указана в кубических метрах;

// - определение того, хватает ли бюджета на оплату такого объема;

// - все числа идут без единиц измерения для упрощения, просто цифры и все;

// - функция должна продолжать работать, даже если изменяется количество магазинов, высота, бюджет или подставляется вообще другой объект.




// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// }

// function isBudgetEnough(data) {
//     let squareShop = 0;
//     let squareMallData = 0;

//     data.shops.forEach(sqShop => {
//         squareShop += sqShop.width * sqShop.length;
//     });

//     squareMallData = data.height * squareShop;

//     if((squareMallData * data.moneyPer1m3) > data.budget ){
//         return 'Бюджета недостаточно';
//     } else {
//         return 'Бюджета достаточно'
//     }

// }

// console.log (isBudgetEnough(shoppingMallData));

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

// function sortStudentsByGroups(arr) {
//         arr.sort();

//     let a = [], 
//         b = [],
//         c = [],
//         d = [];

//         for(let i = 0;i < arr.length; i++ ){
//             if(i < 3){
//                 a.push(arr[i]);
//             } else if (i < 6){
//                 b.push(arr[i]);
//             } else if (i < 9){
//                 c.push(arr[i]);
//             } else {
//                 d.push(arr[i]);
//             }
//         }
//         return [a,b,c, `Оставшиеся студенты: ${d.length === 0 ? '-' : d.join(', ')}`]
// }

// console.log(sortStudentsByGroups(students));



let opshion = {
    name: "yuir",
    age: 42,
    status: {
        hp: 100,
        color: "blaek",
    },
}

    for(let key in opshion){
        console.log( `в цикле есть ${key} значения ${opshion[key]}` ); 
    }

