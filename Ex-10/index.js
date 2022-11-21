let names;
let age;
let age1;
let time;
let time1;
let result;

names = window.prompt("indicate your name:");
age = window.prompt("indicate the year of birth");
time = window.prompt("indicate the year of joining the company");

document.getElementById('name1').innerHTML = names;
age1 = 2022 - age;
document.getElementById('age').innerHTML = (age1 + " years");
time1 = 2022 - time;
document.getElementById('working_time').innerHTML = (time1 + " years");

if(age <= 1957){

    document.getElementById('results').innerHTML = ("APPLY for retiremnt");

}if(time >= 30){

    document.getElementById('results').innerHTML = ("APPLY for retiremnt");
    
}if(age <= 1962 && time >= 25){

    document.getElementById('results').innerHTML = ("APPLY for retiremnt");

}else{
   
    document.getElementById('results').innerHTML = ("DO NOT APPLY for retiremnt");

}