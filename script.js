'use strict';

let numberOfFilms;

function start() {
   numberOfFilms = prompt('Скільки фільмів ви переглянули?', '');
   while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = prompt('Скільки фільмів ви переглянули?', '');
   }
}

start();


const personalMoviedDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};


function ratingFilms() {
   for (let i = 1; i < 2; i++) {
      const a = prompt('Один із останніх переглянутих фільмів?', '');
      const b = prompt('Ваша оцінка данного фільму?', '');
      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
         personalMoviedDB.movies[a] = b;
         console.log('done!');
      } else {
         console.log('error!');
         i--;
      }
   }
}

ratingFilms();


function movieDB() {
   if (personalMoviedDB.count <= 10) {
      alert('Переглянуто доволі мало фільмів');
   } else if (personalMoviedDB.count <= 30) {
      alert('Ви класичний глядач');
   } else if (personalMoviedDB.count > 30) {
      alert('Ви кіноман!');
   } else {
      alert('Сталась помилка');
   }
}

movieDB();

function showMyDB(hidden) {
   if(!hidden) {
      console.log(personalMoviedDB);
   }
}

showMyDB(personalMoviedDB.privat);


function writeYourGenres() {
   for(let i = 1; i <= 3; i++) {
      personalMoviedDB.genres[i - 1] = prompt(`Ваш улюблений жанр під номером ${i}`);
   }
}

writeYourGenres();

//function returnNeighboringNumbers(numm) {
//   return [numm - 1, numm, numm + 1];
//}
//console.log(returnNeighboringNumbers(5));





//function getMathResult(state, progress) {
//   if (typeof (progress) !== 'number' || progress <= 0) {
//      return state;
//   } 



//let str = '';

//for (let i = 1; i <= progress; i++) {
//    if (i === progress) {
//        str += `${state * i}`;
//    } else {
//        str += `${state * i}---`;

//    }
//}
//return str;
//}
//console.log(getMathResult(2, 5));


//function getMathResult(base, progress) {
//   if(typeof(progress) !== 'number' || progress <= 0){
//       return base;
//   }
//   let result = '';
   
//   for(let i = 1; i <= progress; i++) {
//       if (i === progress) {
//         result += `${base * i}`;  
//       } else {
//           result += `${base * i}---`;
//       }
//   }
//   return result;
//}

//console.log(getMathResult(3, 0));

//Якщо progress не є номером або progress дорівнює або менше нуля поверни 'state', якщо все вірно поверни 'Все працює!'