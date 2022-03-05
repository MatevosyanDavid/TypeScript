class User {
  constructor(
    readonly name: string,
    public surname: string,
    private nickname: string,
    protected password: string,
  ) {
    this.name = name;
    this.surname = surname;
    this.nickname = nickname;
    this.password = password;
  }
}

class UserData extends User {
  constructor(
    public name: string,
    public surname: string,
    public nickname: string,
    public password: string,
  ) {
    super(name, surname, nickname, password);
  }
}

const user = new User('Steve', 'Jobs', 'Apple INC', 'Macbook2021');
const user1 = new UserData('Steve', 'Jobs', 'Apple INC', 'Macbook2021');

user.name;
user.surname;
// Property 'nickname' is private in type 'User' but not in type 'UserData'.
user.nickname;
// Property 'password' is protected and only accessible within class 'User' and its subclasses.
user.password = 'test';

user1.password;
user1.nickname;
