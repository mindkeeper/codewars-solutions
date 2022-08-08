function countPositivesSumNegatives(input) {
  let positives = 0;
  let negatives = 0;

  if (input === null || input.length === 0) {
    return [];
  } else {
    input.forEach((e) => {
      e > 0 ? positives++ : (negatives += e);
    });
  }
  const result = [positives, negatives];
  return result;
}
