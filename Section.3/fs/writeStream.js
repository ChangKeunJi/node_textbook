const fs = require("fs");

const writeStream = fs.createWriteStream("./writeme2.txt");

writeStream.on("finish", () => {
  console.log("완료");
});

writeStream.write("이 글을 씁니다.\n");
writeStream.write("한 번 더 씁니다.");
writeStream.end();
// 종료를 알린다. "finish" 이벤트 리스너 호출 됨.
