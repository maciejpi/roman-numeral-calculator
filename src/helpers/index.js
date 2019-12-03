const valuePairs = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
};

export const convertToRoman = value => {
  return Object.entries(valuePairs).reduce(
    (acc, [romanSymbol, arabicNumber]) => {
      while (value >= arabicNumber) {
        acc += romanSymbol;
        value -= arabicNumber;
      }
      return acc;
    },
    ""
  );
};

export const convertFromRoman = str => {
  return Object.entries(valuePairs).reduce(
    (acc, [romanSymbol, arabicNumber]) => {
      while (str.indexOf(romanSymbol) === 0) {
        acc += arabicNumber;
        str = str.replace(romanSymbol, "");
      }
      return acc;
    },
    0
  );
};
