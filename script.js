// script.js
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const menuItems = document.querySelectorAll('.navbar ul li a');
menuItems.forEach(item => {
    item.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#00796b';
        this.style.color = '#ffffff';
    });
    item.addEventListener('mouseout', function() {
        this.style.backgroundColor = '';
        this.style.color = '';
    });
});

let isRunning = false;
let timer;
let elapsedTime = 0;

const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

function formatTime(time) {
    const hours = Math.floor(time / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

function updateDisplay() {
    display.textContent = formatTime(elapsedTime);
}

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        startStopBtn.textContent = 'Start';
    } else {
        timer = setInterval(() => {
            elapsedTime++;
            updateDisplay();
        }, 1000);
        startStopBtn.textContent = 'Stop';
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    updateDisplay();
    startStopBtn.textContent = 'Start';
}

startStopBtn.addEventListener('click', startStop);
resetBtn.addEventListener('click', reset);

updateDisplay();
