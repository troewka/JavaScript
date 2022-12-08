'use strict';

const personalMoviedDB = {
   count: '',
   movies: {},
   actors: {},
   genres: [],
   privat: false,

   start: function () {
      personalMoviedDB.count = prompt('Скільки фільмів ви переглянули?', '');
      while (personalMoviedDB.count == '' || personalMoviedDB.count == null || isNaN(personalMoviedDB.count)) {
         personalMoviedDB.count = prompt('Скільки фільмів ви переглянули?', '');
      }
   },

   ratingFilms: function () {
      for (let i = 1; i < 2; i++) {
         const a = prompt('Один із останніх переглянутих фільмів?', '').trim();
         const b = prompt('Ваша оцінка данного фільму?', '');
         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMoviedDB.movies[a] = b;
            console.log('done!');
         } else {
            console.log('error!');
            i--;
         }
      }
   },

   movieDB: function () {
      if (personalMoviedDB.count <= 10) {
         alert('Переглянуто доволі мало фільмів');
      } else if (personalMoviedDB.count <= 30) {
         alert('Ви класичний глядач');
      } else if (personalMoviedDB.count > 30) {
         alert('Ви кіноман!');
      } else {
         alert('Сталась помилка');
      }
   },

   toggleVesibleMyDB: function () {
      if (personalMoviedDB.privat) {
         personalMoviedDB.privat = false;
      } else {
         personalMoviedDB.privat = true;
      }
   },

   showMyDB: function (hidden) {
      if (!hidden) {
         console.log(personalMoviedDB);
      }
   },

   writeYourGenres: function () {
      for (let i = 1; i <= 2; i++) {
         let userGenre = prompt(`Ваш улюблений жанр під номером ${i}`);
         if (userGenre === null || userGenre === '') {
            console.log('Дані не введені або натиснута відміна');
            i--;
         } else {
            personalMoviedDB.genres[i - 1] = userGenre;
         }

      }
      personalMoviedDB.genres.forEach(function (item, i) {
         console.log(`Улюблений жанр №${i + 1} - це ${item}`);
      });
   }

};







