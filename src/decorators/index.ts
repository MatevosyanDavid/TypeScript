interface IUserService {
  users: number;
  getUserInDataBase(): number;
}

@getNullUser
@getNullUserAdvanced
@CreatedAt
class UserService implements IUserService {
  users: number = 1000;

  getUserInDataBase(): number {
    return this.users;
  }
}

function getNullUser(target: Function) {
  target.prototype.users = 0;
}

function getNullUserAdvanced<T extends new (...args: any[]) => {}>(target: T) {
  return class extends target {
    user = 3;
  };
}

console.log(new UserService().getUserInDataBase());

function CreatedAt<T extends new (...args: any[]) => {}>(constructor: T) {
  return class extends constructor {
    createdAt: Date = new Date();
  };
}

interface ICreatedAt {
  createdAt: Date;
}

console.log((new UserService() as IUserService & ICreatedAt).createdAt, '>>>>>>>');

function Uni(name: string): any {
  console.log(`Initialization ${name}`);

  return function () {
    console.log(name);
  };
}

@Uni('Class')
class Uniform {
  @Uni('Property')
  props?: any;

  @Uni('Method')
  method(@Uni('Method') _: any) {}

  constructor(@Uni('Constructor') _: any) {}
}
