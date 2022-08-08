function maps(x) {
  let result = [];

  x.forEach((e) => {
    result = [...result, e * 2];
  });

  return result;
}
