import {GameLogic} from "../logic/GameLogic.js";
let get_submit_btn = document.getElementById("submit_btn");
let get_form_input = document.getElementById("number");
let get_home_to_menu_btn = document.getElementById("back_menu_btn");

let logic = new GameLogic(get_form_input.value, document.getElementById("chosen_number"), document.getElementById("decide_result"));

get_submit_btn.addEventListener("click", e => {
 e.preventDefault();
 logic.userChoice(get_form_input.value);
 logic.calculate(get_form_input.value);
});

get_home_to_menu_btn.addEventListener("click", e => {
    location.href = '/';
});