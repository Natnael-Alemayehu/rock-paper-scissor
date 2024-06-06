
function computerChoice() {
    let randNumber = Math.random();
    let scaled = Math.floor(randNumber * 3);

    if (scaled == 0) {
        return "Rock"
    }
    else if (scaled == 1) {
        return "Paper"
    }
    else {
        return "Scissor"
    }
}


function computeAnswer(human, computer) {

    // console.log(`${human} and ${computer}`)

    if (human == computer) {
        return "Draw"
    }
    else if (human == "Scissor" && computer == "Paper") {
        return "Human won";
    }
    else if (human == "Paper" && computer == "Rock") {
        return "Human won";
    }
    else if (human == "Rock" && computer == "Scissor") {
        return "Human won";
    }
    else {
        return "Computer won";
    }
}

// console.log(computeAnswer("Rock", "Paper"))
let score_human = 0;
let score_computer = 0;
let draw_counter = 0;

function getSelectedValue() {
    computerwon = "Computer won";
    humanwon = "Human won";

    // Get the select element
    const select = document.getElementById('gameSelect');

    // Get the selected option value
    const selectedOption = select.options[select.selectedIndex].value;

    const result = document.getElementById('result');
    const computerHT = document.getElementById('computer');
    const humanHT = document.getElementById('human');
    const scoreHT = document.getElementById('score');

    let humanAnswer = selectedOption;
    let computerSelection = computerChoice();
    let answer = computeAnswer(humanAnswer, computerSelection);

    if (answer == humanwon) {
        score_human++
    }
    else if (answer == computerwon) {
        score_computer++
    }
    else {
        draw_counter++
    }

    // Display the selected value
    result.textContent = `Final: ${answer}`;
    humanHT.textContent = `Human selected: ${humanAnswer}`;
    computerHT.textContent = `Computer Selected: ${computerSelection}`;
    scoreHT.textContent = `Human: ${score_human} --- Computer: ${score_computer} --- Draw ${draw_counter}`
}

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Get the button element
    const submitBtn = document.getElementById('submitBtn');

    // Add click event listener to the button
    submitBtn.addEventListener('click', getSelectedValue);
});