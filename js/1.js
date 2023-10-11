function Person() {
  this.name = "kobe";
  this.sex = "男";
  this.age = "41";
}

function Star(a, b) {
  console.log(this);
  console.log(a + b);
}
var fn = Star.bind(Person, 1, 3); // 不会调用原来的函数，产生一个新的函数（this指向改变的新函数）

console.log(fn());
