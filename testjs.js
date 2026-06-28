import { abs, main, main2, main3, setImports } from './gen/program.js';

setImports({
    floor: Math.floor
})
console.log(main(-2));
console.log(main2());
console.log(abs(-12));
console.log(main3());