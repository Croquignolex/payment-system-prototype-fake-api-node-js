import {Request, Response} from 'express';

export const register = async (req: Request, res: Response): Promise<Response> => {
    return res.send({accountId: "73d5e89c-a221-4876-9ac9-09b7bcf2ec29"});
};

export const accountInfo = async (req: Request, res: Response): Promise<Response> => {
    // return res.status(400).send();
    return res.send({
        userName: "croquignolex",
        firstName: "Croquignolex",
        lastName: "NGOMBOL",
        emailAddress: "gpetitalex10@gmail.com",
        phoneNumber: "+237673848464",
        countryCode: "CM",
        accountId: "73d5e89c-a221-4876-9ac9-09b7bcf2ec29",
        address: {
            city: "Douala",
            zipCode: "144",
            street: "Ndogbong",
            country: "CAMEROUN",
        },
    });
};

export const accountAddressUpdate = async (req: Request, res: Response): Promise<Response> => {
    // return res.status(400).send();
    return res.send();
};

export const contactAdd = async (req: Request, res: Response): Promise<Response> => {
    // return res.status(400).send();
    return res.send();
};

export const accountAdd = async (req: Request, res: Response): Promise<Response> => {
    // return res.status(400).send();
    return res.send();
};