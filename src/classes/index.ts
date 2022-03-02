enum PaymentStatus {
  Expected,
  Reversed,
  Processed,
}

class Payment {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  status: PaymentStatus;

  constructor(id: number) {
    this.id = id;
    this.createdAt = new Date();
    this.status = PaymentStatus.Expected;
  }

  getPaymentLifeTime(): number {
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
  name: string;

  setName(name: string): this {
    this.name = name;

    return this;
  }

  isAdmin(): this is AdminBuilder {
    return this instanceof AdminBuilder;
  }
}

class AdminBuilder extends UserBuilder {
  roles: string[];
}

const res: UserBuilder | AdminBuilder = new UserBuilder();

if (res.isAdmin()) {
  console.log(res);
} else {
  console.log(res);
}
