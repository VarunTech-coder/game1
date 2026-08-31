let userScore=0;
let compScore=0;
const choicse= document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");
const gen=() =>{
    const options =["rock","paper",'scissors'];
   const randIdx= Math.floor(Math.random()*3);
   return options[randIdx];
}
const showwinner=(userwin,userChoice,compChoice)=>{
    if(userwin){
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText=`you win!  ${userChoice} beats    ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else {
        compScore++;
        compScorepara.innerText=compScore;
         msg.innerText=`you loss  ${compChoice} beats    ${userChoice}`;
         msg.style.backgroundColor="red";
    }

};
const draw=()=>{
    console.log("game is draw");
msg.innerText="draw";
  msg.style.backgroundcolor="#081b31";
}

const playGame =(userChoice)=>{
    console.log("user choice=",userChoice);
    const compChoice=gen();
    console.log("comp choice =",compChoice);
if(userChoice===compChoice){
    draw();
}
else{
    let userwin=true;
if(userChoice=== "rock"){
    userwin=compChoice ==="paper"?false :true;
} else if(userChoice=== "paper"){
    userwin=compChoice ==="scissors"?false :true;}
    else {
        userwin=compChoice==="rock"?false :true;
    }
showwinner(userwin, userChoice, compChoice);
}
};
choicse.forEach((choice) => {
    choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
    playGame(userChoice)
    });
});