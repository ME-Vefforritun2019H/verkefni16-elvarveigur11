let table = 3;
let operator = "addition";
let i = 1;
let msg = "";

if(operator === "addition") {
    while (i<11) {
        msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
        // console.log(i);
        i++;
    }
}


let el = document.getElementById("blackboard");
el.innerHTML = msg;

