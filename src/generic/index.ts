function logMiddleware<T>(data: T): T {
  console.log(data);
  return data;
}

const x: number = 12;

logMiddleware<number>(x);

function getSplittedHalf<T>(data: Array<T>): Array<T> {
  const length = data.length / 2;

  return data.splice(0, length);
}

getSplittedHalf<number>([1, 2, 3, 4, 5] as Array<number>);

function myToString<T>(data: T): string | undefined {
  if (Array.isArray(data) || typeof data === 'string') {
    return data.toString();
  }
}

const split: <T>(data: Array<T>) => Array<T> = getSplittedHalf;

interface ILogData<T> {
  name: T;
}

interface ILogLine<T> {
  timeStamp: Date;
  data: ILogData<T>;
}

type str = string;

const logLine = {
  timeStamp: new Date(),
  data: {
    name: 'John',
  } as ILogData<str>,
};

class Auto {
  run: number;
}

class LVC extends Auto {
  capacity: number;
}

function kmToMiles<T extends Auto>(auto: T): T {
  auto.run = auto.run / 0.62;
  return auto;
}

kmToMiles(new LVC());
kmToMiles(new Auto());
kmToMiles({ run: 13 });

function logId<T extends Number | String>(id: T): void {
  console.log(id);
}

interface ISortedData {
  id: number;
  name: string;
}

const array: Array<ISortedData> = [
  { id: 1, name: 'Bill' },
  { id: 2, name: 'John' },
  { id: 3, name: 'Steeve' },
];

function sortData<T extends ISortedData>(data: Array<T>, sortBy: 'ASC' | 'DESC' = 'ASC'): Array<T> {
  return data.sort((a, b) => (sortBy === 'ASC' ? a.id - b.id : b.id - a.id));
}

class Resp<T, K> {
  data?: T;
  error?: K;

  constructor(data?: T, error?: K) {
    data && (this.data = data);
    error && (this.error = error);
  }
}

class HTTPResp<T, K> extends Resp<T, K> {}

const json = new HTTPResp({ name: 'John' }, 200);
