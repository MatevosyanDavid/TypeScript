function logLime<F>(num: F): F {
  console.log(new Date());
  return num;
}

logLime<string>('Str');
logLime<number>(10);

interface MyInterFace {
  transform: <T, F>(a: T) => F;
}

class MyClass<T> {
  'value': T;
}

const a = new MyClass<string>();

interface TimeStamp {
  stamp: number;
}

function logTimeStamp<T extends TimeStamp>(obj: T): number {
  return obj.stamp;
}

logTimeStamp({ stamp: 12 });
