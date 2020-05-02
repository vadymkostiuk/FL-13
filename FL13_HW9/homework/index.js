const CONVERT = (...strOrNum) => {
  let args = [];

  for (let i = 0; i < strOrNum.length; i++) {
    typeof strOrNum[i] === 'string' ? strOrNum[i] = +strOrNum[i] : strOrNum[i] = `${strOrNum[i]}`;
    args[i] = strOrNum[i];
  }

  return args;
  };

// console.log(CONVERT('1', 2, 3, '4'));