function RPSgame(Yourchoice){
    console.log(Yourchoice);
    var humanchoice=Yourchoice.id;
    var botchance=NumberToItem(BOTchanceRandomNumber());
    console.log(botchance);
    var result=Todecide(humanchoice,botchance);
    console.log(result);
    var message=finalresult(result);
    console.log(message);
    RPSfrontend(humanchoice,botchance,message);
}
function BOTchanceRandomNumber(){
   return Math.floor(Math.random()*3);
}
function NumberToItem(number){
    return ["rock","paper","scissors"][number];
}
function Todecide(Yourchoice,Computerchance){
  var RPSscore={
        "rock":{"scissors":1,"rock":0.5,"paper":0},
        "paper":{"rock":1,"paper":0.5,"scissors":0},
        "scissors":{"paper":1,"scissors":0.5,"rock":0}
    };
   var yourscore=RPSscore[Yourchoice][Computerchance];
   var Computerscore=RPSscore[Computerchance][Yourchoice];
   return [yourscore,Computerscore];
}
function finalresult(result){
    if(result[0]==0 && result[1]==1){
        return {"message":"You Lost!","colour":'red'};
    }
    else if(result[0]==result[1]){
        return {"message":"You Tied!","colour":"yellow"};
    }
    else{
        return {"message":"You Won!","colour":"green"};
    }

}
function RPSfrontend(HumanImageChoice,ComputerImageChoice,finalresult){
    var Imagedatabase={
        "rock":document.getElementById('rock').src,
        "paper":document.getElementById("paper").src,
        "scissors":document.getElementById("scissors").src
    };
    document.getElementById('images').remove();


    var humandiv=document.createElement('div');
    var messagediv=document.createElement('div');
    var computerdiv=document.createElement('div');
    humandiv.innerHTML="<img src="+Imagedatabase[HumanImageChoice]+" height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>"
    messagediv.innerHTML="<h1 style='color:"+finalresult['colour']+"; font-size:60px; padding:30px;'>"+finalresult['message']+"</h1>"
    computerdiv.innerHTML="<img src="+Imagedatabase[ComputerImageChoice]+ " height=150 width=150 style='box-shadow: 0px 10px 50px #bf0823;'>"
    document.getElementById("rps-frontend").appendChild(humandiv);
    document.getElementById("rps-frontend").appendChild(messagediv);
    document.getElementById("rps-frontend").appendChild(computerdiv);
    }
    var game=document.getElementById("game");
    function playagain(){
        window.location.reload();
        game.style.visibility="visible";
    }
