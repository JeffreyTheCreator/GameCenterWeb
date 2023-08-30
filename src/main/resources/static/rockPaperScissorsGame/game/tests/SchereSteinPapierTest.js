/**
 * @jest-environment jsdom
 */
import {GameLogic} from "../logic/GameLogic.js";
import {Score} from "../logic/Score.js";
let checkLogic = new GameLogic(document.createElement("p"), document.createElement("p"), document.createElement("p"), new Score(document.createElement("p"), document.createElement("p")));

test('Test if the win logic is working correctly!', () => {
    expect(checkLogic.winLogic("🪨", "✂")).toBe("User");
});