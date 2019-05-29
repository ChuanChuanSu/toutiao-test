// 给定N个时刻的股票价格，只能持有一股，求最大收益
function maxProfit(arr) {
  let diffArr = []; // 数列的差值数组，将问题转化为求最大子数组和问题
  for (let i = 1; i < arr.length; i++) {
    diffArr.push(arr[i] - arr[i - 1]);
  }
  let maxSum = diffArr[0];
  let currSum = 0;
  for (let i = 0; i < diffArr.length; i++) {
    currSum = Math.max(diffArr[i], diffArr[i] + currSum);
    maxSum = Math.max(currSum, maxSum);
  }

  return maxSum;
}

// console.log(maxProfit([1, 2, 0, 3, 13, 9, 16, 18, 13]));  // 1, -2, 3, 10, -4, 7, 2, -5
// console.log(maxProfit([10, 8, 6, 5]));


// 36进制加法
// 0-9，a-z
function tsAdd(a, b) {
  const num1 = tsToTen(a);
  const num2 = tsToTen(b);
  if (num1.indexOf('*') >= 0 || num2.indexOf('*') >= 0) {
    return 'Input Error!'
  }
  const len = Math.max(num1.length, num2.length);
  let result = new Array(len);
  let addOne = false; // 进一位
  if (num1.length < len) {
    for (let i = 0; i < len - num1.length; i++) {
      num1.shift(0);
    }
  }
  if (num2.length < len) {
    for (let i = 0; i < len - num2.length; i++) {
      num2.shift(0);
    }
  }

  for (let i = len - 1; i >= 0; i--) {
    let res;
    if (addOne) {
      res = num1[i] + num2[i] + 1;
    } else {
      res = num1[i] + num2[i];
    }
    addOne = false;
    if (res > 35) {
      addOne = true;
      result[i] = res % 36; 
    } else {
      addOne = false;
      result[i] = res;
    }
  }
  if (addOne) {
    result.unshift(1);
  }

  return tenToTs(result);
}

function tenToTs(num) {  // 10进制到36进制
  // const ori = num.split('');
  const processed = num.map((item) => {
    if (item >= 0 && item <= 9) {
      return item;
    } else if (item >= 10 && item <= 35) {
      return String.fromCharCode(item + 87);
    }
    return '*';
  });

  return processed.join('');
}

function tsToTen(num) { // 36进制到10进制
  const ori = num.split('');
  const processed = ori.map((item) => {
    if (item >= '0' && item <= '9') {
      return parseInt(item, 10);
    } else if (item >= 'a' && item <= 'z') {
      return item.charCodeAt() - 87;
    }
    return '*';
  });

  return processed;
}
// console.log(tsToTen('134azzA'));
// console.log(tenToTs([1, 3, 4, 10, 35, 35, "*"]));
// console.log(tsAdd('1','z'));


// 给定一个数列，对每个数，找出后面第一个比他大的，例如2,3,1,5,6,0,9输出3,5,5,6,9,9
function findBigger(arr) {
  let result = [];
  let sign = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[sign]) {
      for (let j = sign; j < i; j++) {
        result[j] = arr[i];
      }
      sign = i;
    }
  }

  return result;
}

console.log(findBigger([2, 3, 1, 5, 6, 0, 9]));
console.log(findBigger([4, 3, 2, 1]));
