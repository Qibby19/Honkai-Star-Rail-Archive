// time to countdown from (in milliseconds)
let countDownDateev3 = new Date("Jun 6, 2023 5:00:00").getTime();

// countdown timer
let xev3 = setInterval(function() {

    // get today's date and time in milliseconds
    let nowev3 = new Date().getTime();

    // find the interval between now and the countdown time
    let timeLeftev3 = countDownDateev3 - nowev3;

    // time calculations for days, hours, minutes and seconds
    const daysev3 = Math.floor( timeLeftev3/(1000*60*60*24) );
    const hoursev3 = Math.floor( (timeLeftev3/(1000*60*60)) % 24 );
    const minutesev3 = Math.floor( (timeLeftev3/1000/60) % 60 );
    const secondsev3 = Math.floor( (timeLeftev3/1000) % 60 );

    // display the result in the element with id="ev3cd"
    document.getElementById("ev3cd").innerHTML = (daysev3 + "d " + hoursev3 + "h " + minutesev3 + "m ");
    console.log(daysev3 + "d " + hoursev3 + "h " + minutesev3 + "m " + secondsev3 + "s")

    // change to Ended when countdown finished
    if (timeLeftev3 < 0) {
        clearInterval(xev3);
        document.getElementById("ev3cd").innerHTML =('Ended');
    }
    }, 2000);