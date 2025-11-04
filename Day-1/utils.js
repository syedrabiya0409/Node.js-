function greet(name) {
  return `Hello, ${name}!`;
}

function add(a, b) {
  return a + b;
}

export default function processData(name, a, b) {
  const greeting = greet(name);
  const sum = add(a, b);
  return `${greeting} The sum of ${a} and ${b} is ${sum}.`;
}

export { greet, add };
