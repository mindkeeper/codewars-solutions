function findOdd(A) {
  let result = 0;
  let res = [];

  A.forEach((e, i) => {
    res = A.filter((value) => value === A[i]).length;
    if (res % 2 == 1) {
      result = A[i];
    }
  });
  return result;
}
