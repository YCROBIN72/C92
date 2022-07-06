player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";

document.getElementById("player1_score").innerHTML = player1_score; 
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn-" + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn-" + player2_name;

function send(){
    
    get_word = document.getElementById("word").value;
    word = get_word.toLowwerCase();

    console.log("Word In Lowwer Case" + word);
    charAt1 = word.charAt(1);

    console.log(charAt1)
}