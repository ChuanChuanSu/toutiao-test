// 实现c++的lowerr_bound

function lowerBound(arr, start, end, target) {
  while (end >= start) {
    let count = end - start;
    let step = Math.floor(count / 2);
    const mid = start + step;
    if (arr[mid] < target) {
      start = mid + 1;
    } else if (mid === 0) {
      console.log('数列所有元素大于目标');
      return;
    }
     else {
      end = mid;
    }
  }
  if (start === end) {
    console.log(start, arr[start]);
  } else {
    console.log('数列所有元素小于目标');
  }
}

// lowerBound([1, 2, 2, 3, 4, 5, 5, 6, 7], 0, 8, 5);
lowerBound([1, 2, 3, 4], 0, 3, 0);