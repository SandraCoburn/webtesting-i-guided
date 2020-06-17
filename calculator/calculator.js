module.exports = {
  add,
};

// function add(...nums) {
//   return nums.reduce((acc, n) => (acc += n ? n : 0));
// }

// function add(...numbers) {
//   return numbers.reduce((acc, num) => {
//     return (acc += num ? num : 0);
//   }, 0);
// }

function add(numbers) {
  const values = Array.isArray(numbers) ? numbers : Array.from(arguments);
  return values.reduce((sum, value = 0) => sum + value, 0);
}

// const summ = (arr) => arr.reduce((a = 0, b = 0) => a + b, 0);
// if (Array.isArray(numbers)) {
//   return summ(numbers);
// }
// return smum(numbers);
