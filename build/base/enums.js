"use strict";
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["CANCELED"] = 0] = "CANCELED";
    StatusCode[StatusCode["IN_PROGRESS"] = 1] = "IN_PROGRESS";
    StatusCode[StatusCode["SUCCESS"] = 2] = "SUCCESS";
})(StatusCode || (StatusCode = {}));
const data = {
    message: 'Pay Created successful',
    statusCode: StatusCode.SUCCESS,
};
function action(code) {
    console.log(code);
}
const num = 1;
action(num);
