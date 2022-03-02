// enum StatusCode {
//   CANCELED = 'canceled',
//   IN_PROGRESS = 'inProgress',
//   SUCCESS = 'success',
// }

enum StatusCode {
  CANCELED,
  IN_PROGRESS,
  SUCCESS,
}

const data = {
  message: 'Pay Created successful',
  statusCode: StatusCode.SUCCESS,
};

function action(code: StatusCode) {
  console.log(code);
}

const num: number = 1;

action(num);
