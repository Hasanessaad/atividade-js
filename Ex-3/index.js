let grade1;
let grade2;
let grade3;
let results;

grade1 = window.prompt("indicate the grade of test (1)");
grade2 = window.prompt("indicate the grade of test (2)");
grade3 = window.prompt("indicate the grade of test (3)");

results = grade1 * 2 + grade2 * 3 + grade3 * 0.5;

document.getElementById('test1').innerHTML = (grade1);
document.getElementById('test2').innerHTML = (grade2);
document.getElementById('test3').innerHTML = (grade3);

document.getElementById('average').innerHTML = (results);
