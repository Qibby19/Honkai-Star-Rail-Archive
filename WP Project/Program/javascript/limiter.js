//change to usable value
function int(value) {
    return parseInt(value);
}

//limit the number to the min or max
function limiter(sender) {
    let min = sender.min;
    let max = sender.max;
    let value = int(sender.value);
    if (value>max) {
        sender.value = max;
        alert("too high")
    } else if (value<min) {
        sender.value = min;
        alert("too low")
    }
}