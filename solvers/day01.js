const fs = require("fs");
const content = fs.readFileSync("../inputs/day01Input.txt");

const puzzleInput = content
  .toString()
  .split("\n")
  .map((it) => {
    return parseInt(it);
  });

const target = 2020;

const firstPuzzle = () => {
  let set = new Set();
  for (let i = 0; i < puzzleInput.length; i++) {
    const current = puzzleInput[i];

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
  for (let i = 0; i < puzzleInput.length; i++) {
    set.add(puzzleInput[i]);
  }

  for (let i = 0; i < puzzleInput.length; i++) {
    const first = puzzleInput[i];
    for (let j = i + 1; j < puzzleInput.length; j++) {
      const second = puzzleInput[j];

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
