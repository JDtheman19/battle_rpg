function getId(target){
    return document.getElementById(target);
}


function randInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rollDie(sides){
    var output = randInt(1, sides);
    document.getElementById("Dice").innerHTML = output;
}

var health1 =  getId("healthp1").innerHTML;

var health2 = getId("healthp2").innerHTML;

function setHealth(playerNumber, amount){
    eval('health' + playerNumber + '=' + amount);
    getId('healthp' + playerNumber).innerHTML = eval('health' + playerNumber);
}
function adjustHealth(playerNumber, amount){
    setHealth(playerNumber, eval('health' + playerNumber) + amount);
}

var playersShow = 0;

function play(){
    if(playersShow){
        getId('players').style.display = "none";
        playersShow = 0;
    }else{
        getId('players').style.display = "block";
        playersShow = 1;
    }
}
function closePlayers(){
    getId('players').style.display = "none";
}

var Player1;
var Player2;
function inputvalue(){
    // get selected player classes
    Player1 = getId("P1").options[getId("P1").selectedIndex].text
    
    Player2 = getId("P2").options[getId("P2").selectedIndex].text

    // set all classes invisible
    var classes = document.getElementsByClassName('classPlayer');
    for(var i = 0; i < classes.length; i++){
        classes[i].style.display = 'none';
    }
    
    // show selected player classes
    getId(Player1).style.display = 'inline';
    getId(Player2).style.display = 'inline';
}