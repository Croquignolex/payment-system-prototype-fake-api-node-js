import {Request, Response} from 'express';
import * as uuid from "uuid";

import {contactsData, contactInfoData, accountsData, usersData, transfersData} from "./fakeData";
import {AccountModel, ContactModel, TransferModel, UserModel} from "./fakeTypes";

export const login = async (req: Request, res: Response): Promise<Response> => {
    const data: any = req.body;

    const emailAddress: string = data?.email;
    const password: string = data?.password;

    const needleUser: UserModel|undefined = usersData.find((user: UserModel): boolean => (user.emailAddress === emailAddress && user.password === password));

    if(!needleUser) {
        return res.status(400).send({message: "Login ou mot de passe incorrect"});
    }

    return res.send({
        accountId: needleUser.accountId,
        lastName: needleUser.lastName,
        firstName: needleUser.firstName,
        emailAddress: needleUser.emailAddress,
    });
};

export const register = async (req: Request, res: Response): Promise<Response> => {
    const data: any = req.body;

    const emailAddress: string = data?.email;
    const firstName: string = data?.firstName;
    const lastName: string = data?.lastName;
    const password: string = data?.password;
    const accountId: string = "XXXXX";

    const user: UserModel = {
        userName: accountId,
        firstName,
        lastName,
        emailAddress,
        phoneNumber: "",
        countryCode: "",
        accountId,
        password,
        address: {
            city: "",
            zipCode: "",
            street: "",
            country: "",
        }
    }

    const needleUser: UserModel|undefined = usersData.find((user: UserModel): boolean => (user.emailAddress === emailAddress));

    if(!needleUser) {
        usersData.push(user);

        return res.send({accountId});
    }

    return res.status(400).send("Un utilisateur existe déjà avec cet addresse email");
};

export const accountInfo = async (req: Request, res: Response): Promise<Response> => {
    // return res.status(400).send();
    return res.send(contactInfoData);
};

export const accountAddressUpdate = async (req: Request, res: Response): Promise<Response> => {
    // return res.status(400).send();
    return res.send();
};

export const transferAddMtnToMtn = async (req: Request, res: Response): Promise<Response> => {
    const params: any = req.params;
    const data: any = req.body;

    const payerId: string = data?.payerId;
    const recipientId: string = data?.recipientId;
    const amount: string = data?.amount;
    const transferId: string = uuid.v1();

    const accountId: string = params?.accountId;

    const transfer: TransferModel = {
        transferId,
        accountId,
        payerId,
        recipientId,
        amount,
    }

    transfersData.push(transfer);

    return res.send({transferId, message: ""});
};

export const transferStatus = async (req: Request, res: Response): Promise<Response> => {
    const status: Array<string> = ["SUCCESS", "PENDING", "FAILED"];

    return res.send({status: status[Math.floor(Math.random() * 3)]});
};

export const contactAdd = async (req: Request, res: Response): Promise<Response> => {
    const params: any = req.params;
    const data: any = req.body;

    const firstName: string = data?.firstName;
    const lastName: string = data?.lastName;
    const emailAddress: string = data?.emailAddress;
    const phoneNumber: string = data?.phoneNumber;
    const recipientType: string = data?.recipientType;
    const currencyCode: string = data?.currencyCode;
    const countryCode: string = data?.countryCode;
    const recipientId: string = uuid.v1();

    const accountId: string = params?.accountId;

    const contact: ContactModel = {
        accountId,
        recipientId,
        firstName,
        lastName,
        emailAddress,
        phoneNumber,
        countryCode,
        recipientType,
        currencyCode,
    }

    const needleContact: ContactModel|undefined = contactsData.find((contact: ContactModel): boolean => (contact.emailAddress === emailAddress));

    if(!needleContact) {
        contactsData.push(contact);

        return res.send({recipientId});
    }

    return res.status(400).send({message: 'Un contact existe déjà avec cet addresse email'});
};

export const contacts = async (req: Request, res: Response): Promise<Response> => {
    const params: any = req.params;

    const accountId: string = params?.accountId;

    const contacts: ContactModel[] = contactsData.filter((contact: ContactModel): boolean => contact.accountId === accountId);

    return res.send({recipients: contacts});
};

export const accountAdd = async (req: Request, res: Response): Promise<Response> => {
    const params: any = req.params;
    const data: any = req.body;

    const firstName: string = data?.firstName;
    const lastName: string = data?.lastName;
    const emailAddress: string = data?.emailAddress;
    const phoneNumber: string = data?.phoneNumber;
    const payerType: string = data?.payerType;
    const currencyCode: string = data?.currencyCode;
    const countryCode: string = data?.countryCode;
    const payerId: string = uuid.v1();

    const accountId: string = params?.accountId;

    const account: AccountModel = {
        accountId,
        payerId,
        firstName,
        lastName,
        emailAddress,
        phoneNumber,
        countryCode,
        payerType,
        currencyCode,
    }

    const needleAccount: AccountModel|undefined = accountsData.find((account: AccountModel): boolean => (account.emailAddress === emailAddress));

    if(!needleAccount) {
        accountsData.push(account);

        return res.send({payerId});
    }

    return res.status(400).send({message: 'Un compte existe déjà avec cet addresse email'});
};

export const accounts = async (req: Request, res: Response): Promise<Response> => {
    const params: any = req.params;

    const accountId: string = params?.accountId;

    const accounts: AccountModel[] = accountsData.filter((account: AccountModel): boolean => account.accountId === accountId);

    return res.send({payers: accounts});
};