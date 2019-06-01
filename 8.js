// 对数组arr内的元素组合进行全排列，要去重
// 假定这n个元素已按编号次序由小到大存放着数组arr中

// k表示当前已排序的元素个数
let result = [];
function permutation(arr, k) {
  if (k === arr.length - 1) {
    result.push(arr);
  }
  for (let i = k; i < arr.length; i++) {
    if (i === k) {
      permutation(arr.slice(), k + 1);
    } else if (arr[i] !== arr[i - 1]) {
      const tempArr = arr.slice();
      let temp = tempArr[k];
      tempArr[k] = tempArr[i];
      tempArr[i] = temp;
      permutation(tempArr, k + 1);
    }
  }
}

// permutation([1, 2, 2], 0);
permutation(["a", "c", "c", "d"], 0);
for (let i = 0; i < result.length; i++) {
  console.log(result[i]);
}