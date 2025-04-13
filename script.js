// scripts.js

// Function to display the login form
function showLoginForm() {
    document.querySelector('.hero').style.display = 'none';
    document.querySelector('.features').style.display = 'none';
    document.querySelector('.login-section').style.display = 'block';
}

// Form validation and submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username === '' || password === '') {
        document.getElementById('login-error').textContent = 'Please fill in both fields.';
    } else {
        // Mock login success
        alert('
