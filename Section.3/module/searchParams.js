const { URL } = require("url");

const myURL = new URL(
  "http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript"
);
console.log(myURL);
console.log("searchParams:", myURL.searchParams);
console.log("searchParams.getAll():", myURL.searchParams.getAll("category"));
console.log("searchParams.get():", myURL.searchParams.get("limit"));
console.log("searchParams.has():", myURL.searchParams.has("page"));

console.log("searchParams.keys():", myURL.searchParams.keys());
console.log("searchParams.values():", myURL.searchParams.values());

myURL.searchParams.append("filter", "es3"); // 키와 값을 추가
myURL.searchParams.append("filter", "es5");
console.log("append", myURL.searchParams.getAll("filter"));

myURL.searchParams.set("filter", "es6"); // 기존 키의 값들 지우고 새롭게 세팅
console.log("set", myURL.searchParams.getAll("filter"));

myURL.searchParams.delete("filter"); // 해당 키 삭제
console.log(myURL.searchParams.getAll("filter"));

console.log("searchParams.toString():", myURL.searchParams.toString());
myURL.search = myURL.searchParams.toString();
