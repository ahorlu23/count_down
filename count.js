// setInterval(function(){
//     const date = new Date() 
//     const day = date.getDate()
//     const hours = date.getHours()
//     const minutes = date.getMinutes()
//     const seconds = date.getSeconds()

//     const dayElem = document.querySelector('.firstNum')
//     const hoursElem = document.querySelector('.secondNum')
//     const minutesElem = document.querySelector('.thirdNum')
//     const secondsElem = document.querySelector('.fourthNum')

//     dayElem.innerHTML = day
//     hoursElem.innerHTML = hours
//     minutesElem.innerHTML = minutes
//     secondsElem.innerHTML = seconds

// },1000) 

// Function to add leading zero to single-digit numbers
function formatNumber(number) {
    return number < 10 ? `0${number}` : number;
}

// Set the target date for the countdown
const targetDate = new Date('2024-03-25T23:59:59');

setInterval(function() {
    const currentDate = new Date();
    const remainingTime = targetDate - currentDate;

    // Calculate the remaining days, hours, minutes, and seconds
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // Update the countdown elements with the remaining time
    document.querySelector('.firstNum').innerHTML = formatNumber(days);
    document.querySelector('.secondNum').innerHTML = formatNumber(hours);
    document.querySelector('.thirdNum').innerHTML = formatNumber(minutes);
    document.querySelector('.fourthNum').innerHTML = formatNumber(seconds);

}, 1000);
