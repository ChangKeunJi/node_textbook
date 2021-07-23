console.log(this); // {}
// 최상위 스코프에서의 this는 module.exports를 가르킨다.

console.log(this === module.exports); // true

console.log(this === exports); // true

function whatIsThis() {
  console.log(this === exports, this === global);
  // 함수 선언문 내부의 this는 global을 가르킨다.
}

whatIsThis(); // false, true
