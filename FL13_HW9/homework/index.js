const CONVERT = (...strOrNum) => {
  let args = [];

  for (let i = 0; i < strOrNum.length; i++) {
    typeof strOrNum[i] === 'string' ? strOrNum[i] = Number(strOrNum[i]) : strOrNum[i] = String(strOrNum[i]);
    args[i] = strOrNum[i];
  }

  return args;
  };

let executeForEach = (array, func) => {

  for (let el = 0; el < array.length; el++) {
    func(array[el]);
  }

};

let mapArray = (arr, func) => {
  let newArr = [];

  executeForEach(arr, item => {
      newArr.push(func(Number(item)));
  });

  return newArr;
};

const FILTER_ARRAY = (arr, func) => {
  let newArr = [];

  executeForEach(arr, item => {
    if (func(item)) {
      newArr.push(item);
    }
  });

  return newArr;
};

const CONTAINS_VALUE = (arr, num) => {
  let result = false;

  executeForEach(arr, el => {

    if (el === num) {
      result = true;
    }

  });

  return result;
};

const FLIP_OVER = words => {
  let reverse = '';

  for (let i = words.length - 1; i >= 0; i--) {
    reverse += words[i];
  }

  words = `'${reverse}'`;

  return words;
};

const MAKE_LIST_FROM_RANGE = array => {
  let result = [];

  if (array[0] > array[1]) {

    for (let i = array[1]; i <= array[0]; i++) {
      result.push(i);
    }

  } else {

    for (let i = array[0]; i <= array[1]; i++) {
      result.push(i);
    }

  }

  return result;
};

const GET_ARRAY_OF_KEYS = (arr, key) => {
  let newArr = [];

  executeForEach(arr,obj => {
    newArr.push(obj[key]);
  });

  return newArr;
};

const SUBSTITUTE = arr => {
  let newArr = [];
  const LOWER_THAN = 20;
  const GREATER_THAN = 10;

  mapArray(arr, num => {

    if(num < LOWER_THAN && num > GREATER_THAN) {
      num = '*';
    }

    newArr.push(num);
  });

  return newArr
};

const GET_PAST_DAY = (date, day) => {
  date.setDate(date.getDate() - day);

  return date.getDate();
};

const FORMAT_DATE = time => {
  const YEAR = time.getFullYear();
  const MAX_VAL = 10;
  const MONTH = time.getMonth() + 1;
  const DAY = time.getDate();
  const HOURS = time.getHours();
  const MINUTES = time.getMinutes();

  let prefixZero = time => time > MAX_VAL ? time : `0${time}`;

  return `${YEAR}/${prefixZero(MONTH)}/${prefixZero(DAY)} ${prefixZero(HOURS)}:${prefixZero(MINUTES)}`
};