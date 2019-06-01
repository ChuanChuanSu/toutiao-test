// 给一个包含n个整数元素的集合a，一个包含m个整数元素的集合b。
// 定义magic操作为，从一个集合中取出一个元素，放到另一个集合里，切操作过后每个集合的平均值都大于操作前。
// 注意一下两点：

// 不可以把一个集合的元素取空，这样就没有平均值了
// 值为x的元素从集合b取出放入集合a，但集合a中已经有值为x的元素，则a的平均值不变(因为集合元素不会重复)，b的平均值可能会改变(因为x被取出了)
// 问最多可以进行多少次magic操作？

// 输入的第一行为两个整数n，m
// 第二行n个整数，表示集合a中的元素
// 第三行m个整数，表示集合b中的元素
// 对于100%的数据，1<n,m<1000000<a[i],b[i]<100000000，集合a中元素互不相同，集合b中的元素互不相同。
// 输出最大操作数
// 样例
// in:
// 3 5
// 1 2 5
// 2 3 4 5 6
// out:
// 2

function magic(arrx, arry) {
  let a = sort(arrx);
  let b = sort(arry);
  let count = 0;
  let exchange = true;
  while (exchange) {
    const avea = average(a);
    const aveb = average(b);
    if (avea === aveb) {
      break;
    } else if (avea > aveb) {
      for (let i = 0; i < a.length; i++) {
        if (a[i] < avea && a[i] > aveb && b.indexOf(a[i]) === -1) {
          b.push(a[i]);
          b= sort(b);
          a.splice(i, 1);
          count++;
          break;
        } else if (a[i] >= avea) {
          exchange = false;
          break;
        }
      }
    } else {
      for (let i = 0; i < b.length; i++) {
        if (b[i] < aveb && b[i] > avea && a.indexOf(b[i]) === -1) {
          a.push(b[i]);
          a= sort(a);
          b.splice(i, 1);
          count++;
          break;
        } else if (b[i] >= aveb) {
          exchange = false;
          break;
        }
      }
    }
  }

  console.log(count);
}

function average(a) {
  return a.reduce((acc, cur) => acc + cur) / a.length;
}

function sort(a) {
  return a.sort((pre, cur) => pre - cur);
}

magic([1, 2, 5], [2, 3, 4, 5, 6]);