(function () {
  const number: number = 34;

  const arr: string[] | number[] = ['test'];

  function add(a: number, b: number): number | string {
    return a + b || '';
  }

  const newArr: string[] = arr.map((el: string) => el.toLowerCase());

  function user(coord: { name: string; surname: string; age?: number }) {
    return coord.name + coord.surname;
  }

  function printed(id: number | string) {
    if (typeof id === 'number') {
      id.toFixed(3);
    } else {
      id.toUpperCase();
    }
  }

  const getSum = (a: number | []): number =>
    Array.isArray(a) ? a.reduce((acc: number, item: number): number => acc + item, 0) : a * 2;
})();
