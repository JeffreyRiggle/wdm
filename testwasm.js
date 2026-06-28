import * as fs from 'fs';

async function runWasmNode() {
  const wasmBuffer = fs.readFileSync('./gen/program.wasm');
  const wasmModule = await WebAssembly.instantiate(wasmBuffer, {
    env: { floor: Math.floor }
  });

  const { main, main2, main3, abs } = wasmModule.instance.exports;
  console.log(main(-2));
  console.log(main2());
  console.log(main3());
  console.log(abs(-12));
}

runWasmNode();