export interface AddressModel {
    city: string,
    zipCode: string,
    street: string,
    country: string,
}

export interface UserModel {
    userName: string,
    firstName: string,
    lastName: string,
    emailAddress: string,
    phoneNumber: string,
    countryCode: string,
    accountId: string,
    password: string,
    address: AddressModel
}

export interface AccountModel {
    userName: string,
    firstName: string,
    lastName: string,
    emailAddress: string,
    phoneNumber: string,
    countryCode: string,
    accountId: string,
    password: string,
    address: AddressModel
}