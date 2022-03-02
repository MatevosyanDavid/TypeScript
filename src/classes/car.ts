// class Stack<T> {
//   stack: T[];
//   constructor() {
//     this.stack = [];
//   }

//   pop() {
//     this.stack.pop();
//   }

//   push(data: T) {
//     this.stack.push(data);
//   }
// }

class Vehicle {
  public make: string[];
  private damage: string[];
  private _model: string;
  protected run: number;
  #price: number;

  addDamage(damage: string) {
    this.damage.push(damage);
  }

  // set model(model: string) {
  //   this._model = model;
  // }

  // get model() {
  //   return this._model;
  // }

  setRun(km: number) {
    this.run = km;
    return this.#price;
  }
}

const vehicle = new Vehicle();
