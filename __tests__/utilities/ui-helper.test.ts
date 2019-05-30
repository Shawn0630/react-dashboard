import { getOrDefault, renderOptions } from "~/utilities/ui-helper";

describe("utilities/ui-helper", () => {
    test("getOrDefault", () => {
        expect(getOrDefault(null, 3)).toEqual(3);
        expect(getOrDefault(null)).toEqual("");
        expect(getOrDefault(Number(3), 0)).toEqual(3);
        expect(getOrDefault(Number(3))).toEqual(3);
    });

    test("renderOptions", () => {
        expect(renderOptions(null, null)).toEqual({});
        expect(renderOptions(0, null)).toEqual({});
        expect(renderOptions(null, 0)).toEqual({});
        expect(renderOptions(4, 3)).toEqual({});
        expect(renderOptions(0, 4)).toEqual({
            "0": 0,
            "1": 1,
            "2": 2,
            "3": 3
        });
    });
});
