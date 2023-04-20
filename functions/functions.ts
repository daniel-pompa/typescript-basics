(() => {
  const hero: string = 'Wolverine';

  function returnName(): string {
    return hero;
  }

  const heroName = returnName();
  console.log({ heroName });
})();
