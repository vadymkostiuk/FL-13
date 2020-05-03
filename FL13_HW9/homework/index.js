const CONVERT = (...strOrNum) => {
  let args = [];

  for (let i = 0; i < strOrNum.length; i++) {
    typeof strOrNum[i] === 'string' ? strOrNum[i] = Number(strOrNum[i]) : strOrNum[i] = String(strOrNum[i]);
    args[i] = strOrNum[i];
  }

  return args;
  };

// console.log(CONVERT('1', 2, 3, '4'));

let executeForEach = (array, func) => {

  for (let el = 0; el < array.length; el++) {

    func(Number(array[el]));
  }

};

// executeForEach([1,2,3], function(el) {console.log(el * 2)});

const MAP_ARRAY = (arr, call) => {
  let newArr = [];

  executeForEach(arr, item => {
      newArr.push(call(item));
  });

  return newArr;
};

// console.log(MAP_ARRAY([2, '5', 8], function(el) {return el + 3}));

const FILTER_ARRAY = (arr, call) => {
  let newArr = [];

  executeForEach(arr, item => {
    if (call(item)) {
      newArr.push(item);
    }
  });

  return newArr;
};

// console.log(FILTER_ARRAY([2, 5, 8], function(el) { return el % 2 === 0 }));

const CONTAINS_VALUE = (arr, num) => {
  let result = false;

  executeForEach(arr, el => {
    if (el === num) {
      result = true;
    }
  });

  return result;
};

// console.log(CONTAINS_VALUE([2, 5, 8], 2));
// console.log(CONTAINS_VALUE([12, 4, 6], 5));

const FLIP_OVER = words => {
  let reverse = '';

  for (let i = words.length - 1; i >= 0; i--) {
    reverse += words[i];
  }
  words = `'${reverse}'`;
  return words;
};
// console.log(FLIP_OVER('hey world'));