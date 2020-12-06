const fs = require("fs");
const content = fs.readFileSync("../inputs/day01Input.txt");

const puzzeInputDay01 = content
  .toString()
  .split("\n")
  .map((it) => {
    return parseInt(it);
  });

const target = 2020;

const firstPuzzle = () => {
  let set = new Set();
  for (let i = 0; i < puzzeInputDay01.length; i++) {
    const current = puzzeInputDay01[i];

    if (set.has(target - current)) {
      console.log("firstValue", current);
      console.log("secondValue", target - current);
      console.log("multiplication", current * (target - current));
      return;
    }
    set.add(current);
  }
};

const secondPuzzle = () => {
  let set = new Set();
  for (let i = 0; i < puzzeInputDay01.length; i++) {
    set.add(puzzeInputDay01[i]);
  }

  for (let i = 0; i < puzzeInputDay01.length; i++) {
    const first = puzzeInputDay01[i];
    for (let j = i + 1; j < puzzeInputDay01.length; j++) {
      const second = puzzeInputDay01[j];

      const third = target - first - second;
      if (third !== first && third !== second) {
        if (set.has(target - first - second)) {
          console.log("firstValue", first);
          console.log("secondValue", second);
          console.log("thirdValue", third);
          console.log("multiplication", first * second * third);
          return;
        }
      }
    }
  }
};

firstPuzzle();
secondPuzzle();
