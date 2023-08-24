class Stack {
  dataStore
  top

  constructor() {
    this.dataStore = []
    this.top = 0
  }

  push(element) {
    this.dataStore[this.top++] = element
  }

  peek() {
    return this.dataStore[this.top - 1]
  }

  pop() {
    return this.dataStore[--this.top]
  }

  clear() {
    this.dataStore = []
    this.top = 0
  }

  length() {
    return this.top
  }

  toString(){
    return this.dataStore
  }
}

/**
 * 判断字符串是否是回文串
 */
function isPaildrome(word) {
  const s = new Stack()
  for (let i = 0;i < word.length; i++ ){
    s.push(word[i])
  } 
  let rword = ''
  while(s.length() > 0){
    rword += s.pop()
  }
  if(word == rword) return true
  else return false
} 

/***
 * 佩兹糖果盒
 */
let mybox = new Stack()

mybox.push('red')
mybox.push('red')
mybox.push('yellow')
mybox.push('red')
mybox.push('yellow')
mybox.push('white')
mybox.push('yellow')
mybox.push('white')
mybox.push('yellow')
mybox.push('white')
mybox.push('red')

// console.log(mybox.toString())
// console.log("mybox.toString()")

function sweetBox(box , unlikecolor) {
  let like = new Stack()
  let unlike = new Stack()
  let result = new Stack()
  while(box.top) {
    if(box.peek() == unlikecolor){
      unlike.push(box.pop())
    }
    else like.push(box.pop())
  }
  while(like.top){
    result.push(like.pop())
  }
  return result
}

let a = sweetBox(mybox,"red")
console.log(a.toString())

const data = "2023-07-28T07:10:30.447+00:00"

const setDataString = function (str) {
  let result = ""
  result = result + str.split("T")[0] + " "
  result = result + str.split("T")[1].split(".")[0]
  return result
}

console.log(setDataString(data))