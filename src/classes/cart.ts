class Product {
  constructor(public id: number, public name: string, public price: number) {}
}

class Delivery {
  constructor(public date: Date) {}
}

class HomeDelivery extends Delivery {
  constructor(date: Date, public address: string) {
    super(date);
  }
}

class ShopDelivery extends Delivery {
  constructor(public shopId: number) {
    super(new Date());
  }
}

type DeliveryOptions = HomeDelivery | ShopDelivery;

type Success = { success: boolean };

class Cart {
  private _products: Product[] = [];
  private _delivery: DeliveryOptions;

  public addProduct(product: Product): void {
    this._products.push(product);
  }

  public deleteProduct(productId: number): void {
    this._products = this._products.filter((product: Product) => product.id !== productId);
  }

  public getSum(): number {
    return this._products.reduce((acc, product) => acc + product.price, 0);
  }

  public setDelivery(delivery: DeliveryOptions): void {
    this._delivery = delivery;
  }

  public checkout(): void | Success {
    if (this._products.length === 0) {
      throw new Error('Products is empty');
    }
    if (!this._delivery) {
      throw new Error('Empty delivery address');
    }

    return { success: true } as Success;
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
