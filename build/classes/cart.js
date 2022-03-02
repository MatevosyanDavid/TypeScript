"use strict";
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class Delivery {
    constructor(date) {
        this.date = date;
    }
}
class HomeDelivery extends Delivery {
    constructor(date, address) {
        super(date);
        this.address = address;
    }
}
class ShopDelivery extends Delivery {
    constructor(shopId) {
        super(new Date());
        this.shopId = shopId;
    }
}
class Cart {
    constructor() {
        this._products = [];
    }
    addProduct(product) {
        this._products.push(product);
    }
    deleteProduct(productId) {
        this._products = this._products.filter((product) => product.id !== productId);
    }
    getSum() {
        return this._products.reduce((acc, product) => acc + product.price, 0);
    }
    setDelivery(delivery) {
        this._delivery = delivery;
    }
    checkout() {
        if (this._products.length === 0) {
            throw new Error('Products is empty');
        }
        if (!this._delivery) {
            throw new Error('Empty delivery address');
        }
        return { success: true };
    }
}
const cart = new Cart();
cart.addProduct(new Product(0, 'Apple', 200));
cart.addProduct(new Product(1, 'Apple', 200));
cart.addProduct(new Product(2, 'BlackBerry', 100));
cart.deleteProduct(2);
cart.setDelivery(new HomeDelivery(new Date(), 'Moscow city'));
console.log(cart.getSum());
console.log(cart.checkout());
