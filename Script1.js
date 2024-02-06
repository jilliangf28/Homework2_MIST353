// JavaScript source code
function getMessage() {
    var happyMessage = [
        'Have a good day! Thank you for visiting SKI SYNC! :)'
    ]
    var randomIndex = Math.floor(Math.random() * happyMessage.length);
    var randomMessage = happyMessage[randomIndex];

    var messageElement = document.getElementById('messageInfo');
    messageElement.textContent = randomMessage;
}

var buttonElement = document.getElementById('getMessageButton');
buttonElement.addEventListener('click', getMessage)