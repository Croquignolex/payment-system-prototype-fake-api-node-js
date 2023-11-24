import * as uuid from 'uuid';
import {AccountModel, ContactModel, UserModel} from "./fakeTypes";

export const accountsData: AccountModel[] = [];
export const contactsData: ContactModel[] = [];

export const usersData: UserModel[] = [
    {
        userName: "admin",
        firstName: "PayPro",
        lastName: "Admin",
        emailAddress: "admin@paypro.com",
        phoneNumber: "+237000000000",
        countryCode: "CM",
        accountId: uuid.v1(),
        password: 'admin',
        address: {
            city: "Douala",
            zipCode: "000",
            street: "Bepanda",
            country: "CAMEROUN",
        }
    }
];

export const contactInfoData = {
    userName: "croquignolex",
    firstName: "Croquignolex",
    lastName: "TIKITON",
    emailAddress: "croquignolex@gmail.com",
    phoneNumber: "+237688596214",
    countryCode: "CM",
    accountId: "73d5e89c-a221-4876-9ac9-09b7bcf2ec29",
    address: {
        city: "Douala",
        zipCode: "144",
        street: "Akwa",
        country: "CAMEROUN",
    },
};
