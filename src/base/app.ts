function getFullName(user: { firstName: string; lastName: string }): string {
  return `${user.firstName} ${user.lastName}`;
}

const user1 = {
  age: 26,
  city: 'Moscow',
  firstName: 'John',
  lastName: 'Roberts',
  skills: {
    dev: true,
    devOps: true,
  },
};

getFullName(user1);

enum Statuses {
  PUBLISHED = 'published',
  DRAFT = 'draft',
  DELETED = 'deleted',
}

type data = {
  question: string;
  answer: string;
  tags: [string, string];
  likes: number;
  status: Statuses;
};

type response = data[];

async function getFaqs(req: { topicId: number; status: Statuses }): Promise<response> {
  const res: Response = await fetch('/faqs', {
    method: 'POST',
    body: JSON.stringify(req),
  });

  const data: response = await res.json();
  return data;
}

interface UserInterface {
  [index: number]: string;
  get: (key: number) => string;
  data: Promise<response>;
}

const userData: UserInterface = {
  4: 'hello',
  get(key: number) {
    return this[key];
  },
  data: getFaqs({ topicId: 12, status: Statuses.DRAFT }),
};

const set: Set<string> = new Set();

set.add('hello');

type ids = string | number;

interface F {
  id: ids;
}

function getSum(a: number, b: number = 10) {
  return a + b;
}

getSum(100);

const ERROR_MESSAGE = 'Insufficient funds';

interface IPayment {
  sum: number;
  from: number;
  to: number;
}

enum StatusNames {
  SUCCESS = 'success',
  FILED = 'filed',
}

interface IData extends IPayment {
  databaseId: number;
}

interface IResponse {
  status: StatusNames.SUCCESS;
  data: IData;
}

interface IErrorData {
  errorMessage: string;
  errorCode: number;
}

interface IError {
  status: StatusNames.FILED;
  data: IErrorData;
}

async function getPayment(data: IPayment): Promise<IResponse | IError> {
  const requestInit: RequestInit = {
    body: JSON.stringify(data),
  };

  const response = await fetch('/', requestInit);

  try {
    const json: IResponse = await response.json();

    return json;
  } catch (e) {
    const error: IError = {
      status: StatusNames.FILED,
      data: {
        errorMessage: ERROR_MESSAGE,
        errorCode: 404,
      },
    };

    return error;
  }
}

function isSuccess(res: IResponse | IError): res is IResponse {
  return res.status === StatusNames.SUCCESS;
}

function getPaymentDatabaseId(res: IResponse | IError): number | never {
  if (isSuccess(res)) {
    return res.data.databaseId;
  } else {
    throw new Error();
  }
}
