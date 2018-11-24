import { flatten } from "~utilities/array-helper";

describe("utilities/array-helper", () => {
    test("shoule flatten the array in pure Array", () => {
        const pureArray: number[] = [1, 2, 3, 4];
        expect(flatten(pureArray)).toEqual([1, 2, 3, 4]);
    });

    test("shoule flatten the array", () => {
        const pureArray: (number|number[])[] = [1, 2, 3, [4, 5, 6]];
        expect(flatten(pureArray)).toEqual([1, 2, 3, 4, 5, 6]);
    });
});
