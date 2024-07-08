
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const forgotPasswordLink = document.getElementById('forgotPassword');
    
   
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        console.log('Username:', username);
        console.log('Password:', password);
        loginForm.reset();
       
        alert('Welcome, ' + username + '!');
    });
    
    forgotPasswordLink.addEventListener('click', function(event) {
        event.preventDefault();
        const forgotInput = prompt('Please enter your email or username to reset your password:');
        if (forgotInput) {
            alert('Reset password link sent to ' + forgotInput);
        }
    });
    for (let i = 0; i < 10; i++) {
        const leaf = document.createElement('div');
        leaf.classList.add('leaf');
        document.querySelector('.falling-leaves').appendChild(leaf);
    }
});

