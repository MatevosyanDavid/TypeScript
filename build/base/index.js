"use strict";
const iUser = {
    name: 'Steve',
    login: 'dav@mail.ru',
    mail: 'dav@mail.ru',
};
const admin1 = Object.assign(Object.assign({}, iUser), { role: 1 });
function userIsAdmin(user) {
    return 'role' in user;
}
function userIsAdminAlt(user) {
    return !!user.role;
}
function changeRole(user) {
    if (userIsAdminAlt(user)) {
        user.role = 0;
    }
    else {
        throw new Error('Not is Admin');
    }
}
