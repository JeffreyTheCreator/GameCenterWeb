/**
 * @jest-environment jsdom
 */
import {GameLogic} from "../logic/GameLogic";
let checkLogic = new GameLogic(document.createElement("p"), document.createElement("p"), document.createElement("p"));

    test('Test if return value can be divided by only 3.', () => {
        expect(checkLogic.calculate("3")).toBe("Fizz");
    });


    test('Test if return value can be divided by only 5.', () => {
        expect(checkLogic.calculate("5")).toBe("Buzz");
    });


    test('Test if return value can be divided by 3 and 5.', () => {
        expect(checkLogic.calculate("30")).toBe("FizzBuzz");
    });