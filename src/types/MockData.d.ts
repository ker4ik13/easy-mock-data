import { User, Product, DateOptions } from "./interfaces";

export interface MockDataOptions {

    /**
	 * @returns {string} a random string of the specified length
     * @param {number} length string length 
     * @param {boolean | undefined} isFirstLetterCapitalized capitalize the first letter in a string
     * @param {boolean | undefined} isUpperCase all letters are capital
     * @example mockData.string(5, {isUpperCase: true}) return 'FSEGD'
     */
    string(length: number, options?: {
        isFirstLetterCapitalized?: boolean,
        isUpperCase?: boolean,
    }): string;

    /**
     * @returns {number} a random number of the specified length
     * @param {number} length number length
     * @example mockData.number(10) return 7562592463
     */
    number (length: number): number;

    /**
     * @returns {string} random text with the specified number of words
     * @param {boolean | undefined} isFirstLetterCapitalized capitalize the first letter in a string
     * @param {boolean | undefined} isUpperCase all letters are capital
     * @param {boolean | undefined} everyWordIsCapitalized every word is capitalized
     * @example mockData.text(5, {isFirstLetterCapitalized: true}) return 'apple wildberry date kiwi nectarine'
     */
    text (wordCount: number, options?: {
        isFirstLetterCapitalized?: boolean,
        isUpperCase?: boolean,
        everyWordIsCapitalized?: boolean,
    }): string

    /**
     * @returns {number} a random number in the range from the passed minimum and maximum values
     * @param {number} min minimum number
     * @param {number} max maximum number
     * @example mockData.numberInRange(5, 15) return 12
     */
    numberInRange (min: number, max: number): number;

    /**
     * @returns {Date | number | string} a random date between the given start and end dates. The return value can be selected in the options.
     * @param {DateOptions} options 1 of 3 parameters is required.
     * 
     * `returnStandartDate` returns the standard date new Date().
     * 
     * `returnIsoDate` returns a date of the form Iso.
     * 
     * `returnSeconds` returns the date as seconds since 1970.
     * @example mockData.dateInRange(firstDate, secondDate, {returnIsoDate: true}) return 
     */
    // TASK доделать example
    dateInRange (start: Date, end: Date, options: {
        returnStandartDate?: boolean,
        returnIsoDate?: boolean,
        returnSeconds?: boolean,
    }): Date | number | string

    /**
     * @returns {string} a random name from an array of 10 male and 10 female names.
     * @example mockData.name() return 'Michael'
     */
    name (): string;

    /**
     * @returns {string} a random last name from an array of 20 last names.
     * @example mockData.lastName() return 'Smith'
     */
    lastName (): string;

    /**
     * @returns {string} the full random name and surname.
     * @example mockData.fullName() return 'John Martinez'
     */
    fullName (): string;

    /**
     * @returns {string} a random address.
     * @example mockData.address() return 'Maple Ln 101'
     */
    address(): string;

    /**
     * @returns a random email. 
     * @param {string} desiredName optional parameter name
     * @example mockData.email('John') return 'john@sample.org'
     */
    email (desiredName?: string): string;

    /**
     * @returns the phone number with country code that was passed to the function.
     * @param {string} countryCode can be 'US', 'UK', 'RU', 'BY'
     * @example mockData.phoneNumber('ru') return '+74729527562'
     */
    phoneNumber(countryCode: string): string;

    /**
     * @returns {User} a new {@link User} object
     * @param {string} countryCode can be 'US', 'UK', 'RU', 'BY'
     * @example mockData.user() return {
        firstName: 'John'
        lastName: 'Martinez',
        phoneNumber: '+74904672395',
        email: 'john@myapp.io'}
     */
    user(countryCode: string): User;

    /**
     * @returns a new {@link Product} object
     * @example mockData.product() return {
        name: 'FseFa',
        category: 'Electronics',
        price: 4256,
        description: 'DfsauheaidjasDASdasedsadaseEsa'
        }
     */
    product (): Product;
}
