document.addEventListener("DOMContentLoaded", () => {

    var score1 = 0, score2 = 0, score3 = 0, score4 = 0, score5 = 0, finalScore = 0;

    var submitButton = document.getElementById("submit");
    var questionsArray1 = Array.from(document.getElementsByClassName("options1"));
    var questionsArray2 = Array.from(document.getElementsByClassName("options2"));
    var questionsArray3 = Array.from(document.getElementsByClassName("options3"));
    var questionsArray4 = Array.from(document.getElementsByClassName("options4"));
    var questionsArray5 = Array.from(document.getElementsByClassName("options5"));

    questionsArray1.forEach(item => item.addEventListener("click", function (event) {
        if (event.target.id === questionsArray1[2].id) score1 = 1;
        else score1 = 0;

        calculateFinalScore();
    }));

    questionsArray2.forEach(item => item.addEventListener("click", function (event) {
        if (event.target.id === questionsArray2[0].id) score2 = 1;
        else score2 = 0;

        calculateFinalScore();
    }));

    questionsArray3.forEach(item => item.addEventListener("click", function (event) {
        if (event.target.id === questionsArray3[0].id) score3 = 1;
        else score3 = 0;

        calculateFinalScore();
    }));

    questionsArray4.forEach(item => item.addEventListener("click", function (event) {
        if (event.target.id === questionsArray4[1].id) score4 = 1;
        else score4 = 0;

        calculateFinalScore();
    }));

    questionsArray5.forEach(item => item.addEventListener("click", function (event) {
        if (event.target.id === questionsArray5[0].id) score5 = 1;
        else score5 = 0;

        calculateFinalScore();
    }));

    function calculateFinalScore(){
        finalScore = score1 + score2 + score3 + score4 + score5;
    }

    submitButton.addEventListener("click", function(){
       document.getElementById("final-score").innerHTML = finalScore;
       document.getElementById("result").hidden = false;
       document.querySelector("form").hidden = true;
    });

    var backButton = document.getElementById("back");

    backButton.addEventListener("click", function(){
        document.getElementById("result").hidden = true;
       document.querySelector("form").hidden = false;
    });

    document.getElementById("reset").addEventListener("click", function(){
        finalScore = score1 = score2 = score3 = score4 = score5 = 0;
    });
});

