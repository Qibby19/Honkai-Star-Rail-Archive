// time to countdown from (in milliseconds)
let countDownDateev1 = new Date("Jun 28, 2023 23:59:59").getTime();

// countdown timer
let xev1 = setInterval(function() {

    // get today's date and time in milliseconds
    let nowev1 = new Date().getTime();

    // find the interval between now and the countdown time
    let timeLeftev1 = countDownDateev1 - nowev1;

    // time calculations for days, hours, minutes and seconds
    const daysev1 = Math.floor( timeLeftev1/(1000*60*60*24) );
    const hoursev1 = Math.floor( (timeLeftev1/(1000*60*60)) % 24 );
    const minutesev1 = Math.floor( (timeLeftev1/1000/60) % 60 );
    const secondsev1 = Math.floor( (timeLeftev1/1000) % 60 );

    // display the result in the element with id="ev1cd"
    document.getElementById("ev1cd").innerHTML = (daysev1 + "d " + hoursev1 + "h " + minutesev1 + "m ");
    console.log(daysev1 + "d " + hoursev1 + "h " + minutesev1 + "m " + secondsev1 + "s")

    // change to Ended when countdown finished
    if (timeLeftev1 < 0) {
        clearInterval(xev1);
        document.getElementById("ev1cd").innerHTML =('Ended');
    }
    }, 2000);