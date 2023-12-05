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
    accountId: string,
    payerId: string,
    firstName: string,
    lastName: string,
    emailAddress: string,
    phoneNumber: string,
    countryCode: string,
    payerType: string,
    currencyCode: string,
}

export interface ContactModel {
    accountId: string,
    recipientId: string,
    firstName: string,
    lastName: string,
    emailAddress: string,
    phoneNumber: string,
    countryCode: string,
    recipientType: string,
    currencyCode: string,
}

export interface TransferModel {
    transferId: string,
    payerId: string,
    recipientId: string,
    amount: string,
    accountId: string,
}