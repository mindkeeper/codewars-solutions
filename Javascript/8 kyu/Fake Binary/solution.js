function fakeBin(x) {
  const bin = x.split("");
  let result = [];
  bin.forEach((e) => {
    if (e < 5) {
      result = [...result, 0];
    } else {
      result = [...result, 1];
    }
  });
  return result.join("");
}
