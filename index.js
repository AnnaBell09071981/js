// let name;
// let age;

// let country, city;

// const price = 100;

// let country = "Ukrain", city = "Odesa";


// let name = "Hanna";
// let age = 42;

// console.log("log:", name, age, country, city);

// let n = 10.555 / "test";

// let b = NaN;

// let c = Infinity;

// let d = -Infinity;

// let f = 777777777777777777777n;



// console.log(n);
// console.log(-1 / 0);
// console.log(9999999999999999999999999999 > Infinity);
// console.log(f);

// const t = 'hello';
// const p = "hello";
// const l = `hello ${t} ${2 + 2}`;

// console.log(l);

// let yes = true;
// let no = false;
// let none = null;

// console.log(typeof n);

// const a = 1;
// const b = `${a} hello 10`;
// const c = `test hello world`;
// const d = -(-10);
// const i = a * "10";
// const e = 5 ** 4;
// const g = 10 % 6;
// let h = 5;
// h = ++h;
// f = h++;
// let x = 5;
// x = --x;
// let k = 1;
// k += 2;


// console.log(k);




// const personAge = 10;
// const dogAge = 5;

// console.log(personAge == dogAge);

// const d = 5;
// const t = "5";

// console.log(d === t);
// console.log(5 != "4");
// console.log(5 != "5");
// console.log(5 !== 4);
// console.log(5 !== "5");
// console.log(5 < 4);
// console.log(6 > "5");
// console.log(6 >= 5);
// console.log(5 <= 5);


// const userRole = 1;
// const adminRole = 2;
// const productPrice = 100;

// const ivanRole = userRole;
// const ivanBalance = 300;

// const result = ivanRole === adminRole || ivanBalance >= productPrice;

// console.log(result);

// const name = 0 || console.log("Hello world!");

// console.log(name);

// const defaultUserName = null;
// const ivanName = 100;

// const authorName = ivanName || console.log("Test") || "Author";

// console.log(authorName);

// const productStockPrice = 99;
// const defaulProductPrice = 150;
// const adminPrice = 0;

// const productPrice = adminPrice ?? productStockPrice ?? defaulProductPrice ?? 100;

// console.log("productPrice", productPrice);


// let productTitle = "Навушники";

// productTitle = productTitle || "Назва товару";
// productTitle ||= "Назва товару";
// console.log("productTitle", productTitle);

// let a = 11;
// let b = 12;

// console.log(a, a.toString(2) );
// console.log(b, b.toString(2) );
// let c = a ^ b;

// console.log(c, c.toString(2) );

// let freeTea = 0b00001;

// freeTea = freeTea << 1;

// console.log(freeTea.toString(2));

// freeTea = freeTea << 1;

// console.log(freeTea.toString(2));

// freeTea = freeTea << 1;

// console.log(freeTea.toString(2));

// freeTea = freeTea << 1;

// console.log(freeTea.toString(2));

// console.log(freeTea === 0b10000);


// const a = 0b0001;
// const b = 0b0010;
// const c = 0b0100;

// let settings = 0b0000;

// settings |= a;


// settings |= b;


// console.log((settings & c) === 0b0000);


// // Світ 
// let productName = "Мікрофон";
// let productDefault = "Назва товару";

// let newProductName = "Мікрофон 3000";
// let userRole = "user";

// let updateProductName = userRole === "admin" ? newProductName : productName;

// let test2 = "test2";

// console.log(updateProductName);

// // Україна
// {
//     let test = "test";
//     test = productName;
//     console.log(test);

//     // Odesa
//     {
//         let info = "Hello world";
//         info = `${info} ${test}`
//     }

//     // Kyiv

//     {
//         let info = "Hello world";
//         info = `${info} ${test}`
//     }
// }

// // Польща
// {
//     const test2 = "Hello";
//     console.log(test2);
// }


// const CUSTON_NAME = "My robot";
// const MODE = 2;
// const ROOM = 'Вітальня';

// const COMAND = 'change name';

// if (COMAND === "change name") {
//     const name = CUSTON_NAME || "Robot v134t1";
//     console.log(`Start ${name}`);
// }

// if (COMAND === "work") {
//     const room = ROOM;
//     const mode = MODE;
//     console.log(`Mode: ${mode}; Прибираю кімнату: ${room}`);
// }


// const login = "user";
// const password = "123qwe12331";
// const isAdmin = true;
// const isLoggedIn = true;

// if (isLoggedIn) {
//     if (isAdmin) {
//         console.log("Переходимо на сторінку/admin");
//     }

//     if (!isAdmin) {
//         console.log("Переходимо на сторінку/home");
//     }
// }

// if (!isLoggedIn) {
//     if (login && password) {
//         console.log("Token:", 12305312545433125);
    
//         if (isAdmin) {
//             console.log("Переходимо на сторінку/admin");
//         }
    
//         if (!isAdmin) {
//             console.log("Переходимо на сторінку/home");
//         }
//     }
// }



// const login = "user";
// const password = "123qwe12331";
// const isAdmin = true;
// const isLoggedIn = true;

// if (isLoggedIn) {
//     if (isAdmin) {
//         console.log("Переходимо на сторінку/admin");
//     } else if (login === "demo") {
//         console/login("Переходимо на сторінку/demo");
//     } else {
//         console.log("Переходимо на сторінку/home");
//     }
// } else {
//     if (login && password) {
//         console.log("Token:", 12305312545433125);
    
//         if (isAdmin) {
//             console.log("Переходимо на сторінку/admin");
//         } else {
//             console.log("Переходимо на сторінку/home");
//         }
//     }
// }


// const price = 100;
// const userCashback = true;

// let cashbackLevel = 4;
// let totalPrice = null;
// let cashbackAmount = null;


// if (price < 100) {
//     console.log("Кешбек система доступна для товарів з ціною від 100 грн");
//     cashbackAmount = 0;
// } else {
//     if (cashbackLevel > 0) {
//         cashbackAmount = price * (cashbackLevel * 0.01);
//     }

//     cashbackLevel++;

//     if (userCashback > 0 && userCashback) {
//         totalPrice = price - cashbackAmount;
//     }
// }

// console.log(totalPrice);


// const buttonType = 'primary';

// if (buttonType === "primary") {
//     console.log("primary button");
// } else if (buttonType === "secondary") {
//     console.log("secondery button");
// } else if (buttonType === "basic") {
//     console.log("basic button");
// } else {
//     console.log("default button");
// }

// switch (buttonType) {
//     case "primary":
//         console.log("primary");
//         break;

//     case "secondery":
//         console.log("secondery");
//         break;  
        
//         default:
//             console.log("default button");
// }


// let count = 0;
// let isFast = true;


// while (count < 5) {
//     let a = 1;
//     console.log("Hello world", a);

//     if (isFast && count >= 3) {
//         count = 5;
//     } else {
//         count++;
//     }
// }

// const PRODUCT_AMOUNT = 6;

// let discountAmount = 0;
// let productCount = 0;

// while (productCount < PRODUCT_AMOUNT) {
//     productCount++;

//     if (productCount <= 3) {
//         discountAmount +=1;
//     } else if (productCount > 3 && productCount <= 5) {
//         discountAmount += 1.5;
//     } else if (productCount > 5 && productCount <= 8) {
//         discountAmount += 2;
//     } else if (productCount > 8) {
//         discountAmount += 2.5;
//     }

//     console.log(productCount, discountAmount);
// }

// console.log("Знижка:", discountAmount, "%");

// let sum = 0;
// let count = 0;

// do {
//     sum += count;
//     count++;
//     console.log(count, sum);
// } while (count <= 5);

// let start = 0;
// let goal = 100;

// let step = 0;

// let set = 8;
// let rest = 10;

// do {
//     if (step === 0) {
//         console.log("Початок тренування");
//     }

//     start++;
//     step++;

//     if (step === goal || start === goal) {
//         console.log("Кінець тренування");
//     }

//     if (step % rest === 0) {
//         console.log(`Зробить перерву`);
//         continue;
//     }

   
//     if (step % set === 0) {
//         console.log(`Ви зробили ${step / set}  сет`);
//     }

//     if (step === goal / 2) {
//         console.log(`Ви зробили половину тренування`);
//     }

//     console.log("Поточний прогрес", step);

// } while ( step < goal && start < goal);


// main: for (let i = 0, j = 5; i <= j; i++) {
//     console.log("Test", i, j);
//     break main;
// }

// let age = 25;
// let hasExp = true;
// let hasEdu = false;

// form: {
//     if (age >= 18) {
//         if (hasExp) {
//             if (hasEdu) {
//                 console.log("Ви підходите");
//                 break form;
//             }
//             if (!hasEdu) {
//                 console.log("Нема освіти");
//             }
//         }

//         if (!hasExp) {
//             console.log('Ви не підходите. Нема досвіду');
//         }
//     }

//     if (age < 18) {
//         console.log("Ви не підходите. Маленький вік");
//     }
// }

// table: for (let i = 1; i < 10; i++) {
//     if (i === 1) {
//         continue;
//     }

//     console.log(`Число ${i} ===========================`);
//     for (let j = 1; j < 10; j++) {
//         if (j === 1) {
//             continue;
//         }

//         console.log(`${i} * ${j} = ${i * j}`);
//     }
// }
// function calcSpace (amount, unit = "px") {
    
//    return `${amount * 4}${unit}`
// }



// console.log(calcSpace(5, "px"));

// function playTrackById(trackId) {
//     //отримати файл пісні і ії запустити
// }

// function play(trackName, tracId) {
//     console.log(`Запускаємо ${trackName}`);

//     playTrackById(trackId);
// }

// function end(oldTrackName, newTrackName) {
//     console.log(`Завершили грати ${oldTrackName}`);
//     console.log(`Наступний трек ${newTrackName}`);
// }

// function pausePlay(currentTrackName) {
//     console.log(`Трек ${currentTrackName} на паузі`);

//     reloadDataTrack();

//     play();
// }

// function reloadDataTrack(amount) {
//     if(amount <= 0) {
//         console.log("Дані оновленні вказану кількість разів");
//     } else {
//         console.log("Повторне оновлення");
//         reloadDataTrack(amount - 1);
//     }
// }

// reloadDataTrack(5);


// function pauseStopByTrack(trackName) {
//     let originTrackname = trackName;

//     return function pauseStop() {
//     console.log(`Трек ${originTrackname} на паузі`);
// }
// }

// const pauseStop = pauseStopByTrack("IT - Hello world");

// pauseStop();


// const runComand = function(command, errorFn) {
//     const result = command();

//     if(!result) {
//         return errorFn()
//     }
// }

// runComand(
//     () => {
//     console.log("Запуск команд");

//     return 1 - 1;
// },
//     () => console.log("Помилка")

// );


// const testFunc = () => {};

// function playTrackById(trackId) {
//     //отримати файл пісні і ії запустити
// }

// function stopTrackById(trackId) {
//     //отримати файл пісні і ії запустити
//     console.log(`отримати файл пісні з ID ${trackId} і ії поставити на`);
// }

// function play(trackName, tracId) {
//     console.log(`Запускаємо ${trackName}`);

//     playTrackById(trackId);
// }

// function end(oldTrackName, newTrackName) {
//     console.log(`Завершили грати ${oldTrackName}`);
//     console.log(`Наступний трек ${newTrackName}`);
// }

// function pauseStopByTrack(trackName, trackId) {
//     let isPause = null;
//     return () => {
//         if(isPause == true) {
//             return;
//         }
//         // let oldTrackName = null;
//         // let oldTrackId = null;


//         stopTrackById(trackId);
//         console.log(`Трек ${trackName} на паузі`);
//         isPause = true;
//     };
// }

// const pauseStop = pauseStopByTrack("IT - Console log");

// pauseStop();

// const memoCalcSpace = (oldAmount = null, oldUnit = null, oldResult = null) => {
//     return (amount, unit = "px") => {
//         if(oldAmount === amount && unit === oldUnit) {
//             console.log("Memo");
//             return oldResult;
//         }

//         oldResult = `${amount * 4}${unit}`;
//         oldAmount = amount;
//         oldUnit = unit;

//         return oldResult;
//     };
// };

// const calcSpace = memoCalcSpace();

// console.log(calcSpace(4));
// console.log(calcSpace(4));

// const getSpaceFromDesign = (componentName) => {
//     switch (componentName) {
//         case 'button':
//             return 4;
//     }
// }
// const isMobale = true;

// const amount = getSpaceFromDesign("button");
// const amountMobile = isMobale ? amount / 2 : amount;
// const amountInPx = calcSpace(amount);


// const calcSpaceFromDesign = (componentName) => {
//     return calcSpace(getSpaceFromDesign(componentName));
// };

// console.log("//////");

// console.log(calcSpaceFromDesign("button"));


//Home work


// //Задача 1: Напишіть функцію, яка перевіряє, чи є задане число парним.
// //Використовуйте оператор залишку від ділення для визначення, чи є число парним.

// function isEvenNumber(num) {
//     let result = num % 2;
//     if(result === 0) {
//         return true;
//     } else {
//         return false;
//     }
    
//     // Перевірити, чи число num є парним
//     // Повернути результат перевірки (true або false) як результат функції
//   }
  
//   console.log("Завдання 1 ====================================");
//   console.log("isEvenNumber(10)", isEvenNumber(10)); // Виведе: true
//   console.log("isEvenNumber(7)", isEvenNumber(7)); // Виведе: false
  
//   // Задача 2: Напишіть функцію, яка обчислює суму чисел від 1 до заданого числа. Використовуйте цикл для послідовного додавання чисел.
  
//   function calculateSum(n) {
//     let sum = 0;
  
//     for (let i = 1; i <= n; i++) {
//             if (i === 0) {
//                 continue;
//             }
//             sum += i;
//     }
//     return sum;
//     // Ініціалізувати змінну sum зі значенням 0
//     // Запустити цикл для змінної i від 1 до n
//     // Додати поточне значення i до змінної sum
//     // Повернути значення змінної sum
//   }
  
  
//   console.log("Завдання 2 ====================================");
//   console.log("calculateSum(5)", calculateSum(5)); // Виведе: 15
//   console.log("calculateSum(10)", calculateSum(10)); // Виведе: 55
  
//   // Задача 3: Напишіть функцію, яка перевіряє, чи є задане число простим(ділиться без остачі тільки на себе та на 1). Використовуйте цикл для перевірки ділення числа на всі можливі дільники.
  
//   function isPrimeNumber(num) {
//       if(num <= 1) {
//         console.log(false);
//       } else if(num > 1) {    
//           for (let i = 2; i < num; i++) {
//           num = num % i;   
//           if(num === 0) {
            
//         return false;
        
//         } if(num !== 0) {
//           return true;
//         };
//         i += 1;
//       };
//       }
//     // Якщо число num менше або дорівнює 1, то воно не є простим, тому повертаємо false
//     // В іншому випадку продовжуємо перевірку
//     // Запускаємо цикл для змінної i від 2 до num-1
//     // Перевіряємо, чи num ділиться націло на поточне значення i
//     // Якщо так, то num не є простим, тому повертаємо false
//     // Якщо під час циклу не знайдено дільників, то num є простим, тому повертаємо true
//   }
  
//   console.log("Завдання 3 ====================================");
//   console.log("isPrimeNumber(7)", isPrimeNumber(7)); // Виведе: true
//   console.log("isPrimeNumber(10)", isPrimeNumber(10)); // Виведе: false
  
//   // Задача 4: Напишіть функцію, яка перевіряє, чи є задане число додатним. Використовуйте умовний оператор для перевірки числа.
  
//   function isPositiveNumber(num) {
  
//       if(num > 0) {
//           return true;
//       } if(num < 0) {
//           return false;
//       };
//       return num;
//     // Перевіряємо, чи число num більше 0
//     // Якщо так, то num є позитивним, тому повертаємо true
//     // В іншому випадку, якщо num менше або дорівнює 0, то num не є позитивним, тому повертаємо false
//   }
  
//   console.log("Завдання 4 ====================================");
//   console.log("isPositiveNumber(5)", isPositiveNumber(5)); // Виведе: true
//   console.log("isPositiveNumber(-2)", isPositiveNumber(-2)); // Виведе: false
  
//   // Задача 5: Напишіть функцію, яка перевіряє, чи є заданий рядок пустим. Використовуйте умовний оператор та властивість довжини рядка для перевірки.
  
//   function isEmptyString(str) {
//       if(str === '') {
//           return true;
//       } if(str !== '') {
//           return false;
//       };
//       return str;
//     // Перевіряємо, чи рядок str дорівнює пустому рядку ('')
//     // Якщо так, то str є порожнім рядком, тому повертаємо true
//     // В іншому випадку, якщо str містить хоча б один символ, то str не є порожнім рядком, тому повертаємо false
//   }
  
//   console.log("Завдання 5 ====================================");
//   console.log('isEmptyString("")', isEmptyString("")); // Виведе: true
//   console.log('isEmptyString("Hello")', isEmptyString("Hello")); // Виведе: false
  
//   // Задача 6: Напишіть функцію checkDataType, яка приймає параметр value і перевіряє його тип даних. Функція повинна використовувати оператор typeof для визначення типу значення.
//   // Виведіть в консоль повідомлення з результатом перевірки типу, наприклад, Значення "hello" має тип "string"
  
//   function checkDataType(value) {
//       for (let i = 1; i < 5; i++) {
//           return typeof value;
//           i +=1;
//       };
//       return value;
//     // Отримуємо тип значення value за допомогою оператора typeof
//     // Виводимо у консоль повідомлення, яке містить значення value та його тип
//     // Повертаємо тип значення value
//   }
  
//   // Приклади виклику функції
//   console.log("Завдання 6 ====================================");
//   console.log("checkDataType(42)", checkDataType(42)); // Виведе: Значення "42" має тип "number".
//   console.log("checkDataType('Hello')", checkDataType("Hello")); // Виведе: Значення "Hello" має тип "string".
//   console.log("checkDataType(true)", checkDataType(true)); // Виведе: Значення "true" має тип "boolean".
//   console.log("checkDataType(undefined)", checkDataType(undefined)); // Виведе: Значення "undefined" має тип "undefined".
  
//   // Задача 7: Напишіть функцію findMax, яка приймає два числа num1 і num2 і повертає більше з них. Використовуйте умовний оператор if та оператор порівняння для визначення більшого числа.
  
//   function findMax(num1, num2) {
//        if(num1 > num2) {
//           return num1;
//       } if(num1 < num2) {
//           return num2;
//       } if(num1 === num2) {
//           return num2;
//       };
//     // Порівнюємо num1 та num2
//     // Якщо num1 більше num2, то num1 є максимальним, тому повертаємо num1
//     // В іншому випадку (якщо num2 більше або дорівнює num1), то num2 є максимальним, тому повертаємо num2
//   }
  
//   // Приклади виклику функції
//   console.log("Завдання 7 ====================================");
//   console.log("findMax(10, 5)", findMax(10, 5)); // Виведе: 10
//   console.log("findMax(8,12)", findMax(8, 12)); // Виведе: 12
//   console.log("findMax(7, 7)", findMax(7, 7)); // Виведе: 7
  
//   // Задача 8: Напишіть функцію getUserStatus, яка приймає вік користувача age і повертає рядок, що вказує на його статус.
//   // Якщо вік менше 18 років, функція повертає "Неповнолітній". Якщо вік від 18 до 65 років, функція повертає "Дорослий". Якщо вік більше або дорівнює 65 рокам, функція повертає "Пенсіонер".
//   // Використовуйте умовний оператор if, else if та оператори порівняння для визначення статусу користувача.
  
//   function getUserStatus(age) {
//        if(age < 18) {
//           return "Неповнолітній";
//       } if(age > 18 && age < 65) {
//           return "Дорослий";
//       } if(age >= 65) {
//           return "Пенсіонер";
//       };
//     // Перевіряємо вік за допомогою умовних операторів
//     // Якщо age менше 18, то користувач є "Неповнолітнім"
//     // Якщо age більше або дорівнює 18 і менше 65, то користувач є "Дорослим"
//     // В іншому випадку (якщо age більше або дорівнює 65), то користувач є "Пенсіонером"
//   }
  
//   // Приклади виклику функції
//   console.log("Завдання 8 ====================================");
//   console.log("getUserStatus(15)", getUserStatus(15)); // Виведе: "Неповнолітній"
//   console.log("getUserStatus(25)", getUserStatus(25)); // Виведе: "Дорослий"
//   console.log("getUserStatus(70)", getUserStatus(70)); // Виведе: "Пенсіонер"
  
//   // Задача 9: Напишіть функцію getDayOfWeek, яка приймає номер дня тижня dayNumber (1-7) і повертає рядок, що відповідає цьому дню тижня.
//   // Використовуйте конструкцію switch case для визначення дня тижня за його номером.
  
//   function getDayOfWeek(dayNumber) {
//       switch (dayNumber) {
//               case 1:
//                   day = "Понеділок";
//                   return day;
//               break;
//               case 2:
//                   day = "Вівторок";
//                   return day;
//               break;
//               case 3:
//                   day = "Середа";
//                   return day;
//               break;
//               case 4:
//                   day = "Четвер";
//                   return day;
//               break;
//               case 5:
//                   day = "П'ятниця";
//                   return day;
//               break;
//               case 6:
//                   day = "Субота";
//                   return day;
//               break;
//               case 7:
//                   day = "Неділя";
//                   return day;
//               break;
//               default:
//                 day = "Невірний номер дня";
//                 return day;
             
//       }
//     // Використовуємо оператор switch для знаходження назви дня тижня залежно від dayNumber
//     // В кожному випадку (case) перевіряємо значення dayNumber і присвоюємо змінній day відповідну назву дня тижня
//     // Якщо dayNumber = 1, то day = "Понеділок"
//     // Якщо dayNumber = 2, то day = "Вівторок"
//     // Якщо dayNumber = 3, то day = "Середа"
//     // Якщо dayNumber = 4, то day = "Четвер"
//     // Якщо dayNumber = 5, то day = "П'ятниця"
//     // Якщо dayNumber = 6, то day = "Субота"
//     // Якщо dayNumber = 7, то day = "Неділя"
//     // Якщо значення dayNumber не співпадає з жодним з випадків, то day = "Невірний номер дня"
//     // Повертаємо назву дня тижня, яку зберегли у змінній day
//   }
  
//   // Приклади виклику функції
//   console.log("Завдання 9 ====================================");
//   console.log("getDayOfWeek(1)", getDayOfWeek(1)); // Виведе: "Понеділок"
//   console.log("getDayOfWeek(3)", getDayOfWeek(3)); // Виведе: "Середа"
//   console.log("getDayOfWeek(6)", getDayOfWeek(6)); // Виведе: "Субота"
//   console.log("getDayOfWeek(8)", getDayOfWeek(8)); // Виведе: "Невірний номер дня"
  
//   // Задача 10: Напишіть функцію getVariableType, яка приймає змінну variable і повертає рядок, що відповідає типу цієї змінної. Використовуйте тернарний оператор для визначення типу змінної.
  
//   function getVariableType(variable) {
//             return (variable === 10) ? 'Це число'
//             : (variable === 'Hello') ? 'Це рядок'
//             : (variable === true) ? 'Це булеве значення'
//             : 'Це інший тип'
//     // Отримуємо тип змінної variable за допомогою оператора typeof
//     // Встановлюємо відповідне повідомлення залежно від отриманого типу
//     // Якщо тип змінної - number, то повідомлення = "Це число"
//     // Якщо тип змінної - string, то повідомлення = "Це рядок"
//     // Якщо тип змінної - boolean, то повідомлення = "Це булеве значення"
//     // В іншому випадку (якщо тип змінної не входить у попередні категорії), то повідомлення = "Це інший тип"
//     // Повертаємо встановлене повідомлення як результат функції
//   }
  
//   // Приклади виклику функції
//   console.log("Завдання 10 ====================================");
//   console.log("getVariableType(10)", getVariableType(10)); // Виведе: "Це число"
//   console.log('getVariableType("Hello")', getVariableType("Hello")); // Виведе: "Це рядок"
//   console.log("getVariableType(true)", getVariableType(true)); // Виведе: "Це булеве значення"
//   console.log("getVariableType([1, 2, 3])", getVariableType([1, 2, 3])); // Виведе: "Це інший тип"
  
//   // Задача 11:Напишіть рекурсивну функцію, яка обчислює суму чисел від 1 до заданого числа.
//   // Факторіал числа - це добуток всіх цілих чисел від 1 до цього числа. Наприклад, факторіал 5 (записується як 5!) дорівнює 1*2*3*4*5 = 120.
  
//   function factorial(n) {
//     if(n <= 1) {
//       return 1;
//   } else {
//       return n * factorial(n - 1);
//   }
//     // Якщо n дорівнює 0 або 1, повертаємо 1, оскільки факторіал 0 і 1 завжди дорівнює 1.
//     // Якщо n більше за 1, ми множимо n на результат виклику тієї самої функції з n-1.
//   }
  
//   console.log("Завдання 11 ====================================");
//   console.log("factorial(5)", factorial(5)); // Виведе: 120
//   console.log("factorial(10)", factorial(10)); // Виведе: 3628800
  
//   // Задача 12: створити функцію `makeAdder`, яка приймає число `x` і повертає нову функцію, що приймає число `y` і повертає суму `x` та `y`.
//   function makeAdder(x) {
//     return (y) => `${x + y}`
//     // Вертаємо нову функцію, яка приймає `y`
//     // Сумуємо `x` та `y` і повертаємо результат
//   }
//       const getAdder = makeAdder(5);
//   // Створюємо змінну getAdder якій присвоємо результат виконання функції makeAdder з аргументом 5
  
//   console.log("Завдання 12 ====================================");
//   // Розкоментуйте після виконаня завдання
//   console.log("getAdder(10)", getAdder(10)); // Виведе: 15
//   console.log("makeAdder(5)(10)", makeAdder(5)(10)); // Виведе: 15
  
//   // Задача 13: Задача: створити стрілкову функцію, яка приймає два числа і повертає їх добуток.
//   let multiply = (x, y) => {
//     return `${x * y}`
//     // Повертаємо добуток x та y
//   };
  
//   console.log("Завдання 13 ====================================");
//   console.log("multiply(5, 3)", multiply(5, 3)); // Виведе: 15
  
//   // Задача 14: Задача: створити каріровану функцію `divide`, яка може бути викликана як `divide(x)(y)`, щоб отримати результат ділення `x` на `y`.
  
//   function divide(x) {
//     return (y) => `${x / y}`;
  
//     // Повертаємо нову функцію, яка приймає `y`
//     // Ділимо `x` на `y` і повертаємо результат
//   }
//     const getDivider = divide(2);
  
//   // Створюємо змінну getDivider якій присвоємо результат виконання функції divide з аргументом 2
  
//   console.log("Завдання 14 ====================================");
//   // Розкоментуйте після виконаня завдання
//   console.log("getDivider(10)", getDivider(10)); // Виведе: 0.2
//   console.log("divide(2)(10)", divide(2)(10)); // Виведе: 0.2
  
//   // Задача 15: Створити мемоізовану версію функції, яка обчислює площу квадрата на основі довжини його сторони.
  
//   function memoizedArea() {
//     let prevSide = null;
//     let prevResult = null;
//     return (side) => {
//         if(side === prevSide) {
//             return prevResult;
//         }
//         const result = `${side * side}`;
  
//         prevSide = side;
//         prevResult = result;
  
//         return result;
//     };
//     // Ініціалізуємо примітивні змінні для зберігання попереднього аргументу та результату
//     // Повертаємо функцію яка приймає аргумент side - сторону квадрата
//     // Перевіряємо, чи є введена сторона такою ж, як і в попередньому виклику
//     // Виводимо повідомлення Fetching from cache
//     // Повертаємо попереднє значення
//     // Якщо сторона відрізняється від попередньої, обчислюємо площу та зберігаємо результат та аргумент для майбутнього використання
//     // Виводимо повідомлення Calculating result
//     // Розраховуємо площу
//     // prevSide присвоюємо сторону квадрата
//     // prevResult просвоюємо площу квадрата
//     // Повертаємо площу
//   }
//   const squareArea = memoizedArea();
  
//   //Створюємо змінну squareArea якій присвоємо результат виконання функції memoizedArea
  
//   console.log("Завдання 15 ====================================");
//   // Розкоментуйте після виконаня завдання
//   console.log("squareArea(5)", squareArea(5)); // Обчислює і виводить 25
//   console.log("squareArea(5)", squareArea(5)); // Виводить "Fetching from cache" і виводить 25 з кешу
//   console.log("squareArea(6)", squareArea(6)); // Обчислює і виводить 36
//   console.log("squareArea(6)", squareArea(6)); // Виводить "Fetching from cache" і виводить 36 з кешу
  
//   // Задача 16: Задача: створити функціональний вираз для обчислення кубу числа.
//   let cube = function (n) {
//     return n**3;
//     // Повертаємо n в кубі
//   };
  
//   console.log("Завдання 16 ====================================");
//   console.log("cube(3)", cube(3)); // Виведе: 27
  
//   // Задача 17: створити дві функції, одна з яких збільшує число на 1, а інша - множить число на 2, а потім створити композицію цих функцій.
//   function increment(n) {
//     return n + 1;
//     // Повертаємо n + 1
//   }
  
//   function double(n) {
//     return n * 2;
//     // Повертаємо n*2
//   }
  
//   function compose(increment, double) {
//     return compose = (n) => double(increment(n));
//     // Повертаємо нову функцію, яка приймає аргумент n
//     // Повертаємо func2, в яку передаємо func1 з аргументом n
//   }
//   const createCompose = compose(increment, double)
//   // Створюємо змінну createCompose якій присвоємо результат виконання функції compose з аргументами increment та double
//   console.log("Завдання 17 ====================================");
//   // Розкоментуйте після виконаня завдання
//   console.log("createCompose(5)", createCompose(5)); // Виведе: 12 (5+1=6, 6*2=12)



// урок 11

// const code = "(5 + 5) % 5 === 0";
// console.log(eval(code))

// function calcScreenRation(w, h) {
//   return w / h;
// }
//   console.log(calcScreenRation(1920, 1080));

//   function calcScreenRation(w, h) {
//     let result = w / h;

//     return isFinite(result) ? result : "Error";
//   }
//     console.log(calcScreenRation(1920, 1080));


//     function calcScreenRation(w, h) {
//       let result = w / h;

//       if(isNaN(result)) {
//           return 'Error';
//       } else if (!isFinite(result)) {
//         return 'is Infinity';
//       } else {
//         return result;
//       }
//     }
//       console.log(calcScreenRation(1920, 1080));



//       const num = parseInt ("10");

//       console.log(10 + num);


//       const a = parseInt("1.55555")
//       console.log(a)

//       const b = parseFloat("1.55555")

//       console.log(b)



// URI

// const domain = "it-brains.com.ua";

// function redirectToPath (path) {
//   const link = `https://${domain}/${path}`;
//   console.log(link)
// }

// redirectToPath("/product/35367/info")


// const domain = "it-brains.com.ua";

// function redirectToPath (path) {
//   const link = encodeURI(`https://${domain}/${path}`);
//   console.log(link)
// }

// redirectToPath("/product/Микрофон рожевий/info")

// const domain = "it-brains.com.ua";

// function redirectToPath (path) {
//   path = encodeURIComponent(path);

//   const link = `https://${domain}/${path}`;
//   console.log(link)
// }

// redirectToPath("/product/Микрофон рожевий/info")



// const domain = "it-brains.com.ua";

// function redirectToPath (path) {
//   const link = encodeURI(`https://${domain}/${path}`);
//   console.log(link);
//   return link;
// }

// const URI = "https://it-brains.com.ua/%2Fproduct%2F%D0%9C%D0%B8%D0%BA%D1%80%D0%BE%D1%84%D0%BE%D0%BD%20%D1%80%D0%BE%D0%B6%D0%B5%D0%B2%D0%B8%D0%B9%2Finfo";


// function getUrl(urlInURI) {
//       urlInURI = decodeURI(urlInURI);
//       console.log(urlInURI);

//       return urlInURI;
// }

// const path = "product/Микрофон рожевий/info";
// const link = `https://${domain}/${path}`;

// // URI
// const link1 = redirectToPath(path);    

// // Decode URI
// const link2 = getUrl(link1);

// console.log(link === link2);

// Home work 2

//Задача 1: Напишіть функцію, яка буде виконувати js код який передали в функцію через аргумент в форматі тексту

// Створюємо функцію з назвою calculateExpression, яка приймає один аргумент expression
// function calculateExpression(expression) {
//   if(expression !== String) {
//       return eval(expression);
//   } else {
//     return "Argument is not a string";
//   }
  
//   //Преревіряємо чи аргумент є рядком
//   //Якщо так повертаємо виконананий код
//   // Якщо ні повертаємо текст "Argument is not a string"
// }

// console.log("Завдання 1 ====================================");
// console.log(
//   'calculateExpression("3 + 5 * 2")',
//   calculateExpression("3 + 5 * 2")
// ); // Виведе 13

// // Задача 2: Напишіть функцію, яка приймає рядок та повертає число з цього рядка або повідомлення про помилку.

// // Створюємо функцію з назвою getNumberFromString, яка приймає один аргумент s
// function getNumberFromString(s) {
//   if(parseFloat(s)) {
//     return parseFloat(s);
//   } else {
//     return "Couldn't extract an integer from the provided string.";
//   }
//   // Використовуємо функцію parseFloat для того, щоб спробувати отримати число з рядка
//   // Перевіряємо, чи є отримане значення числом за допомогою isNaN
//   // Якщо значення не є числом, повертаємо текст "Couldn't extract a number from the provided string."
//   // Якщо значення є числом, повертаємо його
// }

// // Виводимо результати виклику функції
// console.log("Завдання 2 ====================================");
// console.log(
//   'getNumberFromString("100.5 apples")',
//   getNumberFromString("100.5 apples")
// ); // Виведе 100.5
// console.log(
//   'getNumberFromString("No numbers here")',
//   getNumberFromString("No numbers here")
// ); // Виведе повідомлення про помилку

// // Задача 3: Напишіть функцію, яка приймає рядок та повертає ціле число з цього рядка або повідомлення про помилку.

// // Створюємо функцію з назвою getIntegerFromString, яка приймає один аргумент s
// function getIntegerFromString(s) {
//   if(parseInt(s)) {
//     return parseInt(s);
//   } else {
//     return "Couldn't extract an integer from the provided string.";
//   }
//   // Використовуємо функцію parseInt для того, щоб спробувати отримати ціле число з рядка
//   // Перевіряємо, чи є отримане значення числом за допомогою isNaN
//   // Якщо значення не є числом, повертаємо текст "Couldn't extract an integer from the provided string."
//   // Якщо значення є числом, повертаємо його
// }

// // Виводимо результати виклику функції
// console.log("Завдання 3 ====================================");
// console.log(
//   'getIntegerFromString("100 apples")',
//   getIntegerFromString("100 apples")
// ); // Виведе 100
// console.log(
//   'getIntegerFromString("No integers here")',
//   getIntegerFromString("No integers here")
// ); // Виведе повідомлення про помилку

// // Задача 4: Напишіть функцію, яка перевіряє, чи є введене число скінченним.

// // Створюємо функцію з назвою isNumberFinite, яка приймає один аргумент - num
// function isNumberFinite(num) {
//   if(isFinite(num)) {
//     return (true, "The number is finite.");
//   } else {
//     return (false, "The number is not finite.");
//   }
//   // Використовуємо вбудовану функцію isFinite, щоб перевірити, чи є введене число скінченним.
//   // Ця функція повертає true, якщо число є скінченним, і false, якщо число є нескінченним або не є числом.
//   // За допомогою оператора if перевіряємо, чи є число скінченним.
//   // Якщо число є скінченним, повертаємо текст "The number is finite.".
//   // Якщо число не є скінченним, повертаємо текст "The number is not finite.".
// }

// // Виконуємо функцію з різними вхідними даними і виводимо результат.
// console.log("Завдання 4 ====================================");
// console.log("isNumberFinite(100)", isNumberFinite(100)); // Виведе "The number is finite."
// console.log("isNumberFinite(Infinity)", isNumberFinite(Infinity)); // Виведе "The number is not finite."

// // Задача 5: Напишіть функцію, яка перевіряє, чи є введене значення NaN.

// // Створюємо функцію з назвою isValueNaN, яка приймає один аргумент - value
// function isValueNaN(value) {
//   if(isNaN(value)) {
//     return ((true), "The value is NaN.");
//   } else {
//     return ((false), "The value is not NaN.");
//   }
//   // Використовуємо вбудовану функцію isNaN, щоб перевірити, чи є введене значення NaN.
//   // Ця функція повертає true, якщо значення є NaN, і false, якщо значення не є NaN.
//   // За допомогою оператора if перевіряємо, чи є значення NaN.
//   // Якщо значення є NaN, повертаємо текст "The value is NaN.".
//   // Якщо значення не є NaN, повертаємо текст  "The value is not NaN.".
// }

// // Виконуємо функцію з різними вхідними даними і виводимо результат.
// console.log("Завдання 5 ====================================");
// console.log("isValueNaN(NaN)", isValueNaN(NaN)); // Виведе "The value is NaN."
// console.log("isValueNaN(100)", isValueNaN(100)); // Виведе "The value is not NaN."

// // Задача 6: Напишіть функцію, яка створює об'єкт URL.

// // Створюємо функцію з назвою createURLObject, яка приймає один аргумент - urlStr
// function createURLObject(urlStr) {
//   encodeURL(urlStr);
//   return (urlStr);
//   // Використовуємо вбудований конструктор URL, щоб створити новий об'єкт URL з введеного рядка.
//   // Повертаємо створений об'єкт URL.
// }

// // Виконуємо функцію з вхідними даними і виводимо результат.
// console.log("Завдання 6 ====================================");
// console.log(
//   'createURLObject("https://example.com")',
//   createURLObject("https://example.com")
// ); // Виведе URL об'єкт

// // Задача 7: Напишіть функцію, яка кодує компонент URL.

// // Створюємо функцію з назвою encodeURLComponent, яка приймає один аргумент - urlComponent
// function codURLComponentt(urlComponent) {
//   return encodeURIComponent(urlComponent);
//   // Використовуємо вбудовану функцію encodeURIComponent, щоб закодувати введений компонент URL.
//   // Ця функція повертає закодований компонент URL, замінивши небезпечні символи на їх процентне кодування.
//   // Повертаємо закодований компонент URL.
// }

// // Виконуємо функцію з вхідними даними і виводимо результат.
// console.log("Завдання 7 ====================================");
// console.log(
//   'codURLComponentt("Hello World!")',
//   codURLComponentt("Hello World!")
// ); // Виведе "Hello%20World!"

// // Задача 8: Напишіть функцію, яка кодує URL.

// // Створюємо функцію з назвою encodeURL, яка приймає один аргумент - url
// function encodeURL(url) {
//   return encodeURI(url);
//   // Використовуємо вбудовану функцію encodeURI, щоб закодувати введений URL.
//   // Ця функція повертає закодований URL, замінивши небезпечні символи на їх процентне кодування.
//   // Повертаємо закодований URL.
// }

// // Виконуємо функцію з вхідними даними і виводимо результат.
// console.log("Завдання 8 ====================================");
// console.log(
//   'encodeURL("https://ex ample.com")',
//   encodeURL("https://ex ample.com")
// ); // Виведе "https://ex%20ample.com"

// // Задача 9: Напишіть функцію, яка декодує закодований компонент URL.

// // Створюємо функцію з назвою decodeURLComponent, яка приймає один аргумент - urlComponent
// function decodeURLComponent(urlComponent) {
//   return decodeURIComponent(urlComponent);
//   // Використовуємо вбудовану функцію decodeURIComponent, щоб декодувати введений закодований компонент URL.
//   // Ця функція повертає декодований компонент URL, замінивши процентне кодування символів на їх реальні значення.
//   // Повертаємо декодований компонент URL.
// }

// // Виконуємо функцію з вхідними даними і виводимо результат.
// console.log("Завдання 9 ====================================");
// console.log(
//   'decodeURLComponent("Hello%20World%21")',
//   decodeURLComponent("Hello%20World%21")
// ); // Виведе "Hello World!"

// // Задача 10: Напишіть функцію, яка декодує закодований URL.

// // Створюємо функцію з назвою decodeURL, яка приймає один аргумент - url
// function decodeURL(url) {
//   return decodeURI(url);
//   // Використовуємо вбудовану функцію decodeURI, щоб декодувати введений закодований URL.
//   // Ця функція повертає декодований URL, замінивши процентне кодування символів на їх реальні значення.
//   // Повертаємо декодований URL.
// }

// // Виконуємо функцію з вхідними даними і виводимо результат.
// console.log("Завдання 10 ====================================");
// console.log(
//   'decodeURL("https://ex%20ample.com")',
//   decodeURL("https://ex%20ample.com")
// ); // Виведе "https://ex ample.com"

// Lessone 12

// const a = 10;
// const b = Number(10);



// console.log(a === b);


// const a = 0.1;
// const b = 0.2;
// const c = 0.3;

// const d = a + b;

// console.log(d - c < Number.EPSILON && c - d < Number.EPSILON);
// console.log(Number.EPSILON);

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);


// function reviewNumber(num) {
//     console.log(num);
//     if(isNaN(num)) {
//         return console.log("Is Not a Number", num);
//     }
//     if(!num && num !== 0) {
//         return console.log("Bad number", num);
//     }
//     else if(!Number.isInteger(num)) {
//        return console.log("Дробове число", num);
//     }
//     return console.log(num);
// }
// reviewNumber(10.5);


// function reviewNumber(num) {
//     console.log(num);
//     if(isNaN(num)) {
//         return console.log("Is Not a Number", num);
//     }
//     if(!num && num !== 0) {
//         return console.log("Bad number", num);
//     }
//     else if(!Number.isSafeInteger(num)) {
//        return console.log("Небезпечне число", num);
//     }
//     return console.log(num);
// }
// reviewNumber(Number.MAX_SAFE_INTEGER + 10);
// const a1 = Number(10);
// const a2 = a1.toFixed();
// const a3 = a2.charAt();

// Number(10).toFixed().concat().charAt().charAt();


// const a1 = Number("1.0001");
// const a2 = parseInt("1000");

// console.log(a1, a2);


const a1 = 112.3456789;
const a2 = parseInt("1000", 2);

const a3 = parseFloat(a1.toFixed(4));
const a4 = parseFloat(a1.toPrecision(1));
const a5 = a1.toExponential(2);
const a6 = a2.toString();


console.log(a3);
console.log(a4);
console.log(a5);
console.log(a6);

