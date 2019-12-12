import { IQuery } from './query';

export interface IUser extends IQuery {
    customerAccountAdmin: string; 
    countryDuringRegistration: string;
    resetPasswordToken: String;
    pushToken: String;
}
