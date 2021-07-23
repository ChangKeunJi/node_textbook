const http = require("http");
const fs = require("fs").promises;
const url = require("url");
const qs = require("querystring");

// session 객체
const session = {};

const parseCookies = (cookie = "") => {
  return cookie
    .split(";")
    .map((v) => v.split("="))
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});
};

http
  .createServer(async (req, res) => {
    const cookies = parseCookies(req.headers.cookie);

    if (req.url.startsWith("/login")) {
      const { query } = url.parse(req.url);
      const { name } = qs.parse(query);
      const expires = new Date();
      expires.setMinutes(expires.getMinutes() + 5);
      const uniqueInt = Date.now();
      // 위 uniqueInt는 데이터를 보관하고 있는 변수이고, 아래 uniqueInt는 객체의 속성명이다.
      session[uniqueInt] = {
        name,
        expires,
      };

      res.writeHead(302, {
        Location: "/",
        "Set-Cookie": `session=${uniqueInt}; Expires=${expires.toGMTString}; HttpOnly; Path=/`,
      });

      res.end();

      // 쿠키가 존재하고, 만료기간이 지나지 않았다면
    } else if (
      parseCookies.sesion &&
      session[parseCookies.session] > Date.now()
    ) {
      res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
      res.end(`${session[parseCookies.session].name}님 안녕하세요.`);
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
