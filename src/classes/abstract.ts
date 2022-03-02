interface IData {
  name: string;
}

abstract class Controller {
  abstract log(data: IData): void;
  printDate(date: Date): Date {
    return date;
  }
}

class LoggerController extends Controller {
  log(data: IData): void {
    console.log(data.name);
  }
  logWithDate(): void {
    this.log({ name: 'John' } as IData);
    this.printDate(new Date());
  }
}
