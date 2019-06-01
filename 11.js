// 两个链表求和，（每个链表的节点表示一个数的一位，注意正向和反向的问题）
// 假设链表第一个节点表示个位，输出结果同上。

let addOne = false;
let result = [];
function add(a, b) {
  if (!a && !b) {
    if (addOne) {
      result.unshift(1);
    }
    return null;
  } else if (!a) {
    let sum = b.val;
    if (addOne) {
      sum++;
    }
    addOne = false;
    if (sum > 9) {
      addOne = true;
    }
    result.unshift(sum % 10);
    add(null, b.child);
  } else if (!b) {
    let sum = a.val;
    if (addOne) {
      sum++;
    }
    addOne = false;
    if (sum > 9) {
      addOne = true;
    }
    result.unshift(sum % 10);
    add(a.child, null);
  } else {
    let sum;
    if (addOne) {
      sum = a.val + b.val + 1;
    } else {
      sum = a.val + b.val;
    }
    addOne = false;
    if (sum > 9) {
      addOne = true;
    }
    result.unshift(sum % 10);
    add(a.child, b.child);
  }
}

add(
  {
    val: 1,
    child: {
      val: 8,
      child: {
        val: 3
      }
    }
  },
  {
    val: 5,
    child: {
      val: 8,
      child: {
        val: 8,
        child: {
          val: 9
        }
      }
    }
  }
);

console.log(result.join(''));