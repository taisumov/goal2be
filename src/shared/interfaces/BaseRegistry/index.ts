export interface UserData {
    email: string;
    username: string;
    password: string;
    rePassword: string;
}

export interface Validator {
    [field: string]: ValidatorFunc<string, string>
}

export type ValidatorFunc<T, A> = (value: T) => A