// Iteration 2: Generate 2 random number and display it on the screen

let number1 = Math.floor(Math.random()*100);
const numberOne = document.getElementById("number1");
numberOne.innerHTML = number1;


let number2 = Math.floor(Math.random()*100)
const numberTwo = document.getElementById("number2");
numberTwo.innerHTML = number2;















// Iteration 3: Make the options button functional
var score = 0;


const greaterThan = document.getElementById("greater-than");
greaterThan.onclick = () => {
    if(number1 > number2) {
        score++;
        resetTime(timerId);
    }

    else {
        location.href = "./gameover.html";

    }
    
    number1 = Math.floor(Math.random()*100);
    numberOne.innerHTML = number1;
    
    number2 = Math.floor(Math.random()*100);
    numberTwo.innerHTML = number2;
};



const equalTo = document.getElementById("equal-to");
equalTo.onclick = () => {
    if(number1 == number2) {
        score++;
        resetTime(timerId);
        
    }

    else {
        location.href = "./gameover.html";   

    }

    
    number1 = Math.floor(Math.random()*100);
    numberOne.innerHTML = number1;
    
    number2 = Math.floor(Math.random()*100);
    numberTwo.innerHTML = number2;

};


const lessThan = document.getElementById("lesser-than");
lessThan.onclick = () => {
    if(number1 < number2) {
        score++;
        resetTime(timerId);
        
    }

    else {
        location.href = "./gameover.html";

    }

    
    number1 = Math.floor(Math.random()*100);
    numberOne.innerHTML = number1;
    
    number2 = Math.floor(Math.random()*100);
    numberTwo.innerHTML = number2;

};


















// Iteration 4: Build a timer for the game

 var time = 5;
 var timer = document.getElementById("timer");

 function startTimer() {
    time = 5;
    timer.innerHTML = time;

    timerId = setInterval(() => {
        time--;

        if(time == 0) {
            location.href = "./gameover.html";
        }

        timer.innerHTML = time;        
    },1000)
    localStorage.setItem("score", score);
 }



function resetTime(intervalid) {

    clearInterval(intervalid);
    startTimer();
}



startTimer();