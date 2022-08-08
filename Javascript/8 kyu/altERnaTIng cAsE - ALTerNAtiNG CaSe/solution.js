String.prototype.toAlternatingCase = function () {
  let result = [];
  let array = this.split("");

  array.forEach((e) => {
    if (e === e.toLowerCase()) {
      result.push(e.toUpperCase());
    } else {
      result.push(e.toLowerCase());
    }
  });

  return result.join("");
};
