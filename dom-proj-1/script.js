
function button(tagname, attername, attervalue, content) {
   let ele = document.createElement(tagname);
   ele.setAttribute(attername, attervalue);
   ele.innerHTML = content;
   return ele;
}

let container = document.createElement("div");
container.setAttribute("class", "container");
let calculator = document.createElement("div");
calculator.setAttribute("class", "calculator");
let input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "0");

calculator.append(input);
container.append(calculator);
document.body.append(container);

let button1 = button("button", "onclick", "clear()", "cl");
let button2 = button("button", "onclick", "del()", "DEL");
let button3 = button("button", "onclick", "display('%')", "%");
let button4 = button("button", "onclick", "display( '/' )", "/");
let button5 = button("button", "onclick", "display('7')", "7");
let button6 = button("button", "onclick", "display('8')", "8");
let button7 = button("button", "onclick", "display('9')", "9");
let button8 = button("button", "onclick", "display('*')", "*");
let button9 = button("button", "onclick", "display('4')", "4");
let button10 = button("button", "onclick", "display('5')", "5");
let button11 = button("button", "onclick", "display('6')", "6");
let button12 = button("button", "onclick", "display('-')", "-");
let button13 = button("button", "onclick", "display('1')", "1");
let button14 = button("button", "onclick", "display('2')", "2");
let button15 = button("button", "onclick", "display('3')", "3");
let button16 = button("button", "onclick", "display('+')", "+");
let button17 = button("button", "onclick", "display('.')", ".");
let button18 = button("button", "onclick", "display('0')", "0");
let button19 = button("button", "onclick", "claculate()", "=" )
calculator.append(button1, button2, button3, button4, button5, button6, button7, button8, button9, button10, button11, button12, button13, button14, button15, button16, button17, button18, button19);



let outputscreen = document.getElementById("input");

function display(num) {
   input.value += num;
}

function calculate() {
   try {
      input.value = button19(input.value);
   }
   catch (err) {
      alert("invalid")
   }
}

function clear () {
   input.value = "";
}
function del() {
   input.value = input.value.slice(0, -1);
}