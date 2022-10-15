const { fs } = require('mz');
const nearley = require('nearley');

const edu = require('./edu.js');

async function main() {
  const fileName = process.argv[2];
  const input = (await fs.readFile(fileName)).toString();

  const parser = new nearley.Parser(nearley.Grammar.fromCompiled(edu));

  parser.feed(input);
  const parseResult = parser.results;

  if (parseResult.length > 2) throw new Error('Error: Ambiguous code detected!');
  else if (parseResult.length === 0) throw new Error('Error: Grammar not found!');
  else {
    const outputFileName = fileName.replace('.edu', '.ast');
    const ast = parseResult[0];
    await fs.writeFile(outputFileName, JSON.stringify(ast, null, '  '));
    console.log(`Wrote to ${outputFileName}`);
  }
}

main();
