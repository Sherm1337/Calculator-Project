var visual = document.querySelector(".visuals");

visual.textContent = 0;

var operator = "";
var total = 0;

var hasDecimal = false;
var isPercent = false;

const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");

const equals = document.querySelector("#equals");
const addition = document.querySelector("#addition");
const subtraction = document.querySelector("#subtraction");
const multiplication = document.querySelector("#multiplication");
const division = document.querySelector("#division");
const changeSign = document.querySelector("#changeSign");
const decimal = document.querySelector("#decimalPoint");
const percent = document.querySelector("#percent");

const buttons = document.querySelectorAll(".button");

var array = [];

if(visual.textContent.includes(".")){
    hasDecimal = true;
}else {
    hasDecimal = false;
}

one.onclick = () => {
    if(visual.textContent === '0') {
        visual.textContent = one.textContent;
    }else {
        visual.textContent += one.textContent;
    }
}

two.onclick = () => {
    if(visual.textContent === '0') {
        visual.textContent = two.textContent;
    }else {
        visual.textContent += two.textContent;
    }
}

three.onclick = () => {
    if(visual.textContent === '0') {
        visual.textContent = three.textContent;
    }else {
        visual.textContent += three.textContent;
    }
}

four.onclick = () => {
    if(visual.textContent === '0') {
        visual.textContent = four.textContent;
    }else {
        visual.textContent += four.textContent;
    }
}

five.onclick = () => {
    if(visual.textContent === '0') {
        visual.textContent = five.textContent;
    }else {
        visual.textContent += five.textContent;
    }
}

six.onclick = () => {
    if(visual.textContent === '0') {
        visual.textContent = six.textContent;
    }else {
        visual.textContent += six.textContent;
    }
}

seven.onclick = () => {
    if(visual.textContent === '0') {
        visual.textContent = seven.textContent;
    }else {
        visual.textContent += seven.textContent;
    }
}

eight.onclick = () => {
    if(visual.textContent === '0') {
        visual.textContent = eight.textContent;
    }else {
        visual.textContent += eight.textContent;
    }
}

nine.onclick = () => {
    if(visual.textContent === '0') {
        visual.textContent = nine.textContent;
    }else {
        visual.textContent += nine.textContent;
    }
}

zero.onclick = () => {
    if(visual.textContent === '0'){
        return;
    }else {
        visual.textContent += zero.textContent;
    }
}

changeSign.onclick = () => {
    if (parseFloat(visual.textContent) > 0) {
        visual.textContent = "-" + parseFloat(visual.textContent);
        visual.textContent = parseFloat(visual.textContent);
    }else if (parseFloat(visual.textContent) < 0) {
        visual.textContent = parseFloat(visual.textContent) * -1;
    }
}

decimal.onclick = () => {
    if(hasDecimal === false) {
    visual.textContent = parseFloat(visual.textContent) + ".";
    hasDecimal = true;
    }
}

percent.onclick = () => {
    if(isPercent == true) {
        visual.textContent = parseFloat(visual.textContent) * 100;
        isPercent = false;
    }else if(isPercent == false) {
        visual.textContent = parseFloat(visual.textContent) / 100;
        isPercent = true;
    }

}

addition.onclick = () => {
    hasDecimal = false;
    if(total !== 0) {
        array.splice(0,0, parseFloat(total));
        operator = "+"
        total = 0;
        visual.textContent = 0;
    }else if(array.length == 0 && total == 0) {
        array.splice(0,0, visual.textContent);
        operator = "+";
        visual.textContent = 0;
    }else if(array.length !== 0 && total == 0 && operator !== "+") {
        operate();
        operator = "+";
        visual.textContent = 0;
    }else if(array.length !== 0 && total == 0 && operator == "+") {
        operate()
        operator = "+"
        visual.textContent = 0;
    }
}

subtraction.onclick = () => {
    hasDecimal = false;
    if(total !== 0) {
        array.splice(0,0, parseFloat(total));
        operator = "-"
        total = 0;
        visual.textContent = 0;
    }else if(array.length == 0 && total == 0) {
        array.splice(0,0, visual.textContent);
        operator = "-";
        visual.textContent = 0;
    }else if(array.length !== 0 && total == 0 && operator !== "-") {
        operate();
        operator = "-";
        visual.textContent = 0;
    }else if(array.length !== 0 && total == 0 && operator == "-") {
        operate()
        operator = "-"
        visual.textContent = 0;
    }
}

multiplication.onclick = () => {
    hasDecimal = false;
    if(total !== 0){
        array.splice(0,0, parseFloat(total));
        operator = "*"
        total = 0;
        visual.textContent = 0;
    }else if(array.length == 0 && total == 0){
        array.splice(0,0, visual.textContent);
        operator = "*";
        visual.textContent = 0;
    }else if(array.length !== 0 && total == 0 && operator !== "*"){
        operate();
        operator = "*";
        visual.textContent = 0;
    }else if(array.length !== 0 && total == 0 && operator == "*"){
        operate()
        operator = "*"
        visual.textContent = 0;
    }
}

division.onclick = () => {
    hasDecimal = false;
    if(total !== 0){
        array.splice(0,0, parseFloat(total));
        operator = "/"
        total = 0;
        visual.textContent = 0;
    }else if(array.length == 0 && total == 0){
        array.splice(0,0, visual.textContent);
        operator = "/";
        visual.textContent = 0;
    }else if(array.length !== 0 && total == 0 && operator !== "/"){
        operate();
        operator = "/";
        visual.textContent = 0;
    }else if(array.length !== 0 && total == 0 && operator == "/"){
        operate()
        operator = "/"
        visual.textContent = 0;
    }
}

equals.onclick = () => {
    operate();
    total = array[0];
    visual.textContent = total;
}

function operate(){
    if(operator == "+"){
        array[0] = parseFloat(array[0]) + parseFloat(visual.textContent);
    }else if(operator == "-"){
        array[0] = parseFloat(array[0]) - parseFloat(visual.textContent);
    }else if(operator == "*"){
        array[0] = parseFloat(array[0]) * parseFloat(visual.textContent);
    }else if(operator == "/"){
        if(parseInt(visual.textContent) === 0){
            array[0] = "ERROR";
            buttons.forEach((button) => {
                button.disabled = true;
              });
        }else{
        array[0] = parseFloat(array[0]) / parseFloat(visual.textContent);
        }
    }
   isPercent = false;
   hasDecimal = false;
}

const activeClear = document.querySelector("#ac");
activeClear.onclick = () => {
    visual.textContent = 0;
}

const clear = document.querySelector("#clear");
clear.addEventListener("click", () =>{
    visual.textContent = 0;
    total = 0;
    array.length = 0;
    hasDecimal = false;
    isPercent = false;
    buttons.forEach((button) => {
        button.disabled = false;
      });
});

