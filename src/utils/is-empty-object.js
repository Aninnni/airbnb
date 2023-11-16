// 判断tab切换的 第一个数据 有没有长度，有才可以渲染。加！！是转成布尔类型
export function isEmptyOject(obj) {
  return !!Object.keys(obj).length
}