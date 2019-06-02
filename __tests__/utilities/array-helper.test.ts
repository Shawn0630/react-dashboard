import { flatten, groupBy } from "~utilities/array-helper";

describe("utilities/array-helper", () => {
    test("should flatten the array in pure Array", () => {
        const pureArray: number[] = [1, 2, 3, 4];
        expect(flatten(pureArray)).toEqual([1, 2, 3, 4]);
    });

    test("should flatten the array", () => {
        const pureArray: (number|number[])[] = [1, 2, 3, [4, 5, 6]];
        expect(flatten(pureArray)).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test("should group the array by key", () => {
        interface Car {
            brand: string;
            color: string;
        }
        const cars: Car[] = [
            { brand: "Audi", color: "black" },
            { brand: "Audi", color: "white" },
            { brand: "Ferarri", color: "red" },
            { brand: "Ford", color: "white" },
            { brand: "Peugot", color: "white" }
        ];
        const groupByBrand: Function = groupBy("brand");
        const groupByColor: Function = groupBy("color");

        const carsByBrand: {[key: string]: Car[]} = {
            "Audi": [
                {
                    "brand": "Audi",
                    "color": "black"
                },
                {
                    "brand": "Audi",
                    "color": "white"
                }
            ],
            "Ferarri": [
                {
                    "brand": "Ferarri",
                    "color": "red"
                }
            ],
            "Ford": [
                {
                    "brand": "Ford",
                    "color": "white"
                }
            ],
            "Peugot": [
                {
                    "brand": "Peugot",
                    "color": "white"
                }
            ]
        };

        const carsByColor: {[key: string]: Car[]} = {
            "black": [
                {
                    "brand": "Audi",
                    "color": "black"
                }
            ],
            "white": [
                {
                    "brand": "Audi",
                    "color": "white"
                },
                {
                    "brand": "Ford",
                    "color": "white"
                },
                {
                    "brand": "Peugot",
                    "color": "white"
                }
            ],
            "red": [
                {
                    "brand": "Ferarri",
                    "color": "red"
                }
            ]
        };
        expect(groupByBrand(cars)).toEqual(carsByBrand);
        expect(groupByColor(cars)).toEqual(carsByColor);
    });
});
