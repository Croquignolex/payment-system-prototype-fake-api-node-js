import {Request, Response} from 'express';

export const login = async (req: Request, res: Response): Promise<Response> => {
    const {email, password}: LoginDataType = req.body;

    if(email !== 'gpetitalex10@gmail.com' || password !== 'croquignolex') {
        return res.status(400).send();
    }

    return res.send({
        email: 'gpetitalex10@gmail.com',
        name: 'Croquignolex',
        token: 'xxxxxxxxxxxxxxxx',
    });
};

export const logout = async (res: Response): Promise<Response>  => {
    return res.send();
};

export interface LoginDataType {
    email: string;
    password: string;
}
