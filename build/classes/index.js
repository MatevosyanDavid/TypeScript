"use strict";
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["Expected"] = 0] = "Expected";
    PaymentStatus[PaymentStatus["Reversed"] = 1] = "Reversed";
    PaymentStatus[PaymentStatus["Processed"] = 2] = "Processed";
})(PaymentStatus || (PaymentStatus = {}));
class Payment {
    constructor(id) {
        this.id = id;
        this.createdAt = new Date();
        this.status = PaymentStatus.Expected;
    }
    getPaymentLifeTime() {
        return new Date().getTime() - this.createdAt.getTime();
    }
    updateStatus() {
        if (this.status === PaymentStatus.Processed) {
            throw new Error('payment cannot be refunded');
        }
        this.status = PaymentStatus.Reversed;
        this.updatedAt = new Date();
    }
}
const payment = new Payment(Math.round(Math.random() * 1000));
payment.updateStatus();
console.log(payment);
class UserBuilder {
    setName(name) {
        this.name = name;
        return this;
    }
    isAdmin() {
        return this instanceof AdminBuilder;
    }
}
class AdminBuilder extends UserBuilder {
}
const res = new UserBuilder();
if (res.isAdmin()) {
    console.log(res);
}
else {
    console.log(res);
}
