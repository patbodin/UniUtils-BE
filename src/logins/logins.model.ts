/* eslint-disable prettier/prettier */
export class Login {
    id: number;
    username: string;
    password: string;
    isAdmin: boolean;

    constructor() {
        this.id = 0;
        this.username = "";
        this.password = "";
        this.isAdmin = false;
    }
}

export class LoginResult {
    constructor(
        public result: string,
        public resultCode: string,
        public resultMessage: string
    ) {}
}

export class TestLogin {
    constructor(public result: string) {}
}