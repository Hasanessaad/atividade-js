let name_team1;
let goals_team1;
let name_team2;
let goals_team2;
let results;

name_team1 = window.prompt("indicate the name of the 1st team:");
goals_team1 = window.prompt("indicate the goals of the 1st team:");
name_team2 = window.prompt("indicate the name of the 2nd team:");
goals_team2 = window.prompt("indicate the goals of the 2nd team:");

document.getElementById('name_team1').innerHTML = name_team1;
document.getElementById('goals_team1').innerHTML = goals_team1;
document.getElementById('name_team2').innerHTML = name_team2;
document.getElementById('goals_team2').innerHTML = goals_team2;


if(goals_team1>goals_team2){

    document.getElementById('results').innerHTML = (name_team1);

}if(goals_team1<goals_team2){

    document.getElementById('results').innerHTML = (name_team2);

}else if(goals_team1=goals_team2){

    document.getElementById('results').innerHTML = ("EMPATE!");


}