import {Request, Response} from 'express';

export const login = async (req: Request, res: Response): Promise<Response> => {
    const {username, password} = req.body;

    if(username !== 'gpetitalex10@gmail.com' || password !== 'croquignolex') {
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