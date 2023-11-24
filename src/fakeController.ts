import {Request, Response} from 'express';

import {contactsData, contactInfoData, accountsData, usersData} from "./fakeData";
import {UserModel} from "./fakeTypes";
import * as uuid from "uuid";

export const login = async (req: Request, res: Response): Promise<Response> => {
    const data: any = req.body;

    const emailAddress: string = data?.email;
    const password: string = data?.password;

    const needleUser: UserModel|undefined = usersData.find((user: UserModel) => (user.emailAddress === emailAddress && user.password === password));

    if(!needleUser) {
        return res.status(400).send();
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
    const accountId: string = uuid.v1();

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

    const needleUser: UserModel|undefined = usersData.find((user: UserModel) => (user.emailAddress === emailAddress));

    if(!needleUser) {
        usersData.push(user);

        return res.send({accountId});
    }

    return res.status(400).send();
};

export const accountInfo = async (req: Request, res: Response): Promise<Response> => {
    // return res.status(400).send();
    return res.send(contactInfoData);
};

export const accountAddressUpdate = async (req: Request, res: Response): Promise<Response> => {
    // return res.status(400).send();
    return res.send();
};

export const contactAdd = async (req: Request, res: Response): Promise<Response> => {
    // return res.status(400).send();
    return res.send();
};

export const contacts = async (req: Request, res: Response): Promise<Response> => {
    // return res.status(400).send();
    return res.send(contactsData);
};

export const accountAdd = async (req: Request, res: Response): Promise<Response> => {
    // return res.status(400).send();
    return res.send();
};

export const accounts = async (req: Request, res: Response): Promise<Response> => {
    // return res.status(400).send();
    return res.send(accountsData);
};