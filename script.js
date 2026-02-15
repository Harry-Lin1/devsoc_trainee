const modeToggle = document.getElementById('mode-toggle');
const statusText = document.getElementById('status-text');
const description = document.getElementById('description');
const body = document.body;

let isNightMode = false;

modeToggle.addEventListener('click', () => {
    isNightMode = !isNightMode;
    
    if (isNightMode) {
        body.classList.add('night-mode'); 
        statusText.textContent = 'good night';
        description.textContent = 'i sleep at 10:30 dont ask';
        modeToggle.textContent = 'switch to day';
    } else {
        body.classList.remove('night-mode');
        statusText.textContent = 'good morning';
        description.textContent = 'i like bagels for breakfast';
        modeToggle.textContent = 'switch to night';
    }
});