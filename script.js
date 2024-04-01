var visual = document.querySelector(".visuals");

visual.textContent = 0;

var operator = null;
var total = 0;

var runningTotal = false;
var hasDecimal = false;
var isPercent = false;

const equals = document.querySelector(".equals");
const buttons = document.querySelectorAll("button");

var array = [];

if(visual.textContent.includes(".")){
    hasDecimal = true;
}else {
    hasDecimal = false;
}

function buttonClicked () {
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", () => {
            if(buttons[i].classList.contains("number")) {
                if(runningTotal == true){
                    visual.textContent = 0;
                    inputNumber(buttons[i].value);
                    runningTotal = false;
                }else if(visual.textContent.length < 23){
                    inputNumber(buttons[i].value);
                }
            }else if(buttons[i].classList.contains("zero")){
                if(visual.textContent !== '0'){
                    visual.textContent += 0;
                }
            }else if(buttons[i].classList.contains("changeSign")) {
                if(parseFloat(visual.textContent) > 0) {
                    visual.textContent = "-" + parseFloat(visual.textContent);
                    visual.textContent = parseFloat(visual.textContent);
                }else if (parseFloat(visual.textContent) < 0) {
                    visual.textContent = parseFloat(visual.textContent) * -1;
                }
            }else if(buttons[i].classList.contains("operator")) {
                if(runningTotal == true){
                    visual.textContent = 0;
                    operator = buttons[i].value;
                }else{
                    operator = buttons[i].value;
                    preOperate();
                }
                
            }else if(buttons[i].classList.contains("decimalPoint")) {
                if(hasDecimal == false){
                    visual.textContent += ".";
                }
            }else if(buttons[i].classList.contains("percent")) {
                if(isPercent == true) {
                    visual.textContent = visual.textContent * 100;
                    isPercent = false;
                } else if(isPercent == false) {
                    visual.textContent = visual.textContent / 100;
                    isPercent = true;
                }
            }
    })
    buttons[i].addEventListener("ontouchstart", () => {
        if(buttons[i].classList.contains("number")) {
            if(runningTotal == true){
                visual.textContent = 0;
                inputNumber(buttons[i].value);
                runningTotal = false;
            }else if(visual.textContent.length < 23){
                inputNumber(buttons[i].value);
            }
        }else if(buttons[i].classList.contains("zero")){
            if(visual.textContent !== '0'){
                visual.textContent += 0;
            }
        }else if(buttons[i].classList.contains("changeSign")) {
            if(parseFloat(visual.textContent) > 0) {
                visual.textContent = "-" + parseFloat(visual.textContent);
                visual.textContent = parseFloat(visual.textContent);
            }else if (parseFloat(visual.textContent) < 0) {
                visual.textContent = parseFloat(visual.textContent) * -1;
            }
        }else if(buttons[i].classList.contains("operator")) {
            if(runningTotal == true){
                visual.textContent = 0;
                operator = buttons[i].value;
            }else{
                operator = buttons[i].value;
                preOperate();
            }
            
        }else if(buttons[i].classList.contains("decimalPoint")) {
            if(hasDecimal == false){
                visual.textContent += ".";
            }
        }else if(buttons[i].classList.contains("percent")) {
            if(isPercent == true) {
                visual.textContent = visual.textContent * 100;
                isPercent = false;
            } else if(isPercent == false) {
                visual.textContent = visual.textContent / 100;
                isPercent = true;
            }
        }
})
    }
}
buttonClicked();

function inputNumber(input) {
    if(visual.textContent === '0') {
        visual.textContent = input;
    }else {
        visual.textContent += input;
    }
}

function preOperate() {
    if(array[0] == 0 || array.length == 0) {
        array.splice(0,0, visual.textContent);
        visual.textContent = 0;
    }else if(array[0] !== 0 && operator !== null) {
        operate();
        visual.textContent = array[0];
        runningTotal = true;
    }
}

equals.onclick = () => {
    if(array.length !== 0){
    operate();
    visual.textContent = array[0];
    }
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
    if(visual.textContent.includes(".") && array[0].length > 23){
        array[0].toFixed(23)
        visual.textContent = Math.round((parseFloat(array[0]) * 100) / 100);
    }
    operator = null;
    isPercent = false;
    hasDecimal = false;
    runningTotal = true;
}

const activeClear = document.querySelector(".ac");
activeClear.onclick = () => {
    visual.textContent = 0;
}

const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    visual.textContent = 0;
    array.length = 0;
    hasDecimal = false;
    isPercent = false;
    buttons.forEach((button) => {
        button.disabled = false;
      });
});
