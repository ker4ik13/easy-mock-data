"use strict";
const mock = require("./index");
// Прикрутить jest тесты
const string = mock.string(10, {
  isFirstLetterCapitalized: true,
});
console.log(string);
// const number = mock.number(10);
// console.log(number);
// const loremText = mock.loremText(10);
// console.log(loremText);
// const getRandomNumber = mock.getRandomNumber(10);
// console.log(getRandomNumber);
// const generateRandomDate = mock.generateRandomDate(10);
// console.log(generateRandomDate);
// const generateRandomName = mock.generateRandomName(10);
// console.log(generateRandomName);
// const generateRandomLastName = mock.generateRandomLastName(10);
// console.log(generateRandomLastName);
// const generateRandomFullName = mock.generateRandomFullName(10);
// console.log(generateRandomFullName);
// const generateRandomAddress = mock.generateRandomAddress(10);
// console.log(generateRandomAddress);
// const generateRandomEmail = mock.generateRandomEmail(10);
// console.log(generateRandomEmail);
// const generateRandomPhoneNumber = mock.generateRandomPhoneNumber(10);
// console.log(generateRandomPhoneNumber);
// const generateRandomUser = mock.generateRandomUser();
// console.log(generateRandomUser);
// const generateRandomProduct = mock.generateRandomProduct(10);
// console.log(generateRandomProduct);
