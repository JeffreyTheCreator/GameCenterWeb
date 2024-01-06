const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
let get_home_to_menu_btn = document.getElementById("back_menu_btn");
let get_memory_btn = document.getElementById("brainTrainer_middle");
let get_color_btns = document.querySelectorAll(".light_buttons_layout");
let available_colors = ["#light_one", "#light_two", "#light_three", "#light_four"];
let generated_color = [];
let maxNumber = 3;
let pickCounter = 0;
let gamePicking = false;
let gameStarted = false;

get_home_to_menu_btn.addEventListener("click", e => {
    location.href = '/';
});

get_memory_btn.addEventListener("click", e => {
    if (gameStarted) {
        alert("Game has been already started!");
    } else {
        startGame();
    }
});

get_color_btns.forEach((element) => {
    element.addEventListener("click", e => {
        async function compareInputToArray() {

            if (gamePicking) return alert("The Game is still displaying the colors!");

            if (!gameStarted) return alert("The Game hasn't been started yet. Click on Memory to start it!")

            if (generated_color[pickCounter] === "#"+e.target.id) {
                document.querySelector("#"+e.target.id).style.opacity = 1;
                await sleep(100);
                document.querySelector("#"+e.target.id).style.opacity = 0.2;
                pickCounter ++;
            } else {
                alert("You lost! Click on Memory to play again!");
                resetData();
            }
            

            if (generated_color[generated_color.length - 1] === "#"+e.target.id && generated_color.length === pickCounter) {
                alert("You won! Next level is coming up!");
                pickCounter = 0;
                gameStarted = false;
                startGame();
            }
        }
        compareInputToArray();
    });
});


function startGame() {
    gameStarted = true;
    gamePicking = true;
    for (let i = 0; i < 3; i++) {
        generated_color.push(randomiseArray());
    }
    displayColors();
}

async function displayColors() {
    for (let i = 0; i < generated_color.length; i++) {
         document.querySelector(generated_color[i]).style.opacity = 1;
         findSoundAndPlay(generated_color[i]);
         await sleep(500);
         document.querySelector(generated_color[i]).style.opacity = 0.2;
         await sleep(500);
    }
    gamePicking = false;
}

function randomiseArray() {
    available_colors.sort((a, b) => 0.5 - Math.random());
   return available_colors[0];
}

function resetData() {
    pickCounter = 0;
    gameStarted = false;
    gamePicking = false;
    generated_color = [];
}

function playSoundOne() {
    let audio = document.getElementById("audio_light_one");
    audio.play();
  }
function playSoundTwo() {
    let audio = document.getElementById("audio_light_two");
    audio.play();
  }  
function playSoundThree() {
    let audio = document.getElementById("audio_light_three");
    audio.play();
  }
function playSoundFour() {
    let audio = document.getElementById("audio_light_four");
    audio.play();
  }   

function findSoundAndPlay(id) {
    let audio = document.querySelector(`${id}`).nextElementSibling;
    audio.play();
}  