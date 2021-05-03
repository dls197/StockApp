import { convert } from "./News.js";

/* Tests for convert function which converts a UNIX Timestamp to "xM/xD/YYYY xH:MM:am/pm" */
/* 24 different tests for all 24 hours of the day */

/* 12 am test */
/* Also covers the case where a day is two digits */
/* And the case where a month is one digit */
/* And covers the case where a minute is greater than or equal to 10 */
test("convert0", () => {
    expect(convert(1620879688)).toBe("5/13/2021 12:21am");
});

/* 1 am test */
/* Also covers the case where a day is one digit */
/* And covers the case where a month is two digits */
/* And covers the case where a minute is less than 10 */
test("convert1", () => {
    expect(convert(1636088788)).toBe("11/5/2021 1:06am");
});

/* 2 am test */
test("convert2", () => {
    expect(convert(1620022888)).toBe("5/3/2021 2:21am");
});

/* 3 am test */
test("convert3", () => {
    expect(convert(1620026488)).toBe("5/3/2021 3:21am");
});

/* 4 am test */
test("convert4", () => {
    expect(convert(1620030088)).toBe("5/3/2021 4:21am");
});

/* 5 am test */
test("convert5", () => {
    expect(convert(1620033688)).toBe("5/3/2021 5:21am");
});

/* 6 am test */
test("convert6", () => {
    expect(convert(1620037288)).toBe("5/3/2021 6:21am");
});

/* 7 am test */
test("convert7", () => {
    expect(convert(1620040888)).toBe("5/3/2021 7:21am");
});

/* 8 am test */
test("convert8", () => {
    expect(convert(1620044488)).toBe("5/3/2021 8:21am");
});

/* 9 am test */
test("convert9", () => {
    expect(convert(1620048088)).toBe("5/3/2021 9:21am");
});

/* 10 am test */
test("convert10", () => {
    expect(convert(1620051688)).toBe("5/3/2021 10:21am");
});

/* 11 am test */
test("convert11", () => {
    expect(convert(1620055288)).toBe("5/3/2021 11:21am");
});

/* 12 pm test */
test("convert12", () => {
    expect(convert(1620058888)).toBe("5/3/2021 12:21pm");
});

/* 1 pm test */
test("convert13", () => {
    expect(convert(1620062488)).toBe("5/3/2021 1:21pm");
});

/* 2 pm test */
test("convert14", () => {
    expect(convert(1620066088)).toBe("5/3/2021 2:21pm");
});

/* 3 pm test */
test("convert15", () => {
    expect(convert(1620069688)).toBe("5/3/2021 3:21pm");
});

/* 4 pm test */
test("convert16", () => {
    expect(convert(1620073288)).toBe("5/3/2021 4:21pm");
});

/* 5 pm test */
test("convert17", () => {
    expect(convert(1620076888)).toBe("5/3/2021 5:21pm");
});

/* 6 pm test */
test("convert18", () => {
    expect(convert(1620080488)).toBe("5/3/2021 6:21pm");
});

/* 7 pm test */
test("convert19", () => {
    expect(convert(1620084088)).toBe("5/3/2021 7:21pm");
});

/* 8 pm test */
test("convert20", () => {
    expect(convert(1620087688)).toBe("5/3/2021 8:21pm");
});

/* 9 pm test */
test("convert21", () => {
    expect(convert(1620091288)).toBe("5/3/2021 9:21pm");
});

/* 10 pm test */
test("convert22", () => {
    expect(convert(1620094888)).toBe("5/3/2021 10:21pm");
});

/* 11 pm test */
test("convert23", () => {
    expect(convert(1620013554)).toBe("5/2/2021 11:45pm");
});
