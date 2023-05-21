//Задание №1
const salaryJanitor = 40000; //зарплата вечернего уборщика
const salaryTeacher = 22000; //зарплата педагога по вокалу

console.log(
  `Вечерний уборщик, имея голос и педагогическое образование может зарабатывать ${
    salaryJanitor + salaryTeacher
  } рублей.`
);

//Задание №2
const city = "Владивосток";
const number = 2000;

console.log(`${city + " " + number}`);

//Задание №3
const timeMessenger = 128;
const timeLike = 254;
const timeVK = 137;
const timeYouTube = 201;
const timeInMinutes = timeMessenger + timeLike + timeVK + timeYouTube;

console.log(`${timeInMinutes / 60} часов прокрастинировала Русалка`);

//Задание №4
console.log(2 ** 5);

//Задание №5
console.log(
  "Нужно бежать со всех ног, чтобы только оставаться на месте, а чтобы куда-то попасть, надо бежать как минимум вдвое быстрее!"
);

//Задание №6
const greetings = "Привет";
const name = "Кот";

alert(`${greetings}, ${name}!`);

//Задание №7
let time;

//console.log(time);

time = 34;

console.log(time);

console.log("Старт поездки. Осталось минут: " + time);

time -= 15;

console.log("Немного сторис в соцсетях. Осталось минут: " + time);

time -= 10;

console.log("Немного не новостей, но событий. Осталось минут: " + time);

time = 0;

console.log("Вы приехали. Добро пожаловать в Москву");

//Задание №8
const fahrenheit = 451;
const celsius = (fahrenheit - 32) / 1.8;

console.log(
  `${fahrenheit} градус по Фаренгейту — это ${celsius.toFixed(
    2
  )} градуса по Цельсию.`
);
