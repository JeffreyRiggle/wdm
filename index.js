import * as antlr4 from 'antlr4';
import wdmParser from './wdmParser.js';
import wdmLexer from './wdmLexer.js';
import JavascriptGenerator from './javascript-generator.js';
import WatGenerator from './wat-generator.js';
import * as fs from 'node:fs';
import { exec } from 'node:child_process';

const input = fs.readFileSync('./input.wdm', 'utf8');
const chars = new antlr4.InputStream(input);
const lexer = new wdmLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new wdmParser(tokens);
parser.buildParseTrees = true;
const tree = parser.program();
const jsBuilder = new JavascriptGenerator(tree);

let builtJS = jsBuilder.generate();
if (!fs.existsSync('./gen')) {
  fs.mkdirSync('./gen')
}
fs.writeFileSync('./gen/program.js', builtJS);

const watBuilder = new WatGenerator(tree);
let builtWAT = watBuilder.generate();

fs.writeFileSync('./gen/program.wat', builtWAT);
exec('../wabt/build/wat2wasm ./gen/program.wat -o ./gen/program.wasm', (error, stdout, stderr) => {
  if (error) {
    console.error(`Execution error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Shell error: ${stderr}`);
    return;
  }
  console.log('Finished wasm generation');
});