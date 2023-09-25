import {Request, Response} from 'express';

import {UserDataType, users} from "../data/fakeRoute";

export const login = async (req: Request, res: Response): Promise<Response> => {
    const {email, password}: UserDataType = req.body;
    let foundUser: UserDataType|undefined;

    users.forEach((user: UserDataType): void => {
        if(user.email === email && user.password === password) {
            foundUser = user;
        }
    });

    if(!foundUser) {
        const message: string = "Login ou mot de passe incorrect";
        return res.status(400).send({message});
    }

    return res.send({...foundUser, token: "xxxxxxx", message: `Bienvenue ${foundUser.name}`});
};

export const register = async (req: Request, res: Response): Promise<Response> => {
    return res.send({message: "Votre compte est créer avec succès"});
};

export const logout = async (res: Response): Promise<Response>  => {
    return res.send();
};