import { IAddress } from "./IAddress";

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  address: IAddress;
}