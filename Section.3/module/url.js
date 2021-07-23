const url = require("url");

const { URL } = url;
const myURL = new URL(
  "http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor"
);
console.log("new URL():", myURL);
// URL 생성자에 주소를 넣으면 주소가 부분별로 정리된 객체가 나온다. (WHATWG 방식)
console.log("url.format():", url.format(myURL)); // 분해된 객체를 다시 조립한다.
console.log("------------------------------");
const parsedUrl = url.parse(
  "http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor"
);
console.log("url.parse():", parsedUrl); // 기존 방식으로 분해한다.
console.log("url.format():", url.format(parsedUrl)); // 다시 조립한다.
