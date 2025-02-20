// rock paper scissor game 
function random(min, max) {
    return (Math.floor(Math.random() * (max - min + 1)) + min);
}

let { rock, paper, scissor } = {
    rock: "https://husseinhewehii.github.io/Rock_Paper_Scissors/rock.png",
    paper: "https://husseinhewehii.github.io/Rock_Paper_Scissors/paper.png",
    scissor: " https://husseinhewehii.github.io/Rock_Paper_Scissors/scissors.png",
}

let computer_hand = document.getElementById('ch');
let user_hand = document.getElementById('uh');
let winner = document.getElementById('winner');
let computer_image;
let result;

let stat = true;

function playGame(user) {
    let arr = ["rock", "paper", "scissor"]
    let computer_choice = arr[random(0, 2)];
    computer_hand.src =  eval(computer_choice);

    let user_choice = user;
    user_hand.src = eval(user);

    if (computer_choice == user_choice) {
        result = "Draw!!"
    }
    else if ((computer_choice == "rock" && user_choice == "scissor")
        || (computer_choice == "paper" && user_choice == "rock")
        || (computer_choice == "scissor" && user_choice == "paper")) {
        result = "Computer wins!!"
    }
    else {
        result = "User wins!!"
    }
    winner.innerHTML = result;
}