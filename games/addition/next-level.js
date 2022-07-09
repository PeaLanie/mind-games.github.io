// -------------- The function for advanced mode -------------

function beginnerMode(min, max, inc) {
    return Math.floor(Math.random() * (max - min) / inc) * inc + min;
}

document.getElementById('advancedViewPort1').innerHTML = beginnerMode(100, 990, 10);
document.getElementById('advancedViewPort2').innerHTML = beginnerMode(100, 990, 10);
document.getElementById('advancedViewPort3').innerHTML = beginnerMode(100, 990, 10);
document.getElementById('advancedViewPort4').innerHTML = beginnerMode(100, 990, 10);
document.getElementById('advancedViewPort5').innerHTML = beginnerMode(100, 990, 10);

var num1 = document.getElementById('advancedViewPort1').textContent;
var num2 = document.getElementById('advancedViewPort2').textContent;
var num3 = document.getElementById('advancedViewPort3').textContent;
var num4 = document.getElementById('advancedViewPort4').textContent;
var num5 = document.getElementById('advancedViewPort5').textContent;

function checkAnswer() {
    var sum = parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4) + parseInt(num5);
    var answer = document.getElementById('usersAnswer').value;
    if (parseInt(answer) == sum) {
        document.getElementById('outPut').innerHTML = ('Correct! ' + sum.toString() + ' is the right answer.')
    }
    else if (parseInt(answer) != sum) {
        document.getElementById('outPut').innerHTML = ('Oops! The correct answer is ' + sum.toString() + '. Please try again. Make sure you insert an answer;and it must be an Interger.')
    }
}