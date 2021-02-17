const totalTime = 10; //time in seconds
const breakTime = 5; //time in seconds
let time = totalTime;
let inBreak = false;
let clock;
let aud = new Audio('source.mp3');

function setTime(m, s) {
    //add leading 0 if single digit time
    if(m < 10)
        m = "0" + m;

    //add leading 0 if single digit time
    if(s < 10)
        s = "0" + s;

    document.getElementById("minutes").innerHTML = m;
    document.getElementById("seconds").innerHTML = s;
}

function startTime() {
    //every 1s, call tick to decrease the time
    clock = setInterval(tick, [1000]);
    aud.currentTime = 0;

    //if the song ends, replay it
    aud.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    aud.play();

    //disable start button after pressing start
    document.getElementById("start").disabled = true;
}

function tick() {
    //stop timer
    if(time == 1) {
        //if we are at the end of the break
        if(inBreak) {
            time = totalTime;
            inBreak = false;

            //add bg transition that fades to work bg
            let html = document.getElementById("fade");
            html.classList = "";
            html.classList.add("transitionToWork");

            //show new time
            let minutes = Math.floor(time / 60);
            let seconds = time % 60;

            setTime(minutes, seconds);
        }
        else {
            startBreak();
            inBreak = true;
        }
    }
    else {
        //tick to new time
        time--;
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;

        setTime(minutes, seconds);
    }
}

function stopTime() {
    //add bg transition that fades to work bg
    let html = document.getElementById("fade");
    html.classList = "";
    html.classList.add("transitionToWork");

    //stop timer
    clearInterval(clock);
    
    //pause audio and re-enable start button
    aud.pause();
    document.getElementById("start").disabled = false;

    //reset display
    time = totalTime;

    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    setTime(minutes, seconds);
}

function startBreak() {
    //add bg transition that fades to break bg
    let html = document.getElementById("fade");
    html.classList = "";
    html.classList.add("transitionToBreak");
    
    //reset display to break time
    time = breakTime;

    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    setTime(minutes, seconds);
}

function SetVolume(val) {
    aud.volume = val/100;
}

//set time when first loading page
setTime(Math.floor(totalTime / 60), totalTime % 60);