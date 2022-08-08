const quarterOf = (month) => {
  if (month >= 1 && month < 4) {
    return 1;
  } else if (month < 7) {
    return 2;
  } else if (month < 10) {
    return 3;
  } else if (month <= 12) {
    return 4;
  } else {
    return -1;
  }
};
