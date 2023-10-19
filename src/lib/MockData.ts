import type { IMockData } from "../types/IMockData";
import { IDateOptions } from "../types/IDateOptions";
import { IUser } from "../types/IUser";
import { IProduct } from "../types/IProduct";
import { IAddress } from "../types/IAddress";
import { INote } from "../types/INote";
import { ITodo } from "../types/ITodo";

class MockData implements IMockData{

	string (length: number, options?: {
		isFirstLetterCapitalized?: boolean,
		isUpperCase?: boolean,
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

	text (wordCount: number, options?: {
		capitalizeFirstLetter?: boolean,
		everyWordIsCapitalized? :boolean,
		uppercaseWords?: boolean,
	}): string {
		let result = '';
		const words = [
			'apple', 'banana', 'cherry', 'date', 'wildberry', 'fig',
			'grape', 'honeydew', 'kiwi', 'lemon', 'mango', 'nectarine'
		];
		const wordsLength = words.length;

		for (let i = 0; i < wordCount; i++) {
			const randomIndex = Math.floor(Math.random() * wordsLength);
			const word = words[randomIndex];

			let formattedWord = word;

			if (i === 0 && options?.capitalizeFirstLetter) {
				formattedWord = word.charAt(0).toUpperCase() + word.slice(1);
			} else if (options?.everyWordIsCapitalized) {
				formattedWord = word.charAt(0).toUpperCase() + word.slice(1);
			}

			result += formattedWord;

			if (i < wordCount - 1) {
				result += ' ';
			}
		}

		if (options?.uppercaseWords) {
			result = result.toUpperCase();
		}

		return result;
	}
	
	number (length: number): number {
		const min = Math.pow(10, length - 1);
		const max = Math.pow(10, length) - 1;
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	numberArray(length: number): number[] {
		const result: number[] = [];
		for(let i = 0; i < length; i++){
			if(i % 2 === 0){
				result.push(this.number(5));
			} else {
				result.push(this.number(4));
			}
		}
		return result;
	}

	stringArray(length: number): string[] {
		let result: string[] = [];

		for(let i = 0; i < length; i++){
			if(i % 2 === 0){
				result.push(this.string(7));
			} else {
				result.push(this.string(9));
			}
		}
		return result;
	}

	numberInRange (min: number, max: number): number {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	dateInRange (start: Date, end: Date, options: IDateOptions): Date | number | string {
		const randomTimestamp = this.numberInRange(start.getTime(), end.getTime());

		if (options.returnIsoDate){
			return new Date(randomTimestamp).toISOString();
		} else if (options.returnSeconds) {
			return new Date(randomTimestamp).getTime();
		} else {
			return new Date(randomTimestamp);
		}
	}

	name (): string {
		const names: string[] = ['John', 'Michael', 'Robert', 'David', 'James', 'William', 'Charles', 'Joseph', 'Richard', 'Daniel', 'Thomas', 'Matthew', 'Christopher', 'Andrew', 'Brian', 'Kevin', 'Anthony', 'Steven', 'Mark', 'Paul', 'Mary', 'Patricia', 'Jennifer', 'Linda', 'Elizabeth', 'Barbara', 'Susan', 'Jessica', 'Sarah', 'Karen', 'Nancy', 'Lisa', 'Margaret', 'Betty', 'Dorothy', 'Sandra', 'Ashley', 'Kimberly', 'Donna', 'Emily'];
		const randomIndex: number = this.numberInRange(0, names.length - 1);
		return names[randomIndex];
	}

	lastName (): string {
	const lastNames: string[] = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor', 'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin', 'Thompson', 'Garcia', 'Martinez', 'Robinson'];
		const randomIndex: number = this.numberInRange(0, lastNames.length - 1);
		return lastNames[randomIndex];
	}

	fullName (): string {
		const lastNames: string = this.lastName();
		const firstName: string = this.name();
		return `${firstName} ${lastNames}`;
	}

	address(): IAddress {
		const countries = ["USA", "Canada", "UK", "Australia", "Germany"];
		const states = ["NY", "CA", "IL", "TX", "FL"];
		const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Miami"];
		const streets = ["Main St", "Oak Ave", "Elm St", "Maple Rd", "Cedar Ln"];
		const postalCodes = ["10001", "90001", "60601", "77001", "33101"];

		const randomIndex = Math.floor(Math.random() * streets.length);

		return {
			country: countries[randomIndex],
			state: states[randomIndex],
			city: cities[randomIndex],
			street: streets[randomIndex],
			postalCode: postalCodes[randomIndex],
		};
	}

	password(): string {
		let password = "";
		const length = Math.floor(Math.random() * 9) + 8;
		const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*?";

		for (let i = 0; i < length; i++) {
			const randomIndex = Math.floor(Math.random() * charset.length);
			password += charset[randomIndex];
		}

		return password;
	}

	email (desiredName?: string): string {
		const domains = ['example.com','test.net','sample.org','website.dev','myapp.io','company.biz','blog.info','store.shop','portfolio.design','community.online', 'gmail.com', 'yandex.ru', 'mail.ru'];
		const randomIndex = this.numberInRange(0, domains.length - 1);
		const randomName = this.name().toLowerCase();

		if(desiredName){
			return `${desiredName.toLowerCase()}@${domains[randomIndex]}`;
		}

		return `${randomName}@${domains[randomIndex]}`;
	}

	phoneNumber(): string {
		const countries: string[] = ['us', 'uk', 'ru', 'by'];
		let phoneNumber: string = '';
		const countryCode: number = Math.floor(Math.random() * countries.length);

		switch (countryCode){
			case 0:
				phoneNumber = `+1${Math.floor(Math.random() * 10_000_000_000).toString().padStart(10, '0')}`;
				break;
			case 1:
				phoneNumber = `+44${Math.floor(Math.random() * 10_000_000_000).toString().padStart(10, '0')}`;
				break;
			case 2:
				phoneNumber = `+7${Math.floor(Math.random() * 10_000_000_000).toString().padStart(10, '0')}`;
				break;
			case 3:
				phoneNumber = `+375${Math.floor(Math.random() * 1_000_000_000).toString().padStart(9, '0')}`;
				break;
			default:
				phoneNumber = `+7${Math.floor(Math.random() * 10_000_000_000).toString().padStart(10, '0')}`;
				break;
		}

		return phoneNumber;
	}

	user(): IUser {
    	const firstName = this.name();

		const user: IUser = {
			firstName,
			lastName: this.lastName(),
			phoneNumber: this.phoneNumber(),
			email: this.email(firstName),
			password: this.password(),
			address: this.address(),
		};

    	return user;
	}

	product (): IProduct {
		const categories = ['Electronics', 'Clothing', 'Home', 'Beauty', 'Sports'];
		const randomCategory = categories[Math.floor(Math.random() * categories.length)];

		const product: IProduct = {
			name: this.string(5),
			category: randomCategory,
			price: Math.floor(Math.random() * 10000) + 100,
			description: this.text(20, {
				capitalizeFirstLetter: true,
			})
		};

		return product;
	}

	note (): INote {
		const note: INote = {
			id: this.string(10),
			title: this.string(this.numberInRange(5, 20), {isFirstLetterCapitalized: true}),
			content: this.text(this.numberInRange(5, 20)),
			createdTime: this.dateInRange(new Date(2010, 1, 1), new Date(), {returnIsoDate: true}).toString(),
			updatedTime: new Date().toISOString(),
		}

		return note;
	}

	notes (length: number): INote[] {
		const notes: INote[] = [];

		for(let i = 0; i < length; i++){
			notes.push(this.note());
		}

		return notes;
	}

	todo (): ITodo {
			const todo: ITodo = {
				id: this.string(10),
				title: this.string(this.numberInRange(5, 20), {isFirstLetterCapitalized: true}),
				content: this.text(this.numberInRange(5, 20)),
				createdTime: this.dateInRange(new Date(2010, 1, 1), new Date(), {returnIsoDate: true}).toString(),
				updatedTime: new Date().toISOString(),
				isCompleted: Math.random() > 0.5 ? true : false,
			}

			return todo;
	}

	todos (length: number): ITodo[] {
		const todos: ITodo[] = [];

		for(let i = 0; i < length; i++){
			todos.push(this.todo());
		}

		return todos;
	}
}

const mockData = new MockData();
export default mockData;