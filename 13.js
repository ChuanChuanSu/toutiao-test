// 输入一个数n，找出小于等于n且满足以下规则的最大的数x。
// 规则：x中的从左到右的每一位都是单调不减的。

function monotoneDigits(num) {
  let n = num.toString().split('').map(item => parseInt(item, 10));
  let guard = n.length;
  let maxIndex = n.indexOf(Math.max.apply(null, n));
  while (guard > 0) {
    if (maxIndex < guard) {
      let equalMax = true;
      for (let i = maxIndex + 1; i < guard && equalMax; i++) {
        if (n[i] < n[maxIndex]) {
          equalMax = false;
        }
      }
      if (!equalMax) {
        n[maxIndex]--;
        for(let i = maxIndex + 1; i < n.length; i++) {
          n[i] = 9;
        }
      }
      guard = maxIndex;
      maxIndex = n.indexOf(Math.max.apply(null, n.slice(0, guard)));
    }
  }

  console.log(parseInt(n.join(''), 10));
}

// monotoneDigits(10);
monotoneDigits(23421);
monotoneDigits(12345);
monotoneDigits(10000);

// 用逆向（贪心法）思路更简单