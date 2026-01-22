function createCounter() {
  let count = 0;

  return {
    increment() {
      return ++count;
    },
    decrement() {
      return --count;
    },
    value() {
      return count;
    }
  };
}

function loggedAdder(a, b) {
  const sum = a + b;
  console.log(`Adding ${a} and ${b} to get ${sum}`);
  return sum;
}

const add = loggedAdder;
module.exports = createCounter;
