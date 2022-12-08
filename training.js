'use strict';

function returnNeighboringNumbers(numm) {
   return [numm - 1, numm, numm + 1];
}
console.log(returnNeighboringNumbers(5));





function getMathResult(state, progress) {
   if (typeof (progress) !== 'number' || progress <= 0) {
      return state;
   }



   let str = '';

   for (let i = 1; i <= progress; i++) {
      if (i === progress) {
         str += `${state * i}`;
      } else {
         str += `${state * i}---`;

      }
   }
   return str;
}
console.log(getMathResult(2, 5));


function getMathResult(base, progress) {
   if (typeof (progress) !== 'number' || progress <= 0) {
      return base;
   }
   let result = '';

   for (let i = 1; i <= progress; i++) {
      if (i === progress) {
         result += `${base * i}`;
      } else {
         result += `${base * i}---`;
      }
   }
   return result;
}

console.log(getMathResult(3, 0));

//Якщо progress не є номером або progress дорівнює або менше нуля поверни 'state', якщо все вірно поверни 'Все працює!'




function cube(num) {
   if (isNaN(num) || !Number.isInteger(num) || num <= 0) {
      return 'При вычислении произошла ошибка';
   } else {
      return `Объем куба: ${num * num * num}, площадь всей поверхности: ${6 * (num * num)}`;
   }
}

console.log(cube(5));


//Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:

//"Ошибка. Проверьте правильность введенного номера места"

//Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"

function getCoupeNumber(number) {

   let cupe = 36;

   if (typeof (number) !== 'number' || number < 0 || !Number.isInteger(number)) {
      return "Ошибка. Проверьте правильность введенного номера места";
   } else if (number === 0 || number > cupe) {
      return "Таких мест в вагоне не существует";
   }

   return Math.ceil(number / 4);

}

console.log(getCoupeNumber(33));

const obj = {
   firstName: 'Gena',
   lastName: 'Shemet',
   old: 30,
   city: 'Kyiv'
};

console.log(Object.keys(obj).length);




const personalPlanPeter = {
   name: "Peter",
   age: "29",
   skills: {
      languages: ['ru', 'eng'],
      programmingLangs: {
         js: '20%',
         php: '10%'
      },
      exp: '1 month',
   },
   showAgeAndLangs: function (plan) {
      const { age } = plan;
      const { languages } = plan.skills;

      let str = `Мне ${age} и я владею языками: `;

      languages.forEach(function (user) {
         str += `${user.toUpperCase()} `;
      });

      return str;
   }
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));


function showProgrammingLangs(plan) {
   let str = '';
   const { programmingLangs } = plan.skills;
   for (let key in programmingLangs) {
      str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
   }
   return str;
}

console.log(showProgrammingLangs(personalPlanPeter));




function showExperience(plan) {
   const { exp } = plan.skills;
   return exp;
}

console.log(showExperience(personalPlanPeter));



const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {

   let str = '';

   arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из:';

   arr.forEach(user => {
      str += `${user} `;
   });

   return str;


}

console.log(showFamily(family));






const famil = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
   if (arr.length === 0) {
      const text = 'Семья пуста';
      return text;
   }

   let str = '';

   let strNew = arr.join(' ');

   str += `Семья состоит из: ${strNew}`;

   return str;


}

console.log(showFamily(famil));


const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
   for (let value of arr) {
      let str = value.toLowerCase();

      console.log(value.toLowerCase());

   }
}

console.log(standardizeStrings(favoriteCities));



const someString = 'This is some strange string';

function revers(str) {

   if (typeof (str) !== 'string') {
      let sms = 'Ошибка!';
      return sms;
   }
   return str.split('').reverse().join('');
}

console.log(revers(someString));

const number = [1, 2, 3];

number.reverse();

console.log(number);




const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'PLN', 'CNY'];

function availableCurr(arr, missingCurr) {
   let str = '';

   arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

   arr.forEach(function (item) {
      if (item !== missingCurr) {
         str += `${item}\n`;
      }
   });

   return str;


}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));