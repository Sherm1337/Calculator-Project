var visual = document.querySelector(".visuals");


visual.textContent = 0;

var operator = "";
var num1 = 0;
var num2 = 0;
var total = 0;

var hasDecimal = false;

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

one.addEventListener("click", () => {
    if (visual.textContent === '0') {
        visual.textContent = one.textContent;
    }else{
        visual.textContent += one.textContent;
    }
})

two.addEventListener("click", () => {
    if (visual.textContent === '0') {
        visual.textContent = two.textContent;
    }else {
        visual.textContent += two.textContent;
    }
})

three.addEventListener("click", () => {
    if (visual.textContent === '0') {
        visual.textContent = three.textContent;
    }else {
        visual.textContent += three.textContent;
    }
})

four.addEventListener("click", () => {
    if (visual.textContent === '0') {
        visual.textContent = four.textContent;
    }else {
        visual.textContent += four.textContent;
    }
})

five.addEventListener("click", () => {
    if (visual.textContent === '0') {
        visual.textContent = five.textContent;
    }else {
        visual.textContent += five.textContent;
    }
})

six.addEventListener("click", () => {
    if (visual.textContent === '0') {
        visual.textContent = six.textContent;
    }else {
        visual.textContent += six.textContent;
    }
})

seven.addEventListener("click", () => {
    if (visual.textContent === '0') {
        visual.textContent = seven.textContent;
    }else {
        visual.textContent += seven.textContent;
    }
})

eight.addEventListener("click", () => {
    if (visual.textContent === '0') {
        visual.textContent = eight.textContent;
    }else {
        visual.textContent += eight.textContent;
    }
})

nine.addEventListener("click", () => {
    if (visual.textContent === '0') {
        visual.textContent = nine.textContent;
    }else {
        visual.textContent += nine.textContent;
    }
})

zero.addEventListener("click", () => {
        visual.textContent += zero.textContent;
})

changeSign.addEventListener("click", () => {
    if(parseFloat(visual.textContent) > 0){
        visual.textContent = "-" + parseFloat(visual.textContent);
        visual.textContent = parseFloat(visual.textContent);
    }else if(parseFloat(visual.textContent) < 0){
        visual.textContent = parseFloat(visual.textContent) * -1;
    }
})

decimal.addEventListener("click", () => {
    if(hasDecimal == false){
    visual.textContent = parseFloat(visual.textContent) + ".";
    visual.textContent = parseFloat(visual.textContent);
    hasDecimal = true;
    }
})

addition.addEventListener("click", () => {
    if(num1 && total !== 0){
        total = 0;
        visual.textContent = 0;
        operator = "+";
    }else if(num2 && total == 0 && num1 !== 0){
        operator = "+";
        num1 = parseFloat(num1) + parseFloat(visual.textContent);
        visual.textContent = 0;
    }else if(num1 !== 0 && total == 0) {
        num2 = parseFloat(visual.textContent);
        operator = "+";
        num1 = num1 + num2;
        visual.textContent = 0;
    }else if(num1 == 0 && total == 0 && num2 == 0){
        num1 = parseFloat(visual.textContent);
        operator = "+";
        visual.textContent = 0;
    }
})

subtraction.addEventListener("click", () => {
    if(num1 && total !== 0){
        total = 0;
        visual.textContent = 0;
        operator = "-";
    }else if(num2 && total == 0 && num1 !== 0){
        operator = "-";
        num1 = parseFloat(num1) - parseFloat(visual.textContent);
        visual.textContent = 0;
    }else if(num1 !== 0 && total == 0) {
        num2 = parseFloat(visual.textContent);
        operator = "-";
        num1 = num1 - num2;
        visual.textContent = 0;
    }else if(num1 == 0 && total == 0 && num2 == 0){
        num1 = parseFloat(visual.textContent);
        operator = "-";
        visual.textContent = 0;
    }
})

multiplication.addEventListener("click", () => {
    if(num1 && total !== 0){
        total = 0;
        visual.textContent = 0;
        operator = "*";
    }else if(num2 && total == 0 && num1 !== 0){
        operator = "*";
        num1 = parseFloat(num1) * parseFloat(visual.textContent);
        visual.textContent = 0;
    }else if(num1 !== 0 && total == 0) {
        num2 = parseFloat(visual.textContent);
        operator = "*";
        num1 = num1 * num2;
        visual.textContent = 0;
    }else if(num1 == 0 && total == 0 && num2 == 0){
        num1 = parseFloat(visual.textContent);
        operator = "*";
        visual.textContent = 0;
    }
})

division.addEventListener("click", () => {
    if(num1 == Infinity || num1 == NaN || num2 == Infinity){
        visual.textContent = "ERROR";
        num1 = 0;
        num2 = 0;
        total = 0;
    }else if(num1 && total !== 0){
        total = 0;
        visual.textContent = 0;
        operator = "/";
    }else if(num2 && total == 0 && num1 !== 0){
        operator = "/";
        num1 = parseFloat(num1) / parseFloat(visual.textContent);
        visual.textContent = 0;
    }else if(num1 !== 0 && total == 0) {
        num2 = parseFloat(visual.textContent);
        operator = "/";
        num1 = num1 / num2;
        visual.textContent = 0;
    }else if(num1 == 0 && total == 0 && num2 == 0){
        num1 = parseFloat(visual.textContent);
        operator = "/";
        visual.textContent = 0;
    }
})

equals.addEventListener("click", () => {
    num2 = parseFloat(visual.textContent);
    operate();
})

function operate(){
    if(operator == "+"){
        total = parseFloat(num1) + parseFloat(num2);
        visual.textContent = parseFloat(total);
        num2 = 0;
    }else if(operator === "-"){
        total = parseFloat(num1) - parseFloat(num2);
        visual.textContent = parseFloat(total);
        num2 = 0;
    }else if(operator === "*"){
        total = parseFloat(num1) * parseFloat(num2);
        visual.textContent = parseFloat(total);
        num2 = 0;
    }else if(operator === "/"){
        if(num1 == Infinity || num1 == NaN){
            visual.textContent = "ERROR";
            num1 = 0;
            num2 = 0;
            total = 0;
        }else if(num2 == 0){
            visual.textContent = "ERROR";
            num1 = 0;
            num2 = 0;
            total = 0;
        }else{
        total = parseFloat(num1) / parseFloat(num2);
        visual.textContent = parseFloat(num1) / parseFloat(num2);
        num2 = 0;
        }
    }
    num1 = parseFloat(total);
}

const clear = document.querySelector("#clear");
clear.addEventListener("click", () =>{
    visual.textContent = 0;
    num1 = 0;
    num2 = 0;
    total = 0;
    hasDecimal = false;
}
);
