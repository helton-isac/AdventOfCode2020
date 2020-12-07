const fs = require("fs");
const content = fs.readFileSync("../inputs/day03Input.txt");

const puzzleInput = content.toString().split("\n");
const tree = "#";

const slope = {
  right: 3,
  down: 1,
};

let currentPosition = 0;
let trees = 0;
for (let i = slope.down; i < puzzleInput.length; i += slope.down) {
  currentPosition += slope.right;
  const realIndex = currentPosition % puzzleInput[i].length;
  if (puzzleInput[i][realIndex] === tree) {
    trees++;
  }
}

console.log("Trees:", trees);
