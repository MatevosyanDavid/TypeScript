class Pointer {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Pointers extends Array<Pointer> {}

new Pointers().push({ name: 'Steve' } as Pointer);
