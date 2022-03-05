(function () {
  const array: [number, string, [], {}, undefined | null, bigint, symbol] = [
    1,
    '2',
    [],
    {},
    undefined,
    BigInt(10),
    Symbol('name'),
  ];

  array.push(() => {});

  const [num, str, ...rest] = array;
})();
