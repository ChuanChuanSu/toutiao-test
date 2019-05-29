// A、B、C三个view都有tap事件，A中有B，B中有C，现在要做到点击到C时，不触发A和B的tap事件，点击到B时不触发A的事件，请描述思路并解释原因？
// 在事件处理函数中调用event.stopPropagation()，阻止事件进一步向上冒泡，从而使得父节点的事件不被触发






//将N个升序数组合并成为一个升序数组？
function merge() {
  let result = [];
  let data = Array.prototype.slice.apply(arguments);
  let totalLength = 0;
  data.forEach((item) => {
    totalLength += item.length;
  });
  while (result.length < totalLength) {
    let min = Number.POSITIVE_INFINITY;
    let minIndex = -1;
    for (i = 0; i < data.length; i++) {
      if (data[i][0] && data[i][0] < min) {
        min = data[i][0];
        minIndex = i;
      }
    }
    data[minIndex].shift();
    result.push(min);
  }

  console.log(result);
}

merge([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]);
merge([1, 3, 5, 7, 9], [2, 4]);

