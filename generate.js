const { fs } = require('mz');

async function main() {
  const fileName = process.argv[2];
  const astString = (await fs.readFile(fileName)).toString();
  const runtimeJs = (await fs.readFile('runtime.js')).toString();
  const ast = JSON.parse(astString);

  const outputFileName = fileName.replace('.ast', '.js');
  const jsCode = generate(ast);
  await fs.writeFile(outputFileName, jsCode + '\n\n' + runtimeJs);
  console.log(`Wrote to ${outputFileName}`);
}

function generate(ast) {
  console.log('Generating js code');

  const blocs = [];
  for (let node of ast) {
    const bloc = generateJsFromExpr(node);
    blocs.push(bloc);
  }
  return blocs.join('\n');
}

function generateJsFromExpr(node) {
  switch (node.type) {
    case 'var_assign':
      const varName = node.var_name.value;
      const expr = generateJsFromExpr(node.value);
      const js = `var ${varName} = ${expr}`;
      return js;
    case 'func_call':
      let funcName = node.func_name.value;
      const args = node.args.map((arg) => generateJsFromExpr(arg)).join(', ');
      return `${funcName}( ${args} )`;
    case 'lambda':
      const params = node.params.map((param) => param.value).join(', ');
      const funcBody = node.body
        .map((arg, i) => {
          let jsCode = generateJsFromExpr(arg);
          if (i === node.body.length - 1) {
            jsCode = 'return ' + jsCode;
          }
          return jsCode;
        })
        .join(';\n');
      return `function ( ${params} ) {\n${indent(funcBody)}\n}`;
    case 'identifier':
      return node.value;
    case 'string':
      return node.value;
    case 'number':
      return node.value;
    case 'boolean':
      return node.value;
    case 'array':
      return `[${node.value.map((arg) => arg.value).join(", ")}]`;
    case 'comment':
      return node.value;

    default:
      throw new Error(`unhandled node, ${JSON.stringify(node)}`);
  }
}

function indent(string) {
  return string
    .split('\n')
    .map((line) => '  ' + line)
    .join('\n');
}
main().catch((e) => console.log(e));
