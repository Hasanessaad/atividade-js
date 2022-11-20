let height;
let width;
let area;

height = window.prompt("indicate the height:");
width = window.prompt("indicate the width:");

area=height*width;

document.getElementById('height').innerHTML =  (height);
document.getElementById('width').innerHTML =  (width);
document.getElementById('area').innerHTML =  (area);