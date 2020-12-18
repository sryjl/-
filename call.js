//原理，利用隐式绑定
Function.prototype.myCall = function (context) {
  //考虑到有没有参数的情况，如果没有参数的话，就指向window，有则指向context
  var context = context || window;
  //在content中添加，拷贝函数
  context.fn = this;
  //将第二个开始的参数取出
  var args = [...arguments].slice(1);
  //将从第二个开始的参数赋给fn
  var result = context.fn(...args);
  delete context.fn; //删除fn
  return result; //返回结果
};
