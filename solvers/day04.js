const fs = require("fs");
const content = fs.readFileSync("../inputs/day04Input.txt");

const puzzleInput = content.toString().split("\n");

const isValidPassport = (passport) => {
  // byr (Birth Year)
  // iyr (Issue Year)
  // eyr (Expiration Year)
  // hgt (Height)
  // hcl (Hair Color)
  // ecl (Eye Color)
  // pid (Passport ID)
  // cid (Country ID)
  return (
    passport.byr &&
    passport.iyr &&
    passport.eyr &&
    passport.hgt &&
    passport.hcl &&
    passport.ecl &&
    passport.pid
    //&&    passport.cid
  );
};

let validPasswords = 0;
let passports = [];
let currentPassword = {};

const pushPassport = (passports, passport) => {
  passports.push(passport);
  if (isValidPassport(passport)) {
    validPasswords++;
  }
  return {};
};

for (let i = 0; i < puzzleInput.length; i++) {
  if (puzzleInput[i] === "") {
    currentPassword = pushPassport(passports, currentPassword);
  }
  currentPassword["pending"] = true;
  const fields = puzzleInput[i].split(" ");
  for (let j = 0; j < fields.length; j++) {
    const field = fields[j].split(":");
    currentPassword[field[0]] = field[1];
  }
}

if (currentPassword.pending) {
  pushPassport(passports, currentPassword);
}

console.log(validPasswords);
