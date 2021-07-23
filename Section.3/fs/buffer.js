const buffer = Buffer.from("저를 버퍼로 바꿔보세요.");

console.log("from()", buffer);
// 문자열을 버퍼로 바꿔준다.

console.log("length", buffer.length);
// 버퍼의 크기

console.log("toString", buffer.toString());
// 버퍼를 문자열로 바꿔준다.

const array = [
  Buffer.from("띄엄"),
  Buffer.from("띄엄"),
  Buffer.from("띄어쓰기"),
];
const buffer2 = Buffer.concat(array);
console.log("concat() : ", buffer2.toString());
// 배열안의 버퍼들을 하나로 합친다.

const buffer3 = Buffer.alloc(5);
console.log("alloc() : ", buffer3);
// 빈 버퍼를 생성한다.
