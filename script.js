'use strict';

const numberOfFilms = +prompt('Скільки фільмів ви переглянули?');

const personalMoviedDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};


const a = prompt('Один із останніх переглянутих фільмів?'),
   b = prompt('Ваша оцінка данного фільму?'),
   c = prompt('Один із останніх переглянутих фільмів?'),
   d = prompt('Ваша оцінка данного фільму?');

personalMoviedDB.movies[a] = b;
personalMoviedDB.movies[c] = d;

console.log(personalMoviedDB);