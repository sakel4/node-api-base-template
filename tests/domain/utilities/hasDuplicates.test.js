"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hasDuplicates_1 = __importDefault(require("../../../src/domain/utilities/hasDuplicates"));
describe("hasDuplicated function", () => {
    test("The array has duplicate values", () => {
        const array = [1, 2, 3, 4, 3];
        expect((0, hasDuplicates_1.default)(array)).toEqual(true);
    });
    test("The array does not have duplicate values", () => {
        const array = [1, 2, 3, 4, 5];
        expect((0, hasDuplicates_1.default)([])).toEqual(false);
    });
});
