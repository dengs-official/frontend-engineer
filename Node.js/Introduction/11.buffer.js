// const buf = Buffer.alloc(10);
// buf[0] = "Z";
const buf = Buffer.from("好"); // unicode码，默认utf-8编码
for (let i of buf) {
  console.log(i); // 访问到十进制
}
console.log(buf.toString());
console.log(buf); // utf-8 十六进制
console.log(buf.length);

console.log(buf.slice(0, 1).toString());

const newBuf = Buffer.alloc(1);
newBuf[0] = 229; // 设置十进制
console.log(newBuf);
console.log(newBuf.toString());
