
document.getElementById("currentDate").innerHTML = "Date : " + Date();

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
        document.getElementById('outPut').innerHTML = ('Correct! ' + '<span class="greenNum">' + sum.toString() + '</span>' + ' is the right answer.')
    }
    else if (parseInt(answer) != sum) {
        outPut = document.getElementById('outPut');
        outPut.innerHTML = ('<span class="oops">' + 'Oops!' + '</span>' + 'The correct answer is ' + '<span class="greenNum">' + sum.toString() + '</span>' + '. Please click "Reload" and try again. (Make sure you insert an answer;and it must be an Interger).')
    }
}

var timeLeft = 30;
    var elem = document.getElementById('countdown');
    
    var timerId = setInterval(countdown, 1000);
    
    function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);
      } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
      }
    }