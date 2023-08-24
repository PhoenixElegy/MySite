var DEBUG = true
if (typeof DEBUG !== "undefined") {
  console.log("Debugging is starting!")
}

/** if FeatureXYZ exists */
let FeatureXYZ: any

function doSomethingCool() {
  let helper = (typeof FeatureXYZ !== "undefined") ? FeatureXYZ :
    function () {
      /** Your function FeatureXYZ */
    }
}

/**
 * 在指定的误差内比较两个数字是否相等
 * @param n1 
 * @param n2 
 * @returns 
 */
function numberCloseEnoughToEqual(n1: number, n2: number) {
  return Math.abs(n1 - n2) < Number.EPSILON
}

/**
 * Number.isNaN的补丁（ES6之前），
 * 防止特例 window.isNaN("foo") === true
 */
if (!Number.isNaN) {
  Number.isNaN = function (n) {
    return (
      typeof n === "number" &&
      window.isNaN(n)
    )
  }
}

if (!Number.isNaN) {
  Number.isNaN = function (n) {
    return n !== n
  }
}

/**
 * 提取所有元音字母
 * @param str 
 * @returns 
 */
function vowels(str: string) {
  let matches
  if (str) {
    matches = str.match(/[aeiou]/g)
    if (matches) {
      return true
    }
  }
}

//利用赋值语句的副作用将两个if语句合二为一
function _vowels(str: string) {
  let matches
  if (str && (matches = str.match(/[aeiou]/g))) {
    return matches
  }

}

//标签语句
foo: for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    // 如果j和i相等，继续外层循环
    if (j == i) {
      //跳转到foo的下一个循环
      continue foo
    }
    // 跳过奇数结果
    if (j * i % 2 == 1) {
      // 继续内层循环
      continue
    }
  }
}

// 拓展原生方法
if (!Array.prototype.push) {
  // Array.prototype.push = function (item) {
  //   this[this.length - 1] = item
  // }
}



