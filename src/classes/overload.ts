class User {
  age: number;
  name: string;

  constructor();
  constructor(name: string);
  constructor(age: number);
  constructor(name: string, age: number);
  constructor(name?: string | number, age?: number) {
    age && (this.age = age);
    name && typeof name === 'string' && (this.name = name);
  }
}

const user = new User('John');
const user2 = new User('John');

class Dev {
  skills: string[];

  addSkills(skill: string): void;
  addSkills(skills: string[]): void;
  addSkills(skills: string | string[]): void {
    if (Array.isArray(skills)) {
      this.skills = [...this.skills, ...skills];
    } else {
      this.skills.push(skills);
    }
  }
}

const dev = new Dev();

function run(distance: string): string;
function run(distance: number): number;
function run(distance: number | string): number | string {
  return typeof distance === 'number' ? distance * 100 : distance;
}

run(100);
run('100');
