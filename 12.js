// 字符串的全排列
let result = [];
function permutation(arr, k) {
  if (k === arr.length - 1) {
    result.push(arr);
  } else {
    for (let i = k; i < arr.length; i++) {
      if (i === k) {
        permutation(arr.slice(), k + 1);
      } else {
        let tempArr = arr.slice();
        let temp = tempArr[k];
        tempArr[k] = tempArr[i];
        tempArr[i] = temp;
        permutation(tempArr, k + 1);
      }
    }
  }
}

permutation(['a', 'b', 'c', 'd'], 0);


for (let i = 0; i < result.length; i++) {
  console.log(result[i]);
}