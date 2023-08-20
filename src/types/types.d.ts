export interface Product {
  name: string;
  category: string;
  price: number;
  description: string;
}

export interface DateOptions {
	/**
	 * `returnStandartDate` returns the standard date new Date().
	 */
	returnStandartDate?: boolean,

	/**
	 * `returnIsoDate` returns a date of the form Iso.
	 */
	returnIsoDate?: boolean,

	/**
	 * `returnSeconds` returns the date as seconds since 1970.
	 */
	returnSeconds?: boolean,
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}