var visual = document.querySelector(".visuals");

visual.textContent = 0;

var operator = "";
var num1 = 0;
var num2 = 0;
var total = 0;

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

addition.addEventListener("click", () => {
    if(num1 == 0){
    num1 = parseInt(visual.textContent);
    operator = "+";
    visual.textContent = 0;
    }else if(num1 !== 0 && total == 0){
        num2 = parseInt(visual.textContent);
        operator = "+";
        num1 = num1 + num2;
        visual.textContent = 0;
    }else if(num1 !== 0 && total !== 0){
        num2 = parseInt(visual.textContent);
        operator = "+";
        num1 = num1 + num2;
        visual.textContent = 0;
        total = 0;
    }else if(total !== 0){
        num1 = total;
        num2 = 0;
        operator = "+"
        visual.textContent = 0;
    }
})

subtraction.addEventListener("click", () => {
    if(num1 == 0){
    num1 = parseInt(visual.textContent);
    operator = "-";
    visual.textContent = 0;
    }else if(num1 !== 0){
        num2 = parseInt(visual.textContent);
        operator = "-";
        num1 = num1 - num2;
        visual.textContent = 0;
    }
})

multiplication.addEventListener("click", () => {
    if(num1 == 0){
    num1 = parseInt(visual.textContent);
    operator = "*";
    visual.textContent = 0;
    }else if(num1 !== 0){
        num2 = parseInt(visual.textContent);
        operator = "*";
        num1 = num1 * num2;
        visual.textContent = 0;
    }
})

equals.addEventListener("click", () => {
    num2 = parseInt(visual.textContent);
    operate();
})

function operate(){
    if(operator == "+"){
        total = parseInt(num1) + parseInt(num2);
        visual.textContent = parseInt(num1) + parseInt(num2);
    }else if(operator === "-"){
        num2 = parseInt(visual.textContent);
        visual.textContent = parseInt(num1) - parseInt(num2);
    }else if(operator === "*"){
        visual.textContent = parseInt(num1) * parseInt(num2);
    }else if(operator === "/"){
        visual.textContent = parseInt(num1) / parseInt(num2);
    }
    num1 = visual.textContent;
}

const clear = document.querySelector("#clear");
clear.addEventListener("click", () =>{
    visual.textContent = 0;
    num1 = 0;
    num2 = 0;
    total = 0;
}
);
