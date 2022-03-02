class Person {
  _login: string;
  _password: string;
  createdAt: Date;

  set login(login: string) {
    this._login = `user-${login}`;
    this.createdAt = new Date();
  }

  get login(): string {
    return this._login;
  }

  set password(login: string) {
    this._password = `user-${login}`;
  }

  get password(): string {
    return this._password;
  }
}

const person = new Person();
