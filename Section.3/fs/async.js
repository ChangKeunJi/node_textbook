const fs = require("fs");

console.log("시작");

// 비동기
// : 백그라운드에서 동시에 처리된다.
// : 출력되는 순서가 매번 다르다.

fs.readFile("./readme2.txt", (err, data) => {
  console.log("1", data.toString());
});

fs.readFile("./readme2.txt", (err, data) => {
  console.log("2", data.toString());
});

fs.readFile("./readme2.txt", (err, data) => {
  console.log("3", data.toString());
});

console.log("종료");

// 동기
// : 백그라운드로 보내져 처리가 완료될 동안 메인 스레드는 작업을 멈춘다.
// : 출력되는 순서가 일정하다.

let data = fs.readFileSync("./readme2.txt");
console.log("sync 1", data.toString());

data = fs.readFileSync("./readme2.txt");
console.log("sync 2", data.toString());

data = fs.readFileSync("./readme2.txt");
console.log("sync 3", data.toString());
