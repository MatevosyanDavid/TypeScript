"use strict";
class Person {
    set login(login) {
        this._login = `user-${login}`;
        this.createdAt = new Date();
    }
    get login() {
        return this._login;
    }
    set password(login) {
        this._password = `user-${login}`;
    }
    get password() {
        return this._password;
    }
}
const person = new Person();
