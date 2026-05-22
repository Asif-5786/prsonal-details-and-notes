
//************************ARRAY********************************************* */

// const [name1, address, ...details] = ['habsiguda', 'asif', 'sia', true];

// console.log(address);

// console.log(details);

// _____________________________________________________________________________________________________

// const bookIds = [1, 2, 3, 4, 5, 6];

// const bookId = 7;

// const hasBookId = bookIds.some((book) => book === bookId);


// console.log(hasBookId);

// ___________________________________________________________________________________________________________

// const myFunc = () => {
//     setTimeout(() => {
//         console.log('I want to become a front developer');
//     }, 2000)
// }

// myFunc();
//_________________________________________________________________________________________________________

// _____________________________________________________________________________________________________________

// let text = "";

// const student_1 = { fname: 'syed', lname: 'asif', age: 35 };

// for (let key in student_1) {
//     text += student_1[key] + ' ';
// }

// console.log(text);
// _____________________________________________________________________________________________________________

// const vegetables = ['potato', 'tomato', 'brinjal'];

// const fruits = ['mango', 'banana', 'papaya'];

// const grocery = vegetables.concat(fruits);

// console.log(grocery);

// _____________________________________________________________________________________________________________

// const qaData = {
//     unit1: { questionAnswer: [{ question: 'who are you', answer: 'i am asif ' }] },
//     unit2: { questionAnswer: [{ question: 'how old are you', answer: 'i am 35 years old' }] }
// }

// const data = [];

// for (const unitKey in qaData) {
//     if (qaData?.hasOwnProperty(unitKey)) {
//         const unit = qaData[unitKey];
//         if (unit?.questionAnswer) {
//             data.push(unit?.questionAnswer)
//         }
//     }
// }

// console.log(data);
// ___________________________________________________________________________________________________________


// const HtmlTagReturn = () => {
//     return "<div>Hello,World</div>"
// }

// console.log(HtmlTagReturn());
// _______________________________________________________________________________________________________

// _______________________________________________________________________________________________________


// const amount = [13, 45, 34, 67, 56, 78];

// const total = amount.reduce((accumulator, element) => {
//     return accumulator + element;
// }, 0);

// console.log(total);

// _______________________________________________________________________________________________________________________

// const a = 12;

// const b = 34;

// const sum = (item1, item2) => {
//     return item1 + item2 || 0;
// }

// console.log(sum(a, b))

// ________________________________________________________________________________________________________________________


// const cartItems = [{ id: 1, price: 34 }, { id: 2, price: 45 }];
// let sum = 0;
// const totalAmount = (array) => {
//     for (const item in array) {
//         sum = sum + array[item]?.price;
//     }
//     return sum;
// }

// console.log(totalAmount(cartItems));
// __________________________________________________________________________________________________________________________
// const cartItems = [{ id: 1, price: 34 }, { id: 2, price: 45 }];
// console.log(cartItems[0]?.rate ?? 'Price not available');

// ___________________________________________________________________________________________________________________________


// const cartItems = [{ id: 1, price: 34 }, { id: 2, price: 45 }];
// let sum = 0;
// const totalAmount = (array) => {
//     for (const item in array) {
//         sum = sum + array[item]?.rate || 0;
//     }
//     return sum;
// }

// console.log(totalAmount(cartItems));

// _______________________________________________________________________________________________________________

// const users = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 }
// ];

// const requiredResult = (items) => {
//     let user_Names = [];
//     for (const key in items) {
//         user_Names = [...user_Names, items[key].name];
//     }
//     return user_Names;
// }

// console.log(requiredResult(users));

// ____________________________________________________________________________________________________


// const duplicates = [1, 2, 2, 3, 4, 5, 1];

// const filteredData = duplicates.filter((value, index) => duplicates.indexOf(value) == index);

// console.log(filteredData);

// ______________________________________________________________________________________


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

// console.log(...numbers);


// const max_number = (arr) => {
//     return Math.max(...arr);
// }


// const maxNumber = max_number(numbers)

// console.log(maxNumber);

// __________________________________________________________________________________________________________________________

// function isPrime(num) {
//     if (num <= 1) return false;
//     for (let i = 2; i < Math.sqrt(num) + 1; i++) {
//         if (num % i == 0) return false;
//     }
//     return true;
// }

// console.log(isPrime(17))

// ____________________________________________________________________________________________________________________________

// const timeOutId = setTimeout(() => {
//     console.log('I am a front end developer')
// }, 2000)

// console.log(timeOutId);                                   //setTimeout returns a timeOutId

// ______________________________________________________________________________________________________________


// const timeOutId = setTimeout(() => {
//     console.log('i am a frontend developer');
// }, 2000);

// clearTimeout(timeOutId);

// _______________________________________________________________________________________________________________

// let x = 10;

// let y = 3;

// console.log(x / y);

// console.log(x++);
// // x++ is a post increment operator

// console.log(y--);

// // y-- is a post decrement operator

// console.log(x ** 3);

// console.log(x % y);
// _______________________________________________________________________________________________________________


// const x = 10;
// console.log(x++)
// =>Error:assignment to constant variable

// _____________________________________________________________________________________________________________

// The + can also be used to add(concatenate) strings
// The += assignment operator can also be used to add(concatenate) strings
// When used on strings, the + operator is called the concatenation operator

// _______________________________________________________________________________________________________________

// const x = "stm" + 5;

// console.log(x);

// console.log(typeof x);

// const y = 19.5;

// console.log(typeof y);

// const z = true;

// console.log(typeof z);

// const q = [1, 2, 3, 4, 55];

// console.log(typeof q);

// When adding a number and a string, JavaScript will treat the number as a string.
// In the first example, JavaScript treats 16 and 4 as numbers, until it reaches "Volvo".

// In the second example, since the first operand is a string, all operands are treated as strings.

// const a = 20 + 4 + 'stm';

// const b = 'stm' + 20 + 4;

// console.log(a, b, typeof a, typeof b);
// _________________________________________________________________________________________________________

// // JavaScript Types are Dynamic

// let x;       // Now x is undefined
// x = 5;       // Now x is a Number
// x = "John";  // Now x is a String

// __________________________________________________________________________________________________________

// const x = 3.1456;

// console.log(x);

// const y = 34.000;

// console.log(y);

// console.log(5 & 1);
// _________________________________________________________________________________________________________

// bitwise operator:

// 1.&: add
// 2.|: or
// 3. ~ not
// 4.^ xor
// 5.<<:left shift
// 6.>>:right shift
// 7.>>>:unsigned right shift

// _________________________________________________________________________________________________________________

// const jsonArray = [
//     { "id": 1, "name": "Alice", "score": 85 },
//     { "id": 2, "name": "Bob", "score": 90 },
//     { "id": 3, "name": "Charlie", "score": 88 }
// ];

// const filteredData = jsonArray.filter(item => item.score > 85);


// console.log(filteredData);


// const jsonData = { "user": { "name": "David" } };

// console.log(jsonData.user.age ?? "Age not defined");

// const obj = { name: 'stm', age: 27 };

// console.log(obj.address ?? "address will be added in next object");
// _______________________________________________________________________________________________________________________

// const jsonData = '{"name":"stm","age":27,"address":"Habsiguda","color":}';

// const validateJson = (data) => {
//     try {
//         JSON.parse(data);
//         return true;
//     } catch (e) {
//         return false
//     }
// }

// console.log(validateJson(jsonData));
// ____________________________________________________________________________________________________________________________


// const day = 'Sunday';

// switch (day) {
//     case 'Monday':
//         console.log('First day of the week');
//         break;
//     case 'Tuesday':
//         console.log('Second day of the week');
//         break;
//     case 'Friday':
//         console.log('Almost weekend');
//         break;
//     case 'Saturday':
//     case 'Sunday':
//         console.log('Weekend');
//         break;
//     default:
//         console.log('midweek');
// }


// const users = [
//     { name: 'Alice', age: 25, active: true },
//     { name: 'Bob', age: 30, active: false },
//     { name: 'Charlie', age: 35, active: true },
//     { name: 'David', age: 17, active: true },
//     { name: 'Eve', age: 22, active: false }
// ];

// const activeUsers = users.map(item => item.age).indexOf(35);

// console.log(activeUsers);


// function myCalculator(num1, num2, callback) {
//     let sum = num1 + num2;
//     callback(sum)
// }

// function myDisplayer(result) {
//     console.log(result);
// }

// myCalculator(5, 4, myDisplayer)                                                                                                      //callback is a function that is passed as an argument to another function.

// const myNimbers = [4, 1, -20, -7, 5, 9, -6];

// function removeNeg(numbers, callback) {
//     const myArray = [];
//     for (const x of numbers) {
//         if (callback(x)) {
//             myArray.push(x)
//         }
//     }
//     return myArray
// }

// const positiveNumbersArray = removeNeg(myNimbers, (x) => x >= 0);
// console.log(positiveNumbersArray);

//Where callbacks really shine are in asynchronous functions, where one function has to wait for another function (like waiting for a file to load).

// let numbersLessThan20 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// let primes = [];

// numbersLessThan20.forEach(num => {
//     isPrime(num) ? primes.push(num) : null
//     console.log(num);
// });

// function isPrime(number) {
//     if (number == 1) return false;
//     if (number == 2) return true;
//     if (number % 2 == 0) return false;
//     for (let x = 3; x <= Math.sqrt(number); x += 2) {
//         if (number % x == 0) {
//             return false
//         }
//     }
//     return true;
// }
// console.log(primes);

// const number = [1, 2, 3, 4, 5];

// let z = number.flatMap(item => [item, item * 3]);

// console.log(z);



//*************************************************************FROM METHOD************************************************* */
// let text = 'syed asif rehman';

// let number = '12345';

// console.log(Array.from({ length: 5 }, (_, index) => index + 1));

// console.log(Array.from(number, num => parseInt(num)));

// console.log(Array.from('syedasifrehman'));

// console.log(Array.from([1, 2, 3, 4, 5], ((num, index) => num + index)));

// console.log(Array.from([0.1, 0.2, 0.5, 0.7, 0.9, 1, 1.3, 1.9, 2.01, 2.9999, -2.01, -1.99], (num => parseInt(num))));

//***************************** SPLIT METHOD ****************************************************************

// let text = 'asifrehman';

// console.log(text.split(""));
//********************************************************************************************* */

// let day = new Date().getDay();

// switch (day) {
//     case 0:
//         day = 'Sunday';
//         break;
//     case 1:
//         day = 'Monday';
//         break;
//     case 2:
//         day = 'Tuesday';
//         break;
//     case 3:
//         day = 'Wednesday';
//         break;
//     case 4:
//         day = 'Thursday';
//         break;
//     case 5:
//         day = 'Friday';
//         break;
//     case 6:
//         day = 'Saturday';
//         break;
// }

// console.log(day);


// const sortedNumbers = (arr) => {

//     let result = [];
//     while (arr.length > 0) {
//         let minIndex = 0;
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] > arr[minIndex]) {
//                 minIndex = i;
//             }
//         }
//         result.push(arr[minIndex]);
//         arr.splice(minIndex, 1);
//     }
//     return result;
// }
// const numbers = [199, 34, 56, 68, 18, 19, 34, 76];
// console.log(sortedNumbers([...numbers]));


// const mappedProduct = new Map();

// console.log(mappedProduct);



// const mappedProduct1 = new Map([['apple', 1], ['banana', 3]]);

// console.log(mappedProduct1);                          //Map(2) { 'apple' => 1, 'banana' => 3 }

// console.log(mappedProduct1.keys());             //[Map Iterator] { 'apple', 'banana' }

// console.log(Array.from(mappedProduct1.keys()))   //[ 'apple', 'banana' ]


// const productids = [1, 0, 2, '', 3, null, 4, undefined, 5];
// const filtered = productids.filter(Boolean);
// console.log(filtered);


// const myMap = new Map([
//     ['a', 1],
//     ['b', 2],
//     ['c', 3]
// ]);

// forEach with callback (value, key, map)

// myMap.forEach((value, key, map) => {
//     console.log(`${key}: ${value}`);
// });

// Output:
// a: 1
// b: 2
// c: 3


// const max_number = Math.max(0, 100);
// console.log(max_number);

//****************************************************************************PROMISES*************************************************************************************

// function addition() {
//     console.log('inside addition is printed')
//     console.log('inside addition is printed')
//     console.log('inside addition is printed')
//     setTimeout(() => {
//         console.log('iam inside settime out');
//     }, [100])
//     const response = new Promise((resolve, reject) => {
//         const isReady = true;
//         if (isReady) {
//             setTimeout(() => {
//                 resolve('code is ready');
//             }, [2000])
//         }
//         else {
//             reject('code is not ready')
//         }
//     });
//     console.warn(response);

//     response.then(res => {
//         console.log(res);
//     })
//     console.log('inside addition is printed')
// }

// console.log('a');
// addition();
// console.log('b');

//output:
//a

//inside addition is printed(x3)

//Promise {
//  <pending> }

//     inside addition is printed

//  b

//   (Wait 100ms)

// iam inside settime out

// (Wait 1900ms more for a total of 2000ms)
//_____________________________________________________________________________________________________________________________________
// import { result } from "./utility.js"
// function addition() {
//     console.log('inside addition is printed')
//     console.log('inside addition is printed')
//     console.log('inside addition is printed')
//     console.log('inside addition is printed')
//     console.log('inside addition is printed')
//     console.log('inside addition is printed')
//     console.log('inside addition is printed')
//     console.log('inside addition is printed')
//     console.log('inside addition is printed')
//     return new Promise((resolve, reject) => {
//         const isReady = true;
//         if (isReady) {
//             resolve('code is ready')
//         }
//         else {
//             reject('code is not ready')
//         }
//     })
//     console.log('inside addition is printed')
// }

// console.log('a');
// addition().then(res => console.log(res));
// console.log('b');


// const subtraction = () => {
//     console.log('subtraction is executed');
// }

// subtraction();

// console.log(result);

//the promises executes asyncronously.the .then() callback is placed in the microtask queue and executes only after the current syncronous code executes.

//output
// a
// inside addition is printed
// inside addition is printed
// inside addition is printed
// inside addition is printed
// inside addition is printed
// inside addition is printed
// inside addition is printed
// inside addition is printed
// inside addition is printed
// b
// subtraction is executed
//pass
// code is ready

//_______________________________________________________________________________________________________________________________________________
// const promise = new Promise((resolve, reject) => {

// });

// console.log(promise);     //Promise { <pending> }

//___________________________________________________________________________________________________________________________________________________


// new Promise((resolve, reject) => {
//     const isReady = true;
//     if (isReady) {
//         resolve();
//     }
//     else {
//         reject();
//     }
// }).then((res) => {
//     console.log(res);
//     const value = 'foo'
//     return value
// }).then((res) => {
//     res += 'bar';
//     console.log(res);
// })

//___________________________________________________________________________________________________________________________________________________________

const url = 'https://jsonplaceholder.typicode.com/posts';

// const whatIsThis = fetch(url);     //this returns a promise that resolves to a response object.


// whatIsThis.then((res) => {
//     const data = res?.json();    //this is a method on the response object which reads the json text from the server, parses it from json string into javascript object and returns a json promise.
//     return data
// })
//     .then((res) => {
//         console.log(res);
//     })

// async function promise1() {
//     console.log('i am starting line of assync function');
//     const response1 = await fetch(url);
//     console.log(response1.status);
//     // const response2 = await response1.json();
//     const response2 = response1.json();
//     response2?.then(res => {
//         console.log(res[0]);
//     }).catch(error => {
//         console.log(error);
//     })
//     console.log(response2);
// }

// promise1();
// console.log('i am outside async function');
// setTimeout(() => {
//     console.log('i am inside settime out');
// }, [100])

// const promise1 = new Promise((resolve, reject) => {
//     resolve('i am resolved');
//     console.log('i am inside promise');
// });

// setTimeout(() => {
//     console.log('i am inside settime out')
// }, [100]);

// promise1.then(res => {
//     console.log(res)
// })

// console.log('i am in the global scope');

//___________________________________________________________________________________________________________________________________________________________

// const promiseForKing = new Promise((resolveFunction, rejectFunction) => {
//     setTimeout(() => {
//         console.warn('king is resolved');
//         resolveFunction('King')
//     }, 200);
// });

// const promiseForQueen = new Promise((resolveFunction, rejectFunction) => {
//     setTimeout(() => {
//         console.warn('Queen is resolved');
//         resolveFunction("Queen");
//     }, 100);
// });

// Promise.allSettled([promiseForKing, promiseForQueen]).then(res => {
//     console.log(res);
// }).catch(error => {
//     console.log(error);
// })

// const promiseForKing = new Promise((resolveFunction, rejectFunction) => {
//     setTimeout(() => {
//         console.log('Promise 1 completed:King is ready');
//         resolveFunction('King')
//     }, 200);
// });

// const promiseForQueen = new Promise((resolveFunction, rejectFunction) => {
//     setTimeout(() => {
//         console.log('Promise 2 completed: "Queen" is ready!');
//         resolveFunction("Queen");
//     }, 100);
// });

// Promise.all([promiseForKing, promiseForQueen]).then(res => {
//     console.log(res);
//     res?.forEach(item => {
//         console.log(item);
//     })
// }).catch(error => {
//     console.log(error);
// })

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('asif');
//     }, [2000])
// })
//_______________________________________________________________________________________________________________________
// const url = 'https://jsonplaceholder.typicode.com/posts';

// fetch(url).then((res) => {
//     return res?.json();
// }).then(res => {
//     console.log(res)
// })
// //_______________________________________________________________________________________________________________________

// const promise1 = fetch(url);

// promise1.then(res => {
//     const data = res?.json();
//     return data;
// }).catch(error => {
//     console.log(error);
// }).then(res => {
//     console.log(res);
// })
//______________________________________________________________________________________________________________________
// const p = Promise.resolve();

// p.then(res => {
//     console.log(res);
// })
// //____________________________________________________________________________________________________________________

// const promise1 = new Promise((resolve, reject) => {
//     resolve();
// });

// promise1.then(res => {
//     console.log(res);
// });

//__________________________________________________________________________________________________________________
// const orderPizza = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const isPizzaReady = true;
//             if (isPizzaReady) {
//                 resolve('Pizza is ready, enjoy the food completely');
//             }
//             else {
//                 reject('Sorry we could not serve you pizza today')
//             }
//         }, 3000)

//     })
// }
// orderPizza().then((res) => {
//     console.log(res);
//     return 'i am fine'
// }).then(res => {
//     console.log(res);
// }).catch((error) => {
//     console.log(error)
// })

//______________________________________________________________________________________________

// const promise1 = Promise.resolve('iam resolvd');

// console.log(promise1);

//____________________________________________________________________________________________

// const allPromises = async () => {
//     const promise1 = Promise.resolve('i am resolved_1');
//     const promise3 = Promise.resolve('i am resolved_3');
//     const promise4 = Promise.resolve('i am resolved_4');
//     const response = await Promise.allSettled([promise1, promise3, promise4]);
//     console.log(response);
// }

// allPromises();

//______________________________________________________________________________________________________________


// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const isReady = true;
//         if (isReady) {
//             resolve('i am ready')
//         }
//         else {
//             reject('i am not ready')
//         }
//     }, 1000)
// })

// console.log(promise);     //Promise { <pending> }

//________________________________________________________________________________________________________________________


// fetch('https://jsonplaceholder.typicode.com/users ')
//     .then(response => response.json())
//     .then(data => {
//         console.log('Users:', data);
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//     });

//_____________________________________________________________________________________________________________________________

// const myPromise = new Promise((resolve, reject) => {
//     const isPizzaReady = false;
//     if (isPizzaReady) {
//         resolve('Thankyou guys for the delecious pizza!');
//     }
//     else {
//         reject('I am Hungry')
//     }
// });

// myPromise.then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })
//____________________________________________________________________________________________________________
// function orderPizza() {
//     console.warn('i am executed')
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const pizzaIsReady = false; // Change to false to simulate failure

//             if (pizzaIsReady) {
//                 resolve(" Your pizza is ready!");
//             } else {
//                 reject(" Oops! The pizza burned.");
//             }
//         }, 1000); // Takes 3 seconds to make the pizza
//     });
// }

// orderPizza().then(res => console.log(res)).catch(error => console.warn(error));

//________________________________________________________________________________________________________________

// async function placeOrder() {
//     try {
//         const respone = await orderPizza();
//         console.warn(respone);
//     } catch (error) {
//         console.warn(error);
//     }
// }

// placeOrder();

//_____________________________________________________________________________________________________________________

// async function getOrder() {
//     try {
//         const result = await fetch('https://jsonplaceholder.typicode.com/users ');
//         const respone = await result.json();
//         console.log(respone);
//     } catch (error) {
//         console.error(error);
//     }
// }

// getOrder();

//____________________________________________________________________________________________________________________________

// const promise = async () => {
//     const result = await Promise.resolve('Apple').then(fruit => {
//         return fruit + "Pie";
//     });
//     console.log(result);
// };
// promise();

// const promise = async () => {
//     const finalData = await Promise.resolve("User123")
//         .then(id => {
//             // We return a NEW promise here
//             return Promise.resolve(`Data for ${id}`);
//         });
//     console.log(finalData);
// }
// promise();

// const promise = async () => {
//     const finalData = await Promise.resolve("User123")
//         .then(id => {
//             return Promise.all([Promise.resolve(id), Promise.resolve({ id, name: 'sar' })])
//         });
//     console.log(finalData);
// }
// promise();
//*******************************CHAR AT METHOD STRING*********************************************** */

// let text = 'syedasifrehman';

// console.log(text.charAt(3));

// console.log(text.charAt(text.length));

// console.log(text.charAt(text.length - 1));

// console.log(text.charAt(-1));

// console.log(typeof text.charAt(-1));


// let numbers = [1, 2, 3, 4, 5, 6];

// console.log(numbers.charAt(0));

// let arrayToString = numbers.join();

// console.log(arrayToString);

// console.log(typeof arrayToString);

// console.log(arrayToString.charAt(5));

//*******************************************************OBJECTS*/************************************************ */



// const obj1 = { name: 'sar', age: 35, address: 'habsiguda' };

// console.log({ ...obj1 });

// const obj2 = { ...obj1 };    // //  {...obj1} creates a shallow copy of obj1 using the spread operator.so obj2 is new object with new properties.

// console.log(obj2);

// const obj3 = obj1;

// console.log(obj3);

// obj1.name = "stm";

// console.log(obj1, obj2, obj3);

// console.log({ ...obj1, address: 'chanchalguda' });


// let student_1 = { name: 'sar' };

// const result = student_1.hasOwnProperty('name');

// console.log(result);

//===========================================================


// let email = 'rehmanasif1009@gmail.com';

// const object = {};

// object[email] = 'rehmanasif213@gmail.com';

// console.log(object);

//____________________________________________________________________

// let student = { name: 'sar', age: 35, address: 'habsiguda' }
// // for (key in student) {
// //     console.log(`${key}:${student[key]}`)
// // }

// // for (const value of Object.entries(student).flat()) {
// //     console.log(value)
// // }

// console.log(Object.entries(student));                   //[ [ 'name', 'sar' ], [ 'age', 35 ], [ 'address', 'habsiguda' ] ]

//_________________________________________________________________________

// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

// let myArray = JSON.stringify(person);


// console.log(myArray, typeof myArray);

// console.log(myArray.charAt(3));

// console.log(myArray.split(""));

//_________________________________________________________________________________

// const fruits = { Bananas: 300, Oranges: 200, Apples: 500 };

// console.log(Object.entries(fruits));     //[ [ 'Bananas', 300 ], [ 'Oranges', 200 ], [ 'Apples', 500 ] ]

// for (let [fruit, value] of Object.entries(fruits)) {
//     console.log(`${fruit}:${value}`)
// }

//________________________________________________________________________________________



// const { name2, address, name1 } = { name1: 'asif', address: 'habsiguda' };

// console.log(name2);

// console.log(name1);

//_______________________________________________________________________________________________

// const student_1 = { fname: 'syed', lname: 'tasleem', age: 27 };

// const { age: umr } = student_1;

// console.log(umr);

//____________________________________________________________________________________________

// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

// console.log(Object.keys(person));

// console.log(Object.values(person));

//__________________________________________________________________________________________

// const jsonString = '{"name":"stm","age":27,"isStudent":false}';

// const result = JSON.parse(jsonString);

// console.log(result);


// const user = {
//     name: 'Bob',
//     age: 30,
//     isEmployee: true
// };


// console.log(JSON.stringify(user))

// const original = { name: "Charlie", preferences: { color: "blue" } };

// const cloneObj = JSON.parse(JSON.stringify(original));

// console.log(cloneObj);
//********************************SET************************************************ */


// const set1 = new Set([1, 2, 3, 1, 2, 3, 4, 5, 6]);

// console.log(set1);                  //Set(6) { 1, 2, 3, 4, 5, 6 }

// console.log(typeof set1);               //type is object

// const set2 = new Set('syedasifrehman');

// console.log(set2);   //Set(11) { 's', 'y', 'e', 'd', 'a', 'i', 'f', 'r', 'h', 'm', 'n' }


// const set3 = new Set({ fname: 'asif' });

// console.log(set3);              // boolean true is not iterable    (or)   object is not iterable

// console.log(set2.add('asif'));


// console.log(set2.has('asif'));

// const set4 = new Set([{ fName: 'asif' }, { lName: 'rehman' }]);   //Set(2) { { fName: 'asif' }, { lName: 'rehman' } }

// const set5 = new Set([{ fName: 'asif' }, { lName: 'asif' }]);

// const set6 = new Set([{ fName: 'asif' }, { fName: 'asif' }]);

// console.log(set5);


//**********************************************************************************************

// let a = [1, 2, 3];

// let b = a.map((item) => {
//     return item * 2;
// });

// console.log(b);


// let c = undefined?.map((item) => {
//     return item * 2;
// });

// console.warn(c);


// let d = [].map((item) => {
//     return item * 2;
// });

// console.warn(d);

let res = Object.prototype.hasOwnProperty.call({ name: 'sar' }, "name");

console.log(res);