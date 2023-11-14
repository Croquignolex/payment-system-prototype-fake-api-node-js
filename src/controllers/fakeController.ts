import {Request, Response} from 'express';

import {contactsData, contactInfoData, accountsData} from "../data";

export const register = async (req: Request, res: Response): Promise<Response> => {
    // return res.status(400).send();
    return res.send({accountId: contactInfoData.accountId});
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