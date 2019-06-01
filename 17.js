// 给定一个数据序列，需要求选一个区间，使得该区间是所有区间中经过如下计算的指的最大的一个：
// 区间中的最小数*区间所有数的和
// 最后程序输出经过计算后的最大值即可，不需要输出具体的区间。如给定序列[6 21]则根据上述公式，可得到所有恶意选定各个区间的计算值：
// [6]=6*6=36
// [2]=2*2=4
// [1]=1*1=1
// [6，2]=2*8=16
// [2,1]=1*3=3
// [6,2,1]=1*9=9
// 从上述计算可见选定区间[6]，计算值为36，则程序输出为36.
// 区间内所有数字都在[0,100]的范围内；
// 输入：
// 第一行输入数组序列个数，第二行输入数组序列
// 输出：
// 输出数组经过计算后的最大值

function maxium(arr) {
  let max = 0;
  for (let i = 100; i >= 0; i--) {
    if (arr.indexOf(i) > -1) {
      let index = arr.indexOf(i);
      while (index > -1) {
        let sum = i;
        for (let j = index - 1; arr[j] >= i; j--) {
          sum += arr[j];
        }
        for (let j = index + 1; arr[j] >= i; j++) {
          sum += arr[j];
        }
        if (sum * i > max) {
          max = sum * i;
        }

        index = arr.indexOf(i, index + 1);
      }
    }
  }

  console.log(max);
}

maxium([6, 2, 1]);