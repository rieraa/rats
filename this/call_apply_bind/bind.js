/**
 * bind(thisArg)
 * bind(thisArg, arg1, arg2 ... argN)
 */

const aa = {
  x: 42,
  getX: function () {
    return this.x
  },
}

const unboundGetX = aa.getX
console.log(unboundGetX()) // 全局范围调用该函数
// Expected output: undefined

const boundGetX = unboundGetX.bind(aa) // 在aa的作用域下进行调用
console.log(boundGetX())
// Expected output: 42
