(() => {
  type Person = {
    name: string;
    surnames: string;
    age: number;
    email: string;
    getName?: () => string;
    getSurnames?: () => string;
    getAge?: () => number;
    getEmail?: () => string;
  };

  const daniel: Person = {
    name: 'Daniel',
    surnames: 'Pompa Pareja',
    age: 48,
    email: 'daniel.pompa@gmail.com',

    getName(): string {
      return this.name;
    },
    getSurnames(): string {
      return this.surnames;
    },
    getAge(): number {
      return this.age;
    },
    getEmail(): string {
      return this.email;
    },
  };

  console.log(daniel);
  console.log(daniel.getName?.());
  console.log(daniel.getSurnames?.());
  console.log(daniel.getAge?.());
  console.log(daniel.getEmail?.());
})();
