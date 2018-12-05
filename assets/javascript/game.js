$(document).ready(function(){

    var wins = 0;
    var losses = 0;
    var randomNum = 0;
    var totalScore = 0;
    var crystalValues = [0,0,0,0];


    function resetGame(){

        randomNum = Math.floor(Math.random()*100);
        totalScore = 0;
        $("#randomNumber").text(randomNum);
        $("#score-number").text(totalScore);
        for(var i = 0; i < crystalValues.length; i++){

            crystalValues[i] = Math.floor(Math.random()*10);

        }
        $("#wins").text("Wins: " + wins);
        $("#losses").text("Losses: " + losses);

    }

    function checkScores(){

        if(totalScore === randomNum){

            wins++;
            $("#game-reset-message").text("You win!!");
            resetgame();

        }else if(totalScore > randomNum){

            losses++;
            $("#game-reset-message").text("You lose.");
            resetGame();

        }

    }

    $(".crystal").on("click",function(){

        var value = crystalValues[parseInt($(this).attr("value"))];
        totalScore += value;
        console.log(value);
        checkScores();
        $("#score-number").text(totalScore.toString());

    });

    resetGame();

});