let original_cost;
let new_cost_28;
let x;
let new_cost;
let y;

original_cost=window.prompt("indicate the factory price of your car:");

x = parseFloat(original_cost);
new_cost_28 = original_cost * 28/100 + x;
y = parseFloat(new_cost_28);
new_cost = new_cost_28 * 45/100 + y;

document.getElementById('factory_cost').innerHTML = (original_cost + " R$");
document.getElementById('final_cost').innerHTML = (new_cost + " R$");