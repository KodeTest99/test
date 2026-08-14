// JavaScript Interactivity
const button = document.getElementById('changeTextBtn');
const heading = document.getElementById('heading');

button.addEventListener('click', function() {
    heading.textContent = "Hello from JavaScript!";
});