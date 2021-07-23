const http = require("http");
const fs = require("fs").promises;
const url = require("url");
const qs = require("querystring");

// 문자열 쿠키들을 key-value 쌍의 객체로 반환하는 함수
const parseCookies = (cookie = "") => {
  return cookie
    .split(";")
    .map((v) => v.split("="))
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});
  //! 괄호는 단일 값을 반환하고, 중괄호는 여러 줄의 코드를 실행한다.
};

http
  .createServer(async (req, res) => {
    // req의 헤더 속 쿠키들을 객체로 변환해서 cookies에 할당한다.
    const cookies = parseCookies(req.headers.cookie);

    // 주소가 "/login"으로 시작하는 경우 : form에서 로그인 버튼 누를 때
    if (req.url.startsWith("/login")) {
      const { query } = url.parse(req.url);
      const { name } = qs.parse(query);
      const expires = new Date();
      // 현재시간에 5분을 더해준다.
      expires.setMinutes(expires.getMinutes() + 5);

      res.writeHead(302, {
        Location: "/",
        "Set-Cookie": `name=${encodeURIComponent(
          name
        )}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
      });
      // 1. Location: "/"으로 리다이렉트한다.
      // 2. 헤더에 한글을 쓰기 위해서 encodeURIComponent으로 인코딩.
      // 3. Path: 쿠키가 전달 될 URL. "/"로 보낼 경우 모든 url에서 쿠키를 되돌려준다.

      res.end();

      // 쿠키가 이미 있을 때
    } else if (cookies.name) {
      res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
      res.end(`${cookies.name}님 안녕하세요.`);
      // 쿠키가 없다면 html파일을 띄어준다.
    } else {
      try {
        const data = await fs.readFile("./cookie2.html");
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

        res.end(data);
      } catch (err) {
        res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
        res.end(err.message);
      }
    }
  })
  .listen(8084, () => {
    console.log("8084에서 대기중");
  });
