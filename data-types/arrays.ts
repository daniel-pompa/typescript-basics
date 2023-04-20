(() => {
  const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log({ numbers });

  const technologies = ['TypeScript', 'MongoDB', 'Express', 'Node.js', 'React'];
  technologies.forEach((tech, i) => console.log(`[${i}] ${tech}`));
})();
