Function.prototype.myBind = function (content) {
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  var that = this;
  var arg = [...arguments].slice(1);
  // bind返回的是一个函数
  return function F() {
    //返回执行apply(this,[arr])
    return that.apply(content, args.concat(...arguments));
  };
};
