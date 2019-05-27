// 一个view上 有很多subviews 其中也包括subviews的subviews 循环求其中面积最大的view
let max = 0;

function maxArea(view) {
  if (!view) {
    return null;
  }
  const area = view.length * view.width;
  if (area > max) {
    max = area;
  }
  view.children.map(item => maxArea(item));
}