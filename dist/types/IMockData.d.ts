import { IUser } from "./IUser";
import { IProduct } from "./IProduct";
import { IDateOptions } from "./IDateOptions";
import { IAddress } from "./IAddress";
import { INote } from "./INote";
import { ITodo } from "./ITodo";

export interface IMockData {

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
     * @returns {Array} an array of numbers in the specified range
     * @param {number} length array length
     * @example mockData.numberArray(5) return [52542, 5234, 73156, 4215, 1812]
     */
    numberArray (length: number): number[];

    /**
     * @returns {Array} an array of strings
     * @param {number} length array length 
     * @example mockData.stringArray(5) return ['fghsajfa, jsahda, fuwyrscas, fisufgsa, ogsjbda']
     */
    stringArray (length: number): string[];

    /**
     * @returns {number} a random number in the range from the passed minimum and maximum values
     * @param {number} min minimum number
     * @param {number} max maximum number
     * @example mockData.numberInRange(5, 15) return 12
     */
    numberInRange (min: number, max: number): number;

    /**
     * @returns {Date | number | string} a random date between the given start and end dates. The return value can be selected in the options.
     * @param {IDateOptions} options 1 of 3 parameters is required.
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
     * @example mockData.address() return object IAddress
     * 
     */
    address(): IAddress;

    /**
     * @returns {string} random password, length from 8 to 16
     * @example mockData.password() return 'Dfg245FSa4@!'
     */
    password (): string;

    /**
     * @returns a random email. 
     * @param {string} desiredName optional parameter name
     * @example mockData.email('John') return 'john@sample.org'
     */
    email (desiredName?: string): string;

    /**
     * @returns the phone number with country code that was passed to the function.
     * @example mockData.phoneNumber() return '+74729527562'
     */
    phoneNumber(): string;

    /**
     * @returns {IUser} a new {@link IUser} object
     * @example mockData.user() return object IUser
       
     */
    user(): IUser;

    /**
     * @returns a new {@link IProduct} object
     * @example mockData.product() return object IProduct
     */
    product (): IProduct;

    /**
     * @return a new {@link INote} object
     * @example mockData.note() return object INote
     */
    note (): INote;

    /**
     * @return an array of {@link INote} objects
     * @example mockData.note() return array of INote objects
     */
    notes (length: number): INote[];

    /**
     * @return a new {@link ITodo} object
     * @example mockData.todo() return object ITodo
     */
    todo (): ITodo;

    /**
     * @return an array of {@link ITodo} objects
     * @example mockData.todo() return array of ITodo objects
     */
    todos (length: number): ITodo[];
}
