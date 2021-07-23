const http = require("http");

http
  .createServer((req, res) => {
    console.log(req.url, " & ", req.headers.cookie);
    res.writeHead(200, { "Set-Cookie": "mycookie=test" });
    res.end("Hello Cookie");
  })
  .listen(8083, () => {
    console.log("8083 port waiting");
  });

// : 처음 서버를 실행하고 브라우저를 열었을 때 찍히는 로그
// / undefined
// => 첫 요청이니 요청의 헤더에는 쿠키가 없다.
// /favicon.ico mycookie=test
// => 첫 응답에서 쿠키를 전달받은 뒤 favicon을 찾기위해 다시 서버에 요청했을 때 쿠키를 동봉한다.
// => 브라우저는 html에서 favicon을 찾지 못하면 서버에 요청한다.
