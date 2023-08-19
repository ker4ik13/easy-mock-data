"use strict";
class MockData {
    string(length, options) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charactersLength);
            result += characters.charAt(randomIndex);
        }
        if (options === null || options === void 0 ? void 0 : options.isUpperCase) {
            result = result.split('').map(letter => letter.toUpperCase()).join('');
        }
        if (options === null || options === void 0 ? void 0 : options.isFirstLetterCapitalized) {
            result = result[0].toUpperCase() + result.slice(1);
        }
        return result;
    }
    number(length) {
        const min = Math.pow(10, length - 1);
        const max = Math.pow(10, length) - 1;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    loremText(wordCount, options) {
        let result = '';
        const words = [
            'apple', 'banana', 'cherry', 'date', 'wildberry', 'fig', 'grape', 'honeydew', 'kiwi', 'lemon', 'mango', 'nectarine'
        ];
        const wordsLength = words.length;
        for (let i = 0; i < wordCount; i++) {
            const randomIndex = Math.floor(Math.random() * wordsLength);
            const word = words[randomIndex];
            if (i === 0 && (options === null || options === void 0 ? void 0 : options.capitalizeFirstLetter)) {
                result += word.charAt(0).toUpperCase() + word.slice(1);
            }
            else if (options === null || options === void 0 ? void 0 : options.everyWordIsCapitalized) {
                const formattedWord = word.charAt(0).toUpperCase() + word.slice(1);
                result += formattedWord;
                result += ' ';
            }
            else {
                result += word;
                result += ' ';
            }
            if (options === null || options === void 0 ? void 0 : options.uppercaseWords) {
                result = result.split('').map(letter => letter.toUpperCase()).join('');
            }
        }
        return result;
    }
    getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    generateRandomDate(start, end, options) {
        const randomTimestamp = this.getRandomNumber(start.getTime(), end.getTime());
        if (options.returnStandartDate) {
            return new Date(randomTimestamp);
        }
        else if (options.returnIsoDate) {
            return new Date(randomTimestamp).toISOString();
        }
        else if (options.returnMiliseconds) {
            return new Date(randomTimestamp).getTime();
        }
        return new Date(randomTimestamp);
    }
    generateRandomName() {
        const names = ['John', 'Michael', 'Robert', 'David', 'James', 'William', 'Charles', 'Joseph', 'Richard', 'Daniel', 'Thomas', 'Matthew', 'Christopher', 'Andrew', 'Brian', 'Kevin', 'Anthony', 'Steven', 'Mark', 'Paul', 'Mary', 'Patricia', 'Jennifer', 'Linda', 'Elizabeth', 'Barbara', 'Susan', 'Jessica', 'Sarah', 'Karen', 'Nancy', 'Lisa', 'Margaret', 'Betty', 'Dorothy', 'Sandra', 'Ashley', 'Kimberly', 'Donna', 'Emily'];
        const randomIndex = this.getRandomNumber(0, names.length - 1);
        return names[randomIndex];
    }
    generateRandomLastName() {
        const lastNames = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor', 'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin', 'Thompson', 'Garcia', 'Martinez', 'Robinson'];
        const randomIndex = this.getRandomNumber(0, lastNames.length - 1);
        return lastNames[randomIndex];
    }
    generateRandomFullName() {
        const lastNames = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor', 'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin', 'Thompson', 'Garcia', 'Martinez', 'Robinson'];
        const firstName = this.generateRandomName();
        const randomIndex = this.getRandomNumber(0, lastNames.length - 1);
        return `${firstName} ${lastNames[randomIndex]}`;
    }
    generateRandomAddress() {
        const streets = ['Main St', 'Oak Ave', 'Maple Ln', 'Cedar Rd', 'Elm St'];
        const houseNumbers = ['123', '456', '789', '101', '202'];
        const randomStreetIndex = Math.floor(Math.random() * streets.length);
        const randomHouseNumberIndex = Math.floor(Math.random() * houseNumbers.length);
        const street = streets[randomStreetIndex];
        const houseNumber = houseNumbers[randomHouseNumberIndex];
        return `${houseNumber} ${street}`;
    }
    generateRandomEmail(desiredName) {
        const domains = ['example.com', 'test.net', 'sample.org', 'website.dev', 'myapp.io', 'company.biz', 'blog.info', 'store.shop', 'portfolio.design', 'community.online'];
        const randomIndex = this.getRandomNumber(0, domains.length - 1);
        const randomName = this.generateRandomName().toLowerCase();
        if (desiredName) {
            return `${desiredName}@${domains[randomIndex]}`;
        }
        return `${randomName}@${domains[randomIndex]}`;
    }
    generateRandomPhoneNumber(countryCode) {
        let phoneNumber = '';
        if (countryCode.toUpperCase() === 'US') {
            phoneNumber = `+1${Math.floor(Math.random() * 10000000000).toString().padStart(10, '0')}`;
        }
        else if (countryCode.toUpperCase() === 'UK') {
            phoneNumber = `+44${Math.floor(Math.random() * 10000000000).toString().padStart(10, '0')}`;
        }
        else if (countryCode.toUpperCase() === 'RU') {
            phoneNumber = `+7${Math.floor(Math.random() * 10000000000).toString().padStart(10, '0')}`;
        }
        else if (countryCode.toUpperCase() === 'BY') {
            phoneNumber = `+375${Math.floor(Math.random() * 1000000000).toString().padStart(9, '0')}`;
        }
        else {
            phoneNumber = 'incorrect country, please write one of these countries: "US", "UK", "RU", "BY". if you want to add a specific country, please write to me in telegram @ker4ik13';
        }
        return phoneNumber;
    }
    generateRandomUser(countryCode) {
        const firstName = this.generateRandomName();
        const user = {
            firstName,
            lastName: this.generateRandomLastName(),
            email: this.generateRandomEmail(firstName),
            phoneNumber: this.generateRandomPhoneNumber(countryCode)
        };
        return user;
    }
    // Доработать продукт
    generateRandomProduct() {
        const categories = ['Electronics', 'Clothing', 'Home', 'Beauty', 'Sports'];
        const randomCategory = categories[Math.floor(Math.random() * categories.length)];
        const product = {
            name: this.string(5),
            category: randomCategory,
            price: Math.floor(Math.random() * 10000) + 100,
        };
        return product;
    }
}
module.exports = new MockData;
