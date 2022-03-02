"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getFullName(user) {
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
var Statuses;
(function (Statuses) {
    Statuses["PUBLISHED"] = "published";
    Statuses["DRAFT"] = "draft";
    Statuses["DELETED"] = "deleted";
})(Statuses || (Statuses = {}));
function getFaqs(req) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch('/faqs', {
            method: 'POST',
            body: JSON.stringify(req),
        });
        const data = yield res.json();
        return data;
    });
}
const userData = {
    4: 'hello',
    get(key) {
        return this[key];
    },
    data: getFaqs({ topicId: 12, status: Statuses.DRAFT }),
};
const set = new Set();
set.add('hello');
function getSum(a, b = 10) {
    return a + b;
}
getSum(100);
const ERROR_MESSAGE = 'Insufficient funds';
var StatusNames;
(function (StatusNames) {
    StatusNames["SUCCESS"] = "success";
    StatusNames["FILED"] = "filed";
})(StatusNames || (StatusNames = {}));
function getPayment(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const requestInit = {
            body: JSON.stringify(data),
        };
        const response = yield fetch('/', requestInit);
        try {
            const json = yield response.json();
            return json;
        }
        catch (e) {
            const error = {
                status: StatusNames.FILED,
                data: {
                    errorMessage: ERROR_MESSAGE,
                    errorCode: 404,
                },
            };
            return error;
        }
    });
}
function isSuccess(res) {
    return res.status === StatusNames.SUCCESS;
}
function getPaymentDatabaseId(res) {
    if (isSuccess(res)) {
        return res.data.databaseId;
    }
    else {
        throw new Error();
    }
}
