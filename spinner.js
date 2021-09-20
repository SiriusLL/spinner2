setTimeout(() => {
  process.stdout.write("\r|   ");
}, 100);

setTimeout(() => {
  process.stdout.write("\r/   ");
}, 300);

setTimeout(() => {
  process.stdout.write("\r-   ");
}, 500);

setTimeout(() => {
  process.stdout.write("\r\\   ");
}, 700);

setTimeout(() => {
  process.stdout.write("\r|   ");
}, 900);

setTimeout(() => {
  process.stdout.write("\r/   ");
}, 1100);

setTimeout(() => {
  process.stdout.write("\r-   ");
}, 1300);

setTimeout(() => {
  process.stdout.write("\r\\   ");
}, 1500);

setTimeout(() => {
  process.stdout.write("\r|   ");
}, 1700);

setTimeout(() => {
  process.stdout.write("\n");
}, 1900);

// const sentence = "|/-\\-|";

// // part 1 (walkthrough / exercise)
// let delay = 0;
// for (let char of sentence) {
//   setTimeout(() => process.stdout.write(`\r${char}`), delay);
//   delay += 300;
// }

// // part 2 (challenge)
// setTimeout(() => {
//   console.log("");
// }, delay);
