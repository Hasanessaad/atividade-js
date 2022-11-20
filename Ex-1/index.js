let habibi;
let habibi1;
let results;
let xy;

console.log("this is the salary:" + habibi);
console.log("the readjustment:" + habibi1);

habibi = window.prompt("indicate the salary:");
habibi1 = window.prompt("indicate the readjustment:");

xy = parseFloat(habibi);
results = habibi*habibi1/100 + xy;

document.getElementById("habibi").innerHTML = (habibi);
document.getElementById("habibi1").innerHTML = (habibi1);

document.getElementById('results').innerHTML =  (results);