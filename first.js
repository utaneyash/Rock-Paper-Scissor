let userScore=0;
let compScore=0;
const msg=document.querySelector("#msg")
const msg1=document.querySelector("#msg1");
const comp=document.querySelector("#comp-score");
const usr=document.querySelector("#usr-score");


const draw=()=>{
msg.innerText="Draw";
msg1.innerText="Draw";
}

const usrchoices = document.querySelectorAll(".usrchoice");

const reset = document.querySelector(".btn");


const show=(value,who)=>{
    who.innerText=value;
};

const resetGame = () => {
    userScore=0;
    compScore=0;
    msg.innerText="Start Playing";
    msg1.innerText="Start Playing";
    show(userScore, usr);
    show(compScore, comp);
};

reset.addEventListener("click", resetGame);


const genCompChoice = () => {
    const options = ["rock", "paper", "scissor", "paper","rock","rock", "paper", "scissor","rock", "paper", "scissor", "scissor"];
    const choice = Math.floor(Math.random() * options.length);
    const selectedID = options[choice];

    const elements = document.getElementsByClassName(selectedID);
    if (elements.length > 0) {
        elements[0].classList.add("opacity1"); // apply to the first matching element
    }
    setTimeout(()=>{
        elements[0].classList.remove("opacity1");
    },1000);
    return selectedID;
}

const newGame= document.querySelector("#new");
const nGame = () => {
    resetGame();

    winner.classList.add("hide");
    body.classList.remove("blur");
    reset.classList.remove("blur");
};

newGame.addEventListener("click", nGame);

const body=document.querySelector(".body");
const heading=document.querySelector("#winner")
const winner=document.querySelector(".winner-container");
const checkwin=()=>{
    if(userScore==10){
        heading.innerText="You are the Winner";
        winner.classList.remove("hide");
        body.classList.add("blur");
        reset.classList.add("blur");

    }
    else if(compScore==10){
        heading.innerText="Computer is Winner";
        winner.classList.remove("hide");
        body.classList.add("blur");
        reset.classList.add("blur");
    }
}



const showWinner = (userwin)=>{
if(userwin){
    userScore++;
    msg.innerText="Win";
    msg1.innerText="Lose";
    show(userScore,usr);

}
else{
    compScore++;
    msg.innerText="Lose";
    msg1.innerText="Win";
    show(compScore,comp);
}
}

const playGame = (userID)=>{
    const compchoice =genCompChoice();

    if(userID===compchoice){
        draw();
    }
    else{
        let userwin = true;
        if(userID==="rock"){
            userwin= compchoice==="paper"? false:true;
            showWinner(userwin);
            checkwin();
        }
        else if(userID==="paper"){
            userwin=compchoice==="scissor"?false:true;
            showWinner(userwin);
            checkwin();
        }
        else{
            userwin=compchoice==="rock"?false:true;
            showWinner(userwin);
            checkwin();
        }
    }

};


usrchoices.forEach((usrchoice) => {
    usrchoice.addEventListener("click",()=>{
        const choiceID=usrchoice.getAttribute("id");
        playGame(choiceID);
    });
});


