(() => {
  const addNumbers = (a: number, b: number) => a + b;
  const greet = (name: string) => `Hola ${name}`;
  const myBelovedSon = () => 'Gael Pompa Ciambrino';

  /* Accepts the three functions */
  // let myFunction: Function;

  // myFunction = addNumbers;
  // console.log({ myFunction });
  // console.log(myFunction(40, 8));

  // myFunction = greet;
  // console.log({ myFunction });
  // console.log(myFunction('Gael'));

  // myFunction = myBelovedSon;
  // console.log({ myFunction });
  // console.log(myFunction());

  /* Only accepts numbers and returns a number */
  // let myFunction: (a: number, b: number) => number;
  // myFunction = addNumbers;
  // console.log({ myFunction });
  // console.log(myFunction(40, 8));

  /* Only accepts strings and returns a string */
  // let myFunction: (name: string) => string;
  // myFunction = greet;
  // console.log({ myFunction });
  // console.log(myFunction('Gael'));

  let myFunction = myBelovedSon;
  myFunction = myBelovedSon;
  console.log({ myFunction });
  console.log(myFunction());
})();
