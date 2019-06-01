// 给函数传递一个正整数的列表alist和一个正整数T，假装它等于[1,3,6,4,2,7]，给出alist里所有相加等于T的元素的list，
// 每个数只用一次。比如T=7，列表里3+4=7，7=7，1+6=7。你的函数就要返回[[3,4],[7],[1,6]]

function findAllList(alist, T) {
  alist.sort((a, b) => a - b);
  let flag = new Array();
  let temp = [];
  let result = [];
  for (let i = 0; i < alist.length; i++) {
    flag[i] = true;
  }
  for (let i = 0; i < alist.length; i++) {
    fn(result, temp, alist, flag, i, T);
  }

  return result;
}

function fn(result, temp, alist, flag, cur, T) {
  if (alist[cur] > T) {
    return 1; // 1 终止
  } else if (!flag[cur] && cur < alist.length - 1) {
    return 5;
  } else if (alist[cur] === T) {
    temp.push(alist[cur]);
    result.push(temp.slice());
    temp.forEach((item) => {
      flag[alist.indexOf(item)] = false;
    });
    const len = temp.length;
    for (let i = 0; i < len; i++) {
      temp.pop();
    }
    return 2; // 2 终止，成功匹配
  } else if (alist[cur] < T && cur < alist.length - 1) {
    let pos = cur;
    let pivot = 3;
    temp.push(alist[cur]);
    while (pivot === 3 || pivot === 5) {
      if (pivot === 3) {
        pivot = fn(result, temp, alist, flag, ++pos, T - alist[cur]);
      } else if (pivot === 5) {
        pivot = fn(result, temp, alist, flag, ++pos, T);
      }
    }
    if (pivot === 1) {
      temp.pop();
    }
    if (pivot != 2)
    {
      return 3; // 3，继续前面的匹配
    }
  }
  return 4; // 其他情况
}


const result = findAllList([1,3,6,4,2,7], 7);

for (let i = 0; i < result.length; i++) {
  console.log(result[i]);
}