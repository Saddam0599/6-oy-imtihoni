document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    localStorage.setItem('user', JSON.stringify({ email, password }));
    alert('Account created successfully');
    window.location.href = 'admin.html';
});

document.getElementById('signin-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
        alert('Sign in successful');
        window.location.href = 'admin.html';
    } else {
        alert('Invalid email or password');
    }
});

function showSignUp() {
    document.getElementById('signup-form').style.display = 'block';
    document.getElementById('signin-form').style.display = 'none';
}

function showSignIn() {
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('signin-form').style.display = 'block';
}

function githubLogin() {
    alert('GitHub login not implemented in this example');
}
