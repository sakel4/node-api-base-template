import hasDuplicates from "../../../src/domain/utilities/hasDuplicates";

describe("hasDuplicated function", () => {
    test("The array has duplicate values", () => {
        const array: number[] = [1, 2, 3, 4, 3];
        expect(hasDuplicates(array)).toEqual(true);
    });

    test("The array does not have duplicate values", () => {
        const array: number[] = [1, 2, 3, 4, 5];
        expect(hasDuplicates([])).toEqual(false);
    });
});
