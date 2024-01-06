let get_sch_btn = document.getElementById("sch_btn");
let get_fizz_btn = document.getElementById("fizz_btn");
let get_brain_btn = document.getElementById("brainTrainer_btn");

get_sch_btn.addEventListener("click", e => {
   location.href = "/rockpaperscissors";
});
get_fizz_btn.addEventListener("click", e => {
   location.href = "/fizzbuzz";
});
get_brain_btn.addEventListener("click", e => {
   location.href = "/braintrainer";
});