const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);

const { fs } = require('mz');

async function main() {
  const inputFileName = process.argv[2];
  const astFileName = inputFileName.replace(".edu", ".ast")
  const jsFileName = inputFileName.replace(".edu", ".js")

  await myExec(`node parse.js ${inputFileName}`);
  await myExec(`node generate.js ${astFileName}`);
  await myExec(`node ${jsFileName}`);
}

async function myExec(command) {
  const { stdout, stderr } = await exec(command);
  if (stdout) console.log(stdout);
  if (stderr) console.error(stderr);
}

main().catch((e) => console.log(e));
