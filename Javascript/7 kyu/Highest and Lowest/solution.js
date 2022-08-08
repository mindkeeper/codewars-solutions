function highAndLow(numbers) {
  const minMaxArray = numbers.split(" ").map(Number);
  const min = Math.min(...minMaxArray);
  const max = Math.max(...minMaxArray);
  const res = `${max} ${min}`;

  return res;
}
