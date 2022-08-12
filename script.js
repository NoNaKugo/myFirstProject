
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

const num = +prompt('введи число', '');

switch (num) {
    case 49: 
        console.log('Неверно');
        break;
    case 100:
        console.log('Точно нет!');
        break;    
    case 50:
        console.log('Верно');
        break;
    default:
        console.log('Увы');
        break;      
}