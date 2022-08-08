function squareDigits(num) {
  const array = Array.from(String(num), Number);
  let res = [];

  array.forEach((e) => {
    res = [...res, e ** 2];
  });

  return Number(res.join(""));
}
