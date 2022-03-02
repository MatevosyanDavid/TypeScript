interface IUser {
  name: string;
  login: string;
  mail: string;
}

interface IAdmin {
  role: number;
  name: string;
}

const iUser: IUser = {
  name: 'Steve',
  login: 'dav@mail.ru',
  mail: 'dav@mail.ru',
};

const admin1: IAdmin = {
  ...iUser,
  role: 1,
};

function userIsAdmin(user: IUser | IAdmin): user is IAdmin {
  return 'role' in user;
}

function userIsAdminAlt(user: IUser | IAdmin): user is IAdmin {
  return !!(user as IAdmin).role;
}

function changeRole(user: IUser | IAdmin): void | never {
  if (userIsAdminAlt(user)) {
    user.role = 0;
  } else {
    throw new Error('Not is Admin');
  }
}
