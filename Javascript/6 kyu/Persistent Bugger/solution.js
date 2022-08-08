function persistence(num) {
  let resultCount = 0;
  while (num.toString().length > 1) {
    num = num
      .toString()
      .split("")
      .reduce((a, b) => (a *= b), 1);
    resultCount++;
  }
  return resultCount;
}
