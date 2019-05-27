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

console.log(maxProfit([1, 2, 0, 3, 13, 9, 16, 18, 13]));  // 1, -2, 3, 10, -4, 7, 2, -5
console.log(maxProfit([10, 8, 6, 5]));


// 36进制加法

// 给定一个数列，对每个数，找出后面第一个比他大的，例如2,3,1,5,6,0,9输出3,5,5,6,9,9