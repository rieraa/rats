function* helloWorldGenerator() {
  yield 'hello'
  yield 'world'
  return 'ending'
}

var hw = helloWorldGenerator()

for (let item of hw) {
  console.log(item)
}

console.log('🚀 ~ file: genetor.js:14 ~ hw.next():', hw.next())
