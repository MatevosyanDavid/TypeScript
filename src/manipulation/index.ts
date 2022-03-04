interface IUsers {
  name: string;
  age: number;
}

type types = keyof IUsers;

const u: IUsers = {
  name: 'John',
  age: 23,
};

const f: types = 'age';

function getValue<T, K extends keyof T>(data: T, key: K) {
  return data[key];
}

interface IGroup {
  id: number;
  name: string;
}

const groups: IGroup[] = [
  { id: 1, name: 'f' },
  { id: 2, name: 'e' },
  { id: 3, name: 'd' },
  { id: 1, name: 'c' },
  { id: 2, name: 'b' },
  { id: 3, name: 'a' },
];

function getGroups<T, K extends keyof T>(groups: Array<T>, key: K) {
  return groups.sort((a: T, b: T) => Number(a[key]) - Number(b[key]));
}

const id = 'id';

type role = IGroup['id'];
type role1 = IGroup[typeof id];

interface IPersistentOwner {
  dbId: string;
}

interface IOwner {
  id: number;
}

class Owner {
  id: number;
}

class PersistentOwner extends Owner {
  dbId: string;
}

function getOwner(id: number): IOwner;
function getOwner(dbId: string): IPersistentOwner;
function getOwner(dbIdOrId: string | number): IOwner | IPersistentOwner {
  if (typeof dbIdOrId === 'string') {
    return new PersistentOwner();
  } else {
    return new Owner();
  }
}

type OwnerOrPersistentOwner<T> = T extends number ? IOwner : IPersistentOwner;

function getOwnerUser<T extends number | string>(
  dbIdOrId: string | number,
): OwnerOrPersistentOwner<T> {
  if (typeof dbIdOrId === 'string') {
    return new PersistentOwner();
  } else {
    return new Owner() as OwnerOrPersistentOwner<T>;
  }
}

type Modifier = 'read' | 'update' | 'create';

type UserRoles = {
  Projects?: Modifier;
  Customers: Modifier;
  AdminPanel?: Modifier;
};

type ModifiedToAccess<T> = {
  // +readonly [Property in keyof T as `canAccess${string & Property}`]-?: boolean;
  [Property in keyof T as Exclude<`canAccess${string & Property}`, 'canAccessProjects'>]-?: boolean;
};

type UserAccess = ModifiedToAccess<UserRoles>;

// type ModifiedToAccess = {
//   isOpened: boolean;
//   isClosed: boolean;
// };

type readOrWrite = 'read' | 'write';
type bulk = 'bulk' | '';

type access = `can${Capitalize<readOrWrite>}${Capitalize<bulk>}`;

type OmittedUserRoles = Omit<UserRoles, 'Projects'>;

type ExtractEx = Extract<'Project', string>;
