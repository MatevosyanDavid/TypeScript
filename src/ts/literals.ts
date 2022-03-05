(function () {
  const literal: 'literal' = 'literal';

  type actionType = 'up' | 'down';

  const performAction = (action: actionType): -1 | 0 | 1 => {
    switch (action) {
      case 'up':
        return 1;
      case 'down':
        return -1;
      default:
        return 0;
    }
  };
})();
