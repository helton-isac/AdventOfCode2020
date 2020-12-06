const fs = require("fs");
const content = fs.readFileSync("../inputs/day02Input.txt");
console.log(content.toString());

const puzzleInput = content.toString().split("\n");

class PasswordPolicy {
  constructor(lowest, highest, letter) {
    this.lowest = lowest;
    this.highest = highest;
    this.letter = letter;
  }
}

const isValidPassword = (passwordPolicy, password) => {
  let occurences = 0;

  for (let i = 0; i < password.length; i++) {
    if (password[i] === passwordPolicy.letter) {
      occurences++;
    }
  }
  return (
    occurences >= passwordPolicy.lowest && occurences <= passwordPolicy.highest
  );
};

let validPassword = 0;
for (let i = 0; i < puzzleInput.length; i++) {
  const arr = puzzleInput[i].split(" ");
  const policyValues = arr[0].split("-");
  const letter = arr[1].slice(0, -1);
  const password = arr[2];

  const passwordPolicy = new PasswordPolicy(
    parseInt(policyValues[0]),
    parseInt(policyValues[1]),
    letter
  );

  if (isValidPassword(passwordPolicy, password)) {
    validPassword++;
  }
}

console.log("validPassword: ", validPassword);
