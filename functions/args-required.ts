(() => {
  function maxOfTwoNumbers(a: number, b: number): number {
    if (a > b) {
      return a;
    } else {
      return b;
    }
  }

  const max = maxOfTwoNumbers(48, 40);
  console.log({ max });

  const fullName = (firstName: string, lastName: string): string => {
    return `${firstName} ${lastName}`;
  };

  const name = fullName('Gael', 'Pompa');
  console.log({ name });
})();
