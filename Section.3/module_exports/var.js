const odd = "홀수입니다.";
const even = "짝수입니다.";

// module.exports = {
//   odd,
//   even,
// };

exports.odd = "홀수입니다.";
exports.even = "짝수입니다.";
// 변수들을 객체에 담아 한번에 할당하는 대신에
// 변수들을 exports 객체에 하나씩 넣는다.

// exports 객체를 사용할 때는 반드시 속성명과 속성값을 대입해야 한다.
// 함수같은 것을 대입하면, 참조관계가 깨진다.
// exports = checkNumber (x)

console.log(module.exports === exports); // true
// module.exports와 exports는 동일한 객체를 참조한다.
// exports => module.exports => {}
