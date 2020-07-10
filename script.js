// Single player dice game

//1. Roll fn: Create a function for rolling the dice - that will generate random number between 1 to 6, adds the results up.
//If player rolls 1, they lose. If player reaches 20, they win.

let dice;
let totalScore = 0;
let gamePlaying;



const totalPoints = document.querySelector("#totalPoints");


let diceImgs = {
    dice1:"imgs/dice1.png",
    dice2:"imgs/dice2.png",
    dice3:"imgs/dice3.png",
    dice4:"imgs/dice4.png",
    dice5:"imgs/dice5.png",
    dice6:"imgs/dice6.png",
  }

const throwDice = () => {
    //1.Generate random number  
        dice = Math.floor((Math.random() * 6) + 1);

    //2.Display result
        //   const score = document.querySelector("#point");
        //   score.innerHTML = dice;

        const diceDOM = document.querySelector("#diceImgDOM");
        diceDOM.classList.remove("no-display");
        diceDOM.src = diceImgs['dice' + dice];

    //3. If dice = 1, player loses
        
        if (dice === 1) {
            const loseMsg = document.querySelector("#display-lose");
            loseMsg.innerHTML = "<img src=\"imgs/loser.gif\" width=\"700px\" height=\"150px\">"; //I wanna put a gif here;
            totalScore=0;
            toggleBtn(rollBtn);
        } else {
            hideMsg()
            totalScore += dice;
            totalPoints.innerHTML = totalScore;
        }
        

        if (totalScore >= 20) {
            const winMsg = document.querySelector("#display-win");
            winMsg.innerHTML = "<img src=\"imgs/winner.gif\" width=\"700px\" height=\"150px\">"//also here;
            totalScore = 0;
            toggleBtn(rollBtn);
        }
}



//HIDE MESSAGES
const hideMsg = () => {
    document.querySelector("#display-lose").innerHTML = '';
    document.querySelector("#display-win").innerHTML = '';
}


//START GAME BY ROLLING THE DICE
const rollBtn = document.querySelector("#roll-btn");
rollBtn.addEventListener("click",  throwDice)

//DISABLE BUTTONS 
// const disableBtn = (btn, time) => {
//     btn.disabled=true;
//     setTimeout(function(){
//         btn.disabled=false;
//     }, time);
// }

const toggleBtn = (btn) => {
    if (btn.disabled === true) {
        btn.disabled = false;
    } else if (btn.disabled === false) {
        btn.disabled = true;
    };
}


//RESET GAME
const reset = () => {
    totalScore = 0;
    document.querySelector("#diceImgDOM").classList.add("no-display");
    totalPoints.textContent='0';
    hideMsg();
    toggleBtn(rollBtn);

}

const resetBtn = document.querySelector("#reset-btn");
resetBtn.addEventListener("click", reset);