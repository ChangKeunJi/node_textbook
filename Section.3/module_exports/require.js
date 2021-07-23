console.log("require가 가장 위에 오지 않아도 괜찮다.");

module.exports = "저를 찾아보세요";

require("./var");

console.log("require.cache 입니다.");
console.log(require.cache);
// require.js 와 var.js 같은 파일이 속성명이 들어 있으며,
// 속성값으로 각 파일의 모듈 객체가 포함되어 있다.

// 한 번 require한 파일은 cache에 저장되어, 다음 번에 require할 때
// 새로 불러오지 않고 require.cache에 있는 것을 재사용한다.

console.log("require main입니다.");
console.log(require.main);
// require.main은 노드 실행 시 첫 모듈을 가르킨다.
console.log(require.main === module); // true => 현재 파일이 첫 모듈.
console.log(require.main.filename);
// /Users/changkeunji/Documents/coding/node_tutorial/Section.3/module/require.js
console.log(module);
// 현재 파일의 모듈
