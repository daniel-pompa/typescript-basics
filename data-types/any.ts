(() => {
  let avenger: any = 123;
  avenger = 'Iron Man';

  console.log({ avenger });
  console.log((avenger as string).charAt(0));
})();
