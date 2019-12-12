
import { IUser } from './user';
import { IPharma } from './pharma';


export interface IQuery {
    id: number;
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    group: string;
    createdDate: Date;
    status: boolean;
    organizationName: string;
    birthDate: Date;
    addressLine1: string;
    addressLine2?: string;
    landlineNumber?: string;
    phoneNumber?: string; 
    emailID: string;
    comments?: string; 
    zone?: string; 
    areamanager?: Partial<IUser>; 
    account?: Partial<IPharma>;
    role?: string; 
    city: string;
    suspended: Boolean;
    state: string;
    pinCode?: string; 
    employeeId: string;
    countryDuringRegistration: string;
    sapId: string; 
    customerAccountAdmin?: string; 
    color?: string; 
    actual: Boolean;
    initials?:string;
    dcpLoginIDPrefix?: string;
}