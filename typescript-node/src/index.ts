import { Hero } from './decorators/Hero';

const wolverine = new Hero('Wolverine');

// (Hero.prototype as any).customName = 'X-Men Wolverine';
// wolverine.api = 'https://developer.some.com';
wolverine.saveHero(1000);
console.log(wolverine);
