export interface ILoginUser {
    user:  User;
    token: string;
}

export interface User {
    fullName: string;
    email:    string;
    role:     string;
}
