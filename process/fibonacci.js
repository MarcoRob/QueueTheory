module.exports = async ({ data }) => {
  const { num } = data;
  const calculate = fibonacci(num);
  console.log("Result", calculate);
};

function fibonacci(num) {
  console.log("num", num);
  if (num <= 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}
