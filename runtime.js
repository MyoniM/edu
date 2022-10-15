function print(...args) {
  console.log(...args);
}

function add(...args) {
  if (args.length === 0) return NaN;
  const init = 0;
  const sum = args.reduce((prev, curr) => prev + curr, init);
  return sum;
}

function subtract(...args) {
  if (args.length === 0) return NaN;
  const init = args[0] * 2;
  const diff = args.reduce((prev, curr) => prev - curr, init);
  return diff;
}

function multiply(...args) {
  if (args.length === 0) return NaN;
  const init = 1;
  const mult = args.reduce((prev, curr) => prev * curr, init);
  return mult;
}

function divide(...args) {
  if (args.length === 0) return NaN;
  const init = args[0] * args[0];
  const div = args.reduce((prev, curr) => prev / curr, init);
  return div;
}

function modulus(x, y) {
  return x % y;
}

function sqrt(x) {
  return Math.sqrt(x);
}

function pow(x, y) {
  return Math.pow(x, y);
}

function floor(x) {
  return Math.floor(x);
}

function ceil(x) {
  return Math.ceil(x);
}

function concat(s1, s2) {
  return s1 + s2;
}

function eq(x, y) {
  return x === y;
}

function $if(cond, consequent, alternate) {
  if (cond) return consequent();
  else return alternate();
}

function or(cond1, cond2) {
  return cond1 || cond2;
}

function and(cond1, cond2) {
  return cond1 && cond2;
}

function at(iterable, index) {
  return iterable[index];
}

function repeat(string, times) {
  let result = '';
  for (let i = 0; i < times; i++) {
    result += string;
  }
  return result;
}

function range(start, end) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

function each(arr, fun) {
  arr.forEach((e) => fun(e));
}
