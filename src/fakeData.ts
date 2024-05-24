import * as uuid from 'uuid';

import {AccountModel, ContactModel, TransferModel, UserModel} from "./fakeTypes";

export const accountsData: AccountModel[] = [
    {
        firstName: "Croquy",
        lastName: "Account",
        emailAddress: "account@test.com",
        phoneNumber: "6777755888",
        payerType: "CM_MTN",
        currencyCode: "XAF",
        countryCode: "CM",
        payerId: uuid.v1(),
        accountId: "XXXXX"
    }
];
export const contactsData: ContactModel[] = [{
    firstName: "Croquy",
    lastName: "Contact",
    emailAddress: "contact@test.com",
    phoneNumber: "6999555888",
    recipientType: "CM_MTN",
    currencyCode: "XAF",
    countryCode: "CM",
    recipientId: uuid.v1(),
    accountId: "XXXXX"
}];

export const transfersData: TransferModel[] = [];

export const usersData: UserModel[] = [
    {
        userName: "admin",
        firstName: "PayPro",
        lastName: "Admin",
        emailAddress: "admin@paypro.com",
        phoneNumber: "+237000000000",
        countryCode: "CM",
        accountId: "XXXXX",
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
