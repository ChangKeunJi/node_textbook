// - 엡실론

console.log(Number.EPSILON);
// 2.220446049250313e-16

function isSimilar(x, y) {
  return Math.abs(x - y) < Number.EPSILON;
}

console.log(isSimilar(0.1 + 0.2, 0.3));
// true : 2 숫자의 차이는 무시할 정도로 작아서 같다고 봐도 무방하다.

// - Math 객체

Math.random(); // 0부터 1사이의  랜덤값
Math.max(30, 10, 55); // 가자 큰 수 반환
Math.pow(4, 3); // 4에 3승

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandom(0, 10)); // 0과 10사이의 랜덤값
