const POSITIVE_SUM = ([...arrayNum]) => {
  const FILTER = arrayNum.filter(num => num > 0);
  return FILTER.reduce((total, currentValue) => total + currentValue);
};

console.log(POSITIVE_SUM(([0, -3, 5, 7])));