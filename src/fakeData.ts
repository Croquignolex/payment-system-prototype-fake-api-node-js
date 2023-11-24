import * as uuid from 'uuid';
import {UserModel} from "./fakeTypes";

export const usersData: UserModel[] = [
    {
        userName: "fake_user",
        firstName: "Test",
        lastName: "User",
        emailAddress: "test@paypro.com",
        phoneNumber: "+237000000000",
        countryCode: "CM",
        accountId: uuid.v1(),
        password: 'test',
        address: {
            city: "Douala",
            zipCode: "144",
            street: "Akwa",
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

export const contactsData = [
    {
        recipientId: "13d5e89c-a221-4876-9ac9-09b7bcf2ec29",
        firstName: "Croquignolex",
        lastName: "TIKITON",
        emailAddress: "croquignolex@gmail.com",
        phoneNumber: "+237688596214",
        recipientType: "CM_ORANGE",
        currencyCode: "XAF",
        countryCode: "CM",
    },
    {
        recipientId: "23d5e89c-a721-4876-9ac9-09b7bcf2ec29",
        firstName: "Radagon",
        lastName: "RING",
        emailAddress: "radagon@gmail.com",
        phoneNumber: "+237688000004",
        recipientType: "PAYPAL",
        currencyCode: "XOF",
        countryCode: "CA",
    },
    {
        recipientId: "33d5e89c-a221-4876-9ac9-09b7bcf2ec29",
        firstName: "Renala",
        lastName: "RONG",
        emailAddress: "renala@gmail.com",
        phoneNumber: "+237008596214",
        recipientType: "CM_MTN",
        currencyCode: "EUR",
        countryCode: "FR",
    },
    {
        recipientId: "43d5e89c-a221-4876-9ac9-09b7bcf2ec29",
        firstName: "Radan",
        lastName: "PANG",
        emailAddress: "radan@gmail.com",
        phoneNumber: "+237688226614",
        recipientType: "STRIPE",
        currencyCode: "USD",
        countryCode: "IT",
    }
];

export const accountsData = [
    {
        recipientId: "11d5e89c-a221-4876-9ac9-09b7bcf2ec29",
        firstName: "Croquignolex",
        lastName: "TIKITON",
        emailAddress: "croquignolex@gmail.com",
        phoneNumber: "+237688596214",
        payerType: "CM_ORANGE",
        currencyCode: "XAF",
        countryCode: "CM",
    },
    {
        recipientId: "22d5e89c-a721-4876-9ac9-09b7bcf2ec29",
        firstName: "Radagon",
        lastName: "RING",
        emailAddress: "radagon@gmail.com",
        phoneNumber: "+237688000004",
        payerType: "PAYPAL",
        currencyCode: "XOF",
        countryCode: "CA",
    },
    {
        recipientId: "35d5e89c-a221-4876-9ac9-09b7bcf2ec29",
        firstName: "Renala",
        lastName: "RONG",
        emailAddress: "renala@gmail.com",
        phoneNumber: "+237008596214",
        payerType: "CM_MTN",
        currencyCode: "EUR",
        countryCode: "FR",
    },
];