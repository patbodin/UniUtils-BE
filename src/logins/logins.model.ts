export class Login {
    id: string;
    username: string;
    password: string;
    isAdmin: boolean;

    constructor() {
        this.id = "";
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