//原理利用隐式绑定
Function.prototype.myapply = function (context) {
  //检测是否有context
  context = context || window;
  // 给context加一个fn,拷贝使用该方法的函数
  context.fn = this;
  //判断是否有第二个参数（即数组）
  //严谨一点应该判断是否是数组不是，抛出异常，这里暂时不写
  var result;

  if (arguments[1]) {
    result = context.fn(arguments[1]);
  } else {
    result = context.fn();
  }
  delete context.fn;
  return result;
};
