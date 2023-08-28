# Easy-Mock-Data: Mock Data Generator

> A convenient way to generate mock data for testing and development. You can use the library to create mock strings, numbers, texts, dates, names, products, and users with minimal effort.

Full TypeScript Support

- [RU Documentation](https://github.com/ker4ik13/easy-mock-data/wiki/Documentation)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Import](#import)
  - [Usage Examples](#usage-examples)
  - [Support and Feedback](#support-and-feedback)

## Getting Started

### Installation

Install the **easy-mock-data** library using npm:
```
npm install --save-dev easy-mock-data
```

### Import

Import ```mockData``` into your project:

```javascript
import { mockData } from 'easy-mock-data'
```


### Usage Examples

```javascript
const mockData = require('mock-data');

// Generate a fake string of length 10
const randomString = mockData.string(10); // OHKGxFarhs

// Generate a fake text with 5 words, capitalizing the first letter of each word
const randomText = mockData.text(5, {
    capitalizeFirstLetter: true
}); // Wildberry mango mango lemon wildberry

// Generate a fake number with 3 digits
const randomNumber = mockData.number(3); // 172

// Generate a fake array of numbers
const numberArray = mockData.numberArray(5) //  [32495, 8069, 74844, 9617, 81703]

// Generate a fake array of strings
const stringArray = mockData.stringArray(5) //  ['trlRvjW', 'RMfzv4C6Q', 'EFcwsSL', '7gFB3Z93U', 'l7wMHB9']

// Generate a number within a specified range
const randomNumberInRange = mockData.numberInRange(10, 50); // 26

// Generate a date within a specified range, returns the date in ISO format
const randomDate = mockData.dateInRange(new Date(2000, 0, 1), new Date(), {
    returnIsoDate: true,
}); // 2006-11-23T02:10:48.935Z

// Generate a fake user name
const randomUserName = mockData.name(); // Mark

// Generate a fake user last name
const randomUserLastName = mockData.lastName(); // Martinez

// Generate a fake full name
const randomFullName = mockData.fullName(); // John Harris

// Generate a fake address
const randomAddress = mockData.address(); 
//   address: {
//      country: 'USA',
//      state: 'IL',
//      city: 'New York',
//      street: 'Main St',
//      postalCode: '90001'}

// Generate a fake email with the given name
const randomEmail = mockData.email('john'); // john@example.com

// Generate a fake phone number
const randomPhoneNumber = mockData.phoneNumber(); // +75820672346

// Generate a fake password
const randomPass = mockData.password(); // 2?8hFgWk

// Generate a fake user
const randomUser = mockData.user();
// {
//    email: "Margaret@test.net"
//    firstName: "Margaret"
//    lastName: "Moore"
//    phoneNumber: "+78622944804"
//    address: {
//       country: 'USA',
//       state: 'IL',
//       city: 'New York',
//       street: 'Main St',
//       postalCode: '90001'}
// }

// Generate a fake product
const randomProduct = mockData.product();
// {
//     name: GsgTa,
//     category: 'Electronics',
//     price: 6235,
//     description: 'Mango banana date honeydew date mango honeydew mango lemon grape mango cherry banana nectarine lemon honeydew grape date wildberry cherry'
// }
```
**Author:** [ker4ik13](https://t.me/ker4ik13)

### Support and Feedback
If you have any questions, issues, or suggestions for improvement, you can create a new Issue on the repository page at https://github.com/ker4ik13/easy-mock-data/issues


[def]: #support-and-feedback
