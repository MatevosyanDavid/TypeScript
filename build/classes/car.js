"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Vehicle_price;
class Vehicle {
    constructor() {
        _Vehicle_price.set(this, void 0);
    }
    addDamage(damage) {
        this.damage.push(damage);
    }
    setRun(km) {
        this.run = km;
        return __classPrivateFieldGet(this, _Vehicle_price, "f");
    }
}
_Vehicle_price = new WeakMap();
const vehicle = new Vehicle();
