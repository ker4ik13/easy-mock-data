import { DateOptions } from "./types/DateOptions";
import { User } from "./types/User";
import { Product } from "./types/Product";

class MockData {

	// The string function returns a random string depending on the passed length and options
	string (length: number, options?: {
		isFirstLetterCapitalized?: boolean,
		isUpperCase?: boolean,
		everyWordIsCapitalized?: boolean,
	}): string {
		let result = '';
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		const charactersLength: number = characters.length;

		for (let i = 0; i < length; i++) {
			const randomIndex = Math.floor(Math.random() * charactersLength);
			result += characters.charAt(randomIndex);
		}
		if (options?.isUpperCase) {
			result = result.split('').map(letter => letter.toUpperCase()).join('');
		}
		if (options?.isFirstLetterCapitalized) {
            result = result[0].toUpperCase() + result.slice(1);
        }

		return result;
	}
	
	// The number function returns a random number depending on the length passed
	number (length: number): number {
		const min = Math.pow(10, length - 1);
		const max = Math.pow(10, length) - 1;
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	// The text function returns a random text depending on the number of words and options passed.
	text (wordCount: number, options?: {
		capitalizeFirstLetter?: boolean,
		everyWordIsCapitalized? :boolean,
		uppercaseWords?: boolean,
	}): string {
		let result = '';
		const words = [
			'apple', 'banana', 'cherry', 'date', 'wildberry', 'fig', 'grape', 'honeydew', 'kiwi', 'lemon', 'mango', 'nectarine'
		];
		const wordsLength = words.length;

		for (let i = 0; i < wordCount; i++) {
			const randomIndex = Math.floor(Math.random() * wordsLength);
			const word = words[randomIndex];

			if (i === 0 && options?.capitalizeFirstLetter) {
				result += word.charAt(0).toUpperCase() + word.slice(1);
			} else if(options?.everyWordIsCapitalized) {
				const formattedWord = word.charAt(0).toUpperCase() + word.slice(1);
				result += formattedWord;
				result += ' ';
			} else {
				result += word;
				result += ' ';
			}

			if (options?.uppercaseWords) {
				result = result.split('').map(letter => letter.toUpperCase()).join('');
			}
		}

		return result;
	}

	// numberInRange function returns a random number in the range from the passed minimum and maximum values
	numberInRange (min: number, max: number): number {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	// The dateInRange function returns a random date between the given start and end dates.
	// The return value can be selected in the options
	dateInRange (start: Date, end: Date, options: DateOptions): Date | number | string {
		const randomTimestamp = this.numberInRange(start.getTime(), end.getTime());
		if(options.returnStandartDate){
			return new Date(randomTimestamp);
		} else if (options.returnIsoDate){
			return new Date(randomTimestamp).toISOString();
		} else if (options.returnMiliseconds) {
			return new Date(randomTimestamp).getTime();
		}

		return new Date(randomTimestamp);
	}

	// The name function returns a random name from an array of 10 male and 10 female names
	name (): string {
		const names: string[] = ['John', 'Michael', 'Robert', 'David', 'James', 'William', 'Charles', 'Joseph', 'Richard', 'Daniel', 'Thomas', 'Matthew', 'Christopher', 'Andrew', 'Brian', 'Kevin', 'Anthony', 'Steven', 'Mark', 'Paul', 'Mary', 'Patricia', 'Jennifer', 'Linda', 'Elizabeth', 'Barbara', 'Susan', 'Jessica', 'Sarah', 'Karen', 'Nancy', 'Lisa', 'Margaret', 'Betty', 'Dorothy', 'Sandra', 'Ashley', 'Kimberly', 'Donna', 'Emily'];
		const randomIndex: number = this.numberInRange(0, names.length - 1);
		return names[randomIndex];
	}

	// The lastName function returns a random last name from an array of 20 last names
	lastName (): string {
	const lastNames: string[] = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor', 'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin', 'Thompson', 'Garcia', 'Martinez', 'Robinson'];
		const randomIndex: number = this.numberInRange(0, lastNames.length - 1);
		return lastNames[randomIndex];
	}

	// fullName function returns the full random name and surname
	fullName (): string {
		const lastNames: string = this.lastName();
		const firstName: string = this.name();
		return `${firstName} ${lastNames}`;
	}

	// The address function returns a random address
	address(): string {
		const streets = ['Main St', 'Oak Ave', 'Maple Ln', 'Cedar Rd', 'Elm St'];
		const houseNumbers = ['123', '456', '789', '101', '202'];
		const randomStreetIndex = Math.floor(Math.random() * streets.length);
		const randomHouseNumberIndex = Math.floor(Math.random() * houseNumbers.length);

		const street = streets[randomStreetIndex];
		const houseNumber = houseNumbers[randomHouseNumberIndex];

		return `${houseNumber} ${street}`;
	}

	// The email function returns a random email. Optional parameter name
	email (desiredName?: string): string {
		const domains = ['example.com','test.net','sample.org','website.dev','myapp.io','company.biz','blog.info','store.shop','portfolio.design','community.online'];
		const randomIndex = this.numberInRange(0, domains.length - 1);
		const randomName = this.name().toLowerCase();

		if(desiredName){
			return `${desiredName}@${domains[randomIndex]}`;
		}

		return `${randomName}@${domains[randomIndex]}`;
	}

	// The phoneNumber functions return the phone number with country code that was passed to the function.
	phoneNumber(countryCode: string): string {
		let phoneNumber = '';

		if (countryCode.toUpperCase() === 'US') {
			phoneNumber = `+1${Math.floor(Math.random() * 10_000_000_000).toString().padStart(10, '0')}`;
		} else if (countryCode.toUpperCase() === 'UK') {
			phoneNumber = `+44${Math.floor(Math.random() * 10_000_000_000).toString().padStart(10, '0')}`;
		} else if (countryCode.toUpperCase() === 'RU') {
			phoneNumber = `+7${Math.floor(Math.random() * 10_000_000_000).toString().padStart(10, '0')}`;
		} else if (countryCode.toUpperCase() === 'BY') {
			phoneNumber = `+375${Math.floor(Math.random() * 1_000_000_000).toString().padStart(9, '0')}`;
		} else {
			phoneNumber = 'incorrect country, please write one of these countries: "US", "UK", "RU", "BY". if you want to add a specific country, please write to me in telegram @ker4ik13';
		}

		return phoneNumber;
	}

	// The user function returns a user object consisting of the fields: firstName, lastName, phoneNumber and email
	user(countryCode: string): User {
    	const firstName = this.name();

		const user: User = {
			firstName,
			lastName: this.lastName(),
			phoneNumber: this.phoneNumber(countryCode),
			email: this.email(firstName),
		};

    	return user;
	}

	// product function returns a new product consisting of the fields: name, category, price and description
	// Доработать продукт
	product (): Product {
		const categories = ['Electronics', 'Clothing', 'Home', 'Beauty', 'Sports'];
		const randomCategory = categories[Math.floor(Math.random() * categories.length)];

		const product: Product = {
			name: this.string(5),
			category: randomCategory,
			price: Math.floor(Math.random() * 10000) + 100,
			description: this.text(20, {
				capitalizeFirstLetter: true,
			})
		};

		return product;
	}
}

export = MockData;

