
document.getElementById("currentDate").innerHTML = "Date : " + Date();

// -------------- The function for beginner mode -------------

function beginnerMode(min, max, inc) {
    return Math.floor(Math.random() * (max - min) / inc) * inc + min;
}

document.getElementById('intermediateViewPort1').innerHTML = beginnerMode(5, 95, 5);
document.getElementById('intermediateViewPort2').innerHTML = beginnerMode(5, 95, 5);
document.getElementById('intermediateViewPort3').innerHTML = beginnerMode(5, 95, 5);
document.getElementById('intermediateViewPort4').innerHTML = beginnerMode(5, 95, 5);
document.getElementById('intermediateViewPort5').innerHTML = beginnerMode(5, 95, 5);

var num1 = document.getElementById('intermediateViewPort1').textContent;
var num2 = document.getElementById('intermediateViewPort2').textContent;
var num3 = document.getElementById('intermediateViewPort3').textContent;
var num4 = document.getElementById('intermediateViewPort4').textContent;
var num5 = document.getElementById('intermediateViewPort5').textContent;

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