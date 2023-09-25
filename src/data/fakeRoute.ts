export const users: UserDataType[] = [
    {name: "Croquignolex", email: "gpetitalex10@gmail.com", password: "croquignolex"},
    {name: "Alex", email: "alex@test.com", password: "test"},
];

export interface UserDataType {
    name?: string;
    email: string;
    password: string;
}
