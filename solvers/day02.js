const fs = require("fs");
const content = fs.readFileSync("../inputs/day02Input.txt");
console.log(content.toString());

const puzzleInput = content.toString().split("\n");

class PasswordPolicyPuzzle1 {
  constructor(lowest, highest, letter) {
    this.lowest = lowest;
    this.highest = highest;
    this.letter = letter;
  }

  isValid(password) {
    let occurences = 0;

    for (let i = 0; i < password.length; i++) {
      if (password[i] === this.letter) {
        occurences++;
      }
    }
    return occurences >= this.lowest && occurences <= this.highest;
  }
}
class PasswordPolicyPuzzle2 {
  constructor(pos1, pos2, letter) {
    this.pos1 = pos1;
    this.pos2 = pos2;
    this.letter = letter;
  }

  isValid(password) {
    let occurences = 0;

    const pos1Letter = password.charAt(this.pos1 - 1);
    const pos2Letter = password.charAt(this.pos2 - 1);

    return (
      (pos1Letter === this.letter && pos2Letter !== this.letter) ||
      (pos2Letter === this.letter && pos1Letter !== this.letter)
    );
  }
}

let validPasswordPuzzle1 = 0;
let validPasswordPuzzle2 = 0;
for (let i = 0; i < puzzleInput.length; i++) {
  const arr = puzzleInput[i].split(" ");
  const policyValues = arr[0].split("-");
  const letter = arr[1].slice(0, -1);
  const password = arr[2];

  const passwordPolicyPuzzle1 = new PasswordPolicyPuzzle1(
    parseInt(policyValues[0]),
    parseInt(policyValues[1]),
    letter
  );

  const passwordPolicyPuzzle2 = new PasswordPolicyPuzzle2(
    parseInt(policyValues[0]),
    parseInt(policyValues[1]),
    letter
  );
  if (passwordPolicyPuzzle1.isValid(password)) {
    validPasswordPuzzle1++;
  }
  if (passwordPolicyPuzzle2.isValid(password)) {
    validPasswordPuzzle2++;
  }
}

console.log("validPasswordPuzzle1: ", validPasswordPuzzle1);
console.log("validPasswordPuzzle2: ", validPasswordPuzzle2);
