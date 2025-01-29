let userscore=0;
let compscore=0;


const choices =document.querySelectorAll(".choice");
const msgg =document.querySelector("#mesg");

const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const gencompChoice=()=>{
let options =["rock","paper","scissor"];
 const randidx= Math.floor(Math.random()*3);
 return options[randidx];
};

const drawgame = () => {
    console.log("draw game!");
    msgg.innerText=" Draw game! play again...";
    msgg.style.backgroundColor="rgb(5, 5, 75)";
};

const showwinner = (userwin, userchoice, compchoice) => {
    if(userwin){
        console.log("you win!");
        userscore++;
        userscorepara.innerText=userscore;
        msgg.style.backgroundColor="green";
        msgg.innerText=`you win! your  ${userchoice} beats ${compchoice}`;

    }
    else{
        console.log("you lose!");
        compscore++;
        compscorepara.innerText= compscore;
        msgg.style.backgroundColor="red";
        msgg.innerText=`you lose!  ${compchoice}  beats your ${userchoice}`;
    }
}; 

const playgame= (userchoice)=>{
console.log("users choice = ",userchoice);
// generate computer choices

const compchoice = gencompChoice();
console.log("comp choice = ",compchoice);


if (userchoice === compchoice){
//draw game
drawgame();
}
else{
    let userwin= true;
    if (userchoice === "rock"){
        // scissors, paper
        userwin = compchoice === "paper" ? false : true;
    }
    else if (userchoice === "paper"){
        // rock, scissor
        userwin = compchoice === "scissor"? false : true;
    }
    else{
        // paper, rock
        userwin = compchoice === "rock"? false : true;
    }
    showwinner(userwin ,userchoice,compchoice);
}
}


choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
} );
        
})