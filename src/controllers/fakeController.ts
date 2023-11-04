import {Request, Response} from 'express';

/*
export const login = async (req: Request, res: Response): Promise<Response> => {
    return res.send({
        firstName: "Alex",
        lastName: "NGOMBOL",
        email: "gpetitalex10@gmail.com",
        accountId: "73d5e89c-a221-4876-9ac9-09b7bcf2ec29"
    });
};
*/

export const register = async (req: Request, res: Response): Promise<Response> => {
    // return res.status(400).send();
    return res.send({accountId: "73d5e89c-a221-4876-9ac9-09b7bcf2ec29"});
};

export const logout = async (res: Response): Promise<Response>  => {
    return res.send();
};