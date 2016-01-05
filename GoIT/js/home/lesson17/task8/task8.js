var timerId;

function update() {
    var clock = document.getElementById('clock');
    var date = new Date();
    var hoursBlock = document.getElementById('hours');
    var minsBlock = document.getElementById('mins');
    var secondsBlock = document.getElementById('seconds');
    
    var currentHours = date.getcurrentHours();
    if (currentHours < 10) currentHours = '0' + currentHours;
    hoursBlock.innerHTML = currentHours;
    
    var currentMinutes = date.getcurrentMinutes();
    if (currentMinutes < 10) currentMinutes = '0' + currentMinutes;
    minsBlock.innerHTML = currentMinutes;
    
    var currentSeconds = date.getcurrentSeconds();
    if (currentSeconds < 10) currentSeconds = '0' + currentSeconds;
    secondsBlock.innerHTML = currentSeconds;
}

function clockStart() {
    setInterval(update, 1000);
    update();
}

clockStart();