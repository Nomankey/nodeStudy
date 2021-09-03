console.log('code1');
console.time('timeout 0');
setTimeout(() => {
  console.log('setTimeout 0');
  console.timeEnd('timeout 0');
}, 0);

console.log('code2');
setImmediate(() => {
  console.log('setImmediate');
});

console.log('code3');
process.nextTick(() => {
  console.log('process.nextTick');
});
// code1
// code2
// code3
// process.nextTick
// setTimeout 0
// timeout 0: 2.369ms
// setImmediate