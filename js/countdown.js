// Set the date we're counting down to
var countdownDate = new Date("July 20, 2029 09:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the countdown date
    var distance = countdownDate - now;

    // Time calculations for years, months, days, hours, minutes and seconds
    var years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
    var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    let times = [years, days, hours, minutes, seconds]

    
    for(let i = 0;i <5;i++) {
        document.getElementById(`countdown${i}`).innerText = times[i]
    }
}, 1000);
