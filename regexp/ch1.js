var regex = /hello/
console.log(regex.test('hello'))
// => true

var regex = /ab{2,5}c/g
var string = 'abc abbc abbbc abbbbc abbbbbc abbbbbbc'
console.log(string.match(regex))
// [ 'abbc', 'abbbc', 'abbbbc', 'abbbbbc' ]

// [abc123]表示其中任意一个(1,2,3,a,b,c)
var regex = /a[123]b/g
var string = 'a0b a1b a2b a3b a4b'
console.log(string.match(regex))
// => ["a1b", "a2b", "a3b"]

// 范围表示[a-z1-9]
// 排除[^123] 排除1,2,3
// 匹配任意字符 [\d\D]、[\w\W]、[\s\S]、[^]均可

// 贪婪匹配
var regex = /\d{2,5}/g
var string = '123 1234 12345 123456'
console.log(string.match(regex))
// [ '123', '1234', '12345', '12345' ]

// 惰性匹配
var regex = /\d{2,5}?/g
var string = '123 1234 12345 123456'
console.log(string.match(regex))
// => ["12", "12", "34", "12", "34", "12", "34", "56"]

// 也是惰性匹配 第一个匹配到后后续就不匹配
var regex = /good|nice/g
var string = 'good idea, nice try.'
console.log(string.match(regex))
// [ 'good', 'nice' ]

/**
 * 案例实践
 */
// 匹配16进制颜色
var regex = /#([\dda-fA-F]{6}|[\da-fA-F]{3})/g
var string = '#ffbbad #Fc01DF #FFF #ffE'
console.log(string.match(regex))
// 匹配时间
var regex = /^([01]\d|2[0-3]):[0-5]\d$/g
var string = '02:07'
console.log(regex.test(string))
// 匹配日期 2017-06-10
var regex = /^(19|20)\d\d-$/g
var string = '2017-06-10'
console.log(regex.test(string))

// 匹配盘符
var regex = /[a-zA-Z]:\\([^\\:*<>|"?]+\\)*([^\\:*<>|"?]+)?/
