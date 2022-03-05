(function () {
  const getEnum = (): number => 1;

  enum NumberDirection {
    Up = 10,
    Down,
    Left,
    Right,
  }

  enum StringDirection {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT',
  }

  enum Decision {
    Yes = 1,
    No = getEnum(),
  }

  const runEnum = (obj: { Up: string }): void => {};

  runEnum(StringDirection);

  enum Test {
    A,
  }

  const enum ConstEnum {
    A,
    B,
  }

  const c = ConstEnum.A;

  const test = Test.A;
  const nameA = Test[test];
  const aName = Test[Test.A];

  enum Dice {
    One = 1,
    Two,
    Tree,
  }

  function engDice(dice: Dice) {
    switch (dice) {
      case Dice.One:
        return 'One';
      case Dice.Two:
        return 'Two';
      case Dice.Tree:
        return 'Tree';
      default:
        const a: never = dice;
    }
  }
})();
