const fs = require("fs");

const readStream = fs.createReadStream("./readme4.txt");
const writeStream = fs.createWriteStream("./writeme3.txt");

readStream.pipe(writeStream);
// writeStream이 인수로 들어가야 한다.
