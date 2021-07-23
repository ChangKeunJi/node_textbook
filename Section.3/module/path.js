const path = require("path");

const string = __filename;

console.log("path.sep:", path.sep); // 경로의 구분자. \ or /
console.log("path.delimiter:", path.delimiter); // 환경변수의 구분자. 윈도우는 ; 맥은 :
console.log("------------------------------");
console.log("path.dirname():", path.dirname(string)); // 파일이 위치한 폴더의 경로
console.log("path.extname():", path.extname(string)); // 파일의 확장자
console.log("path.basename():", path.basename(string)); // 파일의 이름
console.log(
  "path.basename - extname:",
  path.basename(string, path.extname(string))
); // 확장자를 제외한 파일의 이름
console.log("------------------------------");
console.log("path.parse()", path.parse(string)); // 파일의 경로를 구분
console.log(
  "path.format():",
  path.format({
    dir: "C:\\users\\zerocho",
    name: "path",
    ext: ".js",
  })
); // path.parse() 한 객체를 파일 경로로 합친다.
console.log(
  "path.normalize():",
  path.normalize("C://users\\\\zerocho\\path.js")
); // \ 나 / 를 여러번 사용했을 때 수정해준다.
console.log("------------------------------");
console.log("path.isAbsolute(C:\\):", path.isAbsolute("C:\\")); // 파일이 절대경로인지 상대경로인지 알려준다.
console.log("path.isAbsolute(./home):", path.isAbsolute("./home"));
console.log("------------------------------");
console.log(
  "path.relative():",
  path.relative("C:\\users\\zerocho\\path.js", "C:\\")
); // 첫번째 인수에서 두번째 인수로 가는 경로를 알려준다.
console.log(
  "path.join():",
  path.join(__dirname, "..", "..", "/users", ".", "/zerocho")
); // 하나의 경로로 합친다. ".."는 상위폴더 "."는 현재 폴더를 가르키며 알아서 처리해준다.
console.log(
  "path.resolve():",
  path.resolve(__dirname, ".", "users", ".", "zerocho")
); // 오른쪽에서 왼쪽으로 이동하면서 합친다. 만약 절대경로 '/'를 만나면 나머지 경로는 무시한다.
