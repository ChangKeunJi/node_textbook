const fs = require("fs");

const readStream = fs.createReadStream("./readme3.txt", { highWaterMark: 16 });
// 읽기 스트림 생성. highWarterMark는 버퍼의 크기 설정. 기본값은 64kb 이지만 16b로 설정.

const data = [];

readStream.on("data", (chunk) => {
  data.push(chunk);
  console.log("data", chunk, chunk.length);
});
// readStream에 이벤트 리스터 붙여준다.  파일 읽기 시작되면 "data" 이벤트 발생.
// 파일의 크기가 101이므로 16x6 + 5와 같이 나눠져서 데이터가 전달된다.

readStream.on("end", () => {
  console.log("end", Buffer.concat(data).toString());
});

readStream.on("error", (err) => {
  console.log("error : ", err);
});
