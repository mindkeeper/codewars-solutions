var countSheep = function (num) {
  //your code here
  const count = Math.abs(num);
  let result = [];

  for (let i = 1; i <= count; i++) {
    result = [...result, `${i} sheep...`];
  }
  return result.join("");
};
