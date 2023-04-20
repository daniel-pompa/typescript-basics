(() => {
  const balance: number = 300;
  const pay: number = 500;
  const creditCard: boolean = true;

  console.log({ balance });
  console.log({ pay });
  console.log({ creditCard });

  if (balance >= pay) {
    console.log('Puedes pagar con tu saldo');
  } else if (creditCard) {
    console.log('Puedes pagar con tu tarjeta de crédito');
  } else {
    console.log('No tienes saldo suficiente');
  }
})();
