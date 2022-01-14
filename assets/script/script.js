// bored

var mainEl = document.getElementById('main');
var countdownEl = document.getElementById('countdown');

var message = 'Congratulations, you played yourself';

var words = message.split(' ');

function countDown() {
    var timer = 5;

    var setTimer = setInterval(function(){
        if (timer > 0){
            countdownEl.textContent = timer + " time remaining. Please wait :D";
            timer--;
        } else {
            countdownEl.textContent = " ";
            clearInterval(setTimer);

            displayMessage();
        }
    }, 800)
}

function displayMessage() {
    var wordCount = 0;

    var msgInterval = setInterval(function(){
        if (words[wordCount] === undefined) {
            mainEl.textContent = " ";
            displayImg();
            clearInterval(msgInterval);

        } else {
            mainEl.textContent = words[wordCount];
            wordCount++;
        }
    }, 800)

}

function displayImg(){
    countdownEl.textContent = " ";
    var imgEl = document.createElement("img");
    imgEl.setAttribute("src", "./assets/style/images/2342.jpg");
    mainEl.appendChild(imgEl);
}


countDown();