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

console.log("puzzle1Result:", validPasswords);

const isValidPassportStrict = (passport) => {
  //byr (Birth Year) - four digits; at least 1920 and at most 2002.
  const isValid_byr = (byr) => {
    return (
      byr && byr.length === 4 && parseInt(byr) >= 1920 && parseInt(byr) <= 2002
    );
  };

  //iyr (Issue Year) - four digits; at least 2010 and at most 2020.
  const isValid_iyr = (iyr) => {
    return (
      iyr && iyr.length === 4 && parseInt(iyr) >= 2010 && parseInt(iyr) <= 2020
    );
  };

  //eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
  const isValid_eyr = (eyr) => {
    return (
      eyr && eyr.length === 4 && parseInt(eyr) >= 2020 && parseInt(eyr) <= 2030
    );
  };

  //hgt (Height) - a number followed by either cm or in:
  //If cm, the number must be at least 150 and at most 193.
  //If in, the number must be at least 59 and at most 76.
  const isValid_hgt = (hgt) => {
    if (hgt && /^[0-9]+(cm|in)$/.test(hgt)) {
      if (hgt.indexOf("cm") > 0) {
        return parseInt(hgt) >= 150 && parseInt(hgt) <= 193;
      } else {
        return parseInt(hgt) >= 59 && parseInt(hgt) <= 76;
      }
    }
    return false;
  };

  //hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
  const isValid_hcl = (hcl) => {
    return hcl && /^#[a-fA-F0-9]{6}$/.test(hcl);
  };

  //ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
  const isValid_ecl = (ecl) => {
    return ecl && /^(amb|blu|brn|gry|grn|hzl|oth)$/.test(ecl);
  };

  //pid (Passport ID) - a nine-digit number, including leading zeroes.
  const isValid_pid = (pid) => {
    return pid && /^[0-9]{9}$/.test(pid);
  };

  //cid (Country ID) - ignored, missing or not.
  const isValid_cid = (cid) => {};

  return (
    isValid_byr(passport.byr) &&
    isValid_iyr(passport.iyr) &&
    isValid_eyr(passport.eyr) &&
    isValid_hgt(passport.hgt) &&
    isValid_hcl(passport.hcl) &&
    isValid_ecl(passport.ecl) &&
    isValid_pid(passport.pid)
    //$$ isValid_cid(passport.cid)
  );
};

let rsPuzzle2 = 0;

for (let i = 0; i < passports.length; i++) {
  if (isValidPassportStrict(passports[i])) {
    rsPuzzle2++;
  }
}

console.log("puzzle2Result:", rsPuzzle2);
