
document.getElementById("currentDate").innerHTML = "Date : " + Date();


// --------------- The fuction for basic addition -----------

function basicAddition() {
    return Math.floor(Math.random() * 9) + 1;
}

document.getElementById('basicAdditionViewPort1').innerHTML = basicAddition();
document.getElementById('basicAdditionViewPort2').innerHTML = basicAddition();
document.getElementById('basicAdditionViewPort3').innerHTML = basicAddition();
document.getElementById('basicAdditionViewPort4').innerHTML = basicAddition();
document.getElementById('basicAdditionViewPort5').innerHTML = basicAddition();

var num1 = document.getElementById('basicAdditionViewPort1').textContent;
var num2 = document.getElementById('basicAdditionViewPort2').textContent;
var num3 = document.getElementById('basicAdditionViewPort3').textContent;
var num4 = document.getElementById('basicAdditionViewPort4').textContent;
var num5 = document.getElementById('basicAdditionViewPort5').textContent;


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