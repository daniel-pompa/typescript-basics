(() => {
  type Person = {
    name: string;
    surnames: string;
    age: number;
    email?: string;
    getName?: () => string;
    getSurnames?: () => string;
    getAge?: () => number;
    getEmail?: () => string;
  };

  let myCustomVariable: string | number | Person = 'Daniel';

  console.log(myCustomVariable);
  console.log(typeof myCustomVariable);

  myCustomVariable = 48;
  console.log(myCustomVariable);
  console.log(typeof myCustomVariable);

  myCustomVariable = {
    name: 'Gael',
    surnames: 'Pompa Ciambrino',
    age: 1,
  };

  console.log(myCustomVariable);
  console.log(typeof myCustomVariable);
})();
