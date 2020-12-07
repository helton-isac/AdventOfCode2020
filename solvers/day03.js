const fs = require("fs");
const content = fs.readFileSync("../inputs/day03Input.txt");

const puzzleInput = content.toString().split("\n");
const tree = "#";

const puzzle1Slope = {
  right: 3,
  down: 1,
};

let currentPosition = 0;
let trees = 0;
for (
  let i = puzzle1Slope.down;
  i < puzzleInput.length;
  i += puzzle1Slope.down
) {
  currentPosition += puzzle1Slope.right;
  const realIndex = currentPosition % puzzleInput[i].length;
  if (puzzleInput[i][realIndex] === tree) {
    trees++;
  }
}

let puzzle2Slopes = [
  {
    right: 1,
    down: 1,
    currentPosition: 0,
    trees: 0,
  },
  {
    right: 3,
    down: 1,
    currentPosition: 0,
    trees: 0,
  },
  {
    right: 5,
    down: 1,
    currentPosition: 0,
    trees: 0,
  },
  {
    right: 7,
    down: 1,
    currentPosition: 0,
    trees: 0,
  },
  {
    right: 1,
    down: 2,
    currentPosition: 0,
    trees: 0,
  },
];

for (let i = 1; i < puzzleInput.length; i++) {
  for (let j = 0; j < puzzle2Slopes.length; j++) {
    if (i % puzzle2Slopes[j].down === 0) {
      puzzle2Slopes[j].currentPosition += puzzle2Slopes[j].right;
      const realIndex =
        puzzle2Slopes[j].currentPosition % puzzleInput[i].length;
      if (puzzleInput[i][realIndex] === tree) {
        puzzle2Slopes[j].trees++;
      }
    }
  }
}

console.log("puzzle1Result:", trees);
let puzzle2Result = 1;
for (let i = 0; i < puzzle2Slopes.length; i++) {
  puzzle2Result *= puzzle2Slopes[i].trees;
}
console.log("puzzle2Result:", puzzle2Result);
