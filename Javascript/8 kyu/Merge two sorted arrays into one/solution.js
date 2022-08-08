function mergeArrays(arr1, arr2) {
  let result = [];
  arr1.forEach((e) => {
    if (!result.includes(e)) result.push(e);
  });
  arr2.forEach((e) => {
    if (!result.includes(e)) result.push(e);
  });
  return result.sort((a, b) => a - b);
}
