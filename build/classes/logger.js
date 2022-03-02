"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Logger {
    log(...args) {
        console.log(...args);
    }
    error(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            console.error(...args);
        });
    }
}
class Pay {
    constructor(id) {
        this.id = id;
    }
    pay() {
        this.status = 'paid';
    }
}
const pay = new Pay(Math.random());
class PayPersistent extends Pay {
    constructor(id, name) {
        super(id);
        this.name = name;
    }
    pay(date) {
        super.pay();
        date && (this.payedAt = date);
    }
}
new PayPersistent(Math.random(), 'Apple');
