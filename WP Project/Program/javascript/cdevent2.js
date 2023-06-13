// time to countdown from (in milliseconds)
let countDownDateev2 = new Date("Jun 28, 2023 23:59:59").getTime();

// countdown timer
let xev2 = setInterval(function() {

    // get today's date and time in milliseconds
    let nowev2 = new Date().getTime();

    // find the interval between now and the countdown time
    let timeLeftev2 = countDownDateev2 - nowev2;

    // time calculations for days, hours, minutes and seconds
    const daysev2 = Math.floor( timeLeftev2/(1000*60*60*24) );
    const hoursev2 = Math.floor( (timeLeftev2/(1000*60*60)) % 24 );
    const minutesev2 = Math.floor( (timeLeftev2/1000/60) % 60 );
    const secondsev2 = Math.floor( (timeLeftev2/1000) % 60 );

    // display the result in the element with id="ev2cd"
    document.getElementById("ev2cd").innerHTML = (daysev2 + "d " + hoursev2 + "h " + minutesev2 + "m ");
    console.log(daysev2 + "d " + hoursev2 + "h " + minutesev2 + "m " + secondsev2 + "s")

    // change to Ended when countdown finished
    if (timeLeftev2 < 0) {
        clearInterval(xev2);
        document.getElementById("ev2cd").innerHTML =('Ended');
    }
    }, 2000);