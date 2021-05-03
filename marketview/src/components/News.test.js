import { convert } from "./News.js";

test("convert", () => {
    expect(convert(1620013554)).toBe("5/2/2021 11:45pm");
});
