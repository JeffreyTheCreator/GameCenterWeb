import {GameLogic} from '../logic/GameLogic.js';
import {Score} from "../logic/Score.js";

let get_scissors = document.getElementById("scissor_btn");
let get_stone = document.getElementById("stone_btn");
let get_paper = document.getElementById("paper_btn");
let get_back_to_menu = document.getElementById("back_menu_btn");

const score = new Score(document.getElementById("user_score"), document.getElementById("computer_score"));
const logic = new GameLogic(document.getElementById("user_choice"), document.getElementById("computer_choice"), document.getElementById("decide_winner"), score);


get_back_to_menu.addEventListener("click", async e => {
    location.href = "/";
});

get_scissors.addEventListener("click", async e => {
    logic.userInput = get_scissors.innerHTML;
    logic.userChoice();
    logic.computerChoice();
});

get_stone.addEventListener("click", async e => {
    logic.userInput = get_stone.innerHTML;
    logic.userChoice();
    logic.computerChoice();
});

get_paper.addEventListener("click", async e => {
    logic.userInput = get_paper.innerHTML;
    logic.userChoice();
    logic.computerChoice();
});