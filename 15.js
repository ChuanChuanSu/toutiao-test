// 编写一个函数，不管调用多少次都只执行一次
function throttle(fn) {
  let isExecuted = false;
  return () => {
    const context = this, args = arguments;
    if (!isExecuted) {
      fn.apply(context, args);
      isExecuted = true;
    }
  }
}

// 写一个debounce函数，在time时间内不论调用多少次，它只执行最后一次函数
var debounce = function(fn, delay){
  var timer = null;
  return function(){
    var context = this, args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function(){
      fn.apply(context, args);
    }, delay);
  };
};
