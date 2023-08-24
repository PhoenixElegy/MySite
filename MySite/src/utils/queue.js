
class Queue {
  dataStore

  constructor() {
    this.dataStore = []
  }

  enqueue(element) {
    this.dataStore.push(element)
  }

  // 删除队首的元素
  dequeue() {
    this.dataStore.shift()
  }

  front() {
    return this.dataStore[0]
  }

  back() {
    return this.dataStore[this.dataStore.length - 1]
  }

  toString() {
    let retstr = ''
    for (let i = 0; i < this.dataStore.length; i++) {
      retstr = retstr + this.dataStore[i] + '\n'
    }
    return retstr
  }

  isEmpty() {
    if (this.dataStore.length == 0) return true
    else return false
  }
}

// 优先队列
class elQueue {
  name
  code

  constructor() {
    this.name = ''
    this.code = 0
  }
}

class priority_Queue {
  dataStore

  constructor() {
    this.dataStore = []
  }

  enqueue(element) {
    this.dataStore.push(element)
  }

  // 删除队首的元素
  dequeue() {
    this.dataStore.shift()
  }

  front() {
    return this.dataStore[0]
  }

  back() {
    return this.dataStore[this.dataStore.length - 1]
  }

  toString() {
    let retstr = ''
    for (let i = 0; i < this.dataStore.length; i++) {
      retstr = retstr + this.dataStore[i] + '\n'
    }
    return retstr
  }

  isEmpty() {
    if (this.dataStore.length == 0) return true
    else return false
  }
}

let start = new Date;
setTimeout(function () {
  var end = new Date;
  console.log('Time elapsed:', end - start, 'ms');
}, 500);
while (new Date - start < 1000) { };   // 1000ms

try {
  setTimeout(function () {
    // 实际报错的异步内容
    // throw new Error('Catch me if you can!');
  }, 0)
} catch (e) {
  console.error(e)
}