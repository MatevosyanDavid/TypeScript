"use strict";
class User {
    constructor(name, age) {
        age && (this.age = age);
        name && typeof name === 'string' && (this.name = name);
    }
}
const user = new User('John');
const user2 = new User('John');
class Dev {
    addSkills(skills) {
        if (Array.isArray(skills)) {
            this.skills = [...this.skills, ...skills];
        }
        else {
            this.skills.push(skills);
        }
    }
}
const dev = new Dev();
function run(distance) {
    return typeof distance === 'number' ? distance * 100 : distance;
}
run(100);
run('100');
