const http = require("http");

const server = http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h1>Hello</h1>");
    res.write("<p>wow</p>");
    res.end("<p>bye</p>");
    // stream으로 데이터를 보낸다.
  })
  // 서버를 프로세서로 올려야 한다. 이 때 포트 하나가 필요하다.
  .listen(808, () => {
    console.log("8080번 포트에서 서버 대기 중입니다. ");
  });

server.on("error", (error) => {
  console.error(error);
});
