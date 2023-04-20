(() => {
  const fullName = (firstName: string, ...restArgs: string[]): string => {
    return `${firstName} ${restArgs.join(' ')}`;
  };

  const name = fullName('Gael', 'Pompa', 'Ciambrino');
  console.log({ name });
})();
