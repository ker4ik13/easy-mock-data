import mockData from "../lib/MockData";

// Username
const names: string[] = ['John', 'Michael', 'Robert', 'David', 'James', 'William', 'Charles', 'Joseph', 'Richard', 'Daniel', 'Thomas', 'Matthew', 'Christopher', 'Andrew', 'Brian', 'Kevin', 'Anthony', 'Steven', 'Mark', 'Paul', 'Mary', 'Patricia', 'Jennifer', 'Linda', 'Elizabeth', 'Barbara', 'Susan', 'Jessica', 'Sarah', 'Karen', 'Nancy', 'Lisa', 'Margaret', 'Betty', 'Dorothy', 'Sandra', 'Ashley', 'Kimberly', 'Donna', 'Emily'];
const lastNames: string[] = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor', 'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin', 'Thompson', 'Garcia', 'Martinez', 'Robinson'];

// Address
const countries = ["USA", "Canada", "UK", "Australia", "Germany"];
const states = ["NY", "CA", "IL", "TX", "FL"];
const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Miami"];
const streets = ["Main St", "Oak Ave", "Elm St", "Maple Rd", "Cedar Ln"];
const postalCodes = ["10001", "90001", "60601", "77001", "33101"];

// Email
const domains = ['example.com','test.net','sample.org','website.dev','myapp.io','company.biz','blog.info','store.shop','portfolio.design','community.online'];

// Product
const categories = ['Electronics', 'Clothing', 'Home', 'Beauty', 'Sports'];


// Strings and texts:
describe('return values must be strings', () => {
    // String:
    test('the return value must have the specified length', () => {
        expect(mockData.string(5)).toHaveLength(5);
    })

    test('the first letter of the returned value must be in the correct case', () => {
        const upperCaseLetter = mockData.string(5, {isFirstLetterCapitalized: true})[0];
        expect(upperCaseLetter).toEqual(upperCaseLetter.toUpperCase());
    });

    test('return value must be in correct case', () => {
        const upperCaseText = mockData.string(5, {isUpperCase: true});
        expect(upperCaseText).toEqual(upperCaseText.toUpperCase());
    });

    // Text:
    test('return value must have the specified number of words', () => {
        expect(mockData.text(10).split(' ')).toHaveLength(10);
    });

    test('return value must be in correct case', () => {
        const upperCaseText = mockData.text(10, {uppercaseWords: true});
        expect(upperCaseText).toEqual(upperCaseText.toUpperCase());
    });

    test('the first letter of the returned value must be in the correct case', () => {
        const upperCaseFirstLetter = mockData.text(10, {capitalizeFirstLetter: true})[0];
        expect(upperCaseFirstLetter).toEqual(upperCaseFirstLetter[0].toUpperCase());
    });
});

// Numbers:
describe('return values must be numbers', () => {
    // Number:
    test('the return value must have the specified length', () => {
        expect(mockData.number(10)).toBeTruthy();
        expect(mockData.number(10)).toBeGreaterThan(999_999_999);
        expect(mockData.number(10)).toBeLessThan(10_000_000_000);
    });

    // Number in range:
    test('the return value must be greater than or less than the specified parameters', () => {
        expect(mockData.numberInRange(10, 30)).toBeGreaterThanOrEqual(10);
        expect(mockData.numberInRange(10, 30)).toBeLessThanOrEqual(30);
    });
});

// Arrays
describe('the returned array must be the correct length', () => {
    test('the returned array must be the correct length', () => {
        expect(mockData.stringArray(5)).toHaveLength(5);
        expect(mockData.numberArray(7)).toHaveLength(7);
        expect(mockData.stringArray(5)).toBeTruthy();
        expect(mockData.numberArray(7)).toBeTruthy();
    })
});


// Date:
describe('the return value must be a date', () => {
    const firstDate = new Date(2023, 5, 23);
    const firstDateInSeconds = firstDate.getTime();
    const endDate = new Date();
    const endDateInSeconds = endDate.getTime();

    // Date in range:
    test('the date must be returned in the specified format', () => {
        expect(mockData.dateInRange(firstDate, endDate, {returnStandartDate: true})).toBeInstanceOf(Date);
        expect(mockData.dateInRange(firstDate, endDate, {returnIsoDate: true})).toBeTruthy();
    });

    test('the date must be no less than or greater than the specified values', () => {
        expect(mockData.dateInRange(firstDate, endDate, {returnSeconds: true})).toBeGreaterThan(firstDateInSeconds);
        expect(mockData.dateInRange(firstDate, endDate, {returnSeconds: true})).toBeLessThan(endDateInSeconds);
    });
});

// Names:
describe('the return value must be string', () => {
    // Name:
    test('the return value must be contained in an array', () => {
        expect(names.includes(mockData.name()));
        expect(mockData.name()).toBeTruthy();
    });

    // Last name:
    test('the return value must be contained in an array', () => {
        expect(lastNames.includes(mockData.lastName()));
        expect(mockData.lastName()).toBeTruthy();
    });

    // Full name:
    test('the return value must be truthy', () => {
        expect(mockData.fullName()).toBeTruthy();
    });

});

// Personal information
describe('return value must be from arrays', () => {
   
    // Address:
    test('return value must be from arrays', () => {
        expect(countries.includes(mockData.address().country));
        expect(states.includes(mockData.address().state));
        expect(cities.includes(mockData.address().city));
        expect(streets.includes(mockData.address().street));
        expect(postalCodes.includes(mockData.address().postalCode));
    });

    // Email:
    test('return value must be from arrays', () => {
        expect(domains.includes(mockData.email().split('@')[1]));
        expect(names.includes(mockData.email().split('@')[0]));
    });

    // Phone number:
    test('return value must start with valid digits', () => {
        expect(mockData.phoneNumber()).toBeTruthy();
    });

    // Password

    test('return value must be string', () => {
        expect(mockData.password()).toBeTruthy();
    })
});

// Objects:
describe('return value must be an object', () => {
    // User:
    test('the return value must be an object and contain the required fields', () => {
        expect(names.includes(mockData.user().firstName));
        expect(lastNames.includes(mockData.user().lastName));
        expect(mockData.user().phoneNumber).toBeTruthy();
        expect(domains.includes(mockData.user().email.split('@')[1]));
        expect(countries.includes(mockData.user().address.country));
        expect(states.includes(mockData.user().address.state));
        expect(cities.includes(mockData.user().address.city));
        expect(streets.includes(mockData.user().address.street));
        expect(postalCodes.includes(mockData.user().address.postalCode));
    });

    // Product:
    test('the return value must be an object and contain the required fields', () => {
        expect(mockData.product().name).toHaveLength(5);
        expect(categories.includes(mockData.product().category));
        expect(mockData.product().price).toBeLessThan(10000);
        expect(mockData.product().price).toBeGreaterThan(100);
    });
});

console.log(mockData.password());
