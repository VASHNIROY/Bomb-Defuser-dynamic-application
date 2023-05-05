let defuser = document.getElementById("defuser");
let timer = document.getElementById("timer");
let countdown = 10;
let intervalId = setInterval(function() {
    countdown = countdown - 1;
    timer.textContent = countdown;
    if (countdown === 0) {
        timer.textContent = "BOOM";
        clearInterval(intervalId);
    }
}, 1000);

defuser.addEventListener("keydown", function(event) {
    let diffuserValue = defuser.value;
    if (diffuserValue === "defuse" && event.key === "Enter" && countdown !== 0) {
        timer.textContent = "You did it!";
        clearInterval(intervalId);
    }
})