const fs = require("fs").promises;
// 프로미스 기반의 fs 모듈을 사용할 수 있다.

fs.readFile("./readme.txt").then((data) => console.log(data.toString()));
