const arr = ['red', 'green', 'blue']

for (let v of arr) {
  console.log(v) // red green blue
}

const obj = {}
// 将数组中的迭代器方法绑定作用域到arr并赋值给obj
obj[Symbol.iterator] = arr[Symbol.iterator].bind(arr)

for (let v of obj) {
  console.log(v) // red green blue
}

var arr1 = ['a', 'b', 'c', 'd']

for (let a in arr1) {
  console.log(a) // 0 1 2 3
}

for (let a of arr1) {
  console.log(a) // a b c d
}

let arrayLike = { length: 2, 0: 'a', 1: 'b' }

// 报错
// for (let x of arrayLike) {
//   console.log(x)
// }

// 正确
for (let x of Array.from(arrayLike)) {
  console.log(x)
}

// yield表达式本身没有返回值，或者说总是返回undefined
// next方法的参数表示上一个yield表达式的返回值
/**
 * 第一次使用next方法时，传递参数是无效的
 */
function* f() {
  for (var i = 0; true; i++) {
    console.log('🚀 ~ file: iterator.js:42 ~ function*f ~ i:', i)

    // yield停止
    let reset = yield i

    console.log('🚀 ~ file: iterator.js:46 ~ function*f ~ reset:', reset)

    if (reset) {
      i = -1
    }
  }
}

var g = f()
// 1.执行
g.next() // { value: 0, done: false }
g.next() // { value: 1, done: false }
g.next(true) // { value: 0, done: false }

function* foo(x) {
  // 5
  var y = 2 * (yield x + 1)
  var z = yield y / 3
  return x + y + z
}

var a = foo(5)
a.next() // Object{value:6, done:false}
a.next() // Object{value:NaN, done:false}
a.next() // Object{value:NaN, done:true}

var b = foo(5)
b.next() // { value:6, done:false }
b.next(12) // { value:8, done:false }
b.next(13) // { value:42, done:true }
