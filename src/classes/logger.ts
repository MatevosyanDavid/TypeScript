interface ILogger {
  log(...args: string[]): void;
  error(...args: string[]): void;
}

class Logger implements ILogger {
  log(...args: string[]): void {
    console.log(...args);
  }
  async error(...args: string[]): Promise<void> {
    console.error(...args);
  }
}

type PayStatus = 'new' | 'paid';

class Pay {
  id: number;
  status: PayStatus;

  constructor(id: number) {
    this.id = id;
  }

  pay() {
    this.status = 'paid';
  }
}

const pay = new Pay(Math.random());

class PayPersistent extends Pay {
  databaseId: number;
  payedAt: Date;
  name: string;

  constructor(id: number, name: string) {
    super(id);
    this.name = name;
  }

  override pay(date?: Date) {
    super.pay();
    date && (this.payedAt = date);
  }
}

new PayPersistent(Math.random(), 'Apple');
