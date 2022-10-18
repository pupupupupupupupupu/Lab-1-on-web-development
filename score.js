// Iteration 5: Store the player score and display it on the game over screen


document.getElementById("score-board").innerHTML = localStorage.getItem("score");


var playAgain = document.getElementById("play-again-button");

playAgain.onclick = () => {
    window.location.href = "./game.html";
}