function List() {
  this.listSize = 0
  this.pos = 0
  this.dataStore = [] //列表元素集合
  this.clear = clear
  this.find = find
  this.toString = toString
  this.append = append
  this.remove = remove
  this.front = front
  this.end = end
  this.prev = prev
  this.next = next
  this.length = length
  this.insert = insert
  this.currPos = currPos
  this.moveTo = moveTo
  this.contains = contains
  this.getElement = getElement

  // 额外定义方法
  this.removeAll = removeAll
  this.insertAt = insertAt
  this.addMax = addMax
  this.addMin = addMin
  this.displayPersonByItem = displayPersonByItem

  function append(element) {
    this.dataStore[this.listSize++] = element
  }

  function find(element) {
    for (let i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i] == element) {
        return i
      }
    }
    return -1
  }

  function remove(element) {
    let foundAt = this.find(element)
    if (foundAt > -1) {
      this.dataStore.splice(foundAt, 1)  //在找到的位置删除一个元素
      --this.listSize
      return true
    }
    return false
  }

  function removeAll(element) {
    this.dataStore = this.dataStore.filter((p) => p != element)
  }

  function length() {
    return this.listSize
  }

  // 这里没有返回字符串形式，而是整个数组
  function toString() {
    return this.dataStore
  }

  function insert(element, after) {
    let insertPos = this.find(after)
    if (insertPos > -1) {
      this.dataStore.splice(insertPos + 1, 0, element)
      ++this.listSize;
      return true
    }
    return false
  }

  function insertAt(num, element) {
    this.dataStore.splice(num, 0, element)
    this.listSize--
  }

  function clear() {
    delete this.dataStore
    this.dataStore = []
    this.listSize = this.pos = 0
  }

  function contains(element) {
    if (this.find(element) > -1) return true
    return false
  }

  function front() {
    this.pos = 0
  }

  function end() {
    this.end = this.listSize - 1
  }

  function next() {
    if (this.pos < this.listSize - 1) {
      ++this.pos
    }
  }

  function prev() {
    if (this.pos > 0) {
      --this.pos
    }
  }

  function currPos() {
    return this.pos
  }

  function moveTo(position) {
    this.pos = position
  }

  function getElement() {
    return this.dataStore[this.pos]
  }

  function addMax(element) {
    let temp = Object.assign([], this.dataStore)
    temp.push(element)
    temp.sort((a, b) => (b == a ? 0 : a > b ? 1 : -1))
    if (temp[temp.length - 1] != element) {
      return false
    }
    else {
      this.append(element)
      return true
    }
  }

  function addMin(element) {
    let temp = Object.assign([], this.dataStore)
    temp.push(element)
    temp.sort((a, b) => (b == a ? 0 : a > b ? 1 : -1))
    if (temp[0] != element) {
      return false
    }
    else {
      this.append(element)
      return true
    }
  }

}

//列表的迭代器访问方法
// let names = new List()
// for(names.end(); names.currPos() >= 0; names.prev()) {
//   consolo.log(names.getElement())
// }
// for(names.font(); names.currPos() < names.length; names.next()) {
//   consolo.log(names.getElement())
// }

//List数组测试
let numList = new List()
numList.append(9)
numList.append(3)
numList.append(5)
numList.append(96)
numList.append(91)
numList.append(5)
console.log(numList.toString())   // [ 9, 3, 5, 96, 91, 5 ]
console.log(numList.listSize)

numList.remove(96)
console.log(numList.toString())   // [ 9, 3, 5, 91, 5 ]

numList.remove(5)
console.log(numList.toString())   // [ 9, 3, 91, 5 ]

numList.append(5)
numList.removeAll(5)
console.log(numList.toString())   // [ 9, 3, 91 ]

numList.insert(4, 9)       //在第一个匹配的元素9后面插入元素4
console.log(numList.toString())   // [ 9, 4, 3, 91 ]

numList.insertAt(3, 9)       //在第3个位置后面插入元素9
console.log(numList.toString())   // [ 9, 4, 3, 9, 91 ]

numList.addMax(199)
console.log(numList.toString())

numList.addMax(11)
console.log(numList.toString(), "will fail")

numList.addMin(0)
console.log(numList.toString())

numList.addMin(44)
console.log(numList.toString(), "will fail")

numList.clear()
console.log(numList.toString())   // []

//List字符测试
let strList = new List()
strList.append("Clayton")
strList.append("Raymond")
strList.append("Cynthia")
strList.append("Jennifer")
strList.append("Bryan")
strList.append("Danny")
console.log(strList.toString())   // [ 'Clayton', 'Raymond', 'Cynthia', 'Jennifer', 'Bryan', 'Danny' ]

strList.remove("Danny")
console.log(strList.toString())   // [ 'Clayton', 'Raymond', 'Cynthia', 'Jennifer', 'Bryan' ]


strList.append("Clayton")
strList.removeAll("Clayton")
console.log(strList.toString())   // [ 'Raymond', 'Cynthia', 'Jennifer', 'Bryan' ]

strList.insert("Alice", "Jennifer")
console.log(strList.toString())   // [ 'Raymond', 'Cynthia', 'Jennifer', 'Alice', 'Bryan' ]

strList.insertAt(3, "Jack")       //在第3个位置后面插入元素Jack
console.log(strList.toString())   // [ 'Raymond', 'Cynthia', 'Jennifer', 'Jack', 'Alice', 'Bryan' ]

strList.clear()
console.log(strList.toString())   // []

//List对象测试
let objList = new List()
strList.append("Clayton")
strList.append("Raymond")
strList.append("Cynthia")
strList.append("Jennifer")
strList.append("Bryan")
strList.append("Danny")
console.log(strList.toString())   // [ 'Clayton', 'Raymond', 'Cynthia', 'Jennifer', 'Bryan', 'Danny' ]

strList.remove("Danny")
console.log(strList.toString())   // [ 'Clayton', 'Raymond', 'Cynthia', 'Jennifer', 'Bryan' ]


strList.append("Clayton")
strList.removeAll("Clayton")
console.log(strList.toString())   // [ 'Raymond', 'Cynthia', 'Jennifer', 'Bryan' ]

strList.insert("Alice", "Jennifer")
console.log(strList.toString())   // [ 'Raymond', 'Cynthia', 'Jennifer', 'Alice', 'Bryan' ]

strList.insertAt(3, "Jack")       //在第3个位置后面插入元素Jack
console.log(strList.toString())   // [ 'Raymond', 'Cynthia', 'Jennifer', 'Jack', 'Alice', 'Bryan' ]

strList.clear()
console.log(strList.toString())   // []


// Class 类写法
class listClass {

  constructor() {
    this.listSize = 0
    this.pos = 0
    this.dataStore = [] //列表元素集合
  }

  // this.clear = clear
  // this.find = find
  // this.toString = toString
  // this.append = append
  // this.remove = remove
  // this.front = front
  // this.end = end
  // this.prev = prev
  // this.next = next
  // this.length = length
  // this.insert = insert
  // this.currPos = currPos
  // this.moveTo = moveTo
  // this.contains = contains
  // this.getElement = getElement

  // 额外定义方法
  // this.removeAll = removeAll
  // this.insertAt = insertAt

  append(element) {
    this.dataStore[this.listSize++] = element
  }

  find(element) {
    for (let i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i] == element) {
        return i
      }
    }
    return -1
  }

  remove(element) {
    let foundAt = this.find(element)
    if (foundAt > -1) {
      this.dataStore.splice(foundAt, 1)  //在找到的位置删除一个元素
      --this.listSize
      return true
    }
    return false
  }

  removeAll(element) {
    this.dataStore = this.dataStore.filter((p) => p != element)
  }

  length() {
    return this.listSize
  }

  // 这里没有返回字符串形式，而是整个数组
  toString() {
    return this.dataStore
  }

  insert(element, after) {
    let insertPos = this.find(after)
    if (insertPos > -1) {
      this.dataStore.splice(insertPos + 1, 0, element)
      ++this.listSize;
      return true
    }
    return false
  }

  insertAt(num, element) {
    this.dataStore.splice(num, 0, element)
  }

  clear() {
    delete this.dataStore
    this.dataStore = []
    this.listSize = this.pos = 0
  }

  contains(element) {
    if (this.find(element) > -1) return true
    return false
  }

  front() {
    this.pos = 0
  }

  end() {
    this.end = this.listSize - 1
  }

  next() {
    if (this.pos < this.listSize - 1) {
      ++this.pos
    }
  }

  prev() {
    if (this.pos > 0) {
      --this.pos
    }
  }

  currPos() {
    return this.pos
  }

  moveTo(position) {
    this.pos = position
  }

  getElement() {
    return this.dataStore[this.pos]
  }

  addMax(element) {
    let temp = Object.assign([], this.dataStore)
    temp.push(element)
    temp.sort((a, b) => (b == a ? 0 : a > b ? 1 : -1))
    if (temp[temp.length - 1] != element) {
      return false
    }
    else {
      this.append(element)
      return true
    }
  }

  addMin(element) {
    let temp = Object.assign([], this.dataStore)
    temp.push(element)
    temp.sort((a, b) => (b == a ? 0 : a > b ? 1 : -1))
    if (temp[0] != element) {
      return false
    }
    else {
      this.append(element)
      return true
    }
  }
}


// ex
class Person {
  constructor(name, age, sex) {
    this.name = name
    this.age = age
    this.sex = sex
  }
}

let listPerson = [new Person('Clayton', 12, "男"),
new Person('Raymond', 12, "男"),
new Person('Cynthia', 22, "女"),
new Person('Jennifer', 21, "女"),
new Person('Bryan', 30, "男"),
new Person('Danny', 16, "男")]

console.log(listPerson)