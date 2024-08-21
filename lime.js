let users = [];

function register() {
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;

  if (email && password) {
    users.push({ email, password });
    alert('Registration successful!');
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
  } else {
    alert('Please fill in all fields.');
  }
}

function login() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    alert('Login successful!');
  } else {
    alert('Invalid credentials');
  }
}
