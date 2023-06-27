console.log("dd")
console.log(parseInt("01010011", 2))

const b =2
const arr = []
arr[100] = 1
console.log(arr)
/**
 * 将句子中的单词打乱
 * @param {string} str 
 * @returns {string} final
 */
const getRandStr = function (str) {
  const result = str.match(/\w+[,!.]?/g)
  const final = []
  //打乱一个字符串
  const randstr = function (strR) {
    const res = []
    strR.split("").forEach(element => {
      const index = Math.floor(Math.random() * strR.length)
      res.splice(index, 0, element)
    })
    return res.join("")
  }
  result.forEach(element => {
    const str1 = randstr(element.match(/\w+/g).toString())
    const str2 = element.match(/[,!.]/g)
    final.push(str1)
    final.push(str2)
  })
  return final.join('')
}

console.log(getRandStr("HOEEL,WORLsgergeD.sfger"))

console.log("aabb")
console.log("222")
console.log("1111")
