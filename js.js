
// 'use strict';
 
// const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count:  numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };

// const a = prompt('Один из последних просмотренных фильмов?',''),
//       b = prompt('На сколько оцените его?',''),
//       c = prompt('Один из последних просмотренных фильмов?',''),
//       d = prompt('На сколько оцените его?','');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);


// if (4 == 3) {
//     console.log('Все ок!');
// } else {
//     console.log('Все не ok!');
// }

// const num = +prompt('введи число', '');

// switch (num) {
//     case 49: 
//         console.log('Неверно');
//         break;
//     case 100:
//         console.log('Точно нет!');
//         break;    
//     case 50:
//         console.log('Верно');
//         break;
//     default:
//         console.log('Увы');
//         break;      
// }

// const retva = +prompt('введи первое число',''),
//       beca = +prompt('введи второе число','');

// if (retva == beca) {
//     console.log('они равны')
// } else if (retva > beca ) {
//     console.log('первое больше');
// } else if (retva < beca) {
//     console.log('вотрое больше')
// } else {
//     console.log('что?');
// }

// let num = 50;

// while (num <= 55) {
//   console.log(num);
//   num++;
// } 

// do {
//   console.log(num);
//   num++;
// }



// for(let i = 1; i <= 8; i++){
//   console.log(i)
// }

// for(let i = 0; i < 3;i++){
//   console.log(i);
//   for(let j=0; j<3;j++){
//     console.log(j);
//     for (let k = 0;k < 3; k++)
//     console.log(k);
//   }
// }

// let rules = '';
// const loong =  7;

// for( let i = 1; i < loong; i++ ){
//   for(let j = 0; j < i ; j++){
//     rules += '*'
//   }
//   rules += '\n';
// }

// console.log(rules)


  // for (let i = 2; i <=10 ; i++){
  //     console.log(i);
  // } 

//   for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// let i = 2

// while(i <= 15){
//   i++;
//   if (i % 2 === 0) {
//   continue;
//   } else {
//   console.log(i);
//   }
// }


// const arrayOfNumbers = [];
// for (let i = 5; i <= 10; i++){
//   arrayOfNumbers.push(i)
// }

// console.log(arrayOfNumbers);

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i = 0; i < arr.length; i++){
//   result [i] = arr[i];
// }
// console.log(result);

// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for(i = 0; i < data.length; i++){
//   if (typeof(data[i]) === 'number'){
//     data[i] = data [i] * 2;
//   } else if( typeof (data[i]) === 'string'){
//     data[i] = `${data[i]} - done`
//   }
// }
// console.log(data);

// let lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++){
//   for (let j = 0;j < lines - i;j++){
//     result += ' ';
//   }
//   for (let j = 0;j < 2 * i + 1;j++){
//     result += '*';
//   }
//   result += "\n";
// }
// console.log(result);