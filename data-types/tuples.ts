(() => {
  const hero: [string, number, boolean] = ['Hulk', 100, false];

  hero[0] = 'Wolverine';
  hero[1] = 90;
  hero[2] = true;

  console.log(hero);
})();
