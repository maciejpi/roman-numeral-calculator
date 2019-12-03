import { convertToRoman, convertFromRoman } from "./index";

describe("Conversion algorithms tests", () => {
  it("should convert an arabic number to a roman numeral", () => {
    expect(convertToRoman(3)).toBe("III");
    expect(convertToRoman(9)).toBe("IX");
    expect(convertToRoman(92)).toBe("XCII");
    expect(convertToRoman(104)).toBe("CIV");
    expect(convertToRoman(348)).toBe("CCCXLVIII");
    expect(convertToRoman(1824)).toBe("MDCCCXXIV");
    expect(convertToRoman(3407)).toBe("MMMCDVII");
  });

  it("should convert a roman numeral to an arabic number", () => {
    expect(convertFromRoman("II")).toBe(2);
    expect(convertFromRoman("VIII")).toBe(8);
    expect(convertFromRoman("LXXVI")).toBe(76);
    expect(convertFromRoman("CXI")).toBe(111);
    expect(convertFromRoman("DCXXIII")).toBe(623);
    expect(convertFromRoman("MMLXIX")).toBe(2069);
    expect(convertFromRoman("MMMMCCCLV")).toBe(4355);
  });
});
