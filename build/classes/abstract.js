"use strict";
class Controller {
    printDate(date) {
        return date;
    }
}
class LoggerController extends Controller {
    log(data) {
        console.log(data.name);
    }
    logWithDate() {
        this.log({ name: 'John' });
        this.printDate(new Date());
    }
}
