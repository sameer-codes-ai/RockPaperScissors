let score = JSON.parse(localStorage.getItem('score')) || { 
    wins: 0, losses: 0, ties: 0 };

updateScore();

function calculateResult(btn){
    
    let userMove=btn.value;
    console.log(userMove);
    const randomNumber=Math.random();
    let move="";
    if(randomNumber>=0 && randomNumber<1/3){
        move="rock";
    }else if(randomNumber>=1/3 && randomNumber<2/3){
        move="paper"
    }else{
        move="scissors";
    }
    console.log(move);
    let result="";
    if(userMove==move){
        result="Draw.."
        score.ties+=1;
    }else if((userMove=="scissors" && move=="paper")|| 
                (userMove=="rock" && move=="scissors") 
            || (userMove=="paper" && move=="rock")){
        result="You Win.."
        score.wins +=1;
    }else{
        result="You Lose.."
        score.losses+=1;
    }

    localStorage.setItem('score',JSON.stringify(score));
    updateScore();

    document.querySelector(".outcome").innerHTML=`${result}`;

    document.querySelector(".moves").innerHTML=`<p>You chose <img src="images/${userMove}-emoji.png" alt="playermove"> Computer chose <img src="images/${move}-emoji.png" alt="playermove"> </p>`;
}

function updateScore(){
    document.querySelector(".result").innerHTML=`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function resetScore(){
    score.wins=0;
    score.losses=0;
    score.ties=0;
    localStorage.removeItem('score');
    updateScore();
}